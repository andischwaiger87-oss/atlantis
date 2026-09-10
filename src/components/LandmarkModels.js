import * as T from 'three';

// All expedition objects are geometry. Materials share the vehicles' restrained palette.
export const MODEL_IDS = ['offshore-wind', 'cargo-tanker', 'oil-platform', 'ai-center', 'ocean-heat', 'climate-sentinel', 'space-junk-cluster', 'solar-observatory', 'iss-research', 'aurora-borealis', 'noctilucent-clouds', 'meteors-burn', 'ozone-layer', 'weather-balloon', 'co2-buildup', 'mega-storm', 'forest-fire-smoke', 'aviation-impact', 'sea-turtle', 'coral-reef', 'plankton-map', 'plastic-island', 'ocean-acid', 'bioluminescence-jelly', 'vertical-migration', 'ghost-nets', 'marine-snow', 'hydrothermal-vent', 'sperm-whale-dive', 'nodule-mining', 'research-lander', 'mariana-snailfish', 'subduction-fault'];
export function createLandmarkModel(id) {
  const root = new T.Group(),
    animated = [];
  const materials = [];
  const mat = (color, metalness = .35, roughness = .4, extra = {}) => {
    const m = new T.MeshStandardMaterial({
      color,
      metalness,
      roughness,
      ...extra
    });
    materials.push(m);
    return m;
  };
  const silver = mat(0xa9c3c9, .75, .3),
    white = mat(0xd6e5e0, .35, .35),
    dark = mat(0x15343f, .65, .4),
    blue = mat(0x326477, .6, .3),
    gold = mat(0xbca17a, .65, .38),
    glow = mat(0x88dbc9, .1, .4, {
      emissive: 0x49b6aa,
      emissiveIntensity: 1.3
    }),
    rock = mat(0x263c43, .1, .9);
  const mesh = (g, geo, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => {
    const o = new T.Mesh(geo, m);
    o.position.set(x, y, z);
    o.scale.set(sx, sy, sz);
    g.add(o);
    return o;
  };
  const ball = (g, m, x, y, z, sx, sy = sx, sz = sx) => mesh(g, new T.SphereGeometry(1, 20, 12), m, x, y, z, sx, sy, sz);
  const box = (g, m, x, y, z, sx, sy, sz) => mesh(g, new T.BoxGeometry(sx, sy, sz), m, x, y, z);
  const rod = (g, m, a, b, r = .035) => {
    const from = new T.Vector3(...a),
      to = new T.Vector3(...b);
    const o = mesh(g, new T.CylinderGeometry(r, r, from.distanceTo(to), 8), m);
    o.position.copy(from.clone().add(to).multiplyScalar(.5));
    o.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), to.sub(from).normalize());
    return o;
  };
  const line = (g, m, points, r = .025) => mesh(g, new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p => new T.Vector3(...p))), 24, r, 6, false), m);
  const ring = (g, m, x, y, z, r = .5, t = .025) => mesh(g, new T.TorusGeometry(r, t, 8, 40), m, x, y, z);
  const fins = (g, m, x, y, z, size) => {
    const s = new T.Shape();
    s.moveTo(0, 0);
    s.quadraticCurveTo(size, -size * .7, 0, -size);
    s.lineTo(-size * .16, -size * .25);
    const o = mesh(g, new T.ExtrudeGeometry(s, {
      depth: .045,
      bevelEnabled: true,
      bevelSize: .025,
      bevelThickness: .025,
      bevelSegments: 1,
      steps: 1
    }), m, x, y, z);
    return o;
  };
  const solarPanel = (g, x, y, z) => {
    box(g, dark, x, y, z, 1.1, .66, .055);
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) box(g, blue, x - .44 + i * .22, y - .22 + j * .22, z + .035, .19, .19, .02);
  };
  const reefMaterials = [];
  const coral = (offset = 0) => {
    for (let n = 0; n < 7; n++) {
      const m = mat([0x7aada3, 0xb49b89, 0x6a999c][n % 3], .08, .75);
      reefMaterials.push({
        m,
        color: m.color.clone()
      });
      const x = (n - 3) * .22;
      rod(root, m, [x, -.4, offset], [x + .08, .05 + n % 3 * .13, offset], .048);
      for (let j = 0; j < 3; j++) {
        const y = -.1 + j * .15;
        const side = j % 2 ? 1 : -1;
        rod(root, m, [x, y, offset], [x + side * .22, y + .23, offset + .06], .032);
        rod(root, m, [x + side * .15, y + .16, offset + .04], [x + side * .28, y + .28, offset + .02], .021);
      }
    }
    ball(root, rock, 0, -.49, offset, .95, .12, .42);
  };
  const satellite = () => {
    box(root, silver, 0, 0, 0, .55, .7, .5);
    box(root, gold, 0, -.05, .28, .42, .42, .035);
    solarPanel(root, -1.05, 0, 0);
    solarPanel(root, 1.05, 0, 0);
    rod(root, silver, [-1.5, 0, 0], [1.5, 0, 0]);
    ring(root, white, 0, .57, .08, .24, .04);
    rod(root, silver, [0, .35, 0], [0, .86, 0], .02);
  };
  if (id === 'offshore-wind') {
    mesh(root, new T.CylinderGeometry(.045, .085, 1.9, 16), white, 0, .95, 0);
    box(root, dark, 0, 1.93, 0, .17, .12, .28);
    const rotor = new T.Group();
    rotor.position.set(0, 1.93, .19);
    root.add(rotor);
    ball(rotor, silver, 0, 0, 0, .09);
    for (let i = 0; i < 3; i++) {
      const blade = new T.Group();
      blade.rotation.z = i * Math.PI * 2 / 3;
      rotor.add(blade);
      const s = new T.Shape();
      s.moveTo(-.045, .06);
      s.lineTo(-.08, .3);
      s.quadraticCurveTo(-.07, .68, .015, .87);
      s.lineTo(.04, .23);
      s.lineTo(.02, .05);
      mesh(blade, new T.ExtrudeGeometry(s, {
        depth: .025,
        bevelEnabled: false
      }), white);
    }
    animated.push(t => rotor.rotation.z = -t * .20);
    ring(root, blue, 0, 0, 0, .24, .014).rotation.x = Math.PI / 2;
  } else if (id === 'cargo-tanker') {
    const shape = new T.Shape();
    shape.moveTo(-1.45, .1);
    shape.lineTo(1.45, .1);
    shape.lineTo(1.12, -.25);
    shape.lineTo(-1.22, -.25);
    shape.closePath();
    mesh(root, new T.ExtrudeGeometry(shape, {
      depth: .58,
      bevelEnabled: true,
      bevelSize: .065,
      bevelThickness: .045,
      steps: 1,
      bevelSegments: 2
    }), dark, 0, .23, -.3);
    box(root, silver, 0, .38, 0, 2.6, .07, .64);
    for (let i = 0; i < 6; i++) for (let j = 0; j < 2; j++) for (let k = 0; k < (i % 3 === 0 ? 1 : 2); k++) {
      const m = [blue, gold, silver][(i + j + k) % 3];
      box(root, m, -.6 + i * .29, .49 + k * .17, -.18 + j * .34, .27, .16, .3);
      for (let q = 0; q < 3; q++) rod(root, dark, [-.71 + i * .29 + q * .07, .42 + k * .17, .34], [-.71 + i * .29 + q * .07, .55 + k * .17, .34], .005);
    }
    box(root, white, -1, .65, 0, .34, .5, .5);
    box(root, dark, -.98, .86, .26, .32, .1, .025);
    rod(root, silver, [-1, .9, 0], [-1, 1.25, 0], .018);
    box(root, dark, -.75, .92, -.1, .13, .36, .14);
    animated.push(t => root.rotation.z = Math.sin(t * .65) * .012);
  } else if (id === 'oil-platform') {
    for (const x of [-.65, .65]) for (const z of [-.36, .36]) {
      mesh(root, new T.CylinderGeometry(.095, .115, .7, 12), silver, x, .35, z);
      rod(root, dark, [x, 0, z], [-x, .65, z], .025);
    }
    box(root, white, 0, .78, 0, 1.7, .15, 1);
    box(root, blue, -.46, .99, 0, .45, .28, .5);
    for (const z of [-.2, .2]) {
      rod(root, silver, [.05, .85, z], [.28, 2.15, z * .25]);
      rod(root, silver, [.55, .85, z], [.28, 2.15, z * .25]);
      for (let i = 0; i < 5; i++) rod(root, dark, [.05 + i * .04, .95 + i * .22, z], [.5 - i * .04, 1.17 + i * .22, z]);
    }
    for (const side of [-1, 1]) {
      rod(root, gold, [side * .67, .85, .12], [side * .99, 1.65, .12], .045);
      rod(root, gold, [side * .99, 1.65, .12], [side * 1.3, 1.4, .12], .025);
      rod(root, dark, [side * 1.3, 1.4, .12], [side * 1.3, .94, .12], .012);
    }
    for (const z of [-.48, .48]) {
      rod(root, silver, [-.85, .98, z], [.85, .98, z], .014);
      for (let i = 0; i < 7; i++) rod(root, silver, [-.8 + i * .26, .85, z], [-.8 + i * .26, .98, z], .01);
    }
    ball(root, glow, .28, 2.18, 0, .035);
  } else if (['climate-sentinel', 'solar-observatory'].includes(id)) {
    satellite();
    if (id === 'solar-observatory') {
      mesh(root, new T.CylinderGeometry(.65, .65, .08, 32), dark, 0, .25, .5).rotation.x = Math.PI / 2;
      ring(root, gold, 0, .25, .56, .64, .03);
    }
    animated.push(t => root.rotation.y = -.2 + Math.sin(t * .12) * .16);
  } else if (id === 'iss-research') {
    for (let i = 0; i < 4; i++) {
      const o = mesh(root, new T.CylinderGeometry(.16, .16, .7, 16), white, -.65 + i * .43, 0, 0);
      o.rotation.z = Math.PI / 2;
      ring(root, dark, -.65 + i * .43, 0, 0, .17, .022).rotation.y = Math.PI / 2;
    }
    rod(root, silver, [-1.5, .2, 0], [1.5, .2, 0]);
    for (const x of [-1.25, -.65, .65, 1.25]) for (const y of [-.6, .7]) solarPanel(root, x, y, 0);
    root.scale.setScalar(.8);
  } else if (id === 'space-junk-cluster') {
    for (let i = 0; i < 14; i++) {
      const g = new T.Group();
      g.position.set(Math.sin(i * 2.4) * 1.1, Math.cos(i * 1.8) * .65, Math.sin(i * 4) * .4);
      root.add(g);
      box(g, i % 2 ? silver : blue, 0, 0, 0, .14 + i % 3 * .1, .12, .08);
      animated.push(t => {
        g.rotation.x = t * .09 + i;
        g.rotation.z = t * .05 + i;
      });
    }
  } else if (id === 'weather-balloon') {
    ball(root, white, 0, .45, 0, .55, .65, .55);
    for (const x of [-.25, .25]) rod(root, silver, [x, .0, 0], [0, -.7, 0], .008);
    box(root, silver, 0, -.8, 0, .2, .2, .18);
    animated.push(t => root.rotation.z = Math.sin(t * .4) * .04);
  } else if (id === 'aviation-impact') {
    ball(root, white, 0, 0, 0, 1.15, .15, .17);
    const wing = box(root, silver, 0, 0, 0, .55, .045, 1.7);
    wing.rotation.y = .18;
    box(root, dark, -.8, .12, 0, .34, .045, .67);
    fins(root, silver, -.8, .37, 0, .35);
    for (const z of [-.5, .5]) ball(root, dark, .1, -.11, z, .22, .1, .1);
    for (const z of [-.4, .4]) rod(root, white, [-1.2, 0, z], [-2, 0, z], .018);
  } else if (['coral-reef', 'ocean-acid'].includes(id)) {
    coral();
    if (id === 'ocean-acid') {
      for (let i = 0; i < 3; i++) ring(root, glow, -.65 + i * .65, .65, 0, .11, .012);
    }
  } else if (id === 'sea-turtle') {
    ball(root, dark, 0, 0, 0, .63, .22, .43);
    ball(root, blue, 0, .06, 0, .59, .24, .4);
    for (let i = 0; i < 5; i++) ring(root, silver, -.35 + i * .17, .25, .04, .13, .008).rotation.x = Math.PI / 2;
    ball(root, white, .76, 0, 0, .22, .14, .15);
    ball(root, dark, .84, .065, .125, .022);
    for (const side of [-1, 1]) {
      const fin = ball(root, blue, .22, -.03, side * .5, .4, .045, .19);
      fin.rotation.y = side * .6;
      animated.push(t => fin.rotation.x = Math.sin(t * 1.1) * .15);
      ball(root, blue, -.48, -.04, side * .36, .24, .045, .13);
    }
  } else if (['sperm-whale-dive', 'mariana-snailfish'].includes(id)) {
    const whale = id === 'sperm-whale-dive';
    const skin = whale ? blue : white;
    ball(root, skin, 0, 0, 0, 1.1, .36, .33);
    ball(root, skin, .68, .03, 0, .48, .36, .34);
    ball(root, dark, .87, .07, .3, .026);
    line(root, silver, [[.95, -.15, .27], [.5, -.19, .32], [.22, -.16, .3]], .009);
    for (const side of [-1, 1]) {
      ball(root, skin, -1.08, 0, side * .23, .33, .055, .29);
      const fin = ball(root, skin, .13, -.2, side * .32, .34, .045, .13);
      fin.rotation.y = side * .6;
    }
    animated.push(t => root.rotation.y = -.25 + Math.sin(t * .45) * .06);
  } else if (id === 'vertical-migration') {
    ball(root, blue, 0, .35, 0, .24, .6, .23);
    for (let i = 0; i < 8; i++) {
      const x = (i - 3.5) * .07;
      line(root, silver, [[x, 0, 0], [x * 1.5, -.4, .03], [x * 2, -.75, .09], [x * 2.6, -.85, .04]], .023);
    }
    ball(root, dark, .16, .02, .16, .048);
    animated.push(t => root.rotation.z = Math.sin(t * .6) * .06);
  } else if (id === 'bioluminescence-jelly') {
    const gel = mat(0x87cad1, .05, .25, {
      transparent: true,
      opacity: .48,
      side: T.DoubleSide,
      depthWrite: false,
      emissive: 0x216778,
      emissiveIntensity: .5
    });
    mesh(root, new T.SphereGeometry(.57, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2), gel, 0, .12, 0);
    ring(root, glow, 0, .12, 0, .57, .014).rotation.x = Math.PI / 2;
    for (let i = 0; i < 10; i++) {
      const angle = i * Math.PI / 5;
      line(root, i % 3 ? gel : glow, [[Math.cos(angle) * .4, .12, Math.sin(angle) * .4], [Math.cos(angle) * .28, -.3, Math.sin(angle) * .34], [Math.cos(angle + .4) * .34, -.75, Math.sin(angle) * .3], [Math.cos(angle + .7) * .22, -1, Math.sin(angle) * .22]], .012);
    }
    animated.push(t => {
      gel.emissiveIntensity = .4 + Math.sin(t * .8) * .12;
      root.scale.y = 1 + Math.sin(t * .9) * .035;
    });
  } else if (id === 'hydrothermal-vent') {
    for (let i = 0; i < 4; i++) {
      const h = .7 + i % 3 * .3;
      mesh(root, new T.CylinderGeometry(.12, .28, h, 9), rock, (i - 1.5) * .3, -.35 + h / 2, 0);
      ring(root, gold, (i - 1.5) * .3, -.35 + h, 0, .10, .035).rotation.x = Math.PI / 2;
    }
    for (let i = 0; i < 9; i++) {
      const m = mat(0x273b40, 0, 1, {
        transparent: true,
        opacity: .35,
        depthWrite: false
      });
      const p = ball(root, m, 0, .8 + i * .12, 0, .14 + i * .018);
      animated.push(t => {
        p.position.y = .8 + (t * .09 + i * .13) % .9;
        p.position.x = Math.sin(t * .3 + i) * .12;
      });
    }
    ball(root, rock, 0, -.45, 0, .85, .15, .5);
  } else if (id === 'research-lander') {
    box(root, gold, 0, .08, 0, .55, .6, .5);
    ball(root, glow, 0, .15, .29, .16);
    for (const x of [-.45, .45]) for (const z of [-.35, .35]) {
      rod(root, silver, [0, .45, 0], [x, -.6, z], .035);
      box(root, dark, x, -.6, z, .25, .07, .2);
    }
    rod(root, silver, [0, .4, 0], [0, .9, 0], .02);
    ball(root, white, 0, .94, 0, .12);
  } else if (id === 'nodule-mining') {
    ball(root, rock, 0, -.3, 0, 1, .12, .55);
    for (let i = 0; i < 16; i++) ball(root, i % 2 ? dark : gold, Math.sin(i * 2.5) * .85, -.2, Math.cos(i * 1.7) * .4, .065 + i % 3 * .015);
    box(root, silver, .1, .04, 0, .65, .28, .5);
    for (const z of [-.32, .32]) box(root, dark, .1, -.09, z, .85, .15, .13);
    rod(root, silver, [.3, .1, 0], [.8, -.1, 0], .05);
  } else if (id === 'ghost-nets') {
    for (let i = 0; i < 9; i++) {
      const p = -.7 + i * .175;
      line(root, silver, [[p, .55, 0], [p + .05, 0, .15], [p * .85, -.65, .1]], .01);
      line(root, blue, [[-.7, p * .8, 0], [0, p * .8 - .08, .15], [.7, p * .8, 0]], .012);
    }
    for (const x of [-.7, 0, .7]) ball(root, gold, x, .6, 0, .045);
  } else if (id === 'plastic-island') {
    for (let i = 0; i < 18; i++) {
      const x = Math.sin(i * 2.3) * .8,
        y = Math.cos(i * 3.5) * .35,
        z = Math.sin(i * 4.1) * .25;
      if (i % 3 === 0) {
        const o = mesh(root, new T.CylinderGeometry(.04, .05, .2, 10), white, x, y, z);
        o.rotation.z = i;
        ball(root, blue, x, y + .1, z, .025);
      } else box(root, i % 2 ? silver : blue, x, y, z, .13, .025, .12);
    }
  } else if (['marine-snow', 'plankton-map'].includes(id)) {
    for (let i = 0; i < 30; i++) {
      const p = ball(root, i % 4 ? white : glow, Math.sin(i * 3.1) * .85, Math.cos(i * 1.7) * .8, Math.sin(i * 4) * .4, id === 'marine-snow' ? .018 : .04);
      if (id === 'plankton-map' && i % 4 === 0) ring(root, silver, p.position.x, p.position.y, p.position.z, .08, .008);
      animated.push(t => p.position.y = .8 - (t * .035 + i * .057) % 1.6);
    }
  } else if (id === 'subduction-fault') {
    const left = box(root, rock, -.5, -.08, 0, 1, .25, .8);
    left.rotation.z = -.18;
    const right = box(root, silver, .4, .02, 0, 1, .2, .8);
    right.rotation.z = .22;
    line(root, gold, [[-.9, .1, .42], [-.3, -.04, .42], [.3, -.38, .42]], .024);
  } else if (id === 'ai-center') {
    for (let i = 0; i < 4; i++) {
      box(root, dark, (i - 1.5) * .37, 0, 0, .31, 1, .4);
      for (let j = 0; j < 6; j++) {
        box(root, silver, (i - 1.5) * .37, -.4 + j * .15, .22, .25, .1, .02);
        ball(root, glow, (i - 1.5) * .37 + .09, -.4 + j * .15, .24, .012);
      }
    }
  } else if (['ozone-layer', 'ocean-heat', 'co2-buildup'].includes(id)) {
    if (id === 'co2-buildup') {
      ball(root, dark, 0, 0, 0, .19);
      for (const x of [-.45, .45]) {
        rod(root, silver, [0, 0, 0], [x, 0, 0], .04);
        ball(root, blue, x, 0, 0, .25);
      }
      animated.push(t => root.rotation.y = t * .12);
    } else {
      ball(root, blue, 0, 0, 0, .63);
      for (let i = 0; i < 5; i++) {
        const o = ring(root, id === 'ozone-layer' ? glow : silver, 0, 0, 0, .68 + i * .035, .009);
        o.rotation.x = .4 + i * .25;
        o.rotation.y = i * .6;
      }
      animated.push(t => root.rotation.y = t * .07);
    }
  } else if (['aurora-borealis', 'noctilucent-clouds', 'mega-storm', 'forest-fire-smoke', 'meteors-burn'].includes(id)) {
    if (id === 'meteors-burn') {
      for (let i = 0; i < 4; i++) {
        ball(root, rock, .6 - i * .4, .3 - i * .22, 0, .08);
        rod(root, i % 2 ? gold : glow, [.6 - i * .4, .3 - i * .22, 0], [1.2 - i * .4, .7 - i * .22, 0], .016);
      }
    } else if (id === 'aurora-borealis') {
      const m = mat(0x5fbaa7, 0, .7, {
        transparent: true,
        opacity: .35,
        side: T.DoubleSide,
        depthWrite: false,
        emissive: 0x368570,
        emissiveIntensity: .6
      });
      for (let i = 0; i < 18; i++) {
        const x = (i - 8.5) * .08;
        rod(root, m, [x, -.3 + Math.sin(i * .4) * .18, 0], [x, .5 + Math.sin(i * .4) * .18, 0], .035);
      }
      animated.push(t => m.opacity = .25 + Math.sin(t * .35) * .06);
    } else {
      const m = mat(id === 'forest-fire-smoke' ? 0x52626a : 0x9bbcc3, 0, 1, {
        transparent: true,
        opacity: .4,
        depthWrite: false
      });
      for (let i = 0; i < 12; i++) ball(root, m, Math.sin(i * 2.2) * .7, Math.cos(i * 2.5) * .22, Math.sin(i) * .15, .22, .13, .19);
      if (id === 'mega-storm') for (let i = 0; i < 6; i++) rod(root, blue, [-.6 + i * .23, -.25, 0], [-.7 + i * .23, -.65, 0], .009);
      animated.push(t => root.rotation.y = Math.sin(t * .15) * .12);
    }
  } else {
    throw new Error(`Missing expedition model: ${id}`);
  }
  root.rotation.y = -.22;
  // Normalize once. Surface models retain a waterline pivot at local y=0.
  root.updateMatrixWorld(true);
  const bounds = new T.Box3().setFromObject(root);
  const size = bounds.getSize(new T.Vector3());
  const center = bounds.getCenter(new T.Vector3());
  const normalized = new T.Group();
  normalized.add(root);
  const surface = ['offshore-wind', 'cargo-tanker', 'oil-platform'].includes(id);
  root.position.x -= center.x;
  if (!surface) root.position.y -= center.y;
  const scale = 1 / Math.max(size.x, size.y, size.z);
  normalized.scale.setScalar(scale);
  const whiteCoral = new T.Color(0xe2e2d7),
    deadCoral = new T.Color(0x586860);
  return {
    group: normalized,
    update(t, state) {
      animated.forEach(fn => fn(t));
      for (const {
        m,
        color
      } of id === 'coral-reef' ? reefMaterials : []) {
        const bleaching = T.MathUtils.clamp((state.dhw - 3) / 2, 0, 1);
        const mortality = T.MathUtils.clamp((state.dhw - 7) / 4, 0, 1);
        m.color.copy(color).lerp(whiteCoral, bleaching).lerp(deadCoral, mortality);
      }
    },
    materials
  };
}
