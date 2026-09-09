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
