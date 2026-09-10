import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceTravel, altitudeAt, centerOfZone, zoneAt, heatStress, experimentState, responseForArticle } from '../src/simulation/model.js';
import { ZONES, SOURCES } from '../src/data/expedition.js';

test('tour starts on its first frame, reaches both limits and reverses without jumping',()=>{
 const control={held:0,impulse:0,auto:true,sign:-1,target:null};
 let position=0,velocity=0,min=0,max=0;
 for(let i=0;i<40000;i++){
  const next=advanceTravel(position,velocity,control,1/60);
  if(i===0)assert.ok(next.position<0,'first frame must move');
  assert.ok(Math.abs(next.position-position)<.012);
  position=next.position;velocity=next.velocity;min=Math.min(min,position);max=Math.max(max,position);
 }
 assert.ok(min<=-4.99);assert.ok(max>=4.99);
});
test('every layer is reachable and altitude stays continuous and bounded',()=>{
 for(const z of ZONES)assert.equal(zoneAt(centerOfZone(z.id)),z.id);
 assert.equal(altitudeAt(-5),-11000);assert.equal(altitudeAt(0),0);assert.equal(altitudeAt(5),2000000);
 for(let i=-499;i<500;i++)assert.ok(altitudeAt(i/100)<altitudeAt((i+1)/100));
 const c={held:0,impulse:0,auto:false,sign:-1,target:-.5};let p=0,v=0;
 for(let i=0;i<900;i++){const n=advanceTravel(p,v,c,1/60);p=n.position;v=n.velocity;}
 assert.ok(Math.abs(p+.5)<.01);
});
test('heat duration thresholds and nutrient effects remain independent',()=>{
 assert.equal(heatStress(.9,12),0);assert.equal(heatStress(2,2),4);assert.equal(heatStress(2,4),8);assert.equal(heatStress(2,30),24);
 assert.equal(experimentState({heat:2,weeks:1.9,nutrients:0}).stage,'stress');
 assert.equal(experimentState({heat:2,weeks:2,nutrients:0}).stage,'bleaching');
 assert.equal(experimentState({heat:2,weeks:4,nutrients:0}).stage,'mortality');
 assert.equal(experimentState({heat:3,weeks:12,nutrients:0}).turbidity,0);
 assert.equal(experimentState({heat:0,weeks:12,nutrients:2}).turbidity,1);
 for(const id of ['coral-reef','sea-turtle','marine-snow'])assert.ok(SOURCES[responseForArticle(id,{heat:2,weeks:6,nutrients:2}).source]);
 assert.equal(responseForArticle('mariana-snailfish',{heat:3,weeks:12,nutrients:2}),null);
});
