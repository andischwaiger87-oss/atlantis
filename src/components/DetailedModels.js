import * as T from 'three';
export const DETAIL_IDS = ['ocean-acid', 'plastic-island', 'coral-reef', 'sea-turtle', 'sperm-whale-dive', 'nodule-mining', 'mariana-snailfish', 'aviation-impact', 'forest-fire-smoke', 'co2-buildup'];
export function detailedModel(id) {
  const root = new T.Group(),
    materials = [],
    animations = [],
    morphs = [];
  const mat = (color, extra = {}) => {
    const m = new T.MeshStandardMaterial({
      color,
      roughness: .65,
      metalness: .08,
      ...extra
    });
    materials.push(m);
    return m;
  };
  const dark = mat(0x102a33),
    ivory = mat(0xd8ddd0),
    steel = mat(0x8daab4, {
      metalness: .65,
      roughness: .35
    }),
    teal = mat(0x63b2a6),
    sand = mat(0x867b67),
    amber = mat(0xcd9966),
    pink = mat(0xd0b6af);
  const mesh = (g, geo, m, x = 0, y = 0, z = 0) => {
    const o = new T.Mesh(geo, m);
    o.position.set(x, y, z);
    g.add(o);
    return o;
  };
  const ball = (g, m, x, y, z, a, b = a, c = a) => {
    const o = mesh(g, new T.SphereGeometry(1, 24, 16), m, x, y, z);
    o.scale.set(a, b, c);
    return o;
  };
  const box = (g, m, x, y, z, a, b, c) => mesh(g, new T.BoxGeometry(a, b, c), m, x, y, z);
  const tube = (g, m, pts, r = .025) => mesh(g, new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(p => new T.Vector3(...p))), 24, r, 7, false), m);
  const rod = (g, m, a, b, r = .02) => {
    const p = new T.Vector3(...a),
      q = new T.Vector3(...b);
    const o = mesh(g, new T.CylinderGeometry(r, r, p.distanceTo(q), 10), m);
    o.position.copy(p.clone().add(q).multiplyScalar(.5));
    o.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), q.sub(p).normalize());
    return o;
  };
  const leaf = (g, m, points, depth = .035) => {
    const s = new T.Shape();
    s.moveTo(...points[0]);
    for (let i = 1; i < points.length; i++) s.lineTo(...points[i]);
    s.closePath();
    return mesh(g, new T.ExtrudeGeometry(s, {
      depth,
      bevelEnabled: true,
      bevelSize: .025,
      bevelThickness: .015,
      bevelSegments: 2,
      steps: 1
    }), m);
  };
  // Rounded anatomical cross-sections, with explicit head and tail profiles.
  const body = (g, m, sections) => {
    const sectionCurve = new T.CatmullRomCurve3(sections.map(s => new T.Vector3(s[0], s[1], s[2])));
    const depthCurve = new T.CatmullRomCurve3(sections.map(s => new T.Vector3(s[0], 0, s[3])));
    const smooth = sectionCurve.getPoints(sections.length * 8),
      depths = depthCurve.getPoints(sections.length * 8);
    sections = smooth.map((p, i) => [p.x, p.y, Math.max(.005, p.z), Math.max(.005, depths[i].z)]);
    const pos = [],
      indices = [],
      n = 32;
    for (const [x, y, ry, rz] of sections) for (let j = 0; j < n; j++) {
      const a = j / n * Math.PI * 2;
      pos.push(x, y + Math.sin(a) * ry, Math.cos(a) * rz);
    }
    for (let i = 0; i < sections.length - 1; i++) for (let j = 0; j < n; j++) {
      const a = i * n + j,
        b = i * n + (j + 1) % n,
        c = (i + 1) * n + j,
        d = (i + 1) * n + (j + 1) % n;
      indices.push(a, c, b, b, c, d);
    }
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return mesh(g, geo, m);
  };
  const organicLeaf = (g, m, points) => {
    const shape = new T.Shape();
    const first = points[0],
      last = points[points.length - 1];
    shape.moveTo((first[0] + last[0]) / 2, (first[1] + last[1]) / 2);
    for (let i = 0; i < points.length; i++) {
      const p = points[i],
        q = points[(i + 1) % points.length];
      shape.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
    }
    shape.closePath();
    return mesh(g, new T.ExtrudeGeometry(shape, {
      depth: .055,
      bevelEnabled: true,
      bevelSize: .02,
      bevelThickness: .018,
      bevelSegments: 3,
      steps: 1
    }), m);
  };
  const eye = (g, x, y, z, r = .032) => {
    ball(g, ivory, x, y, z, r * 1.25);
    ball(g, dark, x, y, z + r * .6, r);
    ball(g, ivory, x + r * .25, y + r * .25, z + r * .95, r * .22);
  };
  if (id === 'sperm-whale-dive') {
    const whale = mat(0x526b75);
    body(root, whale, [[-1.8, -.03, .025, .025], [-1.45, -.01, .10, .11], [-1.15, .03, .21, .23], [-.7, .05, .32, .32], [-.15, .06, .4, .38], [.4, .09, .46, .42], [1, .1, .45, .42], [1.3, .1, .42, .39], [1.38, .1, .30, .3], [1.39, .1, .01, .01]]);
    body(root, ivory, [[-.15, -.23, .02, .03], [.45, -.31, .055, .11], [1.17, -.3, .045, .09], [1.28, -.26, .01, .01]]);
    tube(root, dark, [[.02, -.25, .34], [.6, -.28, .39], [1.22, -.25, .33]], .012);
    eye(root, .08, -.08, .377, .028);
    const flukes = new T.Group();
    flukes.position.x = -1.65;
    root.add(flukes);
    for (const side of [-1, 1]) {
      const f = organicLeaf(flukes, whale, [[.13, 0], [-.05, side * .17], [-.52, side * .44], [-.37, side * .07], [-.2, 0]]);
      f.rotation.x = .55;
    }
    leaf(root, whale, [[-.75, .29], [-.91, .53], [-1.05, .31]]);
    for (let i = 0; i < 3; i++) ball(root, whale, -1.1 - i * .13, .21 - i * .025, 0, .09, .05, .1);
    const flipper = organicLeaf(root, whale, [[.02, -.15], [-.17, -.61], [-.48, -.68], [-.31, -.28]]);
    flipper.position.z = .29;
    for (let i = 0; i < 8; i++) tube(root, steel, [[-1.05 + i * .13, .12, .26], [-1.1 + i * .13, .02, .29], [-1.02 + i * .13, -.10, .27]], .004);
    ball(root, dark, 1, .54, -.12, .07, .015, .04);
    animations.push(t => {
      flukes.rotation.x = Math.sin(t * .7) * .12;
      flipper.rotation.x = Math.sin(t * .5) * .07;
    });
  } else if (id === 'sea-turtle') {
    const olive = mat(0x637e65),
      shell = mat(0x486352),
      seam = mat(0xa2ac86);
    const turtle = new T.Group();
    root.add(turtle);
    turtle.rotation.x = .75;
    ball(turtle, ivory, 0, -.07, 0, .73, .12, .53);
    ball(turtle, shell, 0, .035, 0, .76, .28, .55);
    for (let i = 0; i < 5; i++) {
      const x = -.46 + i * .23;
      const height = .29 - Math.pow(x / .8, 2) * .13;
      ball(turtle, olive, x, height, 0, .115, .013, .145);
    }
    for (let i = 0; i < 5; i++) {
      const x = -.48 + i * .24;
      const r = .15;
      const pts = [];
      for (let j = 0; j <= 6; j++) {
        const a = j * Math.PI / 3;
        pts.push([x + Math.cos(a) * r, .29 - Math.abs(x) * .09, Math.sin(a) * r]);
      }
      tube(turtle, seam, pts, .012);
    }
    for (const side of [-1, 1]) for (let i = 0; i < 4; i++) {
      const x = -.43 + i * .28;
      const z = side * .32;
      tube(turtle, seam, [[x - .1, .19, z], [x, .235, z - side * .08], [x + .13, .17, z], [x, .13, z + side * .13], [x - .1, .19, z]], .01);
    }
    ball(turtle, olive, .89, .02, 0, .28, .17, .19);
    ball(turtle, olive, .65, 0, 0, .25, .12, .15);
    eye(turtle, 1.01, .105, .15, .035);
    eye(turtle, 1.01, .105, -.15, .035);
    tube(turtle, dark, [[1.13, -.02, .11], [1.16, -.035, 0], [1.13, -.02, -.11]], .009);
    const flippers = [];
    for (const side of [-1, 1]) {
      const pivot = new T.Group();
      pivot.position.set(.38, -.025, side * .32);
      turtle.add(pivot);
      const f = organicLeaf(pivot, olive, [[.05, 0], [-.04, side * .28], [-.56, side * .84], [-.69, side * .82], [-.42, side * .20], [-.1, 0]]);
      f.rotation.x = Math.PI / 2;
      flippers.push(pivot);
      ball(turtle, olive, -.58, -.05, side * .49, .24, .04, .18);
    }
    body(turtle, olive, [[-1, 0, .01, .01], [-.74, 0, .055, .05]]);
    const net = new T.Group();
    turtle.add(net);
    for (let i = 0; i < 5; i++) tube(net, amber, [[-.4 + i * .17, .3, -.4], [-.44 + i * .18, .37, 0], [-.5 + i * .18, .17, .55], [-.55 + i * .18, -.06, .91]], .014);
    tube(net, amber, [[-.7, .02, .75], [-.3, .03, .89], [.05, .16, .55]], .018);
    animations.push((t, s) => {
      const caught = s.entanglement || 0;
      net.visible = caught > .1;
      net.scale.setScalar(.85 + caught * .15);
      flippers.forEach((f, i) => {
        f.rotation.x = Math.sin(t * (1.2 - caught * .85) + i) * (.24 - caught * .17);
        f.rotation.y = (i ? 1 : -1) * caught * .8;
      });
      turtle.rotation.z = -caught * .15;
    });
  } else if (id === 'mariana-snailfish') {
    const translucent = mat(0xd6c5c2, {
      transparent: true,
      opacity: .96,
      roughness: .45
    });
    body(root, translucent, [[-1.3, -.06, .012, .01], [-.95, -.03, .07, .04], [-.55, 0, .14, .09], [-.1, .06, .3, .24], [.43, .07, .39, .34], [.76, .03, .30, .31], [.86, -.04, .06, .08]]);
    eye(root, .59, .14, .28, .044);
    const fan = organicLeaf(root, translucent, [[.4, -.08], [.24, -.55], [-.04, -.67], [-.34, -.52], [-.37, -.18]]);
    fan.position.z = .23;
    for (let i = 0; i < 8; i++) tube(root, pink, [[.3, -.10, .26], [-.32 + i * .08, -.53 - Math.sin(i * .4) * .07, .26]], .006);
    organicLeaf(root, translucent, [[-1.28, -.06], [-1.4, .10], [-.65, .17], [-.12, .30], [-.4, .10], [-.95, .02]]);
    tube(root, pink, [[.5, -.15, .3], [.8, -.14, .19]], .007);
    animations.push(t => fan.rotation.x = Math.sin(t * .9) * .11);
  } else if (id === 'coral-reef') {
    ball(root, sand, 0, -.65, 0, 1.15, .16, .6);
    const coralMats = [mat(0xc39787), mat(0x9eab7e), mat(0x88b9b0)];
    const tissue = [];
    for (let k = 0; k < 3; k++) {
      const g = new T.Group();
      g.position.set((k - 1) * .68, -.57, k === 1 ? -.2 : .1);
      root.add(g);
      const m = coralMats[k];
      for (let i = 0; i < 5; i++) {
        const x = (i - 2) * .10;
        const height = .5 + i % 3 * .14;
        const end = [x * 1.5, height, Math.sin(i) * .12];
        tube(g, ivory, [[x, 0, 0], [x * .8, height * .4, 0], end], .038);
        const flesh = tube(g, m, [[x, 0, 0], [x * .8, height * .4, 0], end], .06);
        tissue.push(flesh);
        for (let j = 0; j < 3; j++) {
          const side = j % 2 ? 1 : -1;
          const tip = [end[0] + side * (.12 + j * .035), height + .12 + j * .08, end[2] + j * .045];
          tube(g, ivory, [[x, height * .6, 0], tip], .022);
          const soft = tube(g, m, [[x, height * .6, 0], tip], .04);
          tissue.push(soft);
          tissue.push(ball(g, m, ...tip, .045, .05, .04));
        }
      }
    }
    for (let i = 0; i < 5; i++) {
      const plate = ball(root, coralMats[i % 3], -.8 + i * .35, -.4 + i % 2 * .2, .34, .3, .06, .24);
      tissue.push(plate);
    }
    const brain = ball(root, coralMats[1], -.86, -.42, .32, .36, .23, .29);
    tissue.push(brain);
    for (let i = 0; i < 7; i++) {
      const x = -1.1 + i * .075;
      tube(root, ivory, [[x, -.39, .57], [x + .03, -.26, .53], [x - .01, -.2, .42], [x + .025, -.27, .24]], .012);
    }
    const baseColors = coralMats.map(m => m.color.clone());
    const tissueScales = tissue.map(o => o.scale.clone());
    morphs.push(s => {
      const loss = T.MathUtils.clamp((s.dhw - 7) / 5, 0, 1);
      tissue.forEach((o, i) => {
        o.visible = loss < .95;
        o.scale.copy(tissueScales[i]).multiplyScalar(1 - loss * .75);
      });
      coralMats.forEach((m, i) => m.color.copy(baseColors[i]).lerp(new T.Color(0xdde0d1), T.MathUtils.clamp((s.dhw - 3) / 3, 0, 1)));
    });
  } else if (id === 'ocean-acid') {
    // Shell ridges and the CO2 entering water make this a process, rather than another reef.
    const shell = new T.Group();
    root.add(shell);
    for (let i = 0; i < 14; i++) {
      const a = -1.2 + i / 13 * 2.4;
      const r = .8;
      tube(shell, ivory, [[0, -.45, 0], [Math.sin(a) * r * .55, .0, .18], [Math.sin(a) * r, Math.cos(a) * r - .25, 0]], .05);
    }
    tube(root, teal, [[-1.05, .7, 0], [-.5, .74, 0], [0, .7, 0], [.5, .74, 0], [1.05, .7, 0]], .018);
    ball(root, dark, -.7, 1.12, 0, .12);
    for (const x of [-.97, -.43]) {
      rod(root, steel, [-.7, 1.12, 0], [x, 1.12, 0], .02);
      ball(root, amber, x, 1.12, 0, .14);
    }
    rod(root, teal, [-.7, .97, 0], [-.7, .5, 0], .014);
    leaf(root, teal, [[-.77, .58], [-.7, .46], [-.63, .58]]);
    for (let i = 0; i < 8; i++) ball(root, sand, .35 + i * .065, -.5 - Math.sin(i) * .09, .08, .025);
  } else if (id === 'plastic-island') {
    const bottle = new T.Group();
    bottle.rotation.z = -.35;
    bottle.position.set(-.6, .08, 0);
    root.add(bottle);
    mesh(bottle, new T.CylinderGeometry(.15, .15, .53, 20), teal);
    mesh(bottle, new T.CylinderGeometry(.065, .15, .15, 20), teal, 0, .34);
    mesh(bottle, new T.CylinderGeometry(.075, .075, .1, 16), ivory, 0, .46);
    mesh(bottle, new T.CylinderGeometry(.155, .155, .17, 20), ivory, 0, -.04);
    for (let j = 0; j < 3; j++) {
      const r = mesh(bottle, new T.TorusGeometry(.15, .009, 6, 24), steel, 0, -.2 + j * .1);
      r.rotation.x = Math.PI / 2;
    }
    const bag = leaf(root, ivory, [[.12, -.4], [.1, .38], [.3, .48], [.43, .21], [.57, .22], [.67, .48], [.85, .36], [.88, -.42]], .012);
    bag.rotation.y = -.25;
    for (const x of [.26, .7]) tube(root, dark, [[x, .33, .035], [x + .07, .26, .04], [x + .1, .37, .035]], .018);
    const can = mesh(root, new T.CylinderGeometry(.14, .14, .32, 20), steel, .15, -.6, 0);
    can.rotation.z = .8;
    for (let i = 0; i < 6; i++) {
      const r = mesh(root, new T.TorusGeometry(.10, .015, 8, 24), amber, -.8 + i % 3 * .21, -.57 - Math.floor(i / 3) * .2, .04);
      r.rotation.x = .3;
    }
    animations.push(t => root.rotation.z = Math.sin(t * .45) * .025);
  } else if (id === 'nodule-mining') {
    ball(root, sand, 0, -.5, 0, 1.4, .13, .65);
    for (let i = 0; i < 22; i++) ball(root, dark, Math.sin(i * 2.4) * 1.1, -.36, Math.cos(i * 1.5) * .5, .06 + i % 3 * .012);
    box(root, steel, 0, -.05, 0, 1, .4, .65);
    box(root, amber, .0, .22, 0, .64, .18, .45);
    for (const z of [-.42, .42]) {
      box(root, dark, 0, -.31, z, 1.2, .25, .2);
      for (let i = 0; i < 6; i++) {
        const w = mesh(root, new T.CylinderGeometry(.09, .09, .22, 12), steel, -.48 + i * .19, -.30, z);
        w.rotation.x = Math.PI / 2;
      }
      for (let i = 0; i < 12; i++) box(root, steel, -.55 + i * .1, -.43, z, .04, .025, .22);
    }
    rod(root, steel, [.45, .06, .1], [.9, -.1, .1], .06);
    box(root, dark, 1, -.28, 0, .4, .19, .8);
    for (let i = 0; i < 8; i++) rod(root, steel, [1.18, -.18, -.33 + i * .095], [1.3, -.4, -.33 + i * .095], .025);
    tube(root, dark, [[-.2, .32, 0], [-.3, .75, 0], [.1, 1, 0], [.18, 1.35, 0]], .06);
    for (let i = 0; i < 10; i++) {
      const m = mat(0x9c927d, {
        transparent: true,
        opacity: .15,
        depthWrite: false
      });
      const p = ball(root, m, -.8 - i * .05, -.18 + i % 3 * .08, .2, .15 + i * .012);
      animations.push(t => p.position.x = -.7 - (t * .05 + i * .06) % .7);
    }
  } else if (id === 'aviation-impact') {
    const plane = new T.Group();
    plane.rotation.x = .6;
    plane.rotation.y = -.15;
    root.add(plane);
    body(plane, ivory, [[-1.4, 0, .01, .01], [-1.15, 0, .09, .09], [-.6, 0, .14, .14], [.65, 0, .15, .15], [1.1, 0, .1, .1], [1.3, 0, .01, .01]]);
    for (const side of [-1, 1]) {
      const wing = leaf(plane, steel, [[.25, 0], [-.55, side * 1.25], [-.92, side * 1.3], [-.52, side * .2], [-.5, 0]]);
      wing.rotation.x = Math.PI / 2;
      const tail = leaf(plane, ivory, [[-.98, 0], [-1.25, side * .55], [-1.5, side * .55], [-1.3, 0]]);
      tail.rotation.x = Math.PI / 2;
      const engine = mesh(plane, new T.CylinderGeometry(.11, .13, .36, 24), steel, -.17, -.14, side * .5);
      engine.rotation.z = Math.PI / 2;
      ball(plane, dark, .02, -.14, side * .5, .02, .09, .09);
      tube(plane, ivory, [[-.6, -.12, side * .5], [-1.8, -.12, side * .5], [-2.3, -.1, side * .52]], .017);
    }
    leaf(plane, steel, [[-1.05, .05], [-1.28, .58], [-1.5, .6], [-1.37, 0]]);
    for (let i = 0; i < 11; i++) ball(plane, dark, -.75 + i * .13, .045, .14, .027, .033, .014);
    ball(plane, dark, 1, .055, .075, .13, .05, .03);
  } else if (id === 'forest-fire-smoke') {
    ball(root, sand, 0, -.65, 0, 1.2, .13, .6);
    const foliage = mat(0x48695c),
      char = mat(0x333d3a),
      flame = mat(0xe99854, {
        emissive: 0xcd6324,
        emissiveIntensity: .6
      });
    for (let i = 0; i < 6; i++) {
      const x = (i - 2.5) * .32;
      rod(root, i < 3 ? char : sand, [x, -.6, 0], [x, .3, 0], .035);
      for (let j = 0; j < 3; j++) {
        if (i < 3) {
          rod(root, char, [x, -.1 + j * .15, 0], [x + .14, -.02 + j * .15, 0], .018);
        } else mesh(root, new T.ConeGeometry(.24 - j * .035, .4, 10), foliage, x, -.1 + j * .23, 0);
      }
      if (i < 3) {
        ball(root, flame, x, -.38, .12, .12, .27, .1);
        const f = organicLeaf(root, flame, [[x - .15, -.58], [x - .1, -.22], [x, .19], [x + .025, -.08], [x + .15, -.35], [x + .12, -.58]]);
        f.position.z = .16;
        animations.push(t => f.scale.y = .94 + Math.sin(t * 2 + i) * .06);
      }
    }
    for (let i = 0; i < 7; i++) {
      const smoke = ball(root, mat(0x6a7576, {
        transparent: true,
        opacity: .23,
        depthWrite: false
      }), -.4 + Math.sin(i) * .2, .5 + i * .11, 0, .22 + i * .012);
      animations.push(t => smoke.position.x = -.4 + Math.sin(i + t * .15) * .15);
    }
    for (let i = 0; i < 4; i++) tube(root, dark, [[-1 + i * .5, -.54, .55], [-.8 + i * .45, -.56, .48], [-.9 + i * .48, -.54, .33]], .012);
  } else if (id === 'co2-buildup') {
    ball(root, mat(0x3d7b8a), 0, -.2, 0, .66);
    for (let i = 0; i < 7; i++) ball(root, mat(0x769a78), Math.sin(i * 2) * .44, -.2 + Math.cos(i * 2) * .38, .45, .16, .14, .1);
    const air = mat(0x83c5cf, {
      transparent: true,
      opacity: .13,
      depthWrite: false
    });
    ball(root, air, 0, -.2, 0, .79);
    for (const x of [-.45, 0, .45]) {
      tube(root, amber, [[x, -.15, .69], [x + .12, .27, .7], [x, .64, .6], [x + .11, .93, .48]], .023);
      leaf(root, amber, [[x + .02, .83], [x + .11, .99], [x + .19, .83]]);
    }
  }
  root.rotation.y = -.18;
  root.updateMatrixWorld(true);
  const bounds = new T.Box3().setFromObject(root),
    size = bounds.getSize(new T.Vector3()),
    center = bounds.getCenter(new T.Vector3());
  root.position.sub(center);
  const group = new T.Group();
  group.add(root);
  group.scale.setScalar(1 / Math.max(size.x, size.y, size.z));
  return {
    group,
    materials,
    update(t, s) {
      animations.forEach(fn => fn(t, s));
      morphs.forEach(fn => fn(s));
    }
  };
}
