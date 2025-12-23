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
            { id: 'satellite-graveyard', title: 'Satelliten-Friedhof', x: '15%', y: '25%', type: 'danger', icon: 'Satellite', description: 'Tausende inaktive Satelliten bilden einen gefährlichen Gürtel um die Erde.', facts: ['12.000+ Satelliten im Orbit', 'Zunahme durch Mega-Konstellationen', 'Gefahr für bemannte Raumfahrt'] },
            { id: 'solar-wind', title: 'Solar Wind Sensor', x: '75%', y: '15%', type: 'info', icon: 'Sun', description: 'Misst hochenergetische Teilchen der Sonne, die das Erdklima im Jahr 2025 stark beeinflussen.', facts: ['Partikelstrom der Sonne', 'Gefahr für Stromnetze', 'Wichtiger Klimafaktor'] },
            { id: 'iss-research', title: 'ISS ECOSTRESS', x: '55%', y: '45%', type: 'info', icon: 'Orbit', description: 'Ein NASA-Instrument auf der ISS, das die Verdunstung von Pflanzen misst, um Dürren vorherzusagen.', facts: ['ECOSTRESS: Thermal-Infrarot-Sensor', 'Optimiert Bewässerung weltweit', 'Daten für Nahrungsmittelsicherheit'] },
            { id: 'space-junk-cluster', title: 'Trümmer-Feld', x: '35%', y: '65%', type: 'danger', icon: 'AlertTriangle', description: 'Überreste alter Satelliten, die im Jahr 2025 eine ernsthafte Bedrohung für die Raumfahrt darstellen.', facts: ['Kessler-Syndrom-Gefahr', 'Über 20.000 Fragmente überwacht', 'Gefahr für bemannte Stationen'] },
            { id: 'climate-sentinel', title: 'Sentinel-6', x: '85%', y: '70%', type: 'success', icon: 'Radio', description: 'Ein europäisch-amerikanischer Satellit, der den Meeresspiegelanstieg mit Millimeterpräzision überwacht.', facts: ['Misst Pegelanstieg seit 2020', 'Radar-Altimetrie-Technik', 'Basis für UN-Klimaberichte'] },
            { id: 'solar-observatory', title: 'Parker Solar Probe', x: '45%', y: '10%', type: 'info', icon: 'Telescope', description: 'Die NASA-Sonde, die im Jahr 2025 die Sonne so nah wie nie zuvor umkreist, um Sonnenwind-Ursprünge zu erforschen.', facts: ['Berührt die Sonnenatmosphäre', 'Schutzschild hält 1.400°C aus', 'Daten zur Sonnenkorona'] },
            { id: 'magnetosphere-sentinel', title: 'MMS-Mission', x: '5%', y: '10%', type: 'info', icon: 'Shield', description: 'Vier NASA-Satelliten (Magnetospheric Multiscale), die die magnetische Rekonnektion im Erdschild untersuchen.', facts: ['Kartiert magnetische Stürme', 'Verständnis der Polarlichter', 'Schutz vor Teilchenstrahlung'] },
            { id: 'cosmic-ray-observatory', title: 'AMS-02 (ISS)', x: '25%', y: '5%', type: 'info', icon: 'Zap', description: 'Das Alpha-Magnet-Spektrometer auf der ISS sucht nach Antimaterie und Dunkler Materie im Universum.', facts: ['Präzisester Teilchendetektor im All', 'Leitung durch Nobelpreisträger Samuel Ting', 'Sucht Ursprung des Kosmos'] }
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
            { id: 'ionosphere-drag', title: 'Ionosphären-Widerstand', x: '25%', y: '50%', type: 'danger', icon: 'Wind', description: 'Gase in der Thermosphäre bremsen Satelliten ab, was zu Abstürzen führen kann.', facts: ['Zunahme durch Sonnenaktivität', 'Atmosphärisches Aufblähen', 'Lebensdauerverkürzung für LEO-Sats'] },
            { id: 'starlink-train', title: 'Starlink-Kette', x: '75%', y: '65%', type: 'danger', icon: 'Wifi', description: 'Die Lichtverschmutzung durch Tausende Satelliten stört die Astronomie weltweit.', facts: ['Beeinträchtigt Sternwarten', 'Risiko für Kollisionen wächst', 'Sichtbarkeit mit bloßem Auge'] },
            { id: 'space-weather-buoy', title: 'DSCOVR Satellit', x: '15%', y: '20%', type: 'info', icon: 'Radio', description: 'Ein Satellit am Lagrange-Punkt L1, der das Weltraumwetter und die Erdatmosphäre (EPIC) überwacht.', facts: ['Misst Sonnenstürme in Echtzeit', 'Position 1,5 Mio. km von Erde', 'Warnsystem für Mobilfunk & Strom'] },
            { id: 'micrometeoroid-explorer', title: 'Odin Nano-Sensor', x: '85%', y: '10%', type: 'info', icon: 'ShieldAlert', description: 'Innovative Sensoren zur Detektion kleinster Einschläge von Weltraumschrott und Meteoroiden im Jahr 2025.', facts: ['Entwickelt von Odin Space', 'Überwacht strukturelle Integrität', 'Frühwarnung vor Mikroschäden'] }
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
            { id: 'noctilucent-clouds', title: 'Leuchtende Wolken', x: '50%', y: '35%', type: 'info', icon: 'Cloud', description: 'Eiskristallwolken in der kältesten Region der Atmosphäre (bis -90°C).', facts: ['Höchste Wolken der Welt', 'Häufiger durch Methan-Zunahme', 'Leuchten tief in der Nacht'] },
            { id: 'meteors-burn', title: 'Meteorschlag', x: '20%', y: '60%', type: 'info', icon: 'Zap', description: 'Hier verglühen die meisten Meteore durch Reibungshitze.', facts: ['Schutzschild der Erde', 'Erzeugt Meteorsubstanz-Rauch', 'Ionisationsspuren messbar'] },
            { id: 'red-sprites', title: 'Red Sprites', x: '80%', y: '50%', type: 'info', icon: 'Flame', description: 'Mysteriöse elektrische Entladungen über schweren Gewitterzellen.', facts: ['Dauern nur Millisekunden', 'Über 50km hoch', 'Indikator für Extremwetter'] },
            { id: 'meteor-trail-sensor', title: 'MAARSY-Radar', x: '10%', y: '15%', type: 'info', icon: 'Target', description: 'Das Middle Atmosphere Alomar Radar System misst Meteoritenschweife und Winde in 80-100 km Höhe.', facts: ['Analysiert Weltraumstaub-Eintragsrate', '3D-Messung der Mesosphäre', 'Größte Antennenanlage im Norden'] }
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
            { id: 'ozone-layer', title: 'Ozonschicht', x: '50%', y: '35%', type: 'success', icon: 'ShieldCheck', description: 'Schützt alles Leben auf der Erde vor krebserregender UV-Strahlung.', facts: ['Montreal-Protokoll: Ein Erfolg', 'Ozonloch schließt sich langsam', 'Wichtig für Erdatmosphäre'] },
            { id: 'weather-balloon', title: 'Klimaballon', x: '25%', y: '60%', type: 'info', icon: 'Wind', description: 'Radiosonden messen CO2-Gehalt und Temperatur in extremer Höhe.', facts: ['Wichtige Daten für Vorhersagen', 'Bis 40km Höhe', 'Unverzichtbar für Klimamodelle'] },
            { id: 'jet-stream', title: 'Jetstream-Dynamik', x: '75%', y: '45%', type: 'danger', icon: 'MoveLeft', description: 'Der polare Jetstream wird instabiler, was zu extremen Hitzewellen führt.', facts: ['Verschiebung durch Klimawandel', 'Ursache für stationäre Wetterlagen', 'Beeinflusst Flugzeiten massiv'] },
            { id: 'ozone-sampling-drone', title: 'Global Hawk (NASA)', x: '10%', y: '25%', type: 'info', icon: 'Plane', description: 'Unbemannte Forschungsdrohne, die in der Stratosphäre Schadstoffe und Ozonkonzentrationen sammelt.', facts: ['Fliegt über 20 km Höhe', 'Kein Pilot an Bord nötig', 'Dauereinsätze von 30+ Stunden'] },
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
            { id: 'co2-buildup', title: 'CO2-Anstieg', x: '40%', y: '30%', type: 'danger', icon: 'AlertCircle', description: 'Die höchste Konzentration von Treibhausgasen seit Millionen von Jahren.', facts: ['425 ppm erreicht', 'Treibt globale Erwärmung', 'Verweilt Jahrhunderte'] },
            { id: 'mega-storm', title: 'Superzelle', x: '15%', y: '45%', type: 'danger', icon: 'CloudLightning', description: 'Häufigere und stärkere Gewitter durch zusätzliche Wärmeenergie.', facts: ['Mehr Energie in der Luft', 'Hagel & Sturzfluten nehmen zu', 'Milliarden an Sachschäden'] },
            { id: 'aviation-impact', title: 'Flugverkehr', x: '80%', y: '25%', type: 'danger', icon: 'Plane', description: 'Kondensstreifen wirken wie Treibhausgase und erwärmen die Atmosphäre zusätzlich.', facts: ['Non-CO2 Effekte sind massiv', 'Zunehmender Tourismusdruck', 'Kerosin-Besteuerung fehlt'] },
            { id: 'forest-fire-smoke', title: 'Waldbrand-Säule', x: '70%', y: '65%', type: 'danger', icon: 'Flame', description: 'Riesige Brände setzen gigantische Mengen CO2 frei.', facts: ['Amazonas-Problem', 'Feedback-Loop: Feuer -> CO2', 'Feinstaub belastet Städte'] },
            { id: 'lidar-tower', title: 'Lidar-Turm', x: '35%', y: '85%', type: 'info', icon: 'TowerControl', description: 'Lasersysteme messen Aerosole und Wolkenhöhe in Echtzeit.', facts: ['Misst Luftverschmutzung', 'Daten für Wetterberichte', 'Präzise Aerosol-Bestimmung'] },
            { id: 'cloud-seeding-plane', title: 'Wolkensäer', x: '55%', y: '15%', type: 'info', icon: 'Plane', description: 'Versuche der Wettermanipulation durch das Einbringen von Salzen.', facts: ['GEO-Engineering Versuch', 'Soll Regen künstlich erzeugen', 'Umweltfolgen oft unklar'] },
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
            { id: 'rocket-base', title: 'Raketenrampe', x: '8%', y: '50%', type: 'vehicle', icon: 'Rocket', static: true, description: 'Technologie zur Überwachung des Klimas aus dem Weltraum.', facts: ['Erdbeobachtungsprogramme', 'CO2-Mess-Missionen', 'Startplatz für Forschung'] },
            { id: 'sub-dock', title: 'Deepsea Dock', x: '24%', y: '50%', type: 'vehicle', icon: 'Anchor', static: true, description: 'Einsatzort für autonome Forschungs-U-Boote.', facts: ['Vermessung der Tiefsee', 'Probennahme für Klimaforschung', 'Station für Tiefseemissionen'] },
            { id: 'oil-platform', title: 'Öl-Plattform', x: '40%', y: '50%', type: 'danger', icon: 'Factory', static: true, description: 'Förderung fossiler Brennstoffe, der Haupttreiber des Klimawandels.', facts: ['Methan-Lecklagen', 'Risiko von Ölkatastrophen', 'CO2-Quelle Nummer 1'] },
            { id: 'offshore-wind', title: 'Windpark Alpha', x: '56%', y: '50%', type: 'success', icon: 'Wind', static: true, description: 'Grüne Energiegewinnung durch konstante Küstenwinde.', facts: ['Saubere Energie', 'Keine CO2-Emissionen', 'Wichtiger Pfeiler der Energiewende'] },
            { id: 'ai-center', title: 'Cloud-Kollektor', x: '72%', y: '50%', type: 'danger', icon: 'Cpu', static: true, description: 'Enormer Energieverbrauch durch KI-Rechenzentren an der Küste.', facts: ['2% globaler Stromverbrauch', 'Kühlungsbedarf durch Meerwasser', 'Digitale Dekarbonisierung nötig'] },
            { id: 'cargo-tanker', title: 'Industrie-Logistik', x: '88%', y: '50%', type: 'danger', icon: 'Ship', static: true, description: '90% des Welthandels verursacht massive Schwefelemissionen.', facts: ['Schweröl-Verbrennung', 'Belastung der Weltmeere', 'Lärmverschmutzung für Wale'] },
            { id: 'desalination-plant', title: 'Salzwasser-Werk', x: '48%', y: '50%', type: 'info', icon: 'Droplets', static: true, description: 'Wandelt Meerwasser in Trinkwasser um, um Dürren zu bekämpfen.', facts: ['Nötig durch Klimadürren', 'Hoher Energiebedarf', 'Sole-Abfall belastet Meer'] },
            { id: 'wave-energy', title: 'Wellenkraftwerk', x: '64%', y: '50%', type: 'success', icon: 'Waves', static: true, description: 'Nutzt die kinetische Energie der Wellen zur Stromerzeugung.', facts: ['Nachhaltige Ozean-Energie', 'Schutzraum für Fische', 'Konstante Energiequelle'] }
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
            { id: 'sea-turtle', title: 'Schildkröte', x: '20%', y: '25%', type: 'info', icon: 'Shell', extinctionYear: 2070, description: 'Meeresschildkröten leiden massiv unter der Plastikverschmutzung.', facts: ['Verwechseln Tüten mit Quallen', 'Zerstörung von Niststränden', 'Bestand sinkt weltweit'] },
            { id: 'coral-reef', title: 'Korallenriff', x: '82%', y: '80%', type: 'danger', icon: 'Flower2', extinctionYear: 2050, description: 'Sterbende Korallenriffe durch zu hohe Wassertemperaturen (Bleiche).', facts: ['90% Verlust droht bis 2050', 'Heimat für 25% aller Fische', 'Küsten-Schutzschild'] },
            { id: 'humpback-whale', title: 'Buckelwal', x: '50%', y: '50%', type: 'success', icon: 'Fish', description: 'Wale speichern enorme Mengen CO2 in ihrem Körper.', facts: ['Dünger für Phytoplankton', 'Ein "biologischer CO2-Filter"', 'Gefährdet durch Schiffslärm'] },
            { id: 'plastic-island', title: 'Plastik-Insel', x: '35%', y: '15%', type: 'danger', icon: 'Trash2', description: 'Riesige Wirbel aus Plastikmüll treiben im offenen Ozean.', facts: ['Großer Pazifischer Müllwirbel', 'Tötet Seevögel & Säuger', 'Wird zu Mikroplastik'] },
            { id: 'overfishing', title: 'Industriefischerei', x: '65%', y: '35%', type: 'danger', icon: 'AlertTriangle', description: 'Industrielle Schleppnetze zerstören das ökologische Gleichgewicht.', facts: ['Beifang vernichtet Arten', 'Leere Meere bis 2048 möglich', 'Zerstört Boden-Ökosysteme'] },
            { id: 'plankton-map', title: 'Plankton-Map', x: '10%', y: '65%', type: 'info', icon: 'Map', description: 'Kartierung der Phytoplankton-Konzentration, der Lunge des Ozeans.', facts: ['Liefert 50% des Erdsauerstoffs', 'Sinkt durch Erwärmung', 'Wichtigster CO2-Speicher'] }
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
            { id: 'bioluminescence-jelly', title: 'Leuchtqualle', x: '30%', y: '25%', type: 'info', icon: 'Waves', description: 'Nutzt Biolumineszenz zur Kommunikation und Jagd.', facts: ['Ganze Schwärme leuchten', 'Profitiert von wärmerem Wasser', 'Bestand nimmt massiv zu'] },
            { id: 'giant-squid', title: 'Riesenkalmar', x: '70%', y: '60%', type: 'info', icon: 'Eye', description: 'Einer der geheimnisvollsten Bewohner der Dämmerzone.', facts: ['Augen so groß wie Basketbälle', 'Jagt in der Dunkelheit', 'Wichtiges Glied der Nahrungskette'] },
            { id: 'ghost-nets', title: 'Geisternetze', x: '45%', y: '40%', type: 'danger', icon: 'Wind', description: 'Verlorene Fischernetze fangen jahrelang unkontrolliert weiter.', facts: ['Todesfalle für Robben & Wale', 'Tausende Tonnen im Meer', 'Sehr langsam verrottend'] },
            { id: 'acoustic-monitoring', title: 'Schall-Station', x: '15%', y: '75%', type: 'info', icon: 'Mic', description: 'Überwacht den marinen Lärmteppich durch Schifffahrt und Bohrungen.', facts: ['Identifiziert Walgesänge', 'Misst Lärmbelastung', 'Wichtig für Artenschutz'] }
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
            { id: 'sperm-whale-dive', title: 'Tauchender Pottwal', x: '60%', y: '20%', type: 'info', icon: 'Fish', description: 'Taucht in diese Tiefe ab, um Riesenkalmare zu jagen.', facts: ['Taucht bis 3000m tief', 'Hält 90 Min die Luft an', 'Hört Echos im Dunkeln'] },
            { id: 'marine-snow', title: 'Meeresschnee', x: '15%', y: '60%', type: 'success', icon: 'Snowflake', description: 'Organisches Material sinkt wie Schnee ab und speichert CO2.', facts: ['Kohlenstoffpumpe des Meeres', 'Nahrung für Tiefseeleben', 'Wichtiger Speicherprozess'] },
            { id: 'methane-seepage', title: 'Methan-Austritt', x: '75%', y: '80%', type: 'danger', icon: 'Flame', description: 'Methanhaltiges Gas tritt aus dem Meeresboden aus.', facts: ['Gas als Treibhaus-Gefahr', 'Spezielle Lebensgemeinschaften', 'Zunahme durch Erwärmung'] },
            { id: 'hydrothermal-vent', title: 'Schwarzer Raucher', x: '45%', y: '85%', type: 'info', icon: 'Zap', description: 'Heiße Quellen am Meeresboden bilden die Basis einzigartiger Ökosysteme.', facts: ['Bis zu 400°C heißes Wasser', 'Chemosynthese statt Photosynthese', 'Ursprung des Lebens?'] }
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
            { id: 'nodule-mining', title: 'Tiefsee-Bergbau', x: '75%', y: '65%', type: 'danger', icon: 'HardHat', description: 'Industrieller Abbau von Manganknollen zerstört unwiederbringlich Lebensräume.', facts: ['Sedimentwolken ersticken Leben', 'Lärm & Licht stören Balance', 'Bedroht pharmazeutische Quellen'] },
            { id: 'sunken-shipwreck', title: 'Tiefsee-Wrack', x: '20%', y: '80%', type: 'info', icon: 'Anchor', description: 'Bietet neuen Lebensraum, kann aber Chemikalien freisetzen.', facts: ['Bünstliche Riff-Bildung', 'Korrosions-Risiken', 'Historisches Zeitkapsel-Ende'] },
            { id: 'research-lander', title: 'Hadal-Lander Alfie', x: '55%', y: '15%', type: 'info', icon: 'Camera', description: 'Ein spezialisierter autonomer Mess-Lander (WHOI), der am Grund von Tiefseegräben unter extremem Druck forscht.', facts: ['Autonome Probenahme bei 1100 Bar', 'Überwacht Sauerstoff-Dynamik', 'Technologie für "Challenger Deep"'] },
            { id: 'xenophyophore-colony', title: 'Xenophyophoren', x: '45%', y: '90%', type: 'info', icon: 'Shapes', description: 'Gigantische Einzeller (bis 20cm), die den Meeresboden besiedeln.', facts: ['Entgiftung von Schwermetallen', 'Bauen komplexe Gehäuse aus Schlick', 'Wichtig für den Kohlenstoffkreislauf'] },
            { id: 'hadal-brine-pool', title: 'Hadale Sole-See', x: '10%', y: '95%', type: 'danger', icon: 'Waves', description: 'Unterwasserseen mit extrem hoher Salzkonzentration, in denen kaum Leben existiert.', facts: ['Emanation aus tektonischen Rissen', 'Tödlich für die meisten Tiefsee-Tiere', 'Erhaltung von uralten Mikroben'] }
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
            { id: 'mariana-snailfish', title: 'Hadaler Fisch', x: '45%', y: '45%', type: 'info', icon: 'Fish', description: 'Der tiefstlebende Fisch der Welt bei fast 1100 Bar Druck.', facts: ['Durchsichtige Haut', 'Flexible Knochenstrukturen', 'Überlebt unmögliche Bedingungen'] },
            { id: 'plastic-bag-deep', title: 'Einsame Plastiktüte', x: '55%', y: '85%', type: 'danger', icon: 'ShoppingBag', description: 'Selbst am tiefsten Punkt der Erde wurde menschlicher Müll gefunden.', facts: ['Gefunden im Challenger Deep', 'Symbol globaler Ignoranz', 'Hunderte Jahre haltbar'] },
            { id: 'deepsea-challenger', title: 'Deepsea Challenger', x: '25%', y: '25%', type: 'info', icon: 'Target', description: 'Das Ein-Mann-U-Boot, das zum Grund des Grabens tauchte.', facts: ['James Camerons Mission', 'Nur wenige Menschen waren dort', 'Hält extremsten Drücken stand'] },
            { id: 'hadal-amphipod', title: 'Riesen-Flohkrebs', x: '75%', y: '60%', type: 'info', icon: 'Bug', description: 'Wird in dieser Tiefe ungewöhnlich groß (Tiefseeriese).', facts: ['Aasfresser der Tiefsee', 'Recycelt Meeresschnee', 'Wird bis zu 30cm groß'] },
            { id: 'trench-sonar', title: 'Hadaler Sonar', x: '10%', y: '70%', type: 'info', icon: 'Scan', description: 'Präzisions-Sonar zur Kartierung des tiefsten Meeresgrundes.', facts: ['Findet neue Gräben', 'Misst tektonische Platten', 'Hochfrequenz-Mapping'] },
            { id: 'subduction-fault', title: 'Subduktions-Riss', x: '50%', y: '95%', type: 'danger', icon: 'Zap', description: 'Stelle an der die Pazifische Platte unter die Marianen-Platte abtaucht.', facts: ['Ursprung schwerer Erdbeben', 'Schlingt gewaltige Mengen Wasser ein', 'Tiefster tektonischer Prozess'] },
            { id: 'hydrothermal-tubeworms', title: 'Hadale Röhrenwürmer', x: '85%', y: '85%', type: 'info', icon: 'Bug', description: 'Spezialisierte Lebensformen an extremen Tiefsee-Schloten.', facts: ['Leben in absoluter Dunkelheit', 'Nutzen chemische Energie', 'Symbiose mit Bakterien'] }
        ]
    }
];
