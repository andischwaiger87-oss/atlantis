export const ZONES = [
    // === EXOSPHÄRE (Weltraum) ===
    {
        id: 'exosphere',
        title: 'Exosphäre',
        subtitle: 'Weltraum (ab 600km)',
        minDepth: 9000,
        maxDepth: 12000,
        background: 'linear-gradient(to bottom, #000000 0%, #01010a 20%, #04041a 50%, #080830 85%, #0c0c45 100%)',
        objects: [
            { id: 'satellite-graveyard', title: 'Satelliten-Friedhof', x: '15%', y: '25%', type: 'danger', icon: 'Satellite', startYear: 1960, description: 'Ein Bereich im Orbit, in dem ausgediente Satelliten "geparkt" werden. Durch den Klimawandel kühlt die Thermosphäre ab und zieht sich zusammen, was den natürlichen "Drag" verringert – Müll bleibt dadurch viel länger im Orbit.', facts: ['12.000+ Satelliten im Orbit (2025)', '30% längere Verweildauer durch CO2-Effekt', 'Erhöhtes Risiko des Kessler-Syndroms'] },
            { id: 'solar-wind', title: 'Solar Wind Sensor', x: '75%', y: '15%', type: 'info', icon: 'Sun', startYear: 2020, description: 'Sensoren (wie auf der SWFO-L1 Mission), die 2025 während des solaren Maximums kritische Daten liefern, um geomagnetische Stürme vorherzusagen, die Stromnetze auf der Erde bedrohen.', facts: ['Solar Cycle 25 Maximum in 2025', 'Warnt vor geomagnetischen Stürmen', 'Schützt GPS & Stromnetze vor Ausfall'] },
            {
                id: 'iss-research',
                title: 'ISS ECOSTRESS',
                x: '55%',
                y: '45%',
                type: 'info',
                icon: 'Orbit',
                startYear: 1998,
                endYear: 2031,
                timeline: [
                    { maxYear: 2010, suffix: '_const', title: 'ISS Aufbauphase', description: 'Die Internationale Raumstation wird Modul für Modul zusammengesetzt. Ein Symbol für friedliche, globale Kooperation.' },
                    { maxYear: 2030, suffix: '', title: 'ISS Forschungsbetrieb', description: 'Das fliegende Labor liefert entscheidende Klimadaten (ECOSTRESS) und medizinische Erkenntnisse.' },
                    { maxYear: 2040, suffix: '_deorbit', title: 'ISS Deorbit', description: 'Die Station wird kontrolliert zum Absturz gebracht und verglüht über dem Point Nemo im Pazifik.' }
                ],
                description: 'Das ECOSTRESS-Instrument auf der ISS misst die Temperatur von Pflanzen, um Wasserstress zu erkennen, bevor Dürren sichtbar werden – ein entscheidendes Tool für die globale Nahrungssicherheit.',
                facts: ['Misst Pflanzen-Evapotranspiration', '70m genaue Auflösung einzelner Felder', 'Frühwarnsystem für globale Dürren']
            },
            {
                id: 'space-junk-cluster',
                title: 'Trümmer-Feld',
                x: '35%',
                y: '65%',
                type: 'danger',
                icon: 'AlertTriangle',
                startYear: 1957,
                timeline: [
                    { maxYear: 1990, suffix: '_early', title: 'Erste Trümmer', description: 'Vereinzelte Raketenstufen und inaktive Satelliten beginnen sich im Orbit anzusammeln.' },
                    { maxYear: 2030, suffix: '', title: 'Kritisches Trümmerfeld', description: 'Millionen Teile rasen um die Erde. Ausweichmanöver für die ISS werden zur Routine.' },
                    { maxYear: 2100, suffix: '_kessler', title: 'Kessler-Syndrom', description: 'Eine Kettenreaktion von Kollisionen macht den niedrigen Erdorbit unnutzbar. Raumfahrt wird fast unmöglich.' }
                ],
                description: 'Millionen winzige Schrottteile rasen mit 27.000 km/h um die Erde. Schon ein 1cm großes Teil hat die Sprengkraft einer Handgranate.',
                facts: ['>1 Mio. Teile zwischen 1-10cm', 'Gesamtmasse über 15.000 Tonnen', 'Bedroht Klimasatelliten & ISS']
            },
            { id: 'climate-sentinel', title: 'Sentinel-6', x: '85%', y: '70%', type: 'success', icon: 'Radio', startYear: 2020, description: 'Der "Wächter des Meeresspiegels". Sentinel-6 misst den Anstieg der Ozeane bis auf den Millimeter genau (derzeit ca. 4.8 mm pro Jahr, beschleunigend).', facts: ['Fortsetzung der Messreihe seit 1992', 'Aktueller Anstieg: 4.8mm/Jahr', 'Entscheidend für Küstenschutz-Planung'] },
            { id: 'solar-observatory', title: 'Parker Solar Probe', x: '45%', y: '10%', type: 'info', icon: 'Telescope', startYear: 2018, description: 'Das schnellste von Menschen gebaute Objekt. Im Jahr 2025 nähert sie sich der Sonne auf unter 6,2 Mio. km und liefert Daten zum Sonnenwind-Ursprung.', facts: ['Geschwindigkeit: ~690.000 km/h', 'Hitzeschild trotzt 1.370°C', 'Erforscht die Sonnenkorona direkt'] },
            { id: 'magnetosphere-sentinel', title: 'MMS-Mission', x: '5%', y: '10%', type: 'info', icon: 'Shield', startYear: 2015, description: 'Vier NASA-Satelliten (Magnetospheric Multiscale), die die magnetische Rekonnektion im Erdschild untersuchen.', facts: ['Kartiert magnetische Stürme', 'Verständnis der Polarlichter', 'Schutz vor Teilchenstrahlung'] },
            { id: 'cosmic-ray-observatory', title: 'AMS-02 (ISS)', x: '25%', y: '5%', type: 'info', icon: 'Zap', startYear: 2011, description: 'Das Alpha-Magnet-Spektrometer auf der ISS sucht nach Antimaterie und Dunkler Materie im Universum.', facts: ['Präzisester Teilchendetektor im All', 'Leitung durch Nobelpreisträger Samuel Ting', 'Sucht Ursprung des Kosmos'] }
        ]
    },
    // === THERMOSPHÄRE ===
    {
        id: 'thermosphere',
        title: 'Thermosphäre',
        subtitle: '80-600km Höhe',
        minDepth: 6000,
        maxDepth: 9000,
        background: 'linear-gradient(to bottom, #0c0c45 0%, #121255 25%, #181865 55%, #1e1e75 85%, #252a85 100%)',
        objects: [
            { id: 'aurora-borealis', title: 'Aurora Borealis', x: '45%', y: '35%', type: 'info', icon: 'Zap', description: 'Polarlichter entstehen durch die Interaktion von Sonnenwinden mit dem Erdmagnetfeld.', facts: ['Leuchten in 80-500km Höhe', 'Sauerstoff erzeugt grünes Licht', 'Stickstoff erzeugt blau/violett'] },
            { id: 'ionosphere-drag', title: 'Ionosphären-Widerstand', x: '25%', y: '50%', type: 'danger', icon: 'Wind', startYear: 1957, description: 'Gase in der Thermosphäre bremsen Satelliten ab, was zu Abstürzen führen kann.', facts: ['Zunahme durch Sonnenaktivität', 'Atmosphärisches Aufblähen', 'Lebensdauerverkürzung für LEO-Sats'] },
            { id: 'starlink-train', title: 'Starlink-Kette', x: '75%', y: '65%', type: 'danger', icon: 'Wifi', startYear: 2019, description: 'Mega-Konstellationen stören nicht nur die Astronomie durch Lichtspuren. Beim Verglühen setzen sie Aluminiumoxide frei, die die Ozonschicht in der Stratosphäre schädigen könnten.', facts: ['Stört 30% der Hubble-Bilder', 'Aluminiumoxide schädigen Ozonschicht', 'Risiko für Kollisions-Kaskaden'] },
            { id: 'space-weather-buoy', title: 'DSCOVR Satellit', x: '15%', y: '20%', type: 'info', icon: 'Radio', startYear: 2015, description: 'Ein Satellit am Lagrange-Punkt L1, der das Weltraumwetter und die Erdatmosphäre (EPIC) überwacht.', facts: ['Misst Sonnenstürme in Echtzeit', 'Position 1,5 Mio. km von Erde', 'Warnsystem für Mobilfunk & Strom'] },
            { id: 'micrometeoroid-explorer', title: 'Odin Nano-Sensor', x: '85%', y: '10%', type: 'info', icon: 'ShieldAlert', startYear: 2024, description: 'Innovative Sensoren zur Detektion kleinster Einschläge von Weltraumschrott und Meteoroiden im Jahr 2025.', facts: ['Entwickelt von Odin Space', 'Überwacht strukturelle Integrität', 'Frühwarnung vor Mikroschäden'] }
        ]
    },
    // === MESOSPHÄRE ===
    {
        id: 'mesosphere',
        title: 'Mesosphäre',
        subtitle: '50-80km Höhe',
        minDepth: 4000,
        maxDepth: 6000,
        background: 'linear-gradient(to bottom, #252a85 0%, #2b3595 35%, #3240a5 70%, #3a4bb5 100%)',
        objects: [
            { id: 'noctilucent-clouds', title: 'Leuchtende Nachtwolken', x: '50%', y: '35%', type: 'info', icon: 'Cloud', description: 'Diese "NLCs" werden häufiger und heller. Ein direkter Effekt des Klimawandels: Mehr Methan führt zu mehr Wasserdampf in der Mesosphäre, was die Eisbildung fördert.', facts: ['Indikator für Methan-Anstieg', 'Sichtbar in der Dämmerung', 'Nehmen seit 1880 deutlich zu'] },
            { id: 'meteors-burn', title: 'Meteorschlag', x: '20%', y: '60%', type: 'info', icon: 'Zap', description: 'Hier verglühen die meisten Meteore durch Reibungshitze.', facts: ['Schutzschild der Erde', 'Erzeugt Meteorsubstanz-Rauch', 'Ionisationsspuren messbar'] },
            { id: 'red-sprites', title: 'Red Sprites', x: '80%', y: '50%', type: 'info', icon: 'Flame', description: 'Mysteriöse elektrische Entladungen über schweren Gewitterzellen.', facts: ['Dauern nur Millisekunden', 'Über 50km hoch', 'Indikator für Extremwetter'] },
            { id: 'meteor-trail-sensor', title: 'MAARSY-Radar', x: '10%', y: '15%', type: 'info', icon: 'Target', startYear: 2010, description: 'Das Middle Atmosphere Alomar Radar System misst Meteoritenschweife und Winde in 80-100 km Höhe.', facts: ['Analysiert Weltraumstaub-Eintragsrate', '3D-Messung der Mesosphäre', 'Größte Antennenanlage im Norden'] }
        ]
    },
    // === STRATOSPHÄRE ===
    {
        id: 'stratosphere',
        title: 'Stratosphäre',
        subtitle: '12-50km Höhe',
        minDepth: 2000,
        maxDepth: 4000,
        background: 'linear-gradient(to bottom, #3a4bb5 0%, #4a68c5 30%, #5d88da 65%, #75ace8 100%)',
        objects: [
            {
                id: 'ozone-layer',
                title: 'Ozonschicht',
                x: '50%',
                y: '35%',
                type: 'success',
                icon: 'ShieldCheck',
                timeline: [
                    { maxYear: 1980, suffix: '_intact', title: 'Intakte Ozonschicht', description: 'Vor der massiven Nutzung von FCKW war der UV-Schutz der Erde stabil.', condition: { maxTemp: 1.0 } },
                    { maxYear: 2015, suffix: '_hole', title: 'Ozonloch-Krise', description: 'Massive Ausdünnung über der Antarktis. Hautkrebsraten steigen weltweit.', condition: { minTemp: 1.1, maxTemp: 1.5 } }, // Artistic license, linking to general enviro stress
                    { maxYear: 2100, suffix: '', title: 'Erholte Ozonschicht', description: 'Dank des Montreal-Protokolls hat sich die Schutzschicht fast vollständig regeneriert. Ein Sieg für die Umweltpolitik.', condition: { minTemp: 0 } }
                ],
                description: 'Ein globaler Erfolg: Dank des Montreal-Protokolls schließt sich das Ozonloch. 2025 war das antarktische Loch das kleinste seit 1992.',
                facts: ['Vollständige Erholung bis 2066', 'Verhinderte zusätzlich 0.5°C Erwärmung', 'Schutz vor UV-Strahlung rettet Millionen']
            },
            { id: 'weather-balloon', title: 'Klimaballon', x: '25%', y: '60%', type: 'info', icon: 'Wind', startYear: 1930, description: 'Radiosonden messen CO2-Gehalt und Temperatur in extremer Höhe.', facts: ['Wichtige Daten für Vorhersagen', 'Bis 40km Höhe', 'Unverzichtbar für Klimamodelle'] },
            { id: 'jet-stream', title: 'Jetstream-Instabilität', x: '75%', y: '45%', type: 'danger', icon: 'MoveLeft', description: 'Durch die schnelle Erwärmung der Arktis ("Arctic Amplification") verlangsamt sich der Jetstream und beginnt zu schlingern ("meandering"). Das führt zu wochenlangen, extremen Wetterlagen.', facts: ['Verursacht stehende Hitzewellen', 'Bringt Polarluft weit nach Süden', 'Ursache für blockierte Wetterlagen'] },
            { id: 'ozone-sampling-drone', title: 'Global Hawk (NASA)', x: '10%', y: '25%', type: 'info', icon: 'Plane', startYear: 2010, description: 'Unbemannte Forschungsdrohne, die in der Stratosphäre Schadstoffe und Ozonkonzentrationen sammelt.', facts: ['Fliegt über 20 km Höhe', 'Kein Pilot an Bord nötig', 'Dauereinsätze von 30+ Stunden'] },
            { id: 'stratospheric-bacteria', title: 'Bioaerosole', x: '85%', y: '15%', type: 'info', icon: 'Bug', description: 'Mikroorganismen, die als Kristallisationskerne für Wolken dienen und das Albedo der Erde beeinflussen.', facts: ['Transport durch Jetstreams', 'Einfluss auf regionale Dürren', 'Überleben in extremer UV-Strahlung'] },
            { id: 'alpine-swift', title: 'Alpensegler', x: '40%', y: '80%', type: 'info', icon: 'Bird', description: 'Vögel, die monatelang in der Luft bleiben und in großen Höhen Insekten jagen.', facts: ['Schlafen im Flug', 'Höhen bis zu 3000m+', 'Indikatoren für Insektenreichtum'] }
        ]
    },
    // === TROPOSPHÄRE ===
    {
        id: 'troposphere',
        title: 'Troposphäre',
        subtitle: '0-12km Höhe',
        minDepth: 1,
        maxDepth: 2000,
        background: 'linear-gradient(to bottom, #75ace8 0%, #a2c9f4 40%, #c4e4ff 75%, #87CEEB 100%)',
        objects: [
            { id: 'co2-buildup', title: 'CO2-Konzentration', x: '40%', y: '30%', type: 'danger', icon: 'AlertCircle', description: 'Die atmosphärische CO2-Konzentration hat 425 ppm überschritten – ein Wert, den die Erde seit über 2 Millionen Jahren nicht gesehen hat.', facts: ['Aktuell: >425 ppm (Rekordhoch)', 'Anstieg 100x schneller als natürlich', 'Verursacht Treibhauseffekt & Versauerung'] },
            { id: 'mega-storm', title: 'Extremwetter', x: '15%', y: '45%', type: 'danger', icon: 'CloudLightning', description: 'Ein schwächelnder Jetstream und mehr Energie in der Atmosphäre führen zu "blockierten" Wetterlagen: Stürme bleiben ortsfest und laden Regenmassen tagelang ab.', facts: ['7% mehr Regen pro 1°C Erwärmung', 'Verweilende Sturmsysteme', 'Milliardenkosten durch Flutschäden'] },
            { id: 'aviation-impact', title: 'Flugverkehr & Contrails', x: '80%', y: '25%', type: 'danger', icon: 'Plane', startYear: 1950, description: 'Nicht nur CO2 ist das Problem: Kondensstreifen (Contrails) bilden künstliche Wolken, die Wärme in der Atmosphäre halten ("Radiative Forcing").', facts: ['Verursacht ~3.5% der Erderwärmung', 'Contrail-Management könnte helfen', 'Wasserstoff-Antriebe als Hoffnung'] },
            { id: 'forest-fire-smoke', title: 'Waldbrand-Säule', x: '70%', y: '65%', type: 'danger', icon: 'Flame', description: 'Riesige Brände setzen gigantische Mengen CO2 frei.', facts: ['Amazonas-Problem', 'Feedback-Loop: Feuer -> CO2', 'Feinstaub belastet Städte'] },
            { id: 'lidar-tower', title: 'Lidar-Turm', x: '35%', y: '85%', type: 'info', icon: 'TowerControl', startYear: 1980, description: 'Lasersysteme messen Aerosole und Wolkenhöhe in Echtzeit.', facts: ['Misst Luftverschmutzung', 'Daten für Wetterberichte', 'Präzise Aerosol-Bestimmung'] },
            { id: 'cloud-seeding-plane', title: 'Wolkensäer', x: '55%', y: '15%', type: 'info', icon: 'Plane', startYear: 1950, description: 'Versuche der Wettermanipulation durch das Einbringen von Salzen.', facts: ['GEO-Engineering Versuch', 'Soll Regen künstlich erzeugen', 'Umweltfolgen oft unklar'] },
            { id: 'arctic-tern', title: 'Küstenseeschwalbe', x: '10%', y: '10%', type: 'info', icon: 'Bird', description: 'Hält den Weltrekord für die längste Tierwanderung der Welt (Pol zu Pol).', facts: ['Legt bis zu 90.000km pro Jahr zurück', 'Stark von Windmustern abhängig', 'Brutgebiete durch Eisschmelze bedroht'] },
            { id: 'migratory-dragonfly', title: 'Wanderlibelle', x: '85%', y: '50%', type: 'info', icon: 'Bug', description: 'Insekten, die über den Ozean wandern und dabei auf Jetstreams angewiesen sind.', facts: ['Wanderungen über Tausende Kilometer', 'Profitieren von wärmeren Nächten', 'Wichtige Bestäuber auf Inseln'] },
            { id: 'bar-tailed-godwit', title: 'Pfuhlschnepfe', x: '25%', y: '70%', type: 'info', icon: 'Bird', description: 'Fliegt nonstop von Alaska nach Neuseeland.', facts: ['11 Tage Dauerflug ohne Pause', 'Navigiert per Magnetfeld', 'Fettreserven sind kritisch'] }
        ]
    },
    // === HORIZONT (0m) ===
    {
        id: 'horizon',
        title: 'Horizont',
        subtitle: '0m',
        minDepth: -1,
        maxDepth: 1,
        background: 'linear-gradient(to bottom, #87CEEB 0%, #87CEEB 48.5%, #ffffff 49.5%, #ffffff 50.5%, #0088aa 51.5%, #006994 100%)',
        objects: [
            { id: 'rocket-base', title: 'Raketenrampe', x: '8%', y: '50%', type: 'vehicle', icon: 'Rocket', static: true, startYear: 1957, description: 'Technologie zur Überwachung des Klimas aus dem Weltraum.', facts: ['Erdbeobachtungsprogramme', 'CO2-Mess-Missionen', 'Startplatz für Forschung'] },
            { id: 'sub-dock', title: 'Deepsea Dock', x: '24%', y: '50%', type: 'vehicle', icon: 'Anchor', static: true, startYear: 2010, description: 'Basis für autonome Forschungs-U-Boote (AUVs), die bis in den Marianengraben tauchen, um dort Temperatur und Plastikverschmutzung zu messen.', facts: ['Wartet autonome "Glider"', 'Schnittstelle für Tiefsee-Daten', 'Startpunkt für Hadal-Missionen'] },
            {
                id: 'oil-platform',
                title: 'Öl-Plattform',
                x: '40%',
                y: '50%',
                type: 'danger',
                icon: 'Factory',
                static: true,
                startYear: 1950,
                timeline: [
                    { maxYear: 1970, suffix: '_const', title: 'Bohr-Aufbau', description: 'Die Erschließung neuer Ölfelder beginnt. Risiken werden oft ignoriert.' },
                    { maxYear: 2040, suffix: '', title: 'Hochbetrieb', description: 'Förderung fossiler Brennstoffe läuft auf Hochtouren. Haupttreiber der globalen Erwärmung.' },
                    { maxYear: 2100, suffix: '_ruin', title: 'Verlassene Plattform', description: 'Ein "Stranded Asset" der fossilen Ära. Rostende Stahlkolosse im Meer, da Erneuerbare Energien übernommen haben.' }
                ],
                description: 'Förderung fossiler Brennstoffe, der Haupttreiber des Klimawandels.',
                facts: ['Methan-Lecklagen', 'Risiko von Ölkatastrophen', 'CO2-Quelle Nummer 1']
            },
            { id: 'offshore-wind', title: 'Windpark Alpha', x: '56%', y: '50%', type: 'success', icon: 'Wind', static: true, startYear: 1991, description: 'Grüne Energiegewinnung durch konstante Küstenwinde.', facts: ['Saubere Energie', 'Keine CO2-Emissionen', 'Wichtiger Pfeiler der Energiewende'] },
            { id: 'ai-center', title: 'Cloud-Kollektor', x: '72%', y: '50%', type: 'danger', icon: 'Cpu', static: true, startYear: 2023, description: 'Enormer Energieverbrauch durch KI-Rechenzentren an der Küste.', facts: ['2% globaler Stromverbrauch', 'Kühlungsbedarf durch Meerwasser', 'Digitale Dekarbonisierung nötig'] },
            { id: 'cargo-tanker', title: 'Industrie-Logistik', x: '88%', y: '50%', type: 'danger', icon: 'Ship', static: true, startYear: 1950, description: '90% des Welthandels verursacht massive Schwefelemissionen.', facts: ['Schweröl-Verbrennung', 'Belastung der Weltmeere', 'Lärmverschmutzung für Wale'] },
            { id: 'desalination-plant', title: 'Meerwasser-Entsalzung', x: '48%', y: '50%', type: 'info', icon: 'Droplets', static: true, startYear: 1965, description: 'Wird in Dürre-Regionen überlebenswichtig. Das Problem: Es bleibt hochkonzentrierte, chemisch belastete Salzlauge ("Brine") zurück, die Meeresböden ersticken kann.', facts: ['50% des Wassers wird zu "Brine"', 'Hoher Energieverbrauch', 'Risiko für Küsten-Ökosysteme'] },
            { id: 'wave-energy', title: 'Wellenkraftwerk', x: '64%', y: '50%', type: 'success', icon: 'Waves', static: true, startYear: 2005, description: 'Nutzt die kinetische Energie der Wellen zur Stromerzeugung.', facts: ['Nachhaltige Ozean-Energie', 'Schutzraum für Fische', 'Konstante Energiequelle'] }
        ]
    },
    // === SONNENLICHTZONE ===
    {
        id: 'epipelagic',
        title: 'Sonnenlichtzone',
        subtitle: 'Epipelagial (0-200m)',
        minDepth: -200,
        maxDepth: -1,
        background: 'linear-gradient(to bottom, #006994 0%, #005a80 25%, #004d70 55%, #004060 85%, #003050 100%)',
        objects: [
            {
                id: 'sea-turtle',
                title: 'Schildkröte',
                x: '20%',
                y: '25%',
                type: 'info',
                icon: 'Shell',
                extinctionYear: 2070,
                timeline: [
                    { maxYear: 1980, suffix: '_healthy', title: 'Gesunde Population', description: 'Schildkröten finden reichlich Nahrung (Quallen) und ungestörte Niststrände.', condition: { maxPollution: 20 } },
                    { maxYear: 2060, suffix: '', title: 'Plastik-Gefahr', description: 'Verwechslung von Quallen mit Plastiktüten wird zur tödlichen Falle. Nistplätze gehen durch Meeresspiegelanstieg verloren.', condition: { minPollution: 21, maxPollution: 80 } },
                    { maxYear: 2100, suffix: '_critical', title: 'Funktional Ausgestorben', description: 'Nur noch wenige Exemplare in Schutzstationen. In freier Wildbahn kaum mehr anzutreffen.', condition: { minPollution: 81 } }
                ],
                description: 'Meeresschildkröten verwechseln schwimmende Plastiktüten oft mit ihrer Hauptnahrung, den Quallen. Das Plastik verstopft ihren Magen und führt zum langsamen Verhungern.',
                facts: ['Plastik im Magen fast aller Arten', 'Verlust von Niststränden durch Meeresspiegel', 'Bestand sinkt dramatisch']
            },
            {
                id: 'coral-reef',
                title: 'Korallenriff',
                x: '82%',
                y: '80%',
                type: 'danger',
                icon: 'Flower2',
                extinctionYear: 2050, // Keep for backward compatibility/danger logic
                timeline: [
                    { maxYear: 1980, suffix: '_1950', title: 'Gesundes Korallenriff', description: 'Ein farbenprächtiges, intaktes Ökosystem vor Beginn der massiven globalen Erwärmung.', condition: { maxTemp: 1.0, minPh: 8.0 } },
                    { maxYear: 2030, suffix: '', title: 'Korallenbleiche', description: 'Sterbende Korallenriffe durch zu hohe Wassertemperaturen (Bleiche). 90% Verlust droht.', condition: { minTemp: 1.1, maxTemp: 1.9, maxPh: 7.9 } },
                    { maxYear: 2100, suffix: '_2050', title: 'Abgestorbenes Riff', description: 'Ein von Algen überwachsenes Skelett eines einst lebendigen Riffs. Die Biodiversität ist zusammengebrochen.', condition: { minTemp: 2.0, maxPh: 7.7 } }
                ],
                description: 'Sterbende Korallenriffe durch zu hohe Wassertemperaturen (Bleiche).',
                facts: ['90% Verlust droht bis 2050', 'Heimat für 25% aller Fische', 'Küsten-Schutzschild']
            },

            { id: 'humpback-whale', title: 'Buckelwal (CO2-Pumpe)', x: '50%', y: '50%', type: 'success', icon: 'Fish', description: 'Wale sind riesige Kohlenstoffspeicher. Ein großer Wal speichert durchschnittlich 33 Tonnen CO2. Wenn er stirbt, sinkt er in die Tiefe und entzieht diesen Kohlenstoff der Atmosphäre für Jahrhunderte.', facts: ['"Whale Pump" düngt Plankton', 'Speichert so viel CO2 wie 1000 Bäume', 'Erholung der Bestände hilft Klima'] },
            {
                id: 'plastic-island',
                title: 'Great Pacific Garbage Patch',
                x: '35%',
                y: '15%',
                type: 'danger',
                icon: 'Trash2',
                startYear: 1970,
                timeline: [
                    { maxYear: 2000, suffix: '_early', title: 'Entstehender Müllstrudel', description: 'Erste Anzeichen einer Akkumulation von Plastikteilen durch Meeresströmungen.', condition: { maxPollution: 20 } },
                    { maxYear: 2040, suffix: '', title: 'Great Pacific Garbage Patch', description: 'Ein riesiger Müllteppich, dreimal so groß wie Frankreich. Mikroplastik ist allgegenwärtig.', condition: { minPollution: 21, maxPollution: 70 } },
                    { maxYear: 2100, suffix: '_dense', title: 'Plastik-Kontinent', description: 'Der Müll hat sich zu einer dichten Schicht verdichtet. Ein eigenes Ökosystem ("Neopelagic") hat sich auf dem Plastik gebildet.', condition: { minPollution: 71 } }
                ],
                description: 'Ein riesiger Müllstrudel im Pazifik, dreimal so groß wie Frankreich. Mikroplastik-Konzentrationen haben sich dort in wenigen Jahren verzehnfacht.',
                facts: ['>1.5 Mio. Plastikteile pro km²', '94% davon ist Mikroplastik', 'Tausende Tonnen Geisternetze']
            },
            { id: 'overfishing', title: 'Industriefischerei', x: '65%', y: '35%', type: 'danger', icon: 'AlertTriangle', startYear: 1950, description: 'Boden-Schleppnetze pflügen den Meeresboden um und setzen dabei riesige Mengen an im Sediment gespeichertem CO2 frei – vergleichbar mit dem gesamten Luftverkehr.', facts: ['Zerstört CO2-Senke Meeresboden', '80% Beifang bei Schleppnetzen', 'Fischbestände kollabieren'] },
            {
                id: 'plankton-map',
                title: 'Phytoplankton',
                x: '10%',
                y: '65%',
                type: 'info',
                icon: 'Map',
                // New Timeline for Sim
                timeline: [
                    { maxYear: 2020, suffix: '_healthy', title: 'Blühendes Plankton', description: 'Die Grundlage der marinen Nahrungskette ist stabil.', condition: { maxTemp: 1.5, minPh: 8.0 } },
                    { maxYear: 2100, suffix: '_collapse', title: 'Plankton-Kollaps', description: 'Durch Versauerung und Erwärmung bricht die Basis des Nahrungsnetzes weg. Das Meer hungert.', condition: { minTemp: 3.0, maxPh: 7.8 } }
                ],
                description: 'Das Phytoplankton produziert 50% des Sauerstoffs, den wir atmen. Durch steigende Wassertemperaturen und Versauerung geht die Menge global zurück.',
                facts: ['Basis der Nahrungskette', 'Sinkt die Menge, hungert das Meer', 'Bindet Milliarden Tonnen CO2']
            }
        ]
    },
    // === DÄMMERZONE ===
    {
        id: 'mesopelagic',
        title: 'Dämmerzone',
        subtitle: 'Mesopelagial (200-1000m)',
        minDepth: -1000,
        maxDepth: -200,
        background: 'linear-gradient(to bottom, #003050 0%, #002540 30%, #001b30 65%, #001222 100%)',
        objects: [
            { id: 'bioluminescence-jelly', title: 'Leuchtqualle', x: '30%', y: '25%', type: 'info', icon: 'Waves', description: 'Durch Ozeanversauerung und Erwärmung verändern sich Biolumineszenz-Muster. Manche Arten leuchten stärker, andere verlieren ihre Fähigkeit zu kommunizieren.', facts: ['Ökosystem-Kommunikation gestört', 'Quallen profitieren von Erwärmung', 'Indikator für chemische Balance'] },
            { id: 'giant-squid', title: 'Riesenkalmar', x: '70%', y: '60%', type: 'info', icon: 'Eye', description: 'Einer der geheimnisvollsten Bewohner der Dämmerzone, der empfindlich auf sinkende Sauerstoffwerte in der Tiefe (Deoxygenierung) reagiert.', facts: ['Augen so groß wie Basketbälle', 'Leidet unter Sauerstoffarmut', 'Klimawandel erweitert "Todeszonen"'] },
            { id: 'ghost-nets', title: 'Geisternetze', x: '45%', y: '40%', type: 'danger', icon: 'Wind', startYear: 1960, description: 'Verlorene Fischernetze aus Plastik "fischen" jahrzehntelang weiter. Sie bestehen oft aus Nylon, das sich in Mikroplastik zersetzt, aber nicht verschwindet.', facts: ['46% des Mülls im Pazifik-Strudel', 'Todesfalle für Robben & Wale', 'Brauchen 600 Jahre zum Abbau'] },
            { id: 'acoustic-monitoring', title: 'Schall-Station', x: '15%', y: '75%', type: 'info', icon: 'Mic', startYear: 1950, description: 'Überwacht den marinen Lärmteppich durch Schifffahrt und Bohrungen.', facts: ['Identifiziert Walgesänge', 'Misst Lärmbelastung', 'Wichtig für Artenschutz'] }
        ]
    },
    // === MITTERNACHTSZONE ===
    {
        id: 'bathypelagic',
        title: 'Mitternachtszone',
        subtitle: 'Bathypelagial (1000-4000m)',
        minDepth: -4000,
        maxDepth: -1000,
        background: 'linear-gradient(to bottom, #001222 0%, #000c18 20%, #000812 50%, #000508 80%, #000000 100%)',
        objects: [
            { id: 'anglerfish-deep', title: 'Anglerfisch', x: '25%', y: '35%', type: 'info', icon: 'Lightbulb', description: 'Hat eine leuchtende Angel am Kopf entwickelt, um Beute anzulocken.', facts: ['Extreme Druckanpassung', 'Parasitäre Paarung', 'Überlebt bei 400 Bar'] },
            {
                id: 'sperm-whale-dive',
                title: 'Tauchender Pottwal',
                x: '60%',
                y: '20%',
                type: 'info',
                icon: 'Fish',
                timeline: [
                    { maxYear: 2020, suffix: '_healthy', title: 'Jagender Riese', description: 'Taucht in diese Tiefe ab, um Riesenkalmare zu jagen.', condition: { minFood: 50 } },
                    { maxYear: 2100, suffix: '_starving', title: 'Nahrungsmangel', description: 'Durch den Kollaps der Plankton-Bestände an der Oberfläche fehlt es an Beutetieren in der Tiefe.', condition: { maxFood: 49 } }
                ],
                description: 'Taucht in diese Tiefe ab, um Riesenkalmare zu jagen.',
                facts: ['Taucht bis 3000m tief', 'Hält 90 Min die Luft an', 'Hört Echos im Dunkeln']
            },
            { id: 'marine-snow', title: 'Meeresschnee (Kohlenstoff-Pumpe)', x: '15%', y: '60%', type: 'success', icon: 'Snowflake', description: 'Ein kontinuierlicher Regen aus organischem Material, der CO2 von der Oberfläche in die Tiefe transportiert ("Biologische Kohlenstoffpumpe"). Ozeanversauerung könnte diesen Prozess schwächen.', facts: ['Transportiert Megatonnen CO2', 'Speichert Kohlenstoff für Jahrtausende', 'Nahrungsgrundlage der Tiefsee'] },
            {
                id: 'methane-seepage',
                title: 'Methan-Austritt',
                x: '75%',
                y: '80%',
                type: 'danger',
                icon: 'Flame',
                timeline: [
                    { maxYear: 2020, suffix: '_stable', title: 'Gefrorenes Methanhydrat', description: 'Unter hohem Druck und Kälte ist das Methan stabil im Eis eingeschlossen.', condition: { maxTemp: 1.5 } },
                    { maxYear: 2100, suffix: '_leaking', title: 'Kipppunkt erreicht', description: 'Durch die Erwärmung der Tiefsee gast das Methan massiv aus. Ein fataler Feedback-Loop beginnt.', condition: { minTemp: 2.5 } }
                ],
                description: 'Erwärmt sich der Ozean, könnte gefrorenes Methanhydrat am Boden instabil werden und als starkes Treibhausgas aufsteigen.',
                facts: ['Gefahr eines "Kipppunkts"', 'Methan ist 25x stärker als CO2', 'Forschung überwacht Stabilität']
            },
            { id: 'hydrothermal-vent', title: 'Schwarzer Raucher', x: '45%', y: '85%', type: 'info', icon: 'Zap', description: 'Extrem-Lebensräume, die abhängig von Chemosynthese sind. Sie könnten erste Hinweise liefern, wie Leben unter extremen Klimabedingungen (oder auf anderen Planeten) existiert.', facts: ['Bis zu 400°C heißes Wasser', 'Unabhängig vom Sonnenlicht', 'Symbiose von Bakterien & Tieren'] }
        ]
    },
    // === ABGRUNDZONE ===
    {
        id: 'abyssopelagic',
        title: 'Abgrundzone',
        subtitle: 'Abyssopelagial (4000-6000m)',
        minDepth: -6000,
        maxDepth: -4000,
        background: 'linear-gradient(to bottom, #000000 0%, #010101 50%, #000000 100%)',
        objects: [
            { id: 'deep-sea-dumbo', title: 'Dumbo-Oktopus', x: '35%', y: '35%', type: 'info', icon: 'Bug', description: 'Ein sanfter Oktopus, der in extremen Tiefen schwebt.', facts: ['Nutzt ohrenähnliche Flossen', 'Keine Tintensäcke nötig', 'Sehr seltene Beobachtungen'] },
            {
                id: 'nodule-mining',
                title: 'Tiefsee-Bergbau',
                x: '75%',
                y: '65%',
                type: 'danger',
                icon: 'HardHat',
                startYear: 2015,
                timeline: [
                    { maxYear: 2020, suffix: '_pristine', title: 'Unberührtes Mangaufeld', description: 'Manganknollen liegen seit Millionen Jahren am Meeresgrund. Ein einzigartiger Lebensraum.', condition: { maxPollution: 10 } },
                    { maxYear: 2045, suffix: '', title: 'Aktiver Abbau', description: 'Großmaschinen ernten den Meeresboden ab. Sedimentwolken ersticken das Leben im Umkreis von Kilometern.', condition: { minPollution: 11, maxPollution: 80 } },
                    { maxYear: 2100, suffix: '_dead', title: 'Todeszone', description: 'Der Meeresboden ist eine leblose Wüste. Der Kohlenstoffspeicher wurde zerstört und erholt sich nicht mehr.', condition: { minPollution: 81 } }
                ],
                description: 'Geplanter Abbau von Manganknollen für E-Auto-Batterien. Forscher warnen: Die Zerstörung des Meeresbodens könnte gespeicherten Kohlenstoff freisetzen und einzigartige Arten auslöschen, bevor wir sie entdecken.',
                facts: ['Knollen wachsen nur mm pro Mio. Jahre', 'Sedimentwolken ersticken Leben', 'Irreversible Zerstörung']
            },
            { id: 'sunken-shipwreck', title: 'Tiefsee-Wrack', x: '20%', y: '80%', type: 'info', icon: 'Anchor', startYear: 1912, description: 'Kulturelles Erbe, das durch versauerndes Meerwasser schneller korrodiert als erwartet. Bakterien, die Eisen fressen, breiten sich aus.', facts: ['Titanic zerfällt bis 2030', 'Mikrobielles Leben verändert sich', 'Historisches "Zeitfenster" schließt sich'] },
            { id: 'research-lander', title: 'Hadal-Lander Alfie', x: '55%', y: '15%', type: 'info', icon: 'Camera', startYear: 2009, description: 'Spezialroboter (wie vom WHOI), die autonom an die tiefsten Stellen der Erde tauchen, um Mikroplastik im Sediment nachzuweisen.', facts: ['Hält dem Druck von 1000 Elefanten stand', 'Beweist: Plastik ist überall', 'Kartiert unbekannte Tiefseegräben'] },
            { id: 'xenophyophore-colony', title: 'Xenophyophoren', x: '45%', y: '90%', type: 'info', icon: 'Shapes', description: 'Gigantische Einzeller, die extrem empfindlich auf Störungen durch Tiefsee-Bergbau reagieren. Sie sind die "Bäume" der Tiefsee und bieten Lebensraum für viele andere Arten.', facts: ['Größte Einzeller der Welt (20cm)', 'Filtern Wasser & Schwermetalle', 'Keystone-Spezies der Tiefsee'] },
            { id: 'hadal-brine-pool', title: 'Hadale Sole-See', x: '10%', y: '95%', type: 'danger', icon: 'Waves', description: 'Extrem salzige, sauerstofffreie Seen am Meeresgrund. Sie konservieren organische Materie perfekt und geben Aufschluss über vergangene Klimazustände.', facts: ['"Konservendosen" der Ozeangeschichte', 'Tödlich für fast alles Leben', 'Enthalten unbekannte Mikroben'] }
        ]
    },
    // === MARIANENGRABEN ===
    {
        id: 'hadopelagic',
        title: 'Marianengraben',
        subtitle: 'Hadopelagial (6000-11000m)',
        minDepth: -11000,
        maxDepth: -6000,
        background: '#000000',
        objects: [
            { id: 'mariana-snailfish', title: 'Hadaler Fisch', x: '45%', y: '45%', type: 'info', icon: 'Fish', description: 'Der tiefstlebende Fisch (Pseudoliparis swirei) wurde in 8.178m Tiefe gefilmt. Er zeigt, dass Leben sich an extremste Bedingungen anpassen kann – aber nicht an schnelle Umweltveränderungen.', facts: ['Keine Schuppen, gelatineartiger Körper', 'Enormer Druck hält Proteine stabil', 'Empfindlich gegen Temperaturänderung'] },
            { id: 'plastic-bag-deep', title: 'Einsame Plastiktüte', x: '55%', y: '85%', type: 'danger', icon: 'ShoppingBag', startYear: 1990, description: 'Victor Vescovo fand bei seinem Rekord-Tauchgang 2019 im Challenger Deep (10.928m) eine Plastiktüte & Bonbonpapier. Der tiefste Punkt der Erde ist vermüllt.', facts: ['Plastik in 11km Tiefe bestätigt', 'Hadale Zone ist eine "Plastik-Falle"', 'Mikroplastik in Amphipoden gefunden'] },
            { id: 'deepsea-challenger', title: 'Deepsea Challenger', x: '25%', y: '25%', type: 'info', icon: 'Target', startYear: 2012, description: 'James Camerons U-Boot (2012). Nur 4 Menschen waren je am tiefsten Punkt der Erde – weniger als auf dem Mond (12). Die Tiefsee ist weitgehend unerforscht.', facts: ['Tauchte auf 10.908m', 'Sammelte Sedimentproben', 'Mehr Menschen auf dem Mond als hier'] },
            { id: 'hadal-amphipod', title: 'Riesen-Flohkrebs', x: '75%', y: '60%', type: 'info', icon: 'Bug', description: 'Selbst in 11km Tiefe haben Forscher in diesen Tieren menschengemachte Chemikalien (PCBs) und Mikroplastik gefunden. Es gibt keinen unberührten Ort mehr.', facts: ['"Müllschlucker" der Tiefsee', 'PCBs im Körpergewebe nachgewiesen', 'Fressen abgesunkenes Plastik'] },
            { id: 'trench-sonar', title: 'Hadaler Kohlenstoff', x: '10%', y: '70%', type: 'info', icon: 'Scan', startYear: 2010, description: 'Neueste Studien zeigen: Tiefseegräben sind Fallen für "Black Carbon" (Ruß). Sie lagern mehr Kohlenstoff ein als bisher angenommen und sind wichtig für das globale Klima.', facts: ['Speichert "Black Carbon" dauerhaft', 'Wichtiger als bisher gedacht', 'Erdbeben begraben organische Stoffe'] },
            { id: 'subduction-fault', title: 'Subduktions-Riss', x: '50%', y: '95%', type: 'danger', icon: 'Zap', description: 'Stelle an der die Pazifische Platte unter die Marianen-Platte abtaucht.', facts: ['Ursprung schwerer Erdbeben', 'Schlingt gewaltige Mengen Wasser ein', 'Tiefster tektonischer Prozess'] },
            { id: 'hydrothermal-tubeworms', title: 'Hadale Röhrenwürmer', x: '85%', y: '85%', type: 'info', icon: 'Bug', description: 'Spezialisierte Lebensformen an extremen Tiefsee-Schloten.', facts: ['Leben in absoluter Dunkelheit', 'Nutzen chemische Energie', 'Symbiose mit Bakterien'] }
        ]
    }
];
