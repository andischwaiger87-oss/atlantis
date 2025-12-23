# Projekt Atlantis: Asset Guide & Bild-Spezifikationen

Diese Anleitung hilft Ihnen dabei, die Symbole und Vorschaubilder für die interaktiven Objekte im Projekt zu ersetzen.

## Verzeichnisstruktur
Bitte legen Sie alle Bilder in folgendem Ordner ab:
`atlantis/public/assets/objects/`

## Dateinamenskonvention
Für jedes Objekt benötigen Sie idealerweise zwei Dateien:
1.  **Icon (Weltansicht)**: `[ID].png` (Sollte transparent sein)
2.  **Foto (Info-Modal)**: `[ID].webp` (Hochauflösendes Foto)

*Beispiel für die Öl-Plattform:*
- Icon: `oil-platform.png`
- Foto: `oil-platform.webp`

## Technische Spezifikationen

| Typ | Format | Empfohlene Größe | Besonderheit |
| :--- | :--- | :--- | :--- |
| **Icon** | .png | 1024x1024 px | Transparenter Hintergrund, zentriert (Anzeige: 150px) |
| **Foto** | .jpg / .webp | 1200x800 px | 3:2 oder 16:9 Format empfohlen |

## Liste aller Objekt-IDs
Kopieren Sie die ID exakt als Dateipräfix:

### Weltraum & Atmosphäre
- `satellite-graveyard` (Satelliten-Friedhof)
- `solar-wind` (Sonnenwind-Sensor)
- `iss-research` (ISS Klimamission)
- `space-junk-cluster` (Schrott-Cluster)
- `climate-sentinel` (Sentinel-6)
- `solar-observatory` (Parker Solar Probe) [NEU]
- `magnetosphere-sentinel` (MMS-Mission) [NEU-WISSEN]
- `cosmic-ray-observatory` (AMS-02 Detektor) [NEU-WISSEN]
- `aurora-borealis` (Polarlichter)
- `ionosphere-drag` (Ionosphären-Widerstand)
- `starlink-train` (Starlink-Kette)
- `space-weather-buoy` (DSCOVR Satellit) [NEU]
- `micrometeoroid-explorer` (Odin Nano-Sensor) [NEU-WISSEN]
- `noctilucent-clouds` (Leuchtende Wolken)
- `meteors-burn` (Meteorschlag)
- `red-sprites` (Red Sprites)
- `meteor-trail-sensor` (MAARSY-Radar) [NEU]
- `ozone-layer` (Ozonschicht)
- `weather-balloon` (Klimaballon)
- `jet-stream` (Jetstream)
- `ozone-sampling-drone` (Global Hawk Mission) [NEU]
- `stratospheric-bacteria` (Bioaerosole) [NEU-TIER]
- `alpine-swift` (Alpensegler) [NEU-TIER]
- `co2-buildup` (CO2-Anstieg)
- `mega-storm` (Superzelle)
- `aviation-impact` (Flugverkehr)
- `forest-fire-smoke` (Waldbrand)
- `lidar-tower` (Lidar-Turm) [NEU]
- `cloud-seeding-plane` (Wolkensäer) [NEU]
- `arctic-tern` (Küstenseeschwalbe) [NEU-TIER]
- `migratory-dragonfly` (Wanderlibelle) [NEU-TIER]
- `bar-tailed-godwit` (Pfuhlschnepfe) [NEU-TIER]

### Horizont (Basis)
- `rocket-base` (Raketenrampe)
- `sub-dock` (U-Boot Dock)
- `oil-platform` (Öl-Plattform)
- `offshore-wind` (Windpark Alpha)
- `ai-center` (Cloud-Kollektor)
- `cargo-tanker` (Industrie-Logistik)
- `desalination-plant` (Salzwasser-Werk) [NEU]
- `wave-energy` (Wellenkraftwerk) [NEU]

### Ozean & Tiefsee
- `sea-turtle` (Schildkröte)
- `coral-reef` (Korallenriff)
- `humpback-whale` (Buckelwal)
- `plastic-island` (Plastik-Insel)
- `overfishing` (Industriefischerei)
- `plankton-map` (Plankton-Map) [NEU]
- `bioluminescence-jelly` (Leuchtqualle)
- `giant-squid` (Riesenkalmar)
- `ghost-nets` (Geisternetze)
- `acoustic-monitoring` (Schall-Station) [NEU]
- `anglerfish-deep` (Anglerfisch)
- `sperm-whale-dive` (Tauchender Pottwal)
- `marine-snow` (Meeresschnee)
- `methane-seepage` (Methan-Austritt)
- `hydrothermal-vent` (Schwarzer Raucher) [NEU]
- `deep-sea-dumbo` (Dumbo-Oktopus)
- `nodule-mining` (Tiefsee-Bergbau)
- `sunken-shipwreck` (Tiefsee-Wrack)
- `research-lander` (Hadal-Lander Alfie) [NEU]
- `xenophyophore-colony` (Xenophyophoren) [NEU-WISSEN]
- `hadal-brine-pool` (Hadaler Sole-See) [NEU-WISSEN]
- `mariana-snailfish` (Hadaler Fisch)
- `plastic-bag-deep` (Einsame Plastiktüte)
- `deepsea-challenger` (Deepsea Challenger)
- `hadal-amphipod` (Riesen-Flohkrebs)
- `trench-sonar` (Hadaler Sonar) [NEU]
- `subduction-fault` (Subduktions-Riss) [NEU-WISSEN]
- `hydrothermal-tubeworms` (Hadale Röhrenwürmer) [NEU-WISSEN]

## Fallback-System
Wenn keine Datei im Ordner gefunden wird, zeigt das System automatisch das ursprüngliche Icon (Lucide oder SVG) an. Sie können also Bilder schrittweise hinzufügen.
