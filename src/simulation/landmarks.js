import { ARTICLES } from '../data/expedition.js';
import { centerOfZone } from './model.js';
export const SURFACE_IDS = ['offshore-wind', 'cargo-tanker', 'oil-platform'];
export const LANDMARKS = ARTICLES.map(a => {
  const siblings = ARTICLES.filter(b => b.zone === a.zone);
  const i = siblings.indexOf(a);
  return {
    ...a,
    surface: SURFACE_IDS.includes(a.id),
    travel: a.zone === 'horizon' ? [0, 0, 0, .35, -.35][i] : centerOfZone(a.zone) + (i - (siblings.length - 1) / 2) * .17,
    x: a.zone === 'horizon' ? [20, 50, 80, 25, 75][i] : [23, 73, 25, 72, 23, 76][i % 6]
  };
});
const MOBILE_LANES=new Map([...LANDMARKS].filter(a=>!a.surface).sort((a,b)=>a.travel-b.travel).map((a,i)=>[a.id,i%2]));
// The surface uses exactly the same screen-space waterline as the background shader.
export function landmarkLayout(a, travel, width = 1200) {
  const mobile = width < 750;
  if (mobile) {
    const index=MOBILE_LANES.get(a.id)||0;
    const anchor=a.id==='ocean-heat'?-.07:a.id==='ai-center'?.10:a.travel;
    const y=a.surface?50+travel*94:44+(travel-anchor)*175;
    const alpha=Math.max(0,Math.min(1,(y-22)/9,(67-y)/9))*(a.surface?Math.max(0,1-Math.abs(travel)/.20):Math.min(1,Math.abs(travel)/.15));
    return {x:a.surface?a.x:index%2?74:26,y,opacity:alpha,visible:alpha>0,pixels:a.surface?Math.min(96,width*.24):Math.min(140,width*.36)};
  }
  const y = a.surface ? 50 + travel * 94 : 42 + (travel - a.travel) * 130;
  return {
    x: a.x,
    y,
    visible: Math.abs(a.travel - travel) < .52 && y > 22 && y < 70,
    pixels: width >= 1500 ? 220 : a.id === 'coral-reef' ? 235 : 175
  };
}
