import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown, ArrowUpRight, Waves, Compass, BookOpen, SlidersHorizontal, Plus, Home, ChevronDown, Check, Info, Pause, Play } from 'lucide-react';
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ZONES, ARTICLES, REVIEW_DATE, SCENARIOS, PERIODS, OBSERVATIONS, climateValue, climateContext } from './data/expedition';
import { KnowledgeView, ArticleDialog, MethodDialog, SourceLink } from './components/Research';
import ClimateLab from './components/ClimateLab';
import submarine from './assets/submarine.png';
import rocket from './assets/rocket.png';
import './index.css';
const format = value => value.toLocaleString('de-AT', {
  maximumFractionDigits: 2
});
export default function App() {
  const [view, setView] = useState('expedition');
  const [zoneIndex, setZoneIndex] = useState(5);
  const [articleId, setArticleId] = useState(null);
  const [method, setMethod] = useState(false);
  const [mode, setMode] = useState('observation');
  const [period, setPeriod] = useState(2);
  const [scenario, setScenario] = useState(1);
  const [direction, setDirection] = useState(1);
  const [auto, setAuto] = useState(false);
  const [read, setRead] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem('atlantis-read-v2') || '[]');
      return Array.isArray(value) ? value.filter(id => ARTICLES.some(a => a.id === id)) : [];
    } catch {
      return [];
    }
  });
  const lastNavigation = useRef(0);
  const reduced = useReducedMotion();
  const zone = ZONES[zoneIndex];
  const temperature = climateValue(mode, period, scenario);
  const projected = mode === 'projection';
  const currentArticles = ARTICLES.filter(a => a.zone === zone.id);
  const selectedArticle = ARTICLES.find(a => a.id === articleId);
  const go = index => {
    const target = Math.max(0, Math.min(ZONES.length - 1, index));
    setDirection(target > zoneIndex ? 1 : -1);
    setZoneIndex(target);
  };
  const openArticle = id => {
    setAuto(false);
    setArticleId(id);
    setRead(prev => prev.includes(id) ? prev : [...prev, id]);
  };
  const changeView = next => {
    setAuto(false);
    setView(next);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const changeMode = next => {
    setMode(next);
    setPeriod(2);
  };
  useEffect(() => {
    try {
      localStorage.setItem('atlantis-read-v2', JSON.stringify(read));
    } catch {/* Reading stays available if browser storage is disabled. */}
  }, [read]);
  useEffect(() => {
    if (view !== 'expedition' || articleId || method) return;
    const keydown = event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input,select,textarea,[contenteditable]')) return;
      const delta = ['ArrowUp', 'w', 'W'].includes(event.key) ? -1 : ['ArrowDown', 's', 'S'].includes(event.key) ? 1 : 0;
      if (!delta) return;
      event.preventDefault();
      if (Date.now() - lastNavigation.current < 450) return;
      lastNavigation.current = Date.now();
      setAuto(false);
      setDirection(delta);
      setZoneIndex(i => Math.max(0, Math.min(10, i + delta)));
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [view, articleId, method]);
  useEffect(() => {
    if (!auto || method || articleId || view !== 'expedition') return;
    const timer = setInterval(() => {
      setDirection(1);
      setZoneIndex(i => (i + 1) % ZONES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [auto, method, articleId, view]);
  const label = projected ? PERIODS[period] : OBSERVATIONS[period].label;
  return <div className="app-shell">
  <a className="skip-link" href="#main">Zum Inhalt</a>
  <header className="topbar"><a className="brand" href="#" onClick={e => {
        e.preventDefault();
        changeView('expedition');
        go(5);
      }} aria-label="Atlantis – zum Horizont"><Waves /><span>ATLANTIS<small>EVERYTHING IS CONNECTED</small></span></a>
   <nav aria-label="Hauptnavigation">{[['expedition', 'Expedition', <Compass size={18} />], ['knowledge', 'Wissen', <BookOpen size={18} />], ['climate', 'Klimalabor', <SlidersHorizontal size={18} />]].map(([id, title, icon]) => <button key={id} className={view === id ? 'active' : ''} aria-current={view === id ? 'page' : undefined} onClick={() => changeView(id)}>{icon}{title}</button>)}</nav><button className="edition" onClick={() => setMethod(true)}>EXPEDITION ERDE · 2026 <Info size={15} /></button>
  </header>
  <main id="main" tabIndex={-1}>
   {view === 'expedition' ? <div className="expedition">
    <aside className="zone-rail" aria-label="Höhen- und Tiefenzonen"><span className="eyebrow">DEINE ROUTE</span>{ZONES.map((z, i) => <button className={i === zoneIndex ? 'selected' : ''} aria-current={i === zoneIndex ? 'location' : undefined} key={z.id} onClick={() => {
            setAuto(false);
            go(i);
          }}><i />{z.name}</button>)}<small>11 Zonen. Ein verbundenes System.</small><button className="tour-button" onClick={() => setAuto(!auto)} aria-pressed={auto}>{auto ? <Pause size={15} /> : <Play size={15} />} {auto ? 'Rundreise pausieren' : 'Rundreise starten'}</button></aside>
    <section className="world" aria-label="Interaktive Expedition">
     <div className="world-heading"><div><span className="eyebrow">{zoneIndex === 5 ? '00 / AUSGANGSPUNKT' : `${String(Math.abs(zoneIndex - 5)).padStart(2, '0')} / ${zoneIndex < 5 ? 'AUFSTIEG' : 'TAUCHGANG'}`}</span><h1>{zone.label}</h1><p>{zone.description}</p></div><div className="coordinate" aria-label={`Exemplarische Position: ${format(Math.abs(zone.position) / (zoneIndex < 5 ? 1000 : 1))} ${zoneIndex < 5 ? 'Kilometer Höhe' : 'Meter Tiefe'}`}>{format(Math.abs(zone.position) / (zoneIndex < 5 ? 1000 : 1))}<small>{zoneIndex < 5 ? 'km' : 'm'}<br />{zoneIndex < 5 ? 'Höhe' : zoneIndex > 5 ? 'Tiefe' : 'Meeresspiegel'}</small></div></div>
     <div className="mobile-zone"><label htmlFor="zone-select">Route</label><select id="zone-select" value={zoneIndex} onChange={e => {
              setAuto(false);
              go(Number(e.target.value));
            }}>{ZONES.map((z, i) => <option key={z.id} value={i}>{z.name} · {z.range}</option>)}</select><ChevronDown size={16} /></div>
     <div className={`scene ${zone.theme} zone-${zone.id}`}>
      {zoneIndex === 5 ? <div className="horizon-line" /> : null}
      <div className="scene-kicker"><span>{zone.name.toUpperCase()}</span><span>{zone.range}</span></div>
      <AnimatePresence mode="wait" initial={false}><Motion.div className="scene-content" key={zone.id} initial={reduced ? false : {
                opacity: 0,
                y: direction * 45
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={reduced ? undefined : {
                opacity: 0,
                y: -direction * 35
              }} transition={{
                duration: .35
              }}>
       {zoneIndex !== 5 && <Motion.img className={`vehicle ${zoneIndex < 5 ? 'rocket' : 'submarine'}`} src={zoneIndex < 5 ? rocket : submarine} alt={zoneIndex < 5 ? 'Deine Forschungsrakete' : 'Dein Forschungs-U-Boot'} animate={reduced ? {} : {
                  y: [0, -8, 0]
                }} transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut'
                }} />}
       {currentArticles.slice(0, 3).map((a, i) => <button className={`world-object object-${i}`} key={a.id} onClick={() => openArticle(a.id)} aria-label={`${a.title} erkunden`}><img src={`/assets/objects/${a.asset}.png`} alt="" width="400" height="400" decoding="async" /><span>{read.includes(a.id) ? <Check size={14} /> : <Plus size={14} />} {a.title}</span></button>)}
      </Motion.div></AnimatePresence>
      {zoneIndex === 5 ? <><span className="sea-label">O Z E A N</span><div className="launch"><button onClick={() => go(4)}><ArrowUp /> Ins Universum <ArrowUpRight size={17} /></button><button className="chosen" onClick={() => go(6)}><ArrowDown /> In die Tiefsee <ArrowUpRight size={17} /></button></div></> : <div className="flight-controls"><button aria-label="Eine Zone aufsteigen" disabled={zoneIndex === 0} onClick={() => {
                setAuto(false);
                go(zoneIndex - 1);
              }}><ArrowUp size={20} /></button><button onClick={() => {
                setAuto(false);
                go(5);
              }}><Home size={16} /> Zum Horizont</button><button aria-label="Eine Zone abtauchen" disabled={zoneIndex === 10} onClick={() => {
                setAuto(false);
                go(zoneIndex + 1);
              }}><ArrowDown size={20} /></button></div>}
      <button className="scene-note" onClick={() => setMethod(true)}>Illustrative Welt · nicht maßstabsgetreu <Info size={12} /></button>
     </div>
     <div className="scene-status"><span aria-live="polite">{zone.name} · {currentArticles.length} Themen</span><span className="keyboard-hint">↑ ↓ oder W / S zum Navigieren</span><button onClick={() => setAuto(!auto)} aria-pressed={auto}>{auto ? <Pause size={14} /> : <Play size={14} />} {auto ? 'Pause' : 'Rundreise'}</button></div>
     <div className="insight-strip"><span className="eyebrow">DIE VERBINDUNG</span><h2>{zone.insight}</h2><p>{zone.connection}</p><button onClick={() => openArticle(zone.link)}>Zusammenhänge entdecken <ArrowUpRight size={18} /></button></div>
     <section className="zone-topics"><div className="section-row"><h2>In dieser Zone</h2><span>{currentArticles.filter(a => read.includes(a.id)).length} / {currentArticles.length} entdeckt</span></div><div className="topic-chips">{currentArticles.map(a => <button key={a.id} onClick={() => openArticle(a.id)}>{read.includes(a.id) ? <Check size={15} /> : <Plus size={15} />} {a.title}<ArrowUpRight size={14} /></button>)}</div></section>
     <section className={`time-panel ${projected ? 'projected' : ''}`} aria-label="Zeitperspektive"><div className="time-heading"><span className="eyebrow">{projected ? 'MÖGLICHE ZUKUNFT' : 'BEOBACHTETES KLIMA'}</span><div className="segmented"><button aria-pressed={!projected} className={!projected ? 'selected' : ''} onClick={() => changeMode('observation')}>Beobachtung</button><button aria-pressed={projected} className={projected ? 'selected' : ''} onClick={() => changeMode('projection')}>Szenario</button></div></div><div className="time-input"><label htmlFor="time-range">{label}<small>{projected ? '20-Jahres-Mittel' : 'Messzeitraum'}</small></label><div className="range-wrap"><input id="time-range" type="range" min="0" max="2" step="1" value={period} aria-valuetext={label} onChange={e => setPeriod(Number(e.target.value))} /><div className="range-labels">{(projected ? PERIODS : OBSERVATIONS.map(o => o.label)).map((p, i) => <button key={p} onClick={() => setPeriod(i)}>{p}</button>)}</div></div><div className="temp-readout">+{format(temperature)}<span>°C</span><small>global · zu 1850–1900</small></div></div>
      {projected && <label className="scenario-inline">Emissionspfad<select value={scenario} onChange={e => setScenario(Number(e.target.value))}>{SCENARIOS.map((s, i) => <option key={s.id} value={i}>{s.name} · {s.code}</option>)}</select></label>}
      <p className="context-note">{climateContext(zone.id, temperature, projected)}</p><div className="time-bottom"><SourceLink id={projected ? 'scenarios' : OBSERVATIONS[period].source} /><button onClick={() => changeView('climate')}>Im Klimalabor vergleichen <ArrowUpRight size={16} /></button></div>
     </section>
    </section>
   </div> : view === 'knowledge' ? <KnowledgeView read={read} onOpen={openArticle} onMethod={() => setMethod(true)} /> : <ClimateLab mode={mode} setMode={changeMode} period={period} setPeriod={setPeriod} scenario={scenario} setScenario={setScenario} onOpen={openArticle} onExplore={() => {
        changeView('expedition');
        go(6);
      }} />}
  </main>
  <footer className="bottom-bar"><span>NASA · NOAA · IPCC · ESA · WMO</span><button onClick={() => setMethod(true)}>Quellen & Methodik <ArrowUpRight size={13} /></button><span>Redaktionsstand {REVIEW_DATE}</span></footer>
  {selectedArticle && <ArticleDialog key={selectedArticle.id} article={selectedArticle} onClose={() => setArticleId(null)} onOpen={openArticle} onZone={id => {
      setArticleId(null);
      changeView('expedition');
      go(ZONES.findIndex(z => z.id === id));
    }} />}
  {method && <MethodDialog onClose={() => setMethod(false)} />}
 </div>;
}
