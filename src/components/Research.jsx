import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, Check, Search, X, Info, ExternalLink, MapPin } from 'lucide-react';
import { ARTICLES, ZONES, SOURCES, REVIEW_DATE } from '../data/expedition';
export function SourceLink({
  id
}) {
  const s = SOURCES[id];
  return <a className="source-link" href={s.url} target="_blank" rel="noopener noreferrer">{s.org} · {s.year} <ExternalLink size={13} /></a>;
}
function Modal({
  children,
  onClose,
  title,
  wide = false
}) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    const scroll = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = scroll;
      if (previous?.isConnected) previous.focus();
    };
  }, []);
  return <dialog ref={ref} className={`research-dialog ${wide ? 'wide' : ''}`} aria-labelledby="dialog-title" onCancel={e => {
    e.preventDefault();
    onClose();
  }} onClick={e => {
    if (e.target === e.currentTarget) {
      const r = e.currentTarget.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose();
    }
  }}><div className="dialog-top"><span>{title}</span><button className="icon-button" autoFocus onClick={onClose} aria-label="Schließen"><X size={21} /></button></div>{children}</dialog>;
}
const imagePath = (a, photo = true) => `/assets/objects/${a.asset}.${photo && a.asset !== 'noctilucent-clouds' ? 'webp' : 'png'}`;
export function ArticleDialog({
  article: a,
  onClose,
  onOpen,
  onZone
}) {
  const zone = ZONES.find(z => z.id === a.zone);
  const related = ARTICLES.filter(item => item.id !== a.id && (item.category === a.category || item.zone === a.zone)).slice(0, 3);
  return <Modal onClose={onClose} title="ATLANTIS / FELDNOTIZ"><figure className="article-figure"><img src={imagePath(a)} alt={`Illustration zum Thema ${a.title}`} onError={e => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = imagePath(a, false);
      }} /><figcaption>Vorhandene Projektillustration · keine dokumentarische Aufnahme</figcaption></figure><article className="article-body"><div className="article-meta"><span className="tag">{a.category}</span><span>{zone.name} · ca. 2 Min.</span></div><h1 id="dialog-title">{a.title}</h1><p className="article-lead">{a.summary}</p><p>{a.body}</p><section className="connection-box"><span className="eyebrow">DER ZUSAMMENHANG</span><p>{a.connection}</p></section><h2>Was die Aussage nicht bedeutet</h2><p>{a.limit}</p><h2>Was wir daraus mitnehmen</h2><p>{a.action}</p><small className="editorial-note">Redaktionelle Handlungseinordnung auf Basis der folgenden Quellen.</small><section className="article-sources"><h2>Nachlesen & überprüfen</h2>{a.sources.map((id, i) => <a href={SOURCES[id].url} target="_blank" rel="noopener noreferrer" key={id}><span className="source-number">0{i + 1}</span><span><strong>{SOURCES[id].org}</strong>{SOURCES[id].title}<small>{SOURCES[id].year}</small></span><ExternalLink size={17} /></a>)}<small>Redaktionell geprüft: {REVIEW_DATE}. Keine Live-Daten.</small></section><button className="primary-button" onClick={() => onZone(a.zone)}><MapPin size={17} /> Diese Zone erkunden <ArrowRight size={17} /></button><section className="related"><h2>Weiterdenken</h2>{related.map(item => <button key={item.id} onClick={() => onOpen(item.id)}>{item.title}<ArrowUpRight size={17} /></button>)}</section></article></Modal>;
}
export function KnowledgeView({
  read,
  onOpen,
  onMethod
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Alle');
  const [zone, setZone] = useState('all');
  const categories = ['Alle', ...new Set(ARTICLES.map(a => a.category))];
  const normalized = query.trim().toLocaleLowerCase('de');
  const results = ARTICLES.filter(a => (category === 'Alle' || a.category === category) && (zone === 'all' || a.zone === zone) && [a.title, a.summary, a.body, a.connection, a.limit].join(' ').toLocaleLowerCase('de').includes(normalized));
  return <section className="knowledge page-content"><div className="page-heading"><div><span className="eyebrow">DAS ATLANTIS WISSENSARCHIV</span><h1>Neugier braucht Tiefe.</h1><p>Vom Kohlenstoffkreislauf bis zur Weltraumforschung. Zusammenhänge verstehen, Quellen prüfen, weiterdenken.</p></div><div className="archive-count"><strong>{ARTICLES.length}</strong><span>fundierte Feldnotizen<br />{read.length} bereits entdeckt</span></div></div><div className="search-row"><div className="search-input"><Search size={20} /><input aria-label="Wissensarchiv durchsuchen" placeholder="Was möchtest du verstehen?" value={query} onChange={e => setQuery(e.target.value)} />{query && <button className="icon-button" onClick={() => setQuery('')} aria-label="Suche leeren"><X size={17} /></button>}</div><select aria-label="Nach Zone filtern" value={zone} onChange={e => setZone(e.target.value)}><option value="all">Alle Zonen</option>{ZONES.map(z => <option key={z.id} value={z.id}>{z.name}</option>)}</select></div><div className="filter-row" aria-label="Themenfilter">{categories.map(c => <button key={c} className={category === c ? 'active' : ''} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div><div className="section-row"><span role="status">{results.length} {results.length === 1 ? 'Feldnotiz' : 'Feldnotizen'}{normalized ? ` zu „${query}“` : ''}</span><button onClick={onMethod}><Info size={14} /> So prüfen wir Fakten</button></div><div className="knowledge-grid">{results.map(a => <button className="knowledge-card" key={a.id} onClick={() => onOpen(a.id)}><div className="card-image"><img src={imagePath(a)} alt="" loading="lazy" decoding="async" width="400" height="240" onError={e => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = imagePath(a, false);
          }} />{read.includes(a.id) && <span className="read-mark"><Check size={13} /> Entdeckt</span>}</div><div className="card-copy"><span className="eyebrow">{a.category}</span><h2>{a.title}</h2><p>{a.summary}</p><div className="card-bottom"><span>{SOURCES[a.sources[0]].org}</span><ArrowUpRight size={19} /></div></div></button>)}</div>{results.length === 0 && <div className="empty-state"><BookOpen size={30} /><h2>Hier ist noch Raum für Entdeckungen.</h2><p>Versuche einen anderen Begriff oder entferne die Filter.</p><button className="primary-button" onClick={() => {
        setCategory('Alle');
        setZone('all');
        setQuery('');
      }}>Alle Feldnotizen anzeigen</button></div>}</section>;
}
export function MethodDialog({
  onClose
}) {
  return <Modal onClose={onClose} title="TRANSPARENZ / QUELLEN & METHODIK" wide><div className="article-body"><span className="eyebrow">WISSENSCHAFT STATT SPEKULATION</span><h1 id="dialog-title">Was wir wissen.<br />Und wo die Grenzen liegen.</h1><p className="article-lead">Atlantis ist eine interaktive Lernumgebung zum Erdsystem. Die Expedition macht Forschung zugänglich, ohne Messungen und Modelle zu vermischen.</p><h2>Beobachtung, Szenario, Illustration</h2><p>Beobachtungen beziehen sich auf ausdrücklich genannte Zeiträume. Die Temperaturangabe für 2025 stammt aus dem WMO-Bericht 2026. Szenarien stammen aus IPCC AR6 WGI, Tabelle SPM.1 (2021), und zeigen 20-Jahres-Mittel relativ zu 1850–1900. Die Bandbreiten sind „sehr wahrscheinlich“ im Sinne des IPCC (90–100 % Wahrscheinlichkeit).</p><p>Die drei Emissionspfade sind keine Vorhersagen beschlossener Politik. Atlantis interpoliert keine scheinbar genauen Jahreswerte und leitet daraus keine lokalen Temperaturen, Artenbestände oder Aussterbejahre ab. Der Zeitraum 2021–2040 enthält vergangene und zukünftige Jahre und bleibt eine Modellprojektion.</p><h2>Eine Expedition, kein digitaler Zwilling</h2><p>Höhen, Größen, Abstände und Reisezeiten sind schematisch. Die angezeigte Position ist ein Beispiel innerhalb der gewählten Zone. Atmosphärengrenzen sind variabel; Meereszonen vereinfachen fließende Übergänge. Arten und Objekte stehen stellvertretend für ihre Themen.</p><p>Alle Abbildungen wurden aus dem bestehenden Atlantis-Projekt übernommen. Die Herkunft erlaubt keine generelle Einordnung als authentische Forschungsfotografie; sie sind deshalb als Illustrationen gekennzeichnet und dienen nicht als wissenschaftlicher Beleg. Parker Solar Probe ist ein ausdrücklich gekennzeichneter Abzweig außerhalb des Erdorbits.</p><h2>Wie die Inhalte belegt sind</h2><p>Jede Feldnotiz verlinkt die dazugehörigen Fachquellen. Organisationen wie IPCC, WMO, NASA, NOAA und wissenschaftliche Institute bilden die Grundlage. Publikationsjahr und Messzeitraum werden unterschieden. „Was wir daraus mitnehmen“ ist eine redaktionelle Handlungseinordnung, kein direktes Quellenzitat.</p><h2>Deine Daten</h2><p>Der Entdeckungsfortschritt bleibt ausschließlich in diesem Browser. Es gibt kein Konto und keine Übermittlung durch Atlantis an einen Analysedienst. Ist der Browserspeicher nicht verfügbar, funktioniert die Expedition ohne dauerhaften Fortschritt. Externe Quellen werden erst geöffnet, wenn du einen Link auswählst.</p><h2>Quellenverzeichnis</h2><p>Redaktionsstand: {REVIEW_DATE}. Kein automatischer Live-Datenabruf.</p><div className="source-directory">{Object.entries(SOURCES).map(([id, s]) => <a href={s.url} target="_blank" rel="noopener noreferrer" key={id}><strong>{s.org}</strong><span>{s.title}<small>{s.year}</small></span><ExternalLink size={16} /></a>)}</div></div></Modal>;
}
