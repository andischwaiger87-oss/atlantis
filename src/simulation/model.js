// Travel distance is schematic; physical altitude is interpolated only within each layer.
export const TRAVEL_LIMIT = 5;
export const HEIGHTS = [-11000, -6000, -4000, -1000, -200, 0, 12000, 50000, 85000, 700000, 2000000];
export const ZONE_IDS = ['hadal', 'abyssal', 'midnight', 'twilight', 'sunlight', 'horizon', 'troposphere', 'stratosphere', 'mesosphere', 'thermosphere', 'exosphere'];
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
export function altitudeAt(travel) {
  const p = clamp(travel, -5, 5) + 5;
  const i = Math.min(9, Math.floor(p));
  const f = p - i;
  return HEIGHTS[i] + (HEIGHTS[i + 1] - HEIGHTS[i]) * f;
}
export function zoneAt(travel) {
  if (Math.abs(travel) < .09) return 'horizon';
  return travel > 0 ? ZONE_IDS[Math.min(10, Math.ceil(travel) + 5)] : ZONE_IDS[Math.max(0, Math.floor(travel) + 5)];
}
export function centerOfZone(id) {
  const i = ZONE_IDS.indexOf(id) - 5;
  return i === 0 ? 0 : i > 0 ? i - .5 : i + .5;
}
export function heatStress(heat, weeks) {
  return heat >= 1 ? heat * clamp(weeks, 0, 12) : 0;
}
export function experimentState({
  heat = 1.5,
  weeks = 0,
  nutrients = 0,
  debris = false
}) {
  const dhw = heatStress(heat, weeks);
  const stage = dhw >= 8 ? 'mortality' : dhw >= 4 ? 'bleaching' : dhw > 0 ? 'stress' : 'baseline';
  const reefAsset = stage === 'mortality' ? 'coral-reef_2050' : stage === 'bleaching' ? 'coral-reef' : 'coral-reef_1950';
  return {
    dhw,
    entanglement: debris ? clamp(weeks / 6, 0, 1) : 0,
    stage,
    reefAsset,
    turbidity: clamp(nutrients / 2 * weeks / 12, 0, 1),
    title: stage === 'mortality' ? 'Korallensterben möglich' : stage === 'bleaching' ? 'Korallenbleiche wahrscheinlich' : stage === 'stress' ? 'Hitzestress baut sich auf' : 'Ohne aufgestauten Hitzestress',
    description: stage === 'mortality' ? 'Ab 8 °C-Wochen sind verbreitete Bleiche und das Absterben hitzeempfindlicher Korallen wahrscheinlich. Das sichtbare geschädigte Riff ist ein mögliches Schadensbild.' : stage === 'bleaching' ? 'Ab 4 °C-Wochen ist erhebliche Korallenbleiche zu erwarten. Korallen können sich erholen, wenn der Stress rechtzeitig nachlässt.' : stage === 'stress' ? 'Dauer und Stärke der Überwärmung wirken zusammen. Die Belastung sammelt sich über die Wochen an.' : 'In diesem Versuch ist noch keine anrechenbare Hitzebelastung aufgestaut. Das sagt nichts über andere örtliche Risiken aus.'
  };
}
export function responseForArticle(id, experiment) {
  const s = experimentState(experiment);
  if (id === 'sea-turtle' && experiment.debris && experiment.weeks > 0) return {
    title: 'In treibenden Leinen verheddert',
    text: 'Die Leinen behindern die Flossenbewegung. Verhedderung in Fanggeräten kann Meeresschildkröten verletzen und ihre Fortbewegung beeinträchtigen. Die Haltung zeigt eine mögliche Beeinträchtigung, keine Krankheitsdiagnose und keine berechnete zeitliche Schadensprognose. Dieser Plastikversuch ist unabhängig von der Überwärmung.',
    source: 'turtle'
  };
  if (id === 'coral-reef') return {
    title: s.title,
    text: s.description,
    source: 'heatwatch'
  };
  if (['plankton-map', 'ocean-heat', 'ocean-acid', 'sea-turtle', 'ghost-nets', 'vertical-migration', 'marine-snow', 'sperm-whale-dive'].includes(id)) {
    if (experiment.nutrients > 0 && experiment.weeks > 0) return {
      title: 'Zusätzliche Belastung des Nahrungsnetzes',
      text: 'Der Versuch zeigt erhöhte Nährstoffzufuhr. Vermehrtes Algenwachstum kann Licht reduzieren; beim Abbau organischen Materials wird Sauerstoff verbraucht. Diese Wirkungskette kann Lebensräume belasten. Die Darstellung ist qualitativ und berechnet weder lokale Tierzahlen noch einen Todeszeitpunkt.',
      source: 'nutrients'
    };
    if (s.dhw >= 4) return {
      title: 'Ein veränderter Lebensraum',
      text: 'Das Riff steht im Versuch unter anhaltendem Hitzestress. Schäden an Riffstrukturen können Schutz- und Nahrungsräume verändern. Daraus lässt sich für dieses Tier keine individuelle Sterbewahrscheinlichkeit oder ein Aussterbedatum berechnen.',
      source: 'reefs'
    };
  }
  return null;
}
export const DEFAULT_EXPERIMENT = {
  heat: 1.5,
  weeks: 0,
  nutrients: 0
};
export function advanceTravel(position, velocity, control, seconds) {
  const dt = clamp(seconds, 0, .05);
  let desired = control.held * .65 + control.impulse;
  if (control.auto) {
    if (Math.abs(position) >= 4.99) control.sign = -Math.sign(position);
    desired = control.sign * .20;
  }
  if (control.target !== null) {
    const diff = control.target - position;
    desired = clamp(diff * 1.6, -.85, .85);
    if (Math.abs(diff) < .005) control.target = null;
  }
  const nextVelocity = velocity + (desired - velocity) * Math.min(1, dt * 8);
  control.impulse *= Math.exp(-dt * 5);
  return {
    position: clamp(position + nextVelocity * dt, -5, 5),
    velocity: nextVelocity
  };
}
