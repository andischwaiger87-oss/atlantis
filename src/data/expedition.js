export const REVIEW_DATE = '9. September 2026';
const source = (org, title, url, year) => ({
  org,
  title,
  url,
  year
});
export const SOURCES = {
  wmo: source('WMO', 'State of the Global Climate 2025', 'https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025', '2026 · Messjahr 2025'),
  scenarios: source('IPCC', 'AR6 WGI · Summary for Policymakers, Tabelle SPM.1', 'https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/', '2021'),
  ocean: source('IPCC', 'AR6 WGI · Kapitel 9: Ocean, Cryosphere and Sea Level Change', 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/', '2021'),
  synthesis: source('IPCC', 'AR6 Synthesis Report · Kernaussagen', 'https://report.ipcc.ch/ar6syr/headline.html', '2023'),
  reefs: source('IPCC', 'AR6 WGII · Kapitel 3, Tabelle 3.3: Coral reefs', 'https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-3/', '2022'),
  extremes: source('IPCC', 'AR6 WGI · Kapitel 11: Weather and Climate Extreme Events', 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/', '2021'),
  energy: source('IPCC', 'AR6 WGIII · Kapitel 6: Energy systems', 'https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-6/', '2022'),
  layers: source('NASA', 'Earth’s Atmosphere: A Multi-layered Cake', 'https://science.nasa.gov/earth/earth-atmosphere/earths-atmosphere-a-multi-layered-cake/', '2020'),
  depths: source('NOAA', 'What is the deep ocean?', 'https://oceanexplorer.noaa.gov/ocean-fact/deep-ocean/', 'Grundlagen'),
  sentinel: source('ESA', 'Copernicus Sentinel-6', 'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-6/', 'Missionsübersicht'),
  debris: source('ESA', 'Space Debris Office', 'https://esoc.esa.int/space-safety-space-debris-clean-space', 'Fachübersicht'),
  parker: source('NASA', 'Parker Solar Probe completes 23rd close approach', 'https://science.nasa.gov/blogs/parker-solar-probe/2025/03/25/nasas-parker-solar-probe-completes-23rd-close-approach-to-sun/', '2025'),
  ecostress: source('NASA', 'ECOSTRESS · Pflanzen und Wasserstress', 'https://science.nasa.gov/mission/ecostress/', 'Missionsübersicht'),
  aurora: source('NASA', 'The Atmosphere … After Dark!', 'https://science.nasa.gov/sun/the-atmosphere-after-dark/', '2025'),
  clouds: source('NASA', 'Meteor Smoke Makes Strange Clouds', 'https://www.nasa.gov/missions/aim/meteor-smoke-makes-strange-clouds/', '2012'),
  ozone: source('WMO / UNEP', 'Scientific Assessment of Ozone Depletion 2022 · Erholungspfade', 'https://wmo.int/news/media-centre/ozone-layer-recovery-track-helping-avoid-global-warming-05degc', '2023'),
  balloon: source('NOAA', 'Radiosonde Atmospheric Temperature Products for Assessing Climate', 'https://www.ncei.noaa.gov/products/weather-balloon/radiosonde-atmospheric-temperature-products', 'Datensatz RATPAC'),
  aviation: source('DLR', 'Climate strategy put to the test: reducing contrails', 'https://www.dlr.de/en/latest/news/2025/climate-strategy-put-to-the-test-reducing-contrails', '2025'),
  ai: source('IEA', 'Energy and AI · Energy demand from AI', 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai', '2025 · Messjahr 2024'),
  shipping: source('IMO', 'Fourth IMO GHG Study · Highlights', 'https://www.imo.org/en/mediacentre/pages/whatsnew-1596.aspx', '2020 · Emissionen 2018'),
  turtle: source('NOAA Fisheries', 'Sea turtles · Threats and conservation', 'https://www.fisheries.noaa.gov/sea-turtles', 'Artenübersicht'),
  plastic: source('NOAA', 'Garbage Patches', 'https://marinedebris.noaa.gov/discover-marine-debris/garbage-patches', 'Fachübersicht'),
  oxygen: source('NOAA', 'How much oxygen comes from the ocean?', 'https://oceanservice.noaa.gov/facts/ocean-oxygen.html', 'Grundlagen'),
  acid: source('NOAA', 'Ocean Acidification · IOOS', 'https://ioos.noaa.gov/project/ocean-acidification/', 'Fachübersicht'),
  glow: source('NOAA', 'What is bioluminescence?', 'https://oceanexplorer.noaa.gov/ocean-fact/bioluminescence/', 'Grundlagen'),
  migration: source('WHOI', 'Climate · Ocean Twilight Zone', 'https://twilightzone.whoi.edu/explore-the-otz/climate/', 'Forschungsübersicht'),
  snow: source('NOAA', 'What is marine snow?', 'https://oceanservice.noaa.gov/facts/marinesnow.html', '2020'),
  vents: source('NOAA', 'What is a hydrothermal vent?', 'https://oceanservice.noaa.gov/facts/vents.html', 'Grundlagen'),
  chemo: source('NOAA', 'Photosynthesis and chemosynthesis', 'https://oceanexplorer.noaa.gov/ocean-fact/photochemo/', 'Grundlagen'),
  whale: source('NOAA Fisheries', 'Sperm whale', 'https://www.fisheries.noaa.gov/species/sperm-whale', 'Artenporträt'),
  mining: source('BGS / NOC', 'Long-term effects of deep-sea mining after 44 years', 'https://www.bgs.ac.uk/news/new-study-reveals-long-term-effects-of-deep-sea-mining-and-first-signs-of-biological-recovery/', '2025'),
  lander: source('UWA', 'Scientists break new record after finding world’s deepest fish', 'https://www.uwa.edu.au/news/Article/2023/April/Scientists-break-new-record-after-finding-worlds-deepest-fish', '2023 · Expedition 2022'),
  tectonics: source('USGS', 'Subduction Zone Science', 'https://www.usgs.gov/special-topics/subduction-zone-science', 'Forschungsübersicht')
};
export const ZONES = [{
  id: 'exosphere',
  name: 'Exosphäre',
  label: 'Der Blick aufs Ganze.',
  range: 'ca. 700–10.000 km',
  position: 1336000,
  theme: 'space',
  description: 'Satelliten verbinden die Weite des Alls mit präzisen Messungen unserer Erde.',
  source: 'layers',
  insight: 'Aus dem Orbit werden Veränderungen messbar.',
  connection: 'Langjährige Satellitenmessungen zeigen, wie sich die Meeresoberfläche verändert. Sie ergänzen Bojen und Pegel an der Küste.',
  link: 'climate-sentinel'
}, {
  id: 'thermosphere',
  name: 'Thermosphäre',
  label: 'Wo die Atmosphäre leuchtet.',
  range: 'ca. 85–700 km',
  position: 400000,
  theme: 'space',
  description: 'Extrem dünne Luft, Polarlichter und ein Labor im Orbit. Die Erde reicht weiter, als ihr blauer Rand vermuten lässt.',
  source: 'layers',
  insight: 'Pflanzen verraten ihren Durst aus dem All.',
  connection: 'ECOSTRESS misst Wärmestrahlung. Zusammen mit weiteren Daten zeigt sie, wie Pflanzen mit Wasserstress umgehen.',
  link: 'iss-research'
}, {
  id: 'mesosphere',
  name: 'Mesosphäre',
  label: 'Spuren am Rand der Nacht.',
  range: 'ca. 50–85 km',
  position: 80000,
  theme: 'sky',
  description: 'Eiskristalle leuchten in der Dämmerung. Auch diese entlegene Schicht reagiert auf Veränderungen der Atmosphäre.',
  source: 'layers',
  insight: 'Methan hinterlässt Spuren hoch über uns.',
  connection: 'Aus Methan kann zusätzlicher Wasserdampf entstehen. Auf winzigen Staubteilchen bilden sich Eiskristalle leuchtender Nachtwolken.',
  link: 'noctilucent-clouds'
}, {
  id: 'stratosphere',
  name: 'Stratosphäre',
  label: 'Ein Schutzschild mit Zukunft.',
  range: 'ca. 12–50 km',
  position: 25000,
  theme: 'sky',
  description: 'Die Ozonschicht absorbiert energiereiche UV-Strahlung. Ihr Schutz zeigt, was abgestimmtes Handeln erreichen kann.',
  source: 'layers',
  insight: 'Internationale Zusammenarbeit wirkt.',
  connection: 'Die Erholung der Ozonschicht ist an wirksame Schutzmaßnahmen gebunden. Die erwarteten Zeitpunkte unterscheiden sich nach Region.',
  link: 'ozone-layer'
}, {
  id: 'troposphere',
  name: 'Troposphäre',
  label: 'Hier wird Klima zu Wetter.',
  range: '0–ca. 12 km',
  position: 8000,
  theme: 'sky',
  description: 'Wolken, Wind und unser Alltag. Zusätzliche Energie im Klimasystem verändert die Bedingungen für Wetterextreme.',
  source: 'layers',
  insight: 'Wärmere Luft verändert den Wasserkreislauf.',
  connection: 'Intensiver Starkregen ist eine mögliche Folge. Ob daraus eine Überschwemmung wird, hängt auch von Boden, Bebauung und Flussmanagement ab.',
  link: 'mega-storm'
}, {
  id: 'horizon',
  name: 'Horizont',
  label: 'Zwischen zwei Welten.',
  range: 'Meeresspiegel',
  position: 0,
  theme: 'horizon',
  description: 'Ein Planet. Alles hängt zusammen. Entscheide, wohin deine Reise geht.',
  source: 'ocean',
  insight: 'Der Ozean ist unser größter Wärmespeicher.',
  connection: 'Rund 90 % der zusätzlichen Wärme im Klimasystem gelangen in den Ozean. Was wir an Land tun, verändert das Leben unter Wasser.',
  link: 'ocean-heat'
}, {
  id: 'sunlight',
  name: 'Sonnenlichtzone',
  label: 'Das Leben beginnt im Licht.',
  range: '0–200 m Tiefe',
  position: -100,
  theme: 'ocean',
  description: 'Plankton, Korallen und Meeresschildkröten: Licht versorgt ein Nahrungsnetz, das weit in die Tiefe reicht.',
  source: 'depths',
  insight: 'Kleine Organismen. Planetare Bedeutung.',
  connection: 'Photosynthese bindet Kohlenstoff in Biomasse. Ein Teil davon sinkt in die Tiefe – die biologische Kohlenstoffpumpe beginnt hier.',
  link: 'plankton-map'
}, {
  id: 'twilight',
  name: 'Dämmerzone',
  label: 'Eine Welt im letzten Licht.',
  range: '200–1.000 m Tiefe',
  position: -600,
  theme: 'deep',
  description: 'Das Sonnenlicht schwindet. Tiere erzeugen eigenes Licht und wandern nachts zum Fressen an die Oberfläche.',
  source: 'depths',
  insight: 'Eine Wanderung bewegt Kohlenstoff.',
  connection: 'Tiere nehmen nahe der Oberfläche Nahrung auf und kehren in die Tiefe zurück. So verbinden sie obere und tiefere Wasserschichten.',
  link: 'vertical-migration'
}, {
  id: 'midnight',
  name: 'Mitternachtszone',
  label: 'Leben jenseits der Sonne.',
  range: '1.000–4.000 m Tiefe',
  position: -2500,
  theme: 'deep',
  description: 'Kein Sonnenlicht. Nahrung kommt von oben – oder aus chemischer Energie an Quellen am Meeresboden.',
  source: 'depths',
  insight: 'Die Tiefe lebt von der Oberfläche.',
  connection: 'Abgestorbene Organismen und andere Partikel bilden Meeresschnee. Er ernährt Tiefseetiere und transportiert Kohlenstoff nach unten.',
  link: 'marine-snow'
}, {
  id: 'abyssal',
  name: 'Abyssal',
  label: 'Die langsame Welt.',
  range: '4.000–6.000 m Tiefe',
  position: -5000,
  theme: 'abyss',
  description: 'Weite Tiefseeebenen, empfindliche Lebensräume und mineralische Rohstoffe. Hier hinterlassen Eingriffe lange Spuren.',
  source: 'depths',
  insight: 'Eine Störung kann Jahrzehnte sichtbar bleiben.',
  connection: 'Eine 2025 veröffentlichte Untersuchung fand nach 44 Jahren noch Spuren eines Abbauversuchs – und erste biologische Erholung.',
  link: 'nodule-mining'
}, {
  id: 'hadal',
  name: 'Hadal',
  label: 'An den tiefsten Orten der Erde.',
  range: '6.000–ca. 11.000 m Tiefe',
  position: -8000,
  theme: 'abyss',
  description: 'In Tiefseegräben treffen extreme Lebensbedingungen auf die Kräfte der Plattentektonik.',
  source: 'depths',
  insight: 'Nicht jede Naturgefahr ist eine Klimafolge.',
  connection: 'Subduktionszonen erzeugen Erdbeben und können Tsunamis auslösen. Ihre tektonische Ursache ist von klimatischen Veränderungen zu unterscheiden.',
  link: 'subduction-fault'
}];
const article = (id, zone, title, category, summary, body, connection, limit, action, sources, asset = id) => ({
  id,
  zone,
  title,
  category,
  summary,
  body,
  connection,
  limit,
  action,
  sources,
  asset
});
export const ARTICLES = [];
export const SCENARIOS = [{
  id: 'low',
  name: 'Konsequenter Klimaschutz',
  code: 'SSP1-1.9',
  color: '#bcf5da',
  description: 'Sehr niedrige Emissionen, rasche globale Minderung. Ein modellierter Pfad, keine Zusage über künftige Politik.',
  values: [[1.5, 1.2, 1.7], [1.6, 1.2, 2.0], [1.4, 1.0, 1.8]]
}, {
  id: 'middle',
  name: 'Mittlere Emissionen',
  code: 'SSP2-4.5',
  color: '#ecd6a7',
  description: 'Ein mittlerer Emissionspfad. Keine Prognose der aktuell beschlossenen Politik.',
  values: [[1.5, 1.2, 1.8], [2.0, 1.6, 2.5], [2.7, 2.1, 3.5]]
}, {
  id: 'high',
  name: 'Sehr hohe Emissionen',
  code: 'SSP5-8.5',
  color: '#f0a997',
  description: 'Fossilintensiver Pfad mit sehr hohen Emissionen. Ein Risikoszenario, keine unvermeidliche Zukunft.',
  values: [[1.6, 1.3, 1.9], [2.4, 1.9, 3.0], [4.4, 3.3, 5.7]]
}];
export const PERIODS = ['2021–2040', '2041–2060', '2081–2100'];
export const OBSERVATIONS = [{
  label: '1850–1900',
  value: 0,
  range: 'Referenzperiode',
  source: 'scenarios'
}, {
  label: '2011–2020',
  value: 1.09,
  range: '0,95–1,20 °C',
  source: 'scenarios'
}, {
  label: '2025',
  value: 1.43,
  range: '± 0,13 °C',
  source: 'wmo'
}];
export function climateValue(mode, period, scenario) {
  return mode === 'observation' ? OBSERVATIONS[period].value : SCENARIOS[scenario].values[period][0];
}
export function climateContext(zone, temperature, projected) {
  if (!projected) return 'Beobachtungsansicht: Die Illustrationen sind keine historischen Aufnahmen. Im Klimalabor kannst du mögliche Entwicklungen vergleichen.';
  if (zone === 'hadal') return 'Tektonische Vorgänge werden nicht aus der Erwärmung abgeleitet. Für einzelne Tiefseearten gibt es hier keine belastbare quantitative Zukunftsprognose.';
  if (['exosphere', 'thermosphere', 'mesosphere', 'stratosphere'].includes(zone)) return 'Die globale Temperatur ist keine lokale Temperatur dieser Höhe. Satellitenpositionen, Polarlichter und Ozonerholung werden daraus nicht berechnet.';
  if (temperature >= 2) return 'Höhere Erwärmung erhöht Risiken für viele Ökosysteme. Marine Hitzewellen und stärkere Belastung der Korallen nehmen zu. Ein Aussterbedatum einzelner Arten lässt sich daraus nicht ableiten.';
  return 'Weniger Erwärmung begrenzt zusätzliche Risiken. Bereits eingetretene Veränderungen verschwinden nicht sofort; auch 1,5 °C sind mit erheblichen Belastungen verbunden.';
}
ARTICLES.push(article('climate-sentinel', 'exosphere', 'Sentinel-6', 'Forschung', 'Der Meeresspiegel, aus dem Orbit vermessen.', 'Sentinel-6 setzt eine jahrzehntelange Reihe von Radar-Höhenmessungen fort. Aus der Signallaufzeit und der präzise bestimmten Satellitenbahn wird die Höhe der Meeresoberfläche berechnet. Die Bahn liegt bei rund 1.336 km.', 'Erwärmung dehnt Meerwasser aus; schmelzendes Landeis fügt Wasser hinzu. Langjährige Messreihen helfen, diese Veränderungen zu verfolgen.', 'Eine globale Meeresspiegelkurve ist keine lokale Hochwasserprognose. Küstenbewegung, Strömungen und Wind beeinflussen regionale Pegel.', 'Küstenschutz braucht langfristige Messreihen und lokale Risikokarten.', ['sentinel', 'ocean']), article('space-junk-cluster', 'exosphere', 'Weltraumschrott', 'Umwelteinfluss', 'Ein begrenzter Raum für unsere Satelliten.', 'Ausgediente Satelliten, Raketenstufen und Kollisionsfragmente bleiben auf Umlaufbahnen. Zusammenstöße können weitere Trümmer erzeugen. Bahnhöhe und Luftwiderstand beeinflussen ihre Verweildauer.', 'Auch Wetter- und Klimabeobachtung sind auf sichere Satellitenbahnen angewiesen. Weltraumschutz schützt wichtige Messinfrastruktur.', 'Das Kessler-Syndrom beschreibt ein Kollisionsrisiko, kein bestimmtes Jahr, in dem der gesamte Orbit unbenutzbar wird.', 'Trümmer vermeiden, Missionen sicher beenden und internationale Bahndaten teilen.', ['debris']), article('solar-observatory', 'exosphere', 'Parker Solar Probe', 'Forschung', 'Eine Reise zur Quelle des Sonnenwinds.', 'Am 22. März 2025 passierte Parker die Sonne in etwa 6,1 Millionen Kilometern Abstand zur Oberfläche und erreichte rund 692.000 km/h. Sie erforscht Sonnenkorona und Sonnenwind.', 'Weltraumwetter kann technische Systeme beeinflussen. Seine Erforschung ergänzt unser Verständnis des Erde-Sonne-Systems.', 'Parker umkreist die Sonne, nicht die Erde. Ihre Platzierung ist ein thematischer Abzweig, keine tatsächliche Position in der Exosphäre.', 'Weltraumwetter und menschengemachten Klimawandel als unterschiedliche Prozesse betrachten.', ['parker']), article('iss-research', 'thermosphere', 'ISS & ECOSTRESS', 'Forschung', 'Den Wasserstress von Pflanzen erkennen.', 'ECOSTRESS auf der Internationalen Raumstation misst die Temperatur von Pflanzen und Landoberflächen. Wenn Pflanzen ihre Spaltöffnungen schließen und weniger Wasser verdunsten, verändert sich ihre Kühlung.', 'Die Messungen liefern Informationen über Verdunstung und Wasserverfügbarkeit. Das unterstützt die Untersuchung von Dürre, Landwirtschaft und Hitzestress.', 'Wärmestrahlung allein ist keine direkte Bodenfeuchtemessung oder sichere Dürrevorhersage. Zur Auswertung sind weitere Daten und Modelle nötig.', 'Erdbeobachtung mit Messungen vor Ort verbinden, um Bewässerung gezielter zu planen.', ['ecostress']), article('aurora-borealis', 'thermosphere', 'Polarlichter', 'Naturphänomen', 'Teilchen bringen die Atmosphäre zum Leuchten.', 'Energiereiche geladene Teilchen regen Sauerstoff und Stickstoff in der oberen Atmosphäre an. Beim Abgeben der Energie entsteht Licht. Farben hängen unter anderem von Gasart und Höhe ab.', 'Polarlichter machen Wechselwirkungen zwischen Magnetfeld und Atmosphäre sichtbar. Die Verbindung zur Klimaforschung liegt im Verständnis der oberen Atmosphäre.', 'Ein starkes Polarlicht ist kein Nachweis globaler Erwärmung. Weltraumwetter und langfristiges Klima sind verschiedene Betrachtungsebenen.', 'Naturbeobachtungen mit dem passenden physikalischen Prozess erklären.', ['aurora']), article('noctilucent-clouds', 'mesosphere', 'Leuchtende Nachtwolken', 'Naturphänomen', 'Eiswolken am Rand zum Weltraum.', 'Sehr kalte Luft und Wasserdampf bilden in der oberen Mesosphäre winzige Eiskristalle. Meteoritischer Staub kann als Keim dienen. Noch von der Sonne beleuchtet, sind die Wolken nach Sonnenuntergang sichtbar.', 'Methan kann durch chemische Reaktionen in der oberen Atmosphäre Wasserdampf liefern. Das verbindet Emissionen mit Prozessen in großer Höhe.', 'Eine einzelne Sichtung misst keinen Klimatrend. Temperatur, Jahreszeit, Wasserdampf und Beobachtungsbedingungen wirken zusammen.', 'Langjährige Messreihen sind aussagekräftiger als einzelne außergewöhnliche Nächte.', ['clouds']), article('meteors-burn', 'mesosphere', 'Meteore & Atmosphäre', 'Naturphänomen', 'Eine dünne Hülle mit vielen Aufgaben.', 'Viele Meteore leuchten in der Mesosphäre auf. Die Atmosphäre wird nach ihrem Temperaturverlauf in Schichten gegliedert; ihre Grenzen sind keine festen Wände.', 'Die Schichten reagieren unterschiedlich auf Strahlung und chemische Veränderungen. Deshalb wird die Atmosphäre nicht als einheitlicher Behälter untersucht.', 'Höhenangaben sind typische Orientierungswerte. Grenzen ändern sich mit Breitengrad, Jahreszeit und Sonnenaktivität.', 'Modelle als vereinfachte Beschreibung verstehen und ihre Grenzen mitlesen.', ['layers']), article('ozone-layer', 'stratosphere', 'Die Ozonschicht', 'Klimaschutz', 'Ein Beispiel erfolgreicher Umweltpolitik.', 'Ozon in der Stratosphäre absorbiert schädliche UV-Strahlung. Nach dem Ausstieg aus vielen ozonabbauenden Stoffen wird eine Rückkehr zu Werten von 1980 erwartet: etwa 2040 für große Teile der Welt, 2045 über der Arktis und 2066 über der Antarktis.', 'Der Ozonschutz zeigt, wie Wissenschaft, internationale Abkommen und konsequente Umsetzung zusammenwirken können.', 'Das sind bedingte Projektionen bei Fortführung der Maßnahmen. Das Ozonloch ist nicht die Ursache der heutigen globalen Erwärmung.', 'Erfolge langfristiger Umweltabkommen sichern und für Klimapolitik daraus lernen.', ['ozone']), article('weather-balloon', 'stratosphere', 'Wetterballons', 'Forschung', 'Messungen direkt in der Atmosphäre.', 'Radiosonden erfassen Temperatur, Luftdruck und Feuchtigkeit. Wind lässt sich aus ihrer Bewegung ableiten. Wiederholte Messungen liefern vertikale Profile und helfen, Wettermodelle zu prüfen.', 'NOAAs RATPAC nutzt Radiosondenmessungen, um langfristige Temperaturveränderungen in Troposphäre und unterer Stratosphäre zu untersuchen.', 'Standard-Radiosonden messen nicht automatisch CO₂. Sensorwechsel und geänderte Messverfahren müssen für Klimazeitreihen berücksichtigt werden.', 'Messnetze erhalten: zuverlässige Entscheidungen beginnen mit zuverlässigen Daten.', ['balloon']), article('co2-buildup', 'troposphere', 'Die erwärmte Atmosphäre', 'Klima', '2025: 1,43 °C über dem vorindustriellen Mittel.', 'Die WMO gibt für 2025 eine globale Temperaturabweichung von etwa 1,43 ± 0,13 °C gegenüber 1850–1900 an. Das ist ein Jahresmittel, kein heutiger Tageswert. 2015–2025 bilden die elf wärmsten Jahre der Messreihe.', 'Zusätzliche Treibhausgase verändern die Energiebilanz. Die Erwärmung von Luft, Land und Ozean ist Teil desselben Klimasystems.', 'Ein einzelnes Jahr über 1,5 °C ist nicht gleichbedeutend mit einer dauerhaften Überschreitung des langfristigen Pariser Temperaturziels.', 'Emissionen dauerhaft senken; Wetterwechsel nicht mit einer Umkehr des Klimatrends verwechseln.', ['wmo', 'synthesis'], 'forest-fire-smoke'), article('mega-storm', 'troposphere', 'Starkregen & Stürme', 'Klima', 'Mehr Energie verändert die Risiken.', 'Mit Erwärmung nehmen intensive Niederschläge in vielen Regionen zu. Bei tropischen Wirbelstürmen werden höhere Regenmengen und ein größerer Anteil besonders starker Stürme erwartet. Das bedeutet nicht automatisch mehr Stürme insgesamt.', 'Starkregen kann Überschwemmungen und Muren begünstigen. Schäden hängen auch von Gelände, Versiegelung und Schutzmaßnahmen ab.', 'Für historische Tornado-Trends ist das Vertrauen in die Daten gering. Einzelne Unwetter brauchen eigene Attributionsstudien.', 'Rückhalteräume, Frühwarnung und angepasste Bebauung reduzieren das Risiko.', ['extremes'], 'jet-stream'), article('forest-fire-smoke', 'troposphere', 'Hitze, Dürre & Waldbrand', 'Klima', 'Wenn Belastungen zusammenkommen.', 'Hitze und Trockenheit können gefährliche Bedingungen für Vegetation schaffen. In manchen Regionen verstärkt der Klimawandel landwirtschaftliche und ökologische Dürren.', 'Wetter beeinflusst Brandgefahr. Ob ein Wald brennt, hängt zusätzlich von Zündquellen, Vegetation und Landmanagement ab.', 'Dürre entwickelt sich regional unterschiedlich. Globale Erwärmung liefert keine einheitliche Brandhäufigkeit für jeden Ort.', 'Wasserrückhalt, angepasste Waldpflege und Brandschutz zusammen planen.', ['extremes']), article('aviation-impact', 'troposphere', 'Flugverkehr & Kondensstreifen', 'Umwelteinfluss', 'Klimawirkung reicht über CO₂ hinaus.', 'In kalter, feuchter Luft können aus Flugzeugabgasen langlebige Eiswolken entstehen. Kondensstreifen-Zirren beeinflussen die Strahlungsbilanz. Das DLR untersucht die Vermeidung besonders wirksamer Kondensstreifen.', 'Eine angepasste Route kann Nicht-CO₂-Effekte reduzieren. Zusätzlicher Treibstoffverbrauch muss in die Gesamtbilanz eingehen.', 'Nicht jeder Kondensstreifen wirkt gleich. Die Bilanz hängt von Atmosphäre, Tageszeit und Strecke ab.', 'Unnötige Flüge vermeiden und CO₂ sowie Nicht-CO₂-Effekte gemeinsam bewerten.', ['aviation']));
ARTICLES.push(article('offshore-wind', 'horizon', 'Offshore-Wind', 'Klimaschutz', 'Energie gewinnen, ohne Brennstoff zu verbrennen.', 'Windenergie wandelt Bewegungsenergie der Luft in Strom um. Im Betrieb wird kein fossiler Brennstoff verbrannt. Herstellung, Installation, Wartung und Rückbau verursachen trotzdem Umweltwirkungen.', 'Ersetzt Windstrom fossile Erzeugung, sinken die Emissionen des Stromsystems. Netze, Speicher und flexible Nachfrage helfen bei schwankender Erzeugung.', 'Ein Windpark ist nicht wirkungsfrei. Standortwahl und Schutz von Lebensräumen bleiben wichtig; seine Bilanz ist über den Lebenszyklus zu betrachten.', 'Erneuerbare Energie, effiziente Nutzung und naturverträgliche Planung zusammenbringen.', ['energy']), article('cargo-tanker', 'horizon', 'Schifffahrt', 'Umwelteinfluss', 'Globale Warenströme haben einen Fußabdruck.', 'Die vierte Treibhausgasstudie der IMO schätzte für die gesamte Schifffahrt 2018 rund 1.056 Millionen Tonnen CO₂. Das entsprach etwa 2,89 % der damaligen weltweiten anthropogenen CO₂-Emissionen.', 'Effizientere Schiffe, angepasste Geschwindigkeit und emissionsärmere Energieträger können Emissionen verringern. Die Herkunft neuer Kraftstoffe entscheidet über deren Bilanz.', 'Diese Zahl beschreibt 2018, nicht 2026. CO₂-Anteile sind nicht identisch mit Anteilen an der gesamten Erwärmung.', 'Transportbedarf und Lebenszyklusemissionen von Kraftstoffen gemeinsam berücksichtigen.', ['shipping']), article('oil-platform', 'horizon', 'Fossile Energie', 'Umwelteinfluss', 'Der Klimazusammenhang endet nicht an der Plattform.', 'Erdöl und Erdgas enthalten Kohlenstoff. Bei ihrer Verbrennung entsteht CO₂. Förderung und Verarbeitung können zusätzliche Treibhausgase freisetzen.', 'Weniger fossile Verbrennung vermindert den weiteren Anstieg der CO₂-Konzentration. Klimaschutz braucht Veränderungen im gesamten Energiesystem.', 'Ölunfälle und Treibhausgasemissionen sind unterschiedliche Umweltprobleme. Eine unfallfreie Plattform macht fossile Energie nicht klimaneutral.', 'Fossile Nachfrage durch Effizienz und emissionsarme Alternativen reduzieren.', ['energy']), article('ai-center', 'horizon', 'KI & Rechenzentren', 'Umwelteinfluss', 'Digitale Infrastruktur braucht physische Energie.', 'Die IEA schätzt den Stromverbrauch aller Rechenzentren 2024 auf etwa 415 TWh, rund 1,5 % des globalen Stromverbrauchs. Im Basisszenario ihres Berichts von 2025 steigt er bis 2030 auf ungefähr 945 TWh.', 'Die Klimabelastung hängt wesentlich von Stromerzeugung, Effizienz und zusätzlichem Infrastrukturausbau ab.', 'Diese Zahlen gelten für alle Rechenzentren, nicht nur KI. Die 2030-Angabe ist eine Szenarioprojektion, kein gemessener Verbrauch.', 'Rechenleistung effizient einsetzen und Stromherkunft sowie lokalen Ressourcenbedarf transparent machen.', ['ai']), article('ocean-heat', 'horizon', 'Der Ozean als Wärmespeicher', 'Klima', 'Die größte Wärmeaufnahme findet unter Wasser statt.', 'Der Ozean hat rund 90 % der zusätzlichen Wärme im Klimasystem aufgenommen. Die Wärmekapazität des Wassers puffert die Erwärmung der Atmosphäre, beseitigt die zusätzliche Energie aber nicht.', 'Wärmeres Wasser dehnt sich aus. Auch Schichtung, Sauerstoffversorgung und Lebensbedingungen verändern sich.', 'Die Wärmeaufnahme verteilt sich ungleich über Regionen und Tiefen. Globale Lufttemperatur ist keine Temperaturangabe für ein Riff.', 'Weitere Erwärmung begrenzen und Küsten sowie Ökosysteme an Veränderungen anpassen.', ['ocean'], 'wave-energy'), article('sea-turtle', 'sunlight', 'Meeresschildkröten', 'Lebenswelt', 'Zwischen Niststrand und offenem Meer.', 'Meeresschildkröten sind durch Beifang, verlorene Fanggeräte, Müll und den Verlust von Nist- und Nahrungsgebieten bedroht. Klimatische Veränderungen kommen zu diesen Belastungen hinzu.', 'Schutz muss Belastungen im Wasser und an Land berücksichtigen. Gesunde Nahrungsgebiete allein helfen wenig, wenn Niststrände verschwinden.', 'Gefährdung unterscheidet sich nach Art und Population. Ein pauschales Aussterbejahr lässt sich nicht seriös angeben.', 'Beifang reduzieren, Niststrände schützen und Abfall vermeiden.', ['turtle']), article('coral-reef', 'sunlight', 'Korallenriffe', 'Lebenswelt', 'Ein Ökosystem unter Hitzestress.', 'Bei Hitzestress können Korallen ihre symbiotischen Algen verlieren und bleichen. Anhaltende Belastung kann zum Tod führen. Der IPCC projiziert weitere Rückgänge von Warmwasserkorallenriffen um 70–90 % bei 1,5 °C und über 99 % bei 2 °C globaler Erwärmung.', 'Weniger Erwärmung verringert Risiken. Schutz vor Verschmutzung und Übernutzung hilft lokal, ersetzt aber keine Emissionsminderung.', 'Dies sind globale Risikoprojektionen, keine Überlebenswahrscheinlichkeit einzelner Korallen und keine Jahresvorhersage. Bleiche ist nicht automatisch Tod.', 'Globalen Klimaschutz und lokalen Riffschutz verbinden.', ['reefs']), article('plankton-map', 'sunlight', 'Phytoplankton', 'Lebenswelt', 'Winzige Organismen tragen große Kreisläufe.', 'Photosynthetische Organismen im Meer erzeugen ungefähr die Hälfte der globalen Sauerstoffproduktion. Ein großer Teil wird im Meer durch Atmung und Zersetzung wieder verbraucht.', 'Plankton ist Grundlage vieler Nahrungsnetze. In Biomasse gebundener Kohlenstoff wird durch Nahrungsketten und absinkendes Material transportiert.', 'Sauerstoffproduktion ist nicht gleich dauerhafter Sauerstoffüberschuss. Die Aussage beschreibt keine unmittelbare Herkunft einzelner Atemzüge.', 'Nährstoffverschmutzung reduzieren und marine Nahrungsnetze beobachten.', ['oxygen', 'migration']), article('plastic-island', 'sunlight', 'Plastik im Ozean', 'Umwelteinfluss', 'Keine feste Insel, sondern verteilte Verschmutzung.', 'Strömungen können schwimmenden Abfall in großräumigen Wirbeln konzentrieren. Viele Fragmente sind klein, unter Wasser verteilt oder mit bloßem Auge kaum sichtbar.', 'Plastik kann Tiere verletzen oder aufgenommen werden. Diese Belastung kommt zu klimatischem Stress hinzu und braucht eigene Gegenmaßnahmen.', 'Die Darstellung ist symbolisch. Ein Garbage Patch ist kein geschlossener Müllkontinent.', 'Einträge an der Quelle verhindern, Mehrwegsysteme stärken und Fanggeräte bergen.', ['plastic']), article('ocean-acid', 'sunlight', 'Ozeanversauerung', 'Klima', 'CO₂ verändert nicht nur die Temperatur.', 'Der Ozean nimmt einen erheblichen Teil der CO₂-Emissionen auf. Im Meerwasser verändert CO₂ chemische Gleichgewichte: Der pH-Wert sinkt und Carbonat wird für viele Kalkbildner schlechter verfügbar.', 'Korallen, Muscheln und andere Kalkbildner können zusätzlich belastet werden. Erwärmung und Versauerung haben eine gemeinsame Ursache, aber verschiedene Mechanismen.', 'Versauerung bedeutet sinkenden pH. Meerwasser muss dafür nicht unter pH 7 fallen. Regionale Werte und biologische Reaktionen unterscheiden sich.', 'CO₂-Emissionen senken und Wasserchemie regional messen.', ['acid'], 'coral-reef'), article('bioluminescence-jelly', 'twilight', 'Biolumineszenz', 'Lebenswelt', 'Licht als Sprache der Dunkelheit.', 'Viele Tiere der Dämmerzone erzeugen Licht durch chemische Reaktionen. Es kann Beute anlocken, Feinde irritieren oder der Tarnung dienen. Die Funktion hängt vom Organismus ab.', 'Leuchtende Tiere sind Teil der Nahrungsnetze zwischen Oberfläche und Tiefe. Nahrung, Temperatur und Sauerstoff prägen ihre Lebensräume.', 'Biolumineszenz zeigt nicht direkt den Klimawandel an. Leuchtintensität lässt sich nicht aus einer globalen Temperaturkurve ableiten.', 'Lebensräume verstehen, bevor Eingriffe in wenig erforschte Nahrungsnetze erfolgen.', ['glow']), article('vertical-migration', 'twilight', 'Die tägliche Wanderung', 'Lebenswelt', 'Nachts nach oben. Tagsüber zurück in die Tiefe.', 'Viele Tiere wandern nachts aus der Dämmerzone zur Oberfläche, um Nahrung aufzunehmen. Bei Tageslicht kehren sie zurück. Atmung, Ausscheidungen und Nahrungsketten verlagern dabei Kohlenstoff.', 'Die Wanderung ergänzt den Transport durch sinkende Partikel. Die biologische Kohlenstoffpumpe verbindet mehrere Prozesse.', 'Langfristige Speicherung hängt von Tiefe, Zersetzung und Zirkulation ab. Nicht jede aufgenommene Menge Kohlenstoff wird dauerhaft entfernt.', 'Die Dämmerzone bei Meeresnutzung und Klimaforschung berücksichtigen.', ['migration'], 'giant-squid'), article('ghost-nets', 'twilight', 'Geisternetze', 'Umwelteinfluss', 'Fanggeräte fangen weiter.', 'Verlorene Fischereigeräte können Tiere verfangen und verletzen. Auch wenn niemand sie bewirtschaftet, bleiben sie eine Belastung für Meereslebewesen.', 'Verschmutzung ist ein Stressfaktor neben klimatischen Veränderungen. Schutzstrategien müssen beide angehen.', 'Die Darstellung zeigt eine Gefahr, keine örtlich gemessene Häufigkeit.', 'Verlust von Fanggeräten vermeiden und sichere Bergung unterstützen.', ['turtle', 'plastic']));
ARTICLES.push(article('marine-snow', 'midnight', 'Meeresschnee', 'Klima', 'Ein langsamer Regen aus Leben.', 'Abgestorbene Organismen, Ausscheidungen und weitere Partikel sinken aus oberen Wasserschichten ab. Einige Flocken fallen über Wochen. Auf dem Weg werden sie gefressen und mikrobiell zersetzt.', 'Meeresschnee liefert Tiefseetieren Nahrung und transportiert Kohlenstoff. Nur ein Teil erreicht den Boden.', 'Nicht jeder Partikel wird dauerhaft im Sediment gespeichert. Zersetzung und Strömungen bestimmen die weitere Verteilung.', 'Oberfläche und Tiefsee als zusammenhängendes Ökosystem schützen.', ['snow']), article('hydrothermal-vent', 'midnight', 'Hydrothermale Quellen', 'Naturphänomen', 'Ein Nahrungsnetz ohne Sonnenlicht.', 'An hydrothermalen Quellen tritt erhitztes, chemisch verändertes Wasser aus dem Meeresboden aus. Mikroorganismen nutzen chemische Energie zum Aufbau organischer Substanz: Chemosynthese.', 'Diese Lebensgemeinschaften zeigen, dass Photosynthese nicht die einzige Basis von Nahrungsnetzen ist. Sie gehören zu den Stoffkreisläufen des tiefen Ozeans.', 'Quellen sind natürliche geologische Systeme. Ihre Wärme verursacht nicht den heutigen globalen Erwärmungstrend.', 'Empfindliche Quellökosysteme bei Forschung und Rohstoffnutzung berücksichtigen.', ['vents', 'chemo']), article('sperm-whale-dive', 'midnight', 'Der Pottwal', 'Lebenswelt', 'Ein Säugetier zwischen Oberfläche und Tiefe.', 'Pottwale atmen an der Oberfläche und suchen bei tiefen Tauchgängen Nahrung. Unterwasserlärm, Schiffskollisionen und Fanggeräte können sie gefährden.', 'Veränderte Nahrungsverfügbarkeit beeinflusst marine Räuber. Walschutz umfasst auch Beute und Lebensräume.', 'Die Position ist exemplarisch. Tiere bleiben nicht an einer festen Tiefengrenze. Klimafolgen unterscheiden sich zwischen Populationen.', 'Lärm und Kollisionsrisiken senken, Fanggeräte sicherer machen.', ['whale']), article('nodule-mining', 'abyssal', 'Tiefseebergbau', 'Umwelteinfluss', 'Rohstoffe in einem empfindlichen Lebensraum.', 'Ein 2025 vorgestelltes Forschungsergebnis untersuchte einen Abbauversuch von 1979 in der Clarion-Clipperton-Zone. 44 Jahre später waren Spuren weiterhin vorhanden. Zugleich fanden die Forschenden erste Anzeichen biologischer Erholung.', 'Die Energiewende benötigt Materialien. Ihre Gewinnung muss auch Folgen für Arten und Lebensräume berücksichtigen.', 'Ein Versuchsfeld bildet nicht jeden Abbau ab. Weder schnelle vollständige Erholung noch überall identische dauerhafte Todeszonen sind daraus ableitbar.', 'Materialverbrauch, Recycling und ökologische Folgen verschiedener Rohstoffquellen vergleichen.', ['mining']), article('research-lander', 'abyssal', 'Forschung in der Tiefe', 'Forschung', 'Beobachten, wo Menschen kaum hinkommen.', 'Forschungslander bringen Kameras und Messgeräte in große Tiefen. Autonome Beobachtungen erschließen Lebensräume, die vom Forschungsschiff aus unsichtbar bleiben.', 'Expeditionen liefern Grundlagen für Artenkenntnis und Umweltbewertungen. Wiederholte, vergleichbare Beobachtungen sind entscheidend.', 'Kameras zeigen einen kleinen Ausschnitt. Köder beeinflussen, welche Tiere sich nähern. Einzelbilder beschreiben keine vollständige Lebensgemeinschaft.', 'Messungen, Bilddaten und Unsicherheiten offen dokumentieren.', ['lander']), article('mariana-snailfish', 'hadal', 'Scheibenbäuche', 'Lebenswelt', 'Fische an der Grenze ihres Lebensraums.', 'Ein Team um die University of Western Australia filmte 2022 einen jungen Scheibenbauch der Gattung Pseudoliparis in 8.336 m Tiefe. Der Fund im Izu-Ogasawara-Graben wurde 2023 veröffentlicht.', 'Die Entdeckung zeigt die Bedeutung spezialisierter Tiefseeforschung. Über viele Organismen dort ist weiterhin wenig bekannt.', 'Der Fund stammt nicht aus dem Marianengraben. Er bedeutet nicht, dass Fische am rund 11 km tiefen Challenger Deep leben.', 'Wissenslücken sichtbar halten, statt sie mit vermeintlichen Gewissheiten zu füllen.', ['lander']), article('subduction-fault', 'hadal', 'Erdbeben & Tsunamis', 'Naturphänomen', 'Wenn eine Erdplatte unter eine andere gleitet.', 'An Subduktionszonen kann sich Spannung aufbauen und bei Erdbeben lösen. Wird der Meeresboden stark versetzt, kann ein Tsunami entstehen. Nicht jedes Seebeben erzeugt einen Tsunami.', 'Küsten sind verschiedenen Gefahren ausgesetzt. Geologische Frühwarnung und Klimaanpassung erfüllen unterschiedliche, sich ergänzende Aufgaben.', 'Erdbeben und tektonische Tsunamis sind keine direkten Folgen steigender CO₂-Konzentrationen. Ihre Häufigkeit ändert sich hier nicht mit dem Klimaregler.', 'Lokale Warnsysteme und Evakuierungswege beachten.', ['tectonics']));
