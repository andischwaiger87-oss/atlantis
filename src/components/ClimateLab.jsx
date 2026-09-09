import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Thermometer, Waves, FlaskConical, RotateCcw } from 'lucide-react';
import { SCENARIOS, PERIODS, OBSERVATIONS, climateValue } from '../data/expedition';
import { SourceLink } from './Research';
const fmt = (n, d = 1) => n.toLocaleString('de-AT', {
  minimumFractionDigits: d,
  maximumFractionDigits: d
});
function ScenarioChart({
  scenario,
  period
}) {
  const xs = [72, 295, 574];
  const y = v => 264 - v * 38;
  return <svg className="scenario-chart" viewBox="0 0 650 315" role="img" aria-labelledby="chart-title chart-desc"><title id="chart-title">Globale Erwärmung in drei IPCC-Szenarien</title><desc id="chart-desc">Vergleich der Mittelwerte für 2021 bis 2040, 2041 bis 2060 und 2081 bis 2100. Die farbige Fläche zeigt die sehr wahrscheinliche Bandbreite des gewählten Szenarios. Verbindungslinien sind keine Jahresprognosen.</desc>{[0, 1, 2, 3, 4, 5, 6].map(t => <g key={t}><line x1="56" x2="600" y1={y(t)} y2={y(t)} stroke="#ffffff12" /><text x="34" y={y(t) + 5} fill="#a1b6b9" fontSize="13" textAnchor="end">{t}°</text></g>)}<polygon points={[...SCENARIOS[scenario].values.map((v, i) => `${xs[i]},${y(v[2])}`), ...SCENARIOS[scenario].values.map((v, i) => `${xs[i]},${y(v[1])}`).reverse()].join(' ')} fill={SCENARIOS[scenario].color} opacity=".1" />{SCENARIOS.map((s, j) => <g key={s.id} opacity={scenario === j ? 1 : .35}><polyline points={s.values.map((v, i) => `${xs[i]},${y(v[0])}`).join(' ')} stroke={s.color} fill="none" strokeWidth={scenario === j ? 3 : 2} />{s.values.map((v, i) => <circle key={i} cx={xs[i]} cy={y(v[0])} r={j === scenario && i === period ? 7 : 4} fill={s.color} stroke="#0d2229" strokeWidth="2" />)}</g>)}{PERIODS.map((p, i) => <text key={p} x={xs[i]} y="296" textAnchor="middle" fill="#a1b6b9" fontSize="13">{p}</text>)}</svg>;
}
export default function ClimateLab({
  mode,
  setMode,
  period,
  setPeriod,
  scenario,
  setScenario,
  onOpen,
  onExplore
}) {
  const [ph, setPh] = useState(8.1);
  const projected = mode === 'projection';
  const current = SCENARIOS[scenario];
  const temperature = climateValue(mode, period, scenario);
  const bounds = projected ? current.values[period] : null;
  const activity = 10 ** (8.1 - ph);
  return <section className="page-content climate-page"><div className="page-heading"><div><span className="eyebrow">DAS KLIMALABOR</span><h1>Zukunft ist eine Frage<br />unserer Entscheidungen.</h1><p>Vergleiche belegte Klimapfade. Entdecke, welche Folgen miteinander verbunden sind – und was sich nicht einfach ausrechnen lässt.</p></div><FlaskConical className="lab-symbol" size={62} strokeWidth={1} /></div>
 <div className="lab-layout"><section className="lab-controls"><span className="eyebrow">01 / PERSPEKTIVE WÄHLEN</span><div className="segmented"><button className={!projected ? 'selected' : ''} aria-pressed={!projected} onClick={() => setMode('observation')}>Beobachtung</button><button className={projected ? 'selected' : ''} aria-pressed={projected} onClick={() => setMode('projection')}>Szenario</button></div>
 <label className="field-label" htmlFor="lab-period">{projected ? 'Modellzeitraum' : 'Messzeitraum'}</label><select id="lab-period" value={period} onChange={e => setPeriod(Number(e.target.value))}>{(projected ? PERIODS : OBSERVATIONS.map(o => o.label)).map((p, i) => <option value={i} key={p}>{p}</option>)}</select>
 {projected ? <fieldset><legend>Emissionspfad</legend>{SCENARIOS.map((s, i) => <label className={`scenario-option ${i === scenario ? 'selected' : ''}`} key={s.id} style={{
            '--scenario-color': s.color
          }}><input type="radio" name="scenario" value={i} checked={scenario === i} onChange={() => setScenario(i)} /><span>{s.name}<small>{s.code}</small></span></label>)}<p className="control-note">{current.description}</p></fieldset> : <p className="control-note">Die Messwerte beziehen sich auf die genannte Periode. 2025 ist ein einzelnes Jahr; 2011–2020 ist ein Zehnjahresmittel.</p>}
 <button className="text-button" onClick={() => {
          setMode('observation');
          setPeriod(2);
          setScenario(1);
          setPh(8.1);
        }}><RotateCcw size={15} /> Zurück zu den Beobachtungen</button></section>
 <section className="lab-result"><div className="section-row"><span className="eyebrow">{projected ? 'PROJEKTION · KEINE VORHERSAGE' : 'BEOBACHTUNG'}</span><Thermometer size={20} /></div><div className="large-temperature">+{fmt(temperature, projected ? 1 : 2)}<span>°C</span></div><p>Globale Oberflächentemperatur relativ zu 1850–1900</p><div className="uncertainty"><span>{projected ? 'Sehr wahrscheinliche Bandbreite' : 'Einordnung / Unsicherheit'}</span><strong>{projected ? `${fmt(bounds[1])}–${fmt(bounds[2])} °C` : OBSERVATIONS[period].range}</strong></div>
 {projected ? <><ScenarioChart scenario={scenario} period={period} /><div className="chart-legend">{SCENARIOS.map((s, i) => <button key={s.id} aria-pressed={i === scenario} onClick={() => setScenario(i)} style={{
              color: s.color
            }}><i style={{
                background: s.color
              }} />{s.code}</button>)}</div><p className="chart-caption">20-Jahres-Mittel aus IPCC AR6 (2021). Linien verbinden Zeitfenster, nicht jährliche Messwerte. Die Fläche zeigt die Bandbreite des ausgewählten Pfads.</p><details className="data-table"><summary>Werte als Tabelle ansehen</summary><div className="table-scroll"><table><caption>Erwärmung und sehr wahrscheinliche Bandbreite in °C</caption><thead><tr><th scope="col">Szenario</th>{PERIODS.map(p => <th key={p} scope="col">{p}</th>)}</tr></thead><tbody>{SCENARIOS.map(s => <tr key={s.id}><th scope="row">{s.code}</th>{s.values.map((v, i) => <td key={i}>{fmt(v[0])}<small>{fmt(v[1])}–{fmt(v[2])}</small></td>)}</tr>)}</tbody></table></div></details></> : <div className="observation-message"><Waves size={30} /><h2>Ein Jahreswert ist noch kein langfristiges Klimaniveau.</h2><p>Natürliche Schwankungen überlagern den menschengemachten Trend. Für die Zukunft betrachten wir mehrjährige Mittelwerte in unterschiedlichen Emissionspfaden.</p><button className="primary-button" onClick={() => setMode('projection')}>Zukunftspfade vergleichen <ArrowRight size={17} /></button></div>}
 <SourceLink id={projected ? 'scenarios' : OBSERVATIONS[period].source} /></section></div>
 <section className="lab-connections"><span className="eyebrow">02 / ZUSAMMENHÄNGE VERSTEHEN</span><h2>Eine Ursache. Mehrere Wirkungsketten.</h2><div className="connection-grid">{[['CO₂ & Energiebilanz', 'Zusätzliche Treibhausgase → mehr Wärme im Klimasystem → Erwärmung von Luft und Meer.', 'ocean-heat'], ['CO₂ & Wasserchemie', 'CO₂-Aufnahme → sinkender pH-Wert → veränderte Bedingungen für Kalkbildner.', 'ocean-acid'], ['Wärme & Ökosysteme', 'Marine Hitzewellen → Hitzestress → höheres Risiko für Korallenbleiche.', 'coral-reef']].map(([title, body, id]) => <button key={id} onClick={() => onOpen(id)}><span className="eyebrow">{id === 'ocean-acid' ? 'CHEMISCHER PROZESS' : 'KLIMAZUSAMMENHANG'}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight size={22} /></button>)}</div><p className="context-note">Qualitative Wirkungsketten: Aus der globalen Temperatur werden hier weder lokaler pH noch Tierbestände berechnet. Meereszonen reagieren unterschiedlich und teilweise stark verzögert.</p><SourceLink id="ocean" /></section>
 <section className="chemistry-panel"><div><span className="eyebrow">03 / EIN PRINZIP AUSPROBIEREN</span><h2>pH ist keine lineare Skala.</h2><p>Verändere einen beispielhaften pH-Wert und vergleiche die Wasserstoffionenaktivität mit pH 8,10. Dieser Vergleichswert ist keine vorindustrielle Referenz und kein globaler Messwert.</p><SourceLink id="acid" /></div><div className="chemistry-control"><label htmlFor="ph-slider">Beispiel-pH <strong>{fmt(ph, 2)}</strong></label><input id="ph-slider" type="range" min="7.6" max="8.3" step="0.01" value={ph} onChange={e => setPh(Number(e.target.value))} /><div className="range-labels"><span>7,60</span><span>8,30</span></div><div className="ph-result"><strong>{fmt(activity, 2)}×</strong><span>Wasserstoffionenaktivität<br />gegenüber pH 8,10</span></div><small>Definitionsgemäß: Verhältnis = 10^(8,10 − pH). Kein Schadensmodell und keine Zukunftsprognose.</small></div></section>
 <div className="lab-outro"><span>Nimm diese Perspektive mit in die Expedition.</span><button className="primary-button" onClick={onExplore}>Den Ozean erkunden <ArrowRight size={17} /></button></div>
 </section>;
}
