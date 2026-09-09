import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { ARTICLES, ZONES, SOURCES, SCENARIOS, OBSERVATIONS, climateValue, climateContext } from '../src/data/expedition.js';

test('every zone has illustrated, sourced articles and a working contextual link', () => {
 assert.equal(ZONES.length, 11);
 assert.equal(new Set(ZONES.map(z => z.id)).size, ZONES.length);
 assert.equal(new Set(ARTICLES.map(a => a.id)).size, ARTICLES.length);
 for (const zone of ZONES) {
  assert.ok(ARTICLES.filter(a => a.zone === zone.id).length >= 2, zone.id);
  assert.ok(ARTICLES.some(a => a.id === zone.link && a.zone === zone.id), zone.link);
  assert.ok(SOURCES[zone.source]);
 }
 for (const article of ARTICLES) {
  assert.ok(ZONES.some(z => z.id === article.zone));
  assert.ok(existsSync(`public/assets/objects/${article.asset}.png`), article.asset);
  assert.ok(existsSync(`public/assets/objects/${article.asset}.webp`) || article.asset === 'noctilucent-clouds');
  for (const field of ['summary', 'body', 'connection', 'limit', 'action']) assert.ok(article[field].trim().length > 0, `${article.id}: ${field}`);
  assert.ok(article.sources.length > 0);
  for (const id of article.sources) assert.equal(new URL(SOURCES[id].url).protocol, 'https:');
 }
});

test('IPCC values retain reported periods and uncertainty, without invented annual interpolation', () => {
 assert.deepEqual(SCENARIOS.map(s => s.values[2]), [[1.4,1.0,1.8],[2.7,2.1,3.5],[4.4,3.3,5.7]]);
 assert.deepEqual(SCENARIOS.map(s => s.values[1]), [[1.6,1.2,2.0],[2,1.6,2.5],[2.4,1.9,3]]);
 for (const [i, scenario] of SCENARIOS.entries()) for (const [period, [mid,low,high]] of scenario.values.entries()) {
  assert.ok(low <= mid && mid <= high);
  assert.equal(climateValue('projection', period, i), mid);
 }
 assert.equal(OBSERVATIONS[2].value,1.43);
 for (let i=0;i<3;i++) assert.equal(climateValue('observation',2,i),1.43);
});

test('climate context never treats geological or orbital processes as local temperature predictions', () => {
 assert.match(climateContext('hadal',4.4,true), /Tektonische/);
 assert.match(climateContext('exosphere',4.4,true), /keine lokale Temperatur/);
 assert.match(climateContext('sunlight',2.7,true), /Aussterbedatum.*nicht/);
 assert.match(climateContext('sunlight',1.43,false), /keine historischen Aufnahmen/);
});
