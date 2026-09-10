import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown, Play, Pause, SlidersHorizontal, X, RotateCcw, Plus, Map } from 'lucide-react';
import { ZONES } from '../data/expedition';
import { advanceTravel, altitudeAt, centerOfZone, zoneAt, clamp, experimentState } from '../simulation/model';
import WorldRenderer from './WorldRenderer';
import { SourceLink } from './Research';
import { LANDMARKS as landmarks, landmarkLayout } from '../simulation/landmarks';
export default function ImmersiveExpedition({
  experiment,
  setExperiment,
  onOpen,
  onMethod,
  blocked,
  destination,
  onGlobal
}) {
  const [travel, setTravel] = useState(0);
  const travelRef = useRef(0);
  const velocityRef = useRef(0);
  const experimentRef = useRef(experimentState(experiment));
  const controls = useRef({
    held: 0,
    impulse: 0,
    auto: false,
    sign: -1,
    target: null
  });
  const [auto, setAuto] = useState(false);
  const [settings, setSettings] = useState(false);
  const [route, setRoute] = useState(false);
  const [playing, setPlaying] = useState(false);
  const host = useRef(null);
  const sheet = useRef(null);
  const state = experimentState(experiment);
  const zone = ZONES.find(z => z.id === zoneAt(travel));
  const altitude = altitudeAt(travel);
  useEffect(() => {
    experimentRef.current = experimentState(experiment);
  }, [experiment]);
  useEffect(() => {
    if (destination) {
      controls.current.auto = false;
      controls.current.target = centerOfZone(destination.id);
      queueMicrotask(() => {
        setAuto(false);
        if (destination.openLab) setSettings(true);
      });
    }
  }, [destination]);
  useEffect(() => {
    if (!settings) return;
    sheet.current.showModal();
  }, [settings]);
  useEffect(() => {
    let frame,
      last = 0;
    const c = controls.current;
    const draw = t => {
      const dt = Math.min((t - last) / 1000 || 0, .05);
      last = t;
      if (!blocked && !settings && !document.hidden) {
        const next = advanceTravel(travelRef.current, velocityRef.current, c, dt);
        velocityRef.current = next.velocity;
        travelRef.current = next.position;
        setTravel(next.position);
      } else {
        velocityRef.current = 0;
        c.held = 0;
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [blocked, settings]);
  const manual = () => {
    controls.current.auto = false;
    controls.current.target = null;
    setAuto(false);
  };
  useEffect(() => {
    const c = controls.current;
    const stop = () => {
      c.held = 0;
    };
    const key = e => {
      if (blocked || settings || e.target.closest('input,select,textarea,button,dialog')) return;
      const dir = ['ArrowUp', 'w', 'W'].includes(e.key) ? 1 : ['ArrowDown', 's', 'S'].includes(e.key) ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      c.auto = false;
      c.target = null;
      setAuto(false);
      c.held = dir;
    };
    const wheel = e => {
      if (blocked || settings || e.target.closest('input,button,dialog')) return;
      e.preventDefault();
      c.auto = false;
      c.target = null;
      setAuto(false);
      c.impulse = clamp(c.impulse - e.deltaY * .003, -2, 2);
    };
    const el = host.current;
    el.addEventListener('wheel', wheel, {
      passive: false
    });
    window.addEventListener('keydown', key);
    window.addEventListener('keyup', stop);
    window.addEventListener('blur', stop);
    return () => {
      el.removeEventListener('wheel', wheel);
      window.removeEventListener('keydown', key);
      window.removeEventListener('keyup', stop);
      window.removeEventListener('blur', stop);
    };
  }, [blocked, settings]);
  useEffect(() => {
    if (!playing || blocked || settings || experiment.weeks >= 12) return;
    const timer = setInterval(() => setExperiment(e => ({
      ...e,
      weeks: Math.min(12, e.weeks + .1)
    })), 150);
    return () => clearInterval(timer);
  }, [playing, blocked, settings, experiment.weeks, setExperiment]);
  const moveTo = value => {
    manual();
    controls.current.target = value;
  };
  const touch = useRef(null);
  return <section ref={host} className="immersive-world" aria-label="Stufenlose Expedition" onPointerDown={e => {
    if (e.target.closest('button,input,select,dialog,a')) return;
    touch.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  }} onPointerMove={e => {
    if (touch.current === null) return;
    manual();
    controls.current.impulse = clamp((e.clientY - touch.current) * .065, -2, 2);
    touch.current = e.clientY;
  }} onPointerUp={() => {
    touch.current = null;
  }} onPointerCancel={() => {
    touch.current = null;
  }}>
  <WorldRenderer travelRef={travelRef} velocityRef={velocityRef} experimentRef={experimentRef} />
  <div className="world-shade" />
  <div className="expedition-title"><span className="eyebrow">{travel > .09 ? 'AUFSTIEG' : travel < -.09 ? 'TAUCHGANG' : 'DEINE EXPEDITION'}</span><h1>{zone.name}</h1><p>{Math.abs(travel) < .09 ? 'Eine Welt. In jede Richtung entdecken.' : zone.insight}</p></div>
  <div className="landmarks">{landmarks.filter(a => Math.abs(a.travel - travel) < .52).map(a => {
        const distance = Math.abs(a.travel - travel);
        return <button key={a.id} className={`landmark model-hit ${a.surface ? 'surface-hit' : ''}`} style={{
          left: `${a.x}%`,
          top: `${landmarkLayout(a, travel).y}%`,
          opacity: clamp((.52 - distance) * 5, 0, 1),
          '--object-size': a.id === 'coral-reef' ? '235px' : '175px'
        }} onClick={() => onOpen(a.id)} aria-label={`${a.title} erkunden`}><i className="model-target" aria-hidden="true" /><span><Plus size={12} />{a.title}</span></button>;
      })}</div>
  <aside className="depth-control"><output>{Math.abs(altitude) >= 12000 ? (Math.abs(altitude) / 1000).toLocaleString('de-AT', {
          maximumFractionDigits: 0
        }) : Math.abs(altitude).toLocaleString('de-AT', {
          maximumFractionDigits: 0
        })}<small>{Math.abs(altitude) >= 12000 ? 'km' : 'm'} · {altitude > 0 ? 'Höhe' : altitude < 0 ? 'Tiefe' : 'Horizont'}</small></output><input type="range" min="-5" max="5" step=".001" value={travel} aria-label="Höhe und Tiefe stufenlos wählen" aria-valuetext={`${zone.name}, ${Math.round(altitude)} Meter`} onChange={e => {
        manual();
        travelRef.current = Number(e.target.value);
        setTravel(Number(e.target.value));
      }} /><button aria-label="Zonen wählen" onClick={() => setRoute(!route)} aria-expanded={route}><Map size={19} /></button></aside>
  {route && <div className="route-menu"><details className="zone-explanation"><summary>{zone.name} · Hintergrund</summary><p>{zone.description}</p><p>{zone.connection}</p><SourceLink id={zone.source} /></details>{ZONES.map(z => <button key={z.id} onClick={() => {
        moveTo(centerOfZone(z.id));
        setRoute(false);
      }}>{z.name}</button>)}</div>}
  {Math.abs(travel) < .09 && <div className="departure"><button onClick={() => moveTo(1.5)}><ArrowUp size={19} /> Ins Universum</button><button onClick={() => moveTo(-.5)}><ArrowDown size={19} /> In die Tiefsee</button></div>}
  <div className="travel-actions"><button onClick={() => {
        const next = !auto;
        setAuto(next);
        controls.current.auto = next;
        controls.current.target = null;
        controls.current.sign = travel >= 4.9 ? -1 : travel <= -4.9 ? 1 : -1;
      }} aria-pressed={auto}>{auto ? <Pause size={16} /> : <Play size={16} />}<span>{auto ? 'Reise pausieren' : 'Rundreise'}</span></button><button onClick={() => moveTo(0)} aria-label="Zum Horizont"><RotateCcw size={17} /></button></div>
  <div className="steering">{[1, -1].map(dir => <button key={dir} aria-label={dir === 1 ? 'Aufsteigen – gedrückt halten' : 'Abtauchen – gedrückt halten'} onPointerDown={e => {
        manual();
        controls.current.held = dir;
        e.currentTarget.setPointerCapture(e.pointerId);
      }} onPointerUp={() => {
        controls.current.held = 0;
      }} onPointerCancel={() => {
        controls.current.held = 0;
      }} onKeyDown={e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          manual();
          controls.current.held = dir;
        }
      }} onKeyUp={() => {
        controls.current.held = 0;
      }} onBlur={() => {
        controls.current.held = 0;
      }}>{dir === 1 ? <ArrowUp /> : <ArrowDown />}</button>)}</div>
  <div className="climate-dock"><div className="climate-dock-heading"><button onClick={() => setSettings(true)}><SlidersHorizontal size={15} /><span>Klima erleben · Riff</span></button><span>+{experiment.heat.toLocaleString('de-AT')} °C lokal · Woche {Math.floor(experiment.weeks)}</span></div><div className="climate-timeline"><button aria-label={playing && experiment.weeks < 12 ? 'Versuch pausieren' : 'Versuch abspielen'} onClick={() => {
          if (experiment.weeks >= 12) setExperiment(e => ({
            ...e,
            weeks: 0
          }));
          setPlaying(!playing || experiment.weeks >= 12);
        }}>{playing && experiment.weeks < 12 ? <Pause size={16} /> : <Play size={16} />}</button><input aria-label="Dauer der lokalen Belastung in Wochen" type="range" min="0" max="12" step=".1" value={experiment.weeks} onChange={e => {
          setPlaying(false);
          setExperiment(p => ({
            ...p,
            weeks: Number(e.target.value)
          }));
        }} /><span>12 W</span></div><button className="experiment-caption" onClick={() => {
        moveTo(-.5);
        onOpen('coral-reef');
      }}>{state.title}<span> →</span></button></div>
  <button className="world-method" onClick={onMethod}>Illustrative Welt · Modellversuch</button><span className="gesture-hint">Ziehen · Scrollen · ↑ ↓</span>
  {settings && <dialog ref={sheet} className="experiment-sheet" onCancel={() => setSettings(false)}><div className="sheet-top"><span>KLIMALABOR / LOKALER VERSUCH</span><button aria-label="Schließen" onClick={() => setSettings(false)}><X /></button></div><h2>Was hält ein Riff aus?</h2><p>Verändere die Belastung. Lass Wochen vergehen. Beobachte das Riff und öffne seine Feldnotiz.</p><label>Zusätzliche Wärme <strong>+{experiment.heat.toLocaleString('de-AT')} °C</strong><input type="range" min="0" max="3" step=".1" value={experiment.heat} onChange={e => setExperiment(p => ({
          ...p,
          heat: Number(e.target.value)
        }))} /><small>Über dem örtlichen langjährigen Maximum der Monatsmittel. Keine globale Erwärmungszahl.</small></label><label>Nährstoffeintrag<select value={experiment.nutrients} onChange={e => setExperiment(p => ({
          ...p,
          nutrients: Number(e.target.value)
        }))}><option value="0">Kein zusätzlicher Eintrag</option><option value="1">Erhöht</option><option value="2">Hoch</option></select></label><div className="causal-chain">{experiment.nutrients ? 'Nährstoffe → mehr Algen → weniger Licht → Sauerstoffverbrauch beim Abbau' : 'Wärme × Dauer → Hitzestress → Bleiche → mögliche Riffschäden'}</div><p>{state.dhw.toLocaleString('de-AT', {
          maximumFractionDigits: 1
        })} °C-Wochen · {state.title}</p><button className="primary-button" onClick={() => {
        moveTo(-.5);
        setSettings(false);
      }}>Am Riff beobachten <ArrowDown size={17} /></button><details><summary>Wie wird das berechnet?</summary><p>Vereinfachter Versuch mit konstanter Überwärmung und unbelastetem Start. Ab +1 °C wird die Überwärmung mit der Dauer (maximal 12 Wochen) multipliziert. NOAA beschreibt ab 4 °C-Wochen Bleicherisiko und ab 8 verbreitete Bleiche mit wahrscheinlichem Absterben empfindlicher Korallen. Individuelle Bestände werden nicht berechnet.</p><SourceLink id="heatwatch" /><p>Die Trübung veranschaulicht Nährstoffbelastung. Ihre Stärke und zeitliche Entwicklung sind gestalterisch gewählt, keine Vorhersage einer Algenkonzentration.</p><SourceLink id="nutrients" /></details><button className="global-link" onClick={() => {
        setSettings(false);
        onGlobal();
      }}>Globale Klimapfade & Messdaten →</button></dialog>}
 </section>;
}
