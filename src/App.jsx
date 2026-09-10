import { useEffect, useState } from 'react';
import { Compass, BookOpen, SlidersHorizontal, Info } from 'lucide-react';
import { ARTICLES, REVIEW_DATE } from './data/expedition';
import { KnowledgeView, ArticleDialog, MethodDialog } from './components/Research';
import ClimateLab from './components/ClimateLab';
import ImmersiveExpedition from './components/ImmersiveExpedition';
import { DEFAULT_EXPERIMENT, responseForArticle } from './simulation/model';
import './index.css';
import './expedition.css';
export default function App() {
  const [view, setView] = useState('expedition');
  const [articleId, setArticleId] = useState(null);
  const [method, setMethod] = useState(false);
  const [destination, setDestination] = useState(null);
  const [experiment, setExperiment] = useState(DEFAULT_EXPERIMENT);
  const [mode, setMode] = useState('observation');
  const [period, setPeriod] = useState(2);
  const [scenario, setScenario] = useState(1);
  const [read, setRead] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem('atlantis-read-v2') || '[]');
      return Array.isArray(value) ? value.filter(id => ARTICLES.some(a => a.id === id)) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem('atlantis-read-v2', JSON.stringify(read));
    } catch {/* Optional local progress. */}
  }, [read]);
  const openArticle = id => {
    setArticleId(id);
    setRead(prev => prev.includes(id) ? prev : [...prev, id]);
  };
  const changeView = next => {
    setView(next);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const selected = ARTICLES.find(a => a.id === articleId);
  return <div className={`app-shell remake ${view === 'expedition' ? 'immersive' : 'reading-view'}`}><a className="skip-link" href="#main">Zum Inhalt</a><header className="topbar"><a className="brand" href="#" aria-label="Atlantis – zum Horizont" onClick={e => {
        e.preventDefault();
        changeView('expedition');
        setDestination({
          id: 'horizon'
        });
      }}>ATLANTIS</a><nav aria-label="Hauptnavigation">{[['expedition', 'Expedition', <Compass size={16} />], ['knowledge', 'Wissen', <BookOpen size={16} />], ['climate', 'Klimalabor', <SlidersHorizontal size={16} />]].map(([id, label, icon]) => <button key={id} className={view === id ? 'active' : ''} aria-current={view === id ? 'page' : undefined} onClick={() => changeView(id)}>{icon}<span>{label}</span></button>)}</nav><button className="about-button" aria-label="Quellen und Methodik" onClick={() => setMethod(true)}><Info size={18} /></button></header>
 <main id="main" tabIndex={-1}><div hidden={view !== 'expedition'}><ImmersiveExpedition experiment={experiment} setExperiment={setExperiment} onOpen={openArticle} onMethod={() => setMethod(true)} blocked={view !== 'expedition' || !!articleId || method} destination={destination} onGlobal={() => changeView('climate')} /></div>{view === 'knowledge' && <KnowledgeView read={read} onOpen={openArticle} onMethod={() => setMethod(true)} />} {view === 'climate' && <><section className="lab-intro page-content"><span className="eyebrow">DEIN EXPERIMENT</span><h1>Eine Veränderung.<br />Viele Folgen.</h1><p>Was passiert, wenn ein Riff wochenlang unter Wärme leidet? Verändere Temperatur, Dauer und Nährstoffeintrag direkt in der Expedition.</p><button className="primary-button" onClick={() => {
            changeView('expedition');
            setDestination({
              id: 'sunlight',
              openLab: true
            });
          }}>Lokalen Versuch öffnen →</button><p className="lab-divider">Oder den globalen Zusammenhang untersuchen ↓</p></section><ClimateLab mode={mode} setMode={next => {
          setMode(next);
          setPeriod(2);
        }} period={period} setPeriod={setPeriod} scenario={scenario} setScenario={setScenario} onOpen={openArticle} onExplore={() => {
          changeView('expedition');
          setDestination({
            id: 'sunlight'
          });
        }} /></>}</main>
 {view !== 'expedition' && <footer className="bottom-bar"><span>NASA · NOAA · IPCC · ESA · WMO</span><button onClick={() => setMethod(true)}>Quellen & Methodik</button><span>Redaktionsstand {REVIEW_DATE}</span></footer>}
 {selected && <ArticleDialog key={selected.id} article={selected} experimentResponse={responseForArticle(selected.id, experiment)} onClose={() => setArticleId(null)} onOpen={openArticle} onZone={id => {
      setArticleId(null);
      changeView('expedition');
      setDestination({
        id
      });
    }} />}{method && <MethodDialog onClose={() => setMethod(false)} />}</div>;
}
