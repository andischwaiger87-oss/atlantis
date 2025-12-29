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
            { id: 'satellite-graveyard', title: 'Satelliten-Friedhof', x: '80%', y: '25%', type: 'danger', icon: 'Satellite', size: 300, startYear: 1960, description: 'Ein Bereich im Orbit, in dem ausgediente Satelliten "geparkt" werden. Durch den Anstieg von CO2 kühlt die Thermosphäre ab, zieht sich zusammen und verringert den natürlichen "Drag" – Weltraummüll bleibt dadurch Jahrzehnte länger als früher im Orbit.', facts: ['12.000+ Satelliten im Orbit (2025)', '30% längere Verweildauer durch CO2-Effekt', 'Gefährdet die internationale Raumfahrt'] },
            { id: 'merlin-mission', title: 'MERLIN-Mission', x: '75%', y: '15%', type: 'info', icon: 'Sun', startYear: 2025, description: 'Die deutsch-französische MERLIN-Mission ist Teil eines globalen Netzwerks (wie GHGSat) zur Überwachung von Methan-Emissionen – einem Treibhausgas, das 80-mal potenter ist als CO2.', facts: ['Misst Methan per Laser (Lidar)', 'Erkennt Leckagen in Gaspipelines', 'Teil der globalen Treibhausgas-Überwachung'] },
            {
                id: 'iss-research',
                title: 'ISS Forschungsstation',
                x: '55%',
                y: '45%',
                type: 'info',
                icon: 'Orbit',
                size: 400,
                startYear: 1998,
                endYear: 2031,
                timeline: [
                    { maxYear: 2010, suffix: '_const', title: 'Aufbauphase', description: 'Beginn einer neuen Ära: Die NASA (USA) und Roscosmos (Russland) legen den Grundstein für die ISS, unterstützt durch ESA, JAXA und CSA.' },
                    { maxYear: 2030, suffix: '', title: 'Forschungsbetrieb', description: 'Die ISS dient als weltweit einzigartiges Labor für Klima- (ECOSTRESS) und Gesundheitsforschung unter internationaler Flagge.' },
                    { maxYear: 2040, suffix: '_deorbit', title: 'Kontrollierter Absturz', description: 'Geplantes Ende: Die Station wird sicher über dem Point Nemo (Südpazifik) zum Absturz gebracht – der größte "kontrollierte Wiedereintritt" der Geschichte.' }
                ],
                description: 'Die ISS ist ein Symbol globaler Kooperation (NASA, Roscosmos, ESA, JAXA, CSA). Ihr ECOSTRESS-Instrument misst die Temperatur von Pflanzen weltweit, um Dürren zu erkennen, bevor sie sichtbar werden.',
                facts: ['Retirement & Deorbit für 2031 geplant', '70m genaue Auflösung einzelner Felder', 'Wichtig für die globale Ernährungssicherheit']
            },
            {
                id: 'space-junk-cluster',
                title: 'Trümmer-Feld',
                x: '45%',
                y: '65%',
                type: 'danger',
                icon: 'AlertTriangle',
                size: 500,
                startYear: 1957,
                timeline: [
                    { maxYear: 1990, suffix: '_early', title: 'Erste Trümmer', description: 'Vereinzelte Raketenstufen und inaktive Satelliten beginnen sich im Orbit anzusammeln.' },
                    { maxYear: 2030, suffix: '', title: 'Kritisches Trümmerfeld', description: 'Millionen Teile rasen um die Erde. Ausweichmanöver für die ISS werden zur Routine.' },
                    { maxYear: 2100, suffix: '_kessler', title: 'Kessler-Syndrom', description: 'Eine Kettenreaktion von Kollisionen macht den niedrigen Erdorbit unnutzbar. Raumfahrt wird fast unmöglich.', isDead: true }
                ],
                description: 'Millionen winzige Schrottteile rasen mit 27.000 km/h um die Erde. Schon ein 1cm großes Teil hat die Sprengkraft einer Handgranate.',
                facts: ['>1 Mio. Teile zwischen 1-10cm', 'Gesamtmasse über 15.000 Tonnen', 'Bedroht Klimasatelliten & ISS']
            },
            { id: 'climate-sentinel', title: 'Sentinel-6 Michael Freilich', x: '65%', y: '70%', type: 'success', icon: 'Radio', size: 200, startYear: 2020, description: 'Ein internationales Gemeinschaftsprojekt (NASA, ESA, NOAA, EUMETSAT). Sentinel-6 misst den globalen Meeresspiegelanstieg bis auf den Millimeter genau.', facts: ['Fortsetzung der Messreihe seit 1992', 'Aktueller Anstieg: 4.8mm/Jahr (beschleunigt)', 'Referenz für alle Küstenschutz-Modelle'] },
            { id: 'solar-observatory', title: 'Parker Solar Probe', x: '45%', y: '10%', type: 'info', icon: 'Telescope', size: 200, startYear: 2018, description: 'Das schnellste von Menschen gebaute Objekt. Im Jahr 2025 nähert sie sich der Sonne auf unter 6,2 Mio. km und liefert Daten zum Sonnenwind-Ursprung.', facts: ['Geschwindigkeit: ~690.000 km/h', 'Hitzeschild trotzt 1.370°C', 'Erforscht die Sonnenkorona direkt'] },
            { id: 'magnetosphere-sentinel', title: 'MMS-Mission', x: '5%', y: '10%', type: 'info', icon: 'Shield', startYear: 2015, description: 'Vier NASA-Satelliten (Magnetospheric Multiscale), die die magnetische Rekonnektion im Erdschild untersuchen.', facts: ['Kartiert magnetische Stürme', 'Verständnis der Polarlichter', 'Schutz vor Teilchenstrahlung'] },
            { id: 'cosmic-ray-observatory', title: 'AMS-02 (ISS)', x: '25%', y: '5%', type: 'info', icon: 'Zap', startYear: 2011, description: 'Das Alpha-Magnet-Spektrometer auf der ISS sucht nach Antimaterie und Dunkler Materie im Universum.', facts: ['Präzisester Teilchendetektor im All', 'Leitung durch Nobelpreisträger Samuel Ting', 'Sucht Ursprung des Kosmos'] },
            { id: 'rosat-telescope', title: 'ROSAT Röntgensatellit', x: '10%', y: '85%', type: 'info', icon: 'Telescope', startYear: 1990, endYear: 1999, description: 'Legendäre deutsch-britisch-amerikanische Mission. Die extrem glatten Spiegel des ROSAT-Teleskops führten zu Innovationen in der Laseroptik für Brillengläser.', facts: ['Kartierte 125.000 Röntgenquellen', 'Transfer: Polierverfahren für Brillen', 'Technologietransfer für Hautkrebs-Diagnose'] },
            { id: 'terrasar-x-radar', title: 'TerraSAR-X / TanDEM-X', x: '65%', y: '85%', type: 'info', icon: 'Scan', startYear: 2007, description: 'Hochpräzise deutsche Radarsatelliten, die die Erdoberfläche unabhängig von Wolken und Licht vermessen. Sie erstellen ein globales 3D-Höhenmodell.', facts: ['Genauigkeit bis zu 1 Meter', 'Überwacht Gletscherschmelze global', 'Hilft bei Hochwasser-Vorhersagen'] }
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
            { id: 'aurora-borealis', title: 'Aurora Borealis', x: '45%', y: '35%', type: 'info', icon: 'Zap', size: 300, description: 'Polarlichter entstehen durch die Interaktion von Sonnenwinden mit dem Erdmagnetfeld.', facts: ['Leuchten in 80-500km Höhe', 'Sauerstoff erzeugt grünes Licht', 'Stickstoff erzeugt blau/violett'] },
            { id: 'ionosphere-drag', title: 'Ionosphären-Widerstand', x: '35%', y: '50%', type: 'danger', icon: 'Wind', size: 250, startYear: 1957, description: 'Gase in der Thermosphäre bremsen Satelliten ab, was zu Abstürzen führen kann.', facts: ['Zunahme durch Sonnenaktivität', 'Atmosphärisches Aufblähen', 'Lebensdauerverkürzung für LEO-Sats'] },
            { id: 'starlink-train', title: 'Starlink-Kette', x: '70%', y: '65%', type: 'danger', icon: 'Wifi', size: 300, startYear: 2019, description: 'Mega-Konstellationen stören nicht nur die Astronomie durch Lichtspuren. Beim Verglühen setzen sie Aluminiumoxide frei, die die Ozonschicht in der Stratosphäre schädigen könnten.', facts: ['Stört 30% der Hubble-Bilder', 'Aluminiumoxide schädigen Ozonschicht', 'Risiko für Kollisions-Kaskaden'] },
            { id: 'space-weather-buoy', title: 'DSCOVR Satellit', x: '45%', y: '20%', type: 'info', icon: 'Radio', size: 250, startYear: 2015, description: 'Ein Satellit am Lagrange-Punkt L1, der das Weltraumwetter und die Erdatmosphäre (EPIC) überwacht.', facts: ['Misst Sonnenstürme in Echtzeit', 'Position 1,5 Mio. km von Erde', 'Warnsystem für Mobilfunk & Strom'] },
            { id: 'metop-ash-detection', title: 'MetOp-Satellit', x: '65%', y: '10%', type: 'info', icon: 'ShieldAlert', size: 200, startYear: 2006, description: 'Wetter-Satelliten wie MetOp erkennen auch feinste Vulkanasche-Wolken. Das ermöglicht rechtzeitige Flugwarnungen und gezielte Entwarnungen.', facts: ['Schützt Triebwerke vor Asche-Schäden', 'Erhöht Sicherheit im Flugverkehr', 'Misst Feuchtigkeit & Temperaturprofile'] }
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
            { id: 'atmospheric-shield', title: 'Atmosphärischer Schutzschild', x: '20%', y: '60%', type: 'success', icon: 'Shield', description: 'Die Mesosphäre fungiert als unsichtbarer Panzer der Erde. Fast alle Meteore verglühen hier durch Reibungshitze, bevor sie die Oberfläche erreichen können.', facts: ['Verglüht 100t Weltraumstaub täglich', 'Schützt Biosphäre vor Bombardement', 'Erzeugt Meteorsubstanz-Rauch'] },
            { id: 'red-sprites', title: 'Red Sprites', x: '75%', y: '50%', type: 'info', icon: 'Flame', size: 250, impactText: 'Indikator für extreme atmosphärische Energieentladungen.', description: 'Mysteriöse elektrische Entladungen in der Mesosphäre, die hunderte Kilometer über schweren Gewittern auftreten.', facts: ['Leuchten nur Millisekunden lang', 'Treten in 50 bis 90 km Höhe auf', 'Koppeln Wetter mit der Ionosphäre'] },
            { id: 'meteor-trail-sensor', title: 'MAARSY-Radar', x: '30%', y: '15%', type: 'info', icon: 'Target', size: 200, startYear: 2010, description: 'Das Middle Atmosphere Alomar Radar System misst Meteoritenschweife und Winde in 80-100 km Höhe.', facts: ['Analysiert Weltraumstaub-Eintragsrate', '3D-Messung der Mesosphäre', 'Größte Antennenanlage im Norden'] }
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
                size: 300,
                timeline: [
                    { maxYear: 1980, suffix: '_intact', title: 'Intakter Schutzschild', description: 'Die Ozonschicht filtert gefährliche UV-B-Strahlung fast vollständig.', condition: { maxTemp: 1.0, maxPollution: 20 } },
                    { maxYear: 2015, suffix: '_hole', title: 'Ozonloch-Maximum', description: 'FCKW-Emissionen rissen ein gewaltiges Loch in den Schutzschild. Hautkrebsraten stiegen sprunghaft.', condition: { minTemp: 1.1, minPollution: 50 } },
                    { maxYear: 2100, suffix: '', title: 'Wiederherstellung', description: 'Ein Triumph der Wissenschaft: Dank des Montreal-Protokolls heilt die Schicht messbar. Vollständige Erholung bis 2066 erwartet.', condition: { maxPollution: 30 } }
                ],
                description: 'Ein globaler Erfolg: Dank des Montreal-Protokolls schließt sich das Ozonloch. 2025 war das antarktische Loch das kleinste seit 1992.',
                facts: ['Vollständige Erholung bis 2066', 'Verhinderte zusätzlich 0.5°C Erwärmung', 'Schutz vor UV-Strahlung rettet Millionen']
            },
            { id: 'weather-balloon', title: 'Klimaballon', x: '45%', y: '60%', type: 'info', icon: 'Wind', size: 300, startYear: 1930, description: 'Radiosonden messen CO2-Gehalt und Temperatur in extremer Höhe.', facts: ['Wichtige Daten für Vorhersagen', 'Bis 40km Höhe', 'Unverzichtbar für Klimamodelle'] },
            {
                id: 'jet-stream',
                title: 'Jetstream',
                x: '75%',
                y: '45%',
                type: 'danger',
                icon: 'MoveLeft',
                size: 300,
                timeline: [
                    { maxYear: 2020, suffix: '', title: 'Stabiles Windband', description: 'Hohe Temperaturunterschiede zwischen Arktis und Tropen halten den Jetstream stabil.' },
                    { maxYear: 2100, suffix: '_meandering', title: 'Jetstream-Schlingern', description: 'Durch "Arctic Amplification" verlangsamt sich der Jetstream. Extreme Hitzewellen oder Kälteeinbrüche "frieren" wochenlang ein.', condition: { minTemp: 1.8 } }
                ],
                description: 'Ein mächtiges Windband in 10km Höhe, das unser Wetter lenkt. Seine Instabilität führt zu katastrophalen blockierten Wetterlagen.',
                facts: ['Arctic Amplification als Ursache', 'Bringt Extremwetter-Blockaden', 'Messdaten von ESA Aeolus']
            },
            { id: 'ozone-sampling-drone', title: 'Global Hawk (NASA)', x: '55%', y: '25%', type: 'info', icon: 'Plane', size: 250, startYear: 2010, description: 'Unbemannte Forschungsdrohne, die in der Stratosphäre Schadstoffe und Ozonkonzentrationen sammelt.', facts: ['Fliegt über 20 km Höhe', 'Kein Pilot an Bord nötig', 'Dauereinsätze von 30+ Stunden'] },
            { id: 'stratospheric-bacteria', title: 'Bioaerosole', x: '65%', y: '15%', type: 'info', icon: 'Bug', description: 'Mikroorganismen, die als Kristallisationskerne für Wolken dienen und das Albedo der Erde beeinflussen.', facts: ['Transport durch Jetstreams', 'Einfluss auf regionale Dürren', 'Überleben in extremer UV-Strahlung'] },
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
            { id: 'mega-storm', title: 'Extremwetter', x: '35%', y: '45%', type: 'danger', icon: 'CloudLightning', size: 250, description: 'Ein schwächelnder Jetstream und mehr Energie in der Atmosphäre führen zu "blockierten" Wetterlagen: Stürme bleiben ortsfest und laden Regenmassen tagelang ab.', facts: ['7% mehr Regen pro 1°C Erwärmung', 'Verweilende Sturmsysteme', 'Milliardenkosten durch Flutschäden'] },
            { id: 'aviation-impact', title: 'Flugverkehr & Contrails', x: '80%', y: '25%', type: 'danger', icon: 'Plane', size: 300, startYear: 1950, description: 'Nicht nur CO2 ist das Problem: Kondensstreifen (Contrails) bilden künstliche Wolken, die Wärme in der Atmosphäre halten ("Radiative Forcing").', facts: ['Verursacht ~3.5% der Erderwärmung', 'Contrail-Management könnte helfen', 'Wasserstoff-Antriebe als Hoffnung'] },
            { id: 'forest-fire-smoke', title: 'Waldbrand-Säule', x: '70%', y: '65%', type: 'danger', icon: 'Flame', description: 'Riesige Brände setzen gigantische Mengen CO2 frei.', facts: ['Amazonas-Problem', 'Feedback-Loop: Feuer -> CO2', 'Feinstaub belastet Städte'] },
            { id: 'lidar-tower', title: 'Lidar-Turm', x: '35%', y: '85%', type: 'info', icon: 'TowerControl', size: 200, startYear: 1980, description: 'Lasersysteme messen Aerosole und Wolkenhöhe in Echtzeit.', facts: ['Misst Luftverschmutzung', 'Daten für Wetterberichte', 'Präzise Aerosol-Bestimmung'] },
            { id: 'cloud-seeding-plane', title: 'Wolkensäer', x: '55%', y: '15%', type: 'info', icon: 'Plane', size: 250, startYear: 1950, description: 'Versuche der Wettermanipulation durch das Einbringen von Salzen.', facts: ['GEO-Engineering Versuch', 'Soll Regen künstlich erzeugen', 'Umweltfolgen oft unklar'] },
            { id: 'arctic-tern', title: 'Küstenseeschwalbe', x: '30%', y: '10%', type: 'info', icon: 'Bird', description: 'Hält den Weltrekord für die längste Tierwanderung der Welt (Pol zu Pol).', facts: ['Legt bis zu 90.000km pro Jahr zurück', 'Stark von Windmustern abhängig', 'Brutgebiete durch Eisschmelze bedroht'] },
            { id: 'migratory-dragonfly', title: 'Wanderlibelle', x: '75%', y: '50%', type: 'info', icon: 'Bug', description: 'Insekten, die über den Ozean wandern und dabei auf Jetstreams angewiesen sind.', facts: ['Wanderungen über Tausende Kilometer', 'Profitieren von wärmeren Nächten', 'Wichtige Bestäuber auf Inseln'] },
            { id: 'bar-tailed-godwit', title: 'Pfuhlschnepfe', x: '25%', y: '70%', type: 'info', icon: 'Bird', description: 'Fliegt nonstop von Alaska nach Neuseeland.', facts: ['11 Tage Dauerflug ohne Pause', 'Navigiert per Magnetfeld', 'Fettreserven sind kritisch'] },
            { id: 'sentinel-2-agri', title: 'Sentinel-2 (Land-Monitor)', x: '55%', y: '20%', type: 'success', icon: 'Leaf', startYear: 2015, description: 'Die Sentinel-2-Mission liefert "optische Fingerabdrücke" der Erdoberfläche. Sie erkennt Pflanzenstress und Erntepotenziale weltweit.', facts: ['Überwacht globale Nahrungssicherheit', 'Kartiert Waldverluste in Echtzeit', 'Daten sind für alle frei verfügbar'] },
            { id: 'malaria-forecast', title: 'Malaria-Vorhersage', x: '25%', y: '15%', type: 'success', icon: 'HeartPulse', startYear: 2020, description: 'Mit Daten von Erdbeobachtungssatelliten lassen sich Sumpfgebiete identifizieren, in denen sich Moskitos vermehren. So können Epidemien vorhergesagt und verhindert werden.', facts: ['Nutzt Feuchtigkeitsdaten aus dem All', 'Rettet jährlich Tausende Leben', 'Teil des "Malaria Atlas Project"'] }
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
            {
                id: 'rocket-base',
                title: 'Wissenschafts-Zentrum',
                x: '8%',
                y: '50%',
                type: 'vehicle',
                icon: 'Rocket',
                static: true,
                startYear: 1957,
                timeline: [
                    { maxYear: 2020, suffix: '', title: 'Erdbeobachtung', description: 'Startplatz für Klimasatelliten wie CO2M und MERLIN.' },
                    { maxYear: 2100, suffix: '_dormant', title: 'Raumstation', description: 'Budgetkürzungen behindern die wichtige Überwachung der planetaren Grenzen.', condition: { minTemp: 3.5 } }
                ],
                description: 'Startplatz für internationale Erdbeobachtungs-Missionen. Satelliten wie Copernicus (EU), Landsat (NASA) oder ALOS (JAXA) liefern die Datenbasis für globale Klimaentscheidungen.',
                facts: ['Daten-Basis für IPCC-Berichte', 'Überwacht Kipppunkte der Biosphäre', 'Schnittstelle für globale Geodaten']
            },
            { id: 'sub-dock', title: 'Global Deepsea Dock', x: '23%', y: '50%', type: 'vehicle', icon: 'Anchor', size: 200, static: true, startYear: 2010, description: 'Basis für autonome Forschungs-U-Boote (AUVs). Sie sind Teil des globalen ARGO-Netzwerkes, das über 4.000 Roboter-Bojen zur Messung der Ozeanwärme weltweit betreibt.', facts: ['Schnittstelle für globale Tiefsee-Daten', 'Vernetzt mit Ocean Networks Canada', 'Wartet autonome "Glider"'] },
            {
                id: 'oil-platform',
                title: 'Öl-Plattform',
                x: '45%',
                y: '0%',
                type: 'danger',
                icon: 'Factory',
                size: 230,
                static: true,
                startYear: 1950,
                timeline: [
                    { maxYear: 1970, suffix: '_const', title: 'Aufbauphase', description: 'Die Erschließung neuer Ölfelder beginnt. Risiken werden oft ignoriert.' },
                    { maxYear: 2040, suffix: '', title: 'Bohrbetrieb', description: 'Förderung fossiler Brennstoffe läuft auf Hochtouren. Haupttreiber der globalen Erwärmung.' },
                    { maxYear: 2100, suffix: '_ruin', title: 'Industrie-Ruine', description: 'Ein "Stranded Asset" der fossilen Ära. Rostende Stahlkolosse im Meer, da Erneuerbare Energien übernommen haben.' }
                ],
                description: 'Förderung fossiler Brennstoffe, der Haupttreiber des Klimawandels.',
                facts: ['Methan-Lecklagen', 'Risiko von Ölkatastrophen', 'CO2-Quelle Nummer 1']
            },
            { id: 'offshore-wind', title: 'Windpark Alpha', x: '60%', y: '0%', type: 'success', icon: 'Wind', size: 200, static: true, startYear: 1991, description: 'Grüne Energiegewinnung durch konstante Küstenwinde.', facts: ['Saubere Energie', 'Keine CO2-Emissionen', 'Wichtiger Pfeiler der Energiewende'] }
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
            // Underwater horizon objects - near surface
            { id: 'desalination-plant', title: 'Meerwasser-Entsalzung', x: '44%', y: '15%', type: 'info', icon: 'Droplets', size: 200, static: true, startYear: 1965, description: 'Wird in Dürre-Regionen überlebenswichtig. Das Problem: Es bleibt hochkonzentrierte, chemisch belastete Salzlauge ("Brine") zurück, die Meeresböden ersticken kann.', facts: ['50% des Wassers wird zu "Brine"', 'Hoher Energieverbrauch', 'Risiko für Küsten-Ökosysteme'] },
            { id: 'wave-energy', title: 'Wellenkraftwerk', x: '60%', y: '22%', type: 'success', icon: 'Waves', size: 180, static: true, startYear: 2005, description: 'Nutzt die kinetische Energie der Wellen zur Stromerzeugung.', facts: ['Nachhaltige Ozean-Energie', 'Schutzraum für Fische', 'Konstante Energiequelle'] },
            { id: 'cargo-tanker', title: 'Industrie-Logistik', x: '80%', y: '0%', type: 'danger', icon: 'Ship', size: 160, static: true, startYear: 1950, description: '90% des Welthandels verursacht massive Schwefelemissionen.', facts: ['Schweröl-Verbrennung', 'Belastung der Weltmeere', 'Lärmverschmutzung für Wale'] },
            { id: 'ai-center', title: 'AI Gigafactory', x: '85%', y: '15%', type: 'danger', icon: 'Cpu', size: 300, static: true, startYear: 2023, description: 'Gigantische Rechenzentren für KI-Modelle. Sie verbrauchen enorme Mengen an Energie und Wasser zur Kühlung.', facts: ['2% globaler Stromverbrauch', 'Kühlungsbedarf durch Meerwasser', 'Wärmebelastung für Küsten-Ökosysteme'] },
            {
                id: 'sea-turtle',
                title: 'Schildkröte',
                x: '20%',
                y: '47%',
                type: 'info',
                icon: 'Shell',
                extinctionYear: 2070,
                timeline: [
                    { maxYear: 2020, suffix: '_healthy', title: 'Relativ stabiler Bestand', description: 'Schildkröten-Populationen erholten sich durch Schutzmaßnahmen regional, stehen aber unter Dauerstress.', condition: { maxPollution: 10 } },
                    { maxYear: 2060, suffix: '', title: 'Gefährdeter Bestand', description: 'Im Jahr 2025 leiden Bestände massiv unter Plastikverschmutzung und dem Verlust von Niststränden durch den Meeresspiegelanstieg. Die Erwärmung des Sands verändert zudem das Geschlechterverhältnis fatal.', condition: { minPollution: 11, maxPollution: 70 } },
                    { maxYear: 2100, suffix: '_critical', title: 'Funktional Ausgestorben', description: 'Nur noch wenige Exemplare in Schutzstationen. In freier Wildbahn kaum mehr anzutreffen.', condition: { minPollution: 71 }, isDead: true }
                ],
                description: 'Meeresschildkröten sind Indikatoren für die Ozeangesundheit. Im Jahr 2025 sind fast alle Exemplare durch Mikroplastik oder Beifang belastet.',
                facts: ['Sanderwärmung (Feminisierung)', 'Plastikmüll in 100% der Proben', 'Verlust von Korallen-Nahrungsgründen']
            },
            {
                id: 'coral-reef',
                title: 'Korallenriff',
                x: '82%',
                y: '80%',
                type: 'danger',
                icon: 'Flower2',
                size: 200,
                extinctionYear: 2050,
                timeline: [
                    { maxYear: 2010, suffix: '_1950', title: 'Intaktes Riff', description: 'Ein farbenprächtiges, intaktes Ökosystem. Bis zur Jahrtausendwende waren die meisten Riffe noch gesund.', condition: { maxTemp: 0.8, minPh: 8.1 } },
                    { maxYear: 2045, suffix: '', title: 'Korallenbleiche', description: 'Im Jahr 2025 erleben wir die vierte globale Korallenbleiche. Temperaturen steigen über die Toleranzschwelle der Symbiose-Algen.', condition: { minTemp: 0.9, maxTemp: 1.9, maxPh: 7.9 } },
                    { maxYear: 2100, suffix: '_2050', title: 'Kollabiertes Riff', description: 'Ein von Algen überwachsenes Skelett eines einst lebendigen Riffs. Die Biodiversität ist zusammengebrochen.', condition: { minTemp: 2.0, maxPh: 7.6 }, isDead: true }
                ],
                description: 'Korallenriffe sind die "Regenwälder der Meere". Im Jahr 2025 sind bereits 50% der weltweiten Korallenbestände verloren gegangen.',
                facts: ['90% Verlust bei +2°C erwartet', 'Heimat für 25% aller Fische', 'Küsten-Schutzschild gegen Stürme']
            },

            {
                id: 'humpback-whale',
                title: 'Buckelwal',
                x: '53%',
                y: '65%',
                type: 'success',
                icon: 'Fish',
                size: 300,
                timeline: [
                    { maxYear: 2040, suffix: '_healthy', title: 'Vulnerable Erholung', description: 'Bestände erholen sich langsam vom kommerziellen Walfang, leiden 2025 aber unter Nahrungsmangel durch schwindenden Krill.', condition: { minFood: 60 } },
                    { maxYear: 2075, suffix: '_starving', title: 'Hungerzustand', description: 'Durch den Kollaps der Plankton-Bestände (Krill) finden Wale nicht mehr genug Nahrung. Die Geburtenraten sinken dramatisch.', condition: { maxFood: 59, minFood: 16 } },
                    { maxYear: 2100, suffix: '_dead', title: 'Bestand Erloschen', description: 'Die Population ist aufgrund des totalen Nahrungsketten-Zusammenbruchs erloschen.', condition: { maxFood: 15 }, isDead: true }
                ],
                description: 'Wale sind gigantische Kohlenstoffspeicher. Im Jahr 2025 sind sie jedoch zunehmend durch Schiffskollisionen und schwindende Nahrungsquellen bedroht.',
                facts: ['"Whale Pump" düngt Plankton', 'Speichert 33 Tonnen CO2 pro Wal', 'Krill-Rückgang bedroht Fortbestand']
            },
            {
                id: 'plastic-island',
                title: 'Great Pacific Garbage Patch',
                x: '35%',
                y: '35%',
                type: 'danger',
                icon: 'Trash2',
                size: 400,
                startYear: 1970,
                timeline: [
                    { maxYear: 2000, suffix: '_early', title: 'Junger Müllstrudel', description: 'Erste Anzeichen einer Akkumulation von Plastikteilen durch Meeresströmungen.', condition: { maxPollution: 20 } },
                    { maxYear: 2040, suffix: '', title: 'Müll Kontinent', description: 'Ein riesiger Müllteppich, dreimal so groß wie Frankreich. Mikroplastik ist allgegenwärtig.', condition: { minPollution: 21, maxPollution: 70 } },
                    { maxYear: 2100, suffix: '_dense', title: 'Plastik-Kollaps', description: 'Der Müll hat sich zu einer dichten Schicht verdichtet. Ein eigenes Ökosystem ("Neopelagic") hat sich auf dem Plastik gebildet.', condition: { minPollution: 71 } }
                ],
                description: 'Ein riesiger Müllstrudel im Pazifik, dreimal so groß wie Frankreich. Mikroplastik-Konzentrationen haben sich dort in wenigen Jahren verzehnfacht.',
                facts: ['>1.5 Mio. Plastikteile pro km²', '94% davon ist Mikroplastik', 'Tausende Tonnen Geisternetze']
            },
            { id: 'overfishing', title: 'Industriefischerei', x: '80%', y: '50%', type: 'danger', icon: 'AlertTriangle', size: 200, startYear: 1950, description: 'Boden-Schleppnetze pflügen den Meeresboden um und setzen dabei riesige Mengen an im Sediment gespeichertem CO2 frei – vergleichbar mit dem gesamten Luftverkehr.', facts: ['Zerstört CO2-Senke Meeresboden', '80% Beifang bei Schleppnetzen', 'Fischbestände kollabieren'] },
            {
                id: 'plankton-map',
                title: 'Phytoplankton',
                x: '10%',
                y: '65%',
                type: 'info',
                icon: 'Map',
                size: 100,
                // New Timeline for Sim
                timeline: [
                    { maxYear: 2040, suffix: '_healthy', title: 'Plankton-Blüte', description: 'Die Grundlage der marinen Nahrungskette ist stabil und produziert 50% unseres Sauerstoffs.', condition: { maxTemp: 1.5, minPh: 8.0 } },
                    { maxYear: 2100, suffix: '_collapse', title: 'Bestands-Kollaps', description: 'Durch Versauerung und Erwärmung bricht die Basis des Nahrungsnetzes weg. Das Meer hungert.', condition: { minTemp: 3.0, maxPh: 7.8 }, isDead: true }
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
            {
                id: 'giant-squid',
                title: 'Riesenkalmar',
                x: '70%',
                y: '60%',
                type: 'info',
                icon: 'Eye',
                size: 200,
                timeline: [
                    { maxYear: 2050, suffix: '', title: 'Gigant der Tiefe', description: 'Lebt in der Dämmerzone und jagt Fische sowie kleinere Kalmare. Erträgt moderate Sauerstoffschwankungen.', condition: { minOxygen: 50 } },
                    { maxYear: 2100, suffix: '_suffocating', title: 'Bestand Erloschen', description: 'Riesenkalmare haben einen hohen Stoffwechsel und reagieren extrem empfindlich auf die Ausdehnung von sauerstoffarmen Zonen.', condition: { maxOxygen: 49 }, isDead: true }
                ],
                description: 'Einer der geheimnisvollsten Bewohner der Dämmerzone, der empfindlich auf sinkende Sauerstoffwerte in der Tiefe (Deoxygenierung) reagiert.',
                facts: ['Augen so groß wie Basketbälle', 'Leidet unter Sauerstoffarmut', 'Klimawandel erweitert "Todeszonen"']
            },
            {
                id: 'ghost-nets',
                title: 'Geisternetze',
                x: '45%',
                y: '40%',
                type: 'danger',
                icon: 'Wind',
                size: 200,
                startYear: 1960,
                timeline: [
                    { maxYear: 2020, suffix: '', title: 'Aktive Falle', description: 'Verlorene Fischernetze "fischen" jahrzehntelang weiter.' },
                    { maxYear: 2100, suffix: '_micro', title: 'Zersetzung', description: 'Die Netze zerfallen zu Mikroplastik, das in die Nahrungskette gelangt.', condition: { minPollution: 60 } }
                ],
                description: 'Verlorene Fischernetze aus Plastik "fischen" jahrzehntelang weiter. Sie bestehen oft aus Nylon, das sich in Mikroplastik zersetzt, aber nicht verschwindet.',
                facts: ['46% des Mülls im Pazifik-Strudel', 'Todesfalle für Robben & Wale', 'Brauchen 600 Jahre zum Abbau']
            },
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
            {
                id: 'anglerfish-deep',
                title: 'Anglerfisch',
                x: '25%',
                y: '35%',
                type: 'info',
                icon: 'Lightbulb',
                timeline: [
                    { maxYear: 2060, suffix: '', title: 'Tiefsee-Jäger', description: 'Nutzt seine Biolumineszenz, um Beute im ewigen Dunkel anzulocken.', condition: { minFood: 31 } },
                    { maxYear: 2100, suffix: '_starving', title: 'Bestand Erloschen', description: 'Wenn der "Meeresschnee" von der Oberfläche ausbleibt, verhungern die Jäger der Tiefe.', condition: { maxFood: 30 }, isDead: true }
                ],
                description: 'Hat eine leuchtende Angel am Kopf entwickelt, um Beute anzulocken.',
                facts: ['Extreme Druckanpassung', 'Parasitäre Paarung', 'Überlebt bei 400 Bar']
            },
            {
                id: 'sperm-whale-dive',
                title: 'Tauchender Pottwal',
                x: '60%',
                y: '20%',
                type: 'info',
                icon: 'Fish',
                size: 330,
                timeline: [
                    { maxYear: 2020, suffix: '_healthy', title: 'Jagender Riese', description: 'Taucht in diese Tiefe ab, um Riesenkalmare zu jagen.', condition: { minFood: 50 } },
                    { maxYear: 2100, suffix: '_starving', title: 'Nahrungsmangel', description: 'Durch den Kollaps der Plankton-Bestände an der Oberfläche fehlt es an Beutetieren in der Tiefe.', condition: { maxFood: 49 } }
                ],
                description: 'Taucht in diese Tiefe ab, um Riesenkalmare zu jagen.',
                facts: ['Taucht bis 3000m tief', 'Hält 90 Min die Luft an', 'Hört Echos im Dunkeln']
            },
            { id: 'marine-snow', title: 'Meeresschnee (Kohlenstoff-Pumpe)', x: '15%', y: '60%', type: 'success', icon: 'Snowflake', description: 'Ein kontinuierlicher Regen aus organischem Material, der CO2 von der Oberfläche in die Tiefe transportiert ("Biologische Kohlenstoffpumpe"). Ozeanversauerung könnte diesen Prozess schwächen.', facts: ['Transportiert Megatonnen CO2', 'Speichert Kohlenstoff für Jahrtausende', 'Nahrungsgrundlage der Tiefsee'] },
            {
                id: 'methane-leak',
                title: 'Methan-Austritt',
                x: '80%',
                y: '20%',
                type: 'danger',
                icon: 'Flame',
                startYear: 1990,
                timeline: [
                    { maxYear: 2030, suffix: '', title: 'Gefrorenes Methan', description: 'In Form von Methanhydrat ("brennendes Eis") ist das Gas im kalten Boden gebunden.', condition: { maxTemp: 1.9 } },
                    { maxYear: 2100, suffix: '_leaking', title: 'Explosive Entgasung', description: 'Durch die Erwärmung des Tiefenwassers werden Hydrate instabil. Das freigesetzte Methan wirkt 80x stärker als CO2.', condition: { minTemp: 2.0 }, isDead: true }
                ],
                description: 'Methan ist als Treibhausgas 25-mal potenter als CO2. Die Arktis und die Tiefsee bergen gigantische Mengen davon in gefrorener Form.',
                facts: ['Treibhaus-Beschleuniger', 'Teufelskreis-Gefahr', 'Wird durch MERLIN überwacht']
            },
            { id: 'hydrothermal-vent', title: 'Schwarzer Raucher', x: '45%', y: '85%', type: 'info', icon: 'Zap', size: 300, description: 'Extrem-Lebensräume, die abhängig von Chemosynthese sind. Sie könnten erste Hinweise liefern, wie Leben unter extremen Klimabedingungen (oder auf anderen Planeten) existiert.', facts: ['Bis zu 400°C heißes Wasser', 'Unabhängig vom Sonnenlicht', 'Symbiose von Bakterien & Tieren'] }
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
                size: 200,
                startYear: 2015,
                timeline: [
                    { maxYear: 2020, suffix: '_pristine', title: 'Unberührtes Mangaufeld', description: 'Noch existiert kein kommerzieller Bergbau. Die Meeresbiologie genießt globalen Schutz durch erste UN-Deklarationen.' },
                    { maxYear: 2045, suffix: '', title: 'Regulierter Abbau', description: 'Die International Seabed Authority (ISA) lässt nach harten Verhandlungen erste Areale zu. Strenge internationale Auflagen sollen die Zerstörung minimieren.' },
                    { maxYear: 2100, suffix: '_dead', title: 'Todeszone', description: 'Trotz "High Seas Treaty" (UN 2023) führte der Hunger nach Rohstoffen zur Zerstörung weiter Gebiete des Meeresbodens.' }
                ],
                description: 'Geplanter Abbau von Manganknollen am Meeresgrund. Das "High Seas Treaty" der UN von 2023 schaffte erste rechtliche Rahmenbedingungen zum Schutz der Meeres-Biodiversität jenseits nationaler Grenzen.',
                facts: ['Internationale Meeresbodenbehörde regelt Abbau', 'Gefahr für den globalen Kohlenstoffspeicher', 'Starker Widerstand durch über 20 Nationen']
            },
            { id: 'sunken-shipwreck', title: 'Tiefsee-Wrack', x: '30%', y: '80%', type: 'info', icon: 'Anchor', size: 300, startYear: 1912, description: 'Kulturelles Erbe, das durch versauerndes Meerwasser schneller korrodiert als erwartet. Bakterien, die Eisen fressen, breiten sich aus.', facts: ['Titanic zerfällt bis 2030', 'Mikrobielles Leben verändert sich', 'Historisches "Zeitfenster" schließt sich'] },
            { id: 'research-lander', title: 'Hadal-Lander Alfie', x: '55%', y: '15%', type: 'info', icon: 'Camera', size: 200, startYear: 2009, description: 'Spezialroboter (wie vom WHOI), die autonom an die tiefsten Stellen der Erde tauchen, um Mikroplastik im Sediment nachzuweisen.', facts: ['Hält dem Druck von 1000 Elefanten stand', 'Beweist: Plastik ist überall', 'Kartiert unbekannte Tiefseegräben'] },
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
            {
                id: 'mariana-snailfish',
                title: 'Hadaler Fisch',
                x: '45%',
                y: '45%',
                type: 'info',
                icon: 'Fish',
                timeline: [
                    { maxYear: 2020, suffix: '', title: 'Pseudo-Liparis', description: 'Überlebt bei Drücken, die kein anderes Wirbeltier aushält.', condition: { maxTemp: 2.0 } },
                    { maxYear: 2100, suffix: '_stressed', title: 'Temperatur-Stress', description: 'Hadaler Snailfish sind an konstante Kälte angepasst. Schon geringe Erwärmungen stören ihre Proteinstabilität.', condition: { minTemp: 2.1 } }
                ],
                description: 'Der tiefstlebende Fisch (Pseudoliparis swirei) wurde in 8.178m Tiefe gefilmt. Er zeigt, dass Leben sich an extremste Bedingungen anpassen kann – aber nicht an schnelle Umweltveränderungen.',
                facts: ['Keine Schuppen, gelatineartiger Körper', 'Enormer Druck hält Proteine stabil', 'Empfindlich gegen Temperaturänderung']
            },
            { id: 'plastic-bag-deep', title: 'Einsame Plastiktüte', x: '55%', y: '85%', type: 'danger', icon: 'ShoppingBag', size: 120, startYear: 1990, description: 'Victor Vescovo fand bei seinem Rekord-Tauchgang 2019 im Challenger Deep (10.928m) eine Plastiktüte & Bonbonpapier. Der tiefste Punkt der Erde ist vermüllt.', facts: ['Plastik in 11km Tiefe bestätigt', 'Hadale Zone ist eine "Plastik-Falle"', 'Mikroplastik in Amphipoden gefunden'] },
            { id: 'deepsea-challenger', title: 'Deepsea Challenger', x: '25%', y: '25%', type: 'info', icon: 'Target', size: 200, startYear: 2012, description: 'James Camerons U-Boot (2012). Nur 4 Menschen waren je am tiefsten Punkt der Erde – weniger als auf dem Mond (12). Die Tiefsee ist weitgehend unerforscht.', facts: ['Tauchte auf 10.908m', 'Sammelte Sedimentproben', 'Mehr Menschen auf dem Mond als hier'] },
            {
                id: 'hadal-amphipod',
                title: 'Riesen-Flohkrebs',
                x: '75%',
                y: '60%',
                type: 'info',
                icon: 'Bug',
                timeline: [
                    { maxYear: 1980, suffix: '', title: 'Unberührter Krebs', description: 'Lebt in der extremen Tiefe von herabsinkender Biomasse.', condition: { maxPollution: 50 } },
                    { maxYear: 2100, suffix: '_toxic', title: 'Chemiebelastung', description: 'Wissenschaftler fanden enorme Konzentrationen an PCBs und Mikroplastik in Amphipoden der Hadal-Zone.', condition: { minPollution: 51 } }
                ],
                description: 'Selbst in 11km Tiefe haben Forscher in diesen Tieren menschengemachte Chemikalien (PCBs) und Mikroplastik gefunden. Es gibt keinen unberührten Ort mehr.',
                facts: ['"Müllschlucker" der Tiefsee', 'PCBs im Körpergewebe nachgewiesen', 'Fressen abgesunkenes Plastik']
            },
            { id: 'trench-sonar', title: 'Hadaler Kohlenstoff', x: '10%', y: '70%', type: 'info', icon: 'Scan', startYear: 2010, description: 'Neueste Studien zeigen: Tiefseegräben sind Fallen für "Black Carbon" (Ruß). Sie lagern mehr Kohlenstoff ein als bisher angenommen und sind wichtig für das globale Klima.', facts: ['Speichert "Black Carbon" dauerhaft', 'Wichtiger als bisher gedacht', 'Erdbeben begraben organische Stoffe'] },
            { id: 'subduction-fault', title: 'Subduktions-Riss', x: '50%', y: '95%', type: 'danger', icon: 'Zap', size: 250, description: 'Stelle an der die Pazifische Platte unter die Marianen-Platte abtaucht.', facts: ['Ursprung schwerer Erdbeben', 'Schlingt gewaltige Mengen Wasser ein', 'Tiefster tektonischer Prozess'] },
            { id: 'hydrothermal-tubeworms', title: 'Hadale Röhrenwürmer', x: '85%', y: '85%', type: 'info', icon: 'Bug', description: 'Spezialisierte Lebensformen an extremen Tiefsee-Schloten.', facts: ['Leben in absoluter Dunkelheit', 'Nutzen chemische Energie', 'Symbiose mit Bakterien'] }
        ]
    }
];
