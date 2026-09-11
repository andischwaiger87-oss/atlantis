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
// The surface uses exactly the same screen-space waterline as the background shader.
export function landmarkLayout(a, travel, width = 1200) {
  const mobile = width < 750;
  if (mobile) {
    const surface = Math.abs(travel) < .18;
    const nearest = LANDMARKS.filter(item => !item.surface).reduce((best, item) => Math.abs(item.travel - travel) < Math.abs(best.travel - travel) ? item : best, LANDMARKS.find(item => !item.surface));
    return {
      x: a.surface ? a.x : 50,
      y: a.surface ? 50 + travel * 94 : 38,
      visible: surface ? a.surface : !a.surface && a.id === nearest.id,
      pixels: a.surface ? Math.min(96, width * .24) : Math.min(195, width * .52)
    };
  }
  const y = a.surface ? 50 + travel * 94 : 42 + (travel - a.travel) * 130;
  return {
    x: a.x,
    y,
    visible: Math.abs(a.travel - travel) < .52 && y > 22 && y < 70,
    pixels: width >= 1500 ? 220 : a.id === 'coral-reef' ? 235 : 175
  };
}
