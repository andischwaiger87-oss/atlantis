# Redaktionelle Prüfung des Remakes

Stand: 9. September 2026. Alle im aktiven Remake dargestellten numerischen Klimaangaben sind mit Bezugsperiode und Quelle versehen. Das ist eine redaktionelle Prüfung gegen die verlinkten Fachquellen, keine externe wissenschaftliche Begutachtung.

## Zentrale Korrekturen

| Früherer Ansatz | Neue Einordnung |
| --- | --- |
| Temperatur, Meeresspiegel, pH und Tiergesundheit aus frei gewählten linearen Formeln | IPCC-Tabellenwerte mit Unsicherheit; keine vorgetäuschte Prozesssimulation |
| Kessler-Kaskade als festes Ereignis 2100 | Risikoprozess ohne erfundenes Eintrittsjahr |
| Schildkröten sterben ab einem festen Jahr aus | Gefährdung nach Art/Population; kein Aussterbedatum |
| Satelliten und Forschungssonden an irreführenden Atmosphärenpositionen | ISS in Thermosphäre; Sentinel-6 bei 1.336 km; Parker explizit als Abzweig im Sonnenorbit |
| Einheitliche Ozonerholung 2066 | Regionale Erholungspfade: 2040 / 2045 / 2066, bedingt auf Fortführung der Maßnahmen |
| Müll als begehbarer Kontinent | Strömungsbedingte, verteilte Abfallkonzentration |
| Wetterballon misst automatisch CO₂ | Standardsensoren und Temperaturzeitreihen erklärt |
| Korallenbleiche gleichbedeutend mit Tod | Stresszustand, Erholung möglich; Projektionen beziehen sich auf globale Riffe |
| Sturm-, Tornado- und Katastrophenzunahme pauschal dem Klima zugerechnet | Regionale Risiken und Unsicherheiten; Trennung von Tektonik, Klima und Exposition |
| Rechenzentren-Zahlen als KI-Verbrauch | Alle Rechenzentren; Messjahr 2024 und IEA-Projektion 2030 getrennt |
| Globale Werte als lokale Tiefe-/Temperaturmessungen | Exemplarische Positionen; globale Temperatur ausdrücklich gekennzeichnet |

## Quellen und Daten

Das vollständige verlinkte Verzeichnis steht in der App unter „Quellen & Methodik“. Die maschinenlesbaren Angaben stehen in `src/data/expedition.js`. Es werden ausschließlich fachliche Primärquellen und institutionelle Wissenschaftsübersichten verwendet. Ältere Grundlagenquellen bleiben mit Jahresangabe sichtbar; sie werden nicht als neue Messungen ausgegeben.

Ersetzt wurden die alten unbelegten Prognosetexte. 33 ausgewählte Feldnotizen decken die elf Zonen ab. Zusätzliche alte Objektideen können nach eigener Quellenprüfung im selben Schema ergänzt werden. Alle ursprünglichen Bilddateien bleiben erhalten; nicht jedes Archivbild wird im aktiven Remake gleichzeitig angezeigt.

## Modellgrenzen

- Die IPCC-Projektionen sind globale 20-Jahres-Mittel in drei ausgewählten Emissionspfaden; keine Bewertung der Eintrittswahrscheinlichkeit einzelner Pfade.
- 2025 ist eine Einzeljahresbeobachtung und kein Nachweis dauerhafter Überschreitung des Pariser Langfristziels.
- Das pH-Experiment zeigt ausschließlich das Aktivitätsverhältnis nach der logarithmischen Definition. Es berechnet keine Organismengesundheit.
- Die Expedition bildet keine lokalen Populationszahlen oder chemischen Zukunftsprofile ab. Geologische Vorgänge werden nicht durch Klimaszenarien verändert.
- Vorhandene Bilder werden ausdrücklich als Illustrationen und nicht als authentische Dokumentarfotos präsentiert.

## Redaktionelle Erweiterungen

Neue Artikel brauchen eine gültige Zone, existierende Illustration, konkrete Fachquellen, Bezugszeitraum für Zahlen, Zusammenhang, Grenzen und eine als redaktionell erkennbare Handlungseinordnung. Nach Änderungen die Inhaltsprüfung und den Produktionsbuild ausführen. Bildvarianten mit Jahreszahlen im Dateinamen begründen keine historischen oder zukünftigen Zustände.

## Ergänzung vom 10. September 2026: lokaler Versuch

Neu geprüft: NOAA Coral Reef Watch, Degree Heating Week v3.1 (https://coralreefwatch.noaa.gov/product/5km/index_5km_dhw.php) und NOAA, What is eutrophication? (https://oceanservice.noaa.gov/facts/eutrophication.html, aktualisiert 16.06.2024).

Der Versuch nimmt eine konstante örtliche Überwärmung und zunächst keinen aufgestauten Hitzestress an. Er integriert nur Werte ab 1 °C über dem langjährigen Maximum der Monatsmittel für höchstens zwölf Wochen. Ab 4 °C-Wochen besteht Bleicherisiko, ab 8 ist verbreitete Bleiche mit Absterben hitzeempfindlicher Korallen wahrscheinlich. Bilder sind mögliche Schadenszustände. Es gibt keine erfundenen individuellen Sterbewahrscheinlichkeiten oder Arten-Aussterbejahre. Nährstoffe, Algenwachstum, Lichtmangel und Sauerstoffverbrauch bilden eine qualitative, getrennte Wirkungskette. Die Trübungsfunktion ist ausdrücklich gestalterisch, weder kalibriert noch eine Vorhersage lokaler Konzentrationen. Die bestehende globale Klimadatensammlung wurde nicht ersetzt.

Verifikation: Daten- und Bewegungstests prüfen sämtliche 11 Zonen, Quellen- und Asset-Verknüpfungen, sofortige Bewegung der Rundreise und Umkehr an den Grenzen. Keine visuelle Browserprüfung in dieser Iteration durchgeführt.

## Modell- und Mobilüberarbeitung · 11. September 2026

Zehn Objekte besitzen eigene detaillierte Geometrie in DetailedModels.js: Pottwal mit großem Kopf und schmalem Unterkiefer, Schildkröte mit Panzersegmenten und vier Flossen, schuppenloser Scheibenbauch, Verkehrsflugzeug, Bergbaugerät, Korallen, Plastikabfälle, Muschelschale/CO₂-Eintrag, Waldbrand und erwärmte Atmosphäre. Formreferenzen: NOAA Fisheries (Sperm Whale; Green Turtle) und University of Washington, „There's a deeper fish in the sea“ (2017). Modelle bleiben illustrative, nicht maßstabsgetreue Darstellungen.

Das Riff zeigt neben Bleiche einen möglichen Verlust lebender Gewebeteile; das Kalkskelett bleibt. Ein getrennt einschaltbarer Plastikversuch zeigt Leinen und eingeschränkte Flossenbewegung bei einer Schildkröte. Keine aus Temperatur abgeleitete Krankheit. Die zeitliche Stärke des Verhedderungsbildes ist illustrativ und nicht als kalibrierte Prognose zu verstehen. Grundlage: NOAA Fisheries, Sea Turtles / Green Turtle (Gefahren durch Fanggeräte und Meeresmüll).

Mobil: Fahrzeug auf rund ein Drittel der Desktop-Skalierung reduziert, eine Entdeckung gleichzeitig (am Horizont drei), Modell und Bedienelemente räumlich getrennt. Das Klimaexperiment öffnet als Dialog; Kartenwahl, Auf-/Abstieg und Rundreise bleiben direkt erreichbar. Visuell im Browser bei 390 × 780 und 320 × 640 geprüft; Modellformen zusätzlich in lokaler Übersicht kontrolliert.
