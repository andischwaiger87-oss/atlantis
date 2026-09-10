# Atlantis – Expedition Erde

Eine deutsche, responsive React-App zur Erkundung von elf Zonen zwischen Erdorbit und Tiefsee. Das Remake verwendet die vorhandenen Projektbilder und den bestehenden Vite-/Cloudflare-Pages-Build.

## Entwicklung und Prüfung

- `npm ci` installiert die festgeschriebenen Abhängigkeiten.
- `npm run dev` startet die Vorschau.
- `npm run build` erzeugt `dist/` für Cloudflare Pages.
- `npm run lint` prüft den Quellcode.
- `node --test tests/content.test.js` prüft Quellenzuordnung, Illustrationen, Zonenverknüpfungen und die wissenschaftlichen Szenariowerte.

## Struktur

- `src/App.jsx`: Expedition, Navigation und gemeinsame Zeitperspektive.
- `src/components/Research.jsx`: durchsuchbares Archiv, Detailansichten und Methodik.
- `src/components/ClimateLab.jsx`: IPCC-Szenarien, Unsicherheitsdarstellung und pH-Experiment.
- `src/data/expedition.js`: redaktionell geprüfte Artikel, Quellen, Zonen und unveränderte IPCC-Tabellenwerte.
- `src/index.css`: responsive Gestaltung einschließlich reduzierter Bewegung.
- `public/assets/objects/` und `src/assets/`: vorhandene Bilder; unverändert erhalten.

## Wissenschaftliche Einordnung

Stand 9. September 2026. Temperaturbeobachtung 2025: WMO State of the Global Climate 2025 (veröffentlicht 2026). Szenarien: IPCC AR6 WGI (2021), Tabelle SPM.1. Diese zeigen Zeitfenster, keine frei berechneten Jahresprognosen. Beobachtungen und Projektionen sind getrennt. Die Bilder sind Illustrationen, keine Datennachweise.

Die frühere frei parametrisierte Temperatur-/pH-/Bestands-Simulation wurde durch belegte Szenarien und ein unabhängiges, definitionsbasiertes pH-Experiment ersetzt. Keine automatischen Aussterbejahre, prognostizierten Tierzahlen oder erfundenen lokalen Messwerte.

## Veröffentlichung

Repository: `andischwaiger87-oss/atlantis`, Branch `main`. Der vorhandene Cloudflare-Pages-Abgleich veröffentlicht nach dem Push. Build: `npm run build`, Ausgabeverzeichnis: `dist`. Keine neue Hosting-Plattform, kein Backend und keine geheimen Laufzeitvariablen erforderlich.

## Datenschutz und Bedienung

Kein Konto, keine Analytics, kein externer Schriftabruf. Der Entdeckungsfortschritt wird ausschließlich lokal gespeichert. Tastatur: Pfeil hoch/runter oder W/S außerhalb von Eingabefeldern und Schaltflächen. Mobil: Zonenwahl, große Auf-/Abstiegstasten und feste Hauptnavigation. Native Dialoge unterstützen Fokusführung und Escape. Automatische Rundreise ist optional und pausierbar.

Weitere redaktionelle Entscheidungen: `docs/CONTENT_REVIEW.md`.

## Immersive Expedition (10. September 2026)

Die Expedition belegt den vollständigen Viewport. Scrollen, Ziehen, Halten der Richtungstasten und der vertikale Regler bewegen kontinuierlich zwischen -11 km und dem schematischen oberen Expeditionsrand bei 2.000 km. Der Maßstab ist pro Zone unterschiedlich. Alle 33 Feldnotizen und die ursprünglichen Objektillustrationen bleiben zugänglich. Eine optionale Rundreise beginnt sofort und kehrt an beiden Grenzen um. Wissen und globale Klimapfade sind eigene Bereiche.

- src/components/ImmersiveExpedition.jsx: Bewegung, kontextuelle Objekte, Klimaregler und lokales Labor.
- src/components/WorldRenderer.jsx: prozedurale 3D-Fahrzeuge, Beleuchtung und atmosphärischer Hintergrund mit Three.js; reduzierte Auflösung und Bildrate auf kleinen Geräten.
- src/simulation/model.js: kontinuierliche Reise und vereinfachter Versuch mit konstanter lokaler Überwärmung.
- src/expedition.css: offenes Interface, Smartphone- und Querformat-Anpassungen.
- node --test tests/*.test.js: Inhaltsprüfung plus sofortiger Tourstart, Umkehr, Kontinuität und wissenschaftliche Schwellen.

Lokaler Versuch: Überwärmung über dem lokalen klimatologischen Maximum der Monatsmittel × Dauer, nur ab 1 °C und maximal zwölf Wochen, nach dem Prinzip der NOAA Degree Heating Weeks. Unbelasteter Start; kein Ortsmodell. Zusätzliche Nährstoffe steuern unabhängig eine qualitative Illustration von Trübung. Die zeitliche Bildentwicklung ist keine berechnete Stoffkonzentration. Zurückziehen des Zeitreglers bedeutet einen anderen Versuchszustand, keine sofortige ökologische Erholung. Globale WMO-Beobachtungen und IPCC-Szenarien bleiben getrennt erhalten.

## Einheitliche 3D-Welt

Alle 33 interaktiven Objekte der Expedition werden aus Geometrie aufgebaut (LandmarkModels.js). Das Wissensarchiv behält die bestehenden Bilder. Gemeinsame Projektionskoordinaten in simulation/landmarks.js verbinden Modellposition und zugängliche Schaltfläche. Die Wasserlinien-Anker für Schiff, Windanlage und Bohrinsel folgen exakt der Horizontformel des Hintergrund-Shaders.

Dezente Animationen: Rotor, Schiffsbewegung, Tierflossen, Quallenpuls, schwebende Satelliten und Partikel an hydrothermalen Quellen. Sterne funkeln langsam; Tiefseepartikel sinken und Lichtstrahlen bleiben zurückhaltend. Die Betriebssystem-Einstellung für reduzierte Bewegung stoppt dekorative Animationen. Riffmodelle reagieren über ihre Materialien auf das bestehende Wärmeexperiment; die Ozeanversauerungs-Darstellung übernimmt keine Wärmeprognose.
