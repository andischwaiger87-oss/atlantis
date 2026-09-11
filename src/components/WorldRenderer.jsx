import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { LANDMARKS, landmarkLayout } from '../simulation/landmarks';
import { createLandmarkModel } from './LandmarkModels';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
function makeVehicles(logoTexture) {
  const metal = new THREE.MeshStandardMaterial({
    color: 0xc6d5d8,
    metalness: .78,
    roughness: .27
  });
  const white = new THREE.MeshStandardMaterial({
    color: 0xeaf0ec,
    metalness: .32,
    roughness: .31
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x18313b,
    metalness: .8,
    roughness: .33
  });
  const trim = new THREE.MeshStandardMaterial({
    color: 0x799696,
    metalness: .9,
    roughness: .21
  });
  const glow = new THREE.MeshStandardMaterial({
    color: 0x8ef6e5,
    emissive: 0x47cfc4,
    emissiveIntensity: 2
  });
  const amber = new THREE.MeshStandardMaterial({
    color: 0xffcf8a,
    emissive: 0xff833d,
    emissiveIntensity: 2
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x70c5cd,
    metalness: .18,
    roughness: .13,
    transparent: true,
    opacity: .48,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const mesh = (group, geometry, material, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    group.add(m);
    return m;
  };
  const sphere = (g, m, x, y, z, sx, sy, sz) => mesh(g, new THREE.SphereGeometry(1, 40, 24), m, x, y, z, sx, sy, sz);
  const rod = (g, a, b, r, mat) => {
    const av = new THREE.Vector3(...a),
      bv = new THREE.Vector3(...b);
    const body = mesh(g, new THREE.CylinderGeometry(r, r, av.distanceTo(bv), 12), mat);
    body.position.copy(av.add(bv).multiplyScalar(.5));
    body.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...b).sub(new THREE.Vector3(...a)).normalize());
    return body;
  };
  const brand=(parent,target,position,size,orientation=new THREE.Euler())=>{
    target.updateMatrixWorld(true);
    const material=new THREE.MeshBasicMaterial({map:logoTexture,transparent:true,alphaTest:.04,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-4,toneMapped:false});
    parent.add(new THREE.Mesh(new DecalGeometry(target,position,orientation,size),material));
  };
  const submarine = new THREE.Group();
  const upperHull=mesh(submarine,new THREE.SphereGeometry(1,64,32,0,Math.PI*2,0,Math.PI/2),white,0,0,0,1.65,.55,.64);
  mesh(submarine,new THREE.SphereGeometry(1,64,32,0,Math.PI*2,Math.PI/2,Math.PI/2),dark,0,0,0,1.65,.55,.64);
  sphere(submarine, dark, -.55, .3, 0, .94, .49, .51);
  sphere(submarine, glass, -.55, .35, 0, .96, .52, .53);
  for (let i = 0; i < 3; i++) {
    const seat = mesh(submarine, new THREE.BoxGeometry(.23, .36, .28), dark, -.6 + i * .37, .33, .12);
    seat.rotation.z = -.2;
    const ring = mesh(submarine, new THREE.TorusGeometry(.48, .018, 10, 64), trim, -.72 + i * .41, .32, 0, 1, 1, .9);
    ring.rotation.y = Math.PI / 2;
  }
  rod(submarine, [-1.31, .12, .42], [.13, .55, .43], .025, trim);
  rod(submarine, [-1.31, .12, -.42], [.13, .55, -.43], .025, trim);
  for (const side of [-1, 1]) {
    rod(submarine, [-1.31, -.03, side * .49], [1.16, -.03, side * .49], .017, glow);
    rod(submarine, [-.8, -.4, side * .41], [.82, -.4, side * .41], .055, trim);
    rod(submarine, [-.73, -.25, side * .4], [-.62, -.6, side * .6], .035, dark);
    rod(submarine, [.66, -.25, side * .4], [.78, -.6, side * .6], .035, dark);
    rod(submarine, [-1, -.62, side * .6], [1.04, -.62, side * .6], .045, metal);
    const housing = mesh(submarine, new THREE.CylinderGeometry(.25, .25, .65, 32), dark, .72, -.15, side * .8);
    housing.rotation.z = Math.PI / 2;
    const light = mesh(submarine, new THREE.CylinderGeometry(.105, .105, .055, 24), glow, -1.25, -.14, side * .35);
    light.rotation.z = Math.PI / 2;
    for (let i = 0; i < 8; i++) sphere(submarine, trim, -.8 + i * .25, -.18, side * .586, .026, .026, .026);
  }
  const propellers = [];
  for (const side of [-1, 1]) {
    const p = new THREE.Group();
    p.position.set(1.1, -.15, side * .8);
    submarine.add(p);
    for (let i = 0; i < 5; i++) {
      const blade = mesh(p, new THREE.BoxGeometry(.045, .22, .075), metal, 0, 0, 0);
      blade.position.y = Math.cos(i * Math.PI * .4) * .115;
      blade.position.z = Math.sin(i * Math.PI * .4) * .115;
      blade.rotation.x = i * Math.PI * .4;
    }
    propellers.push(p);
  }
  const aft = mesh(submarine, new THREE.BoxGeometry(.55, .07, 1.95), white, 1.02, .02, 0);
  aft.rotation.z = .03;
  rod(submarine, [.6, .36, 0], [.65, .9, 0], .034, trim);
  sphere(submarine, glow, .65, .93, 0, .065, .035, .065);
  brand(submarine,upperHull,new THREE.Vector3(.38,.23,.58),new THREE.Vector3(.35,.225,.24),new THREE.Euler(-.35,0,0));
  submarine.rotation.set(.1, -.35, -.05);
  const rocket = new THREE.Group();
  const hull = mesh(rocket, new THREE.CylinderGeometry(.4, .46, 2.3, 48), white, 0, 0, 0);
  hull.rotation.z = 0;
  mesh(rocket,new THREE.PlaneGeometry(.23,.148),new THREE.MeshBasicMaterial({map:logoTexture,transparent:true,alphaTest:.04,depthWrite:false,toneMapped:false}),0,-.02,.452);
  const nose = mesh(rocket, new THREE.ConeGeometry(.4, .85, 48), metal, 0, 1.56, 0);
  nose.rotation.y = .2;
  mesh(rocket, new THREE.CylinderGeometry(.455, .455, .12, 48), dark, 0, -.83, 0);
  mesh(rocket, new THREE.CylinderGeometry(.405, .405, .08, 48), trim, 0, .94, 0);
  const cockpit = mesh(rocket, new THREE.SphereGeometry(.26, 32, 20), glass, 0, .48, .33, 1, 1.55, .55);
  cockpit.rotation.x = .1;
  const rim = mesh(rocket, new THREE.TorusGeometry(.255, .029, 12, 48), trim, 0, .48, .37, 1, 1.5, 1);
  rim.rotation.x = .05;
  for (let i = 0; i < 4; i++) {
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(.57, -.65);
    finShape.lineTo(.57, -1.13);
    finShape.lineTo(0, -.88);
    finShape.closePath();
    const fin = mesh(rocket, new THREE.ExtrudeGeometry(finShape, {
      depth: .07,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: .025,
      bevelThickness: .025
    }), metal, 0, -.16, 0);
    fin.rotation.y = i * Math.PI / 2;
    const booster = mesh(rocket, new THREE.CylinderGeometry(.115, .14, .85, 24), dark, Math.cos(i * Math.PI / 2) * .48, -.62, Math.sin(i * Math.PI / 2) * .48);
    booster.rotation.y = i;
  }
  for (let i = 0; i < 20; i++) {
    const a = i * Math.PI / 10;
    sphere(rocket, trim, Math.cos(a) * .451, -.75, Math.sin(a) * .451, .026, .026, .026);
  }
  mesh(rocket, new THREE.CylinderGeometry(.26, .38, .4, 36, 1, true), dark, 0, -1.28, 0);
  mesh(rocket, new THREE.TorusGeometry(.36, .028, 12, 48), trim, 0, -1.48, 0).rotation.x = Math.PI / 2;
  const flame = mesh(rocket, new THREE.ConeGeometry(.23, 1.35, 32), amber, 0, -2.03, 0);
  flame.rotation.z = Math.PI;
  const core = mesh(rocket, new THREE.ConeGeometry(.11, .9, 24), glow, 0, -1.76, 0);
  core.rotation.z = Math.PI;
  rocket.rotation.set(.05, -.35, -.06);
  rocket.scale.setScalar(.77);
  return {
    submarine,
    rocket,
    propellers,
    flame,
    core
  };
}
const vertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;
const fragment = `precision highp float;varying vec2 vUv;uniform float uTime;uniform float uTravel;uniform float uTurbidity;uniform vec2 uSize;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){vec2 uv=vUv;float h=.5-uTravel*.94;float deep=clamp(-uTravel/4.,0.,1.);float orbit=smoothstep(1.3,4.6,uTravel);
vec3 sky=mix(vec3(.17,.32,.39),vec3(.055,.115,.18),uv.y);sky=mix(sky,vec3(.008,.014,.038),orbit);
float glow=exp(-abs(uv.y-h)*8.);sky+=vec3(.32,.31,.23)*glow*(1.-orbit)*.55;
vec2 grid=uv*uSize*.21;vec2 cell=floor(grid+vec2(0.,uTravel*55.));float star=step(.996,hash(cell))*pow(max(0.,1.-length(fract(grid+vec2(0.,uTravel*55.))-.5)*2.),5.);sky+=star*orbit*(.65+.15*sin(uTime*.65+hash(cell)*6.28));float haze=exp(-pow((uv.y-.58-uv.x*.18)*5.,2.));sky+=vec3(.025,.035,.06)*haze*orbit;
float below=1.-smoothstep(h-.008,h+.008,uv.y);vec3 ocean=mix(vec3(.035,.19,.23),vec3(.005,.025,.052),deep);ocean*=.6+.4*uv.y;
float ray=pow(max(0.,sin(uv.x*18.+uv.y*3.+sin(uTime*.17)*.3)),14.);ocean+=vec3(.15,.35,.31)*ray*.13*(1.-deep)*uv.y;
float waves=sin((uv.y-h)*210.+sin(uv.x*22.+uTime*.2)*2.+uTime*.5);float surface=exp(-abs(uv.y-h)*36.);ocean+=vec3(.2,.32,.33)*surface*(.18+.12*waves);
float local=(1.-smoothstep(-.15,0.,uTravel))*(1.-smoothstep(1.2,2.7,-uTravel));ocean=mix(ocean,vec3(.13,.19,.105)*(.7+.3*uv.y),uTurbidity*.76*local);
vec3 color=mix(sky,ocean,below);
for(int layer=0;layer<3;layer++){float l=float(layer);vec2 field=uv*vec2(uSize.x/uSize.y,1.)*(18.+l*14.);field.y+=uTravel*(7.+l*4.)+uTime*(.13+l*.06);field.x+=sin(uTime*.18+l)*.30+uTime*.025;vec2 cell=floor(field);vec2 offset=vec2(hash(cell+l),hash(cell+31.+l))*.7+.15;float d=length(fract(field)-offset);float point=(1.-smoothstep(.012,.085,d))*step(.90,hash(cell+71.+l));color+=mix(vec3(.36,.52,.68),vec3(.37,.65,.62),below)*point*(.15+l*.04);}
float vignette=1.-length((uv-.5)*vec2(.65,.8))*.55;color*=vignette;gl_FragColor=vec4(color,1.);}`;
export default function WorldRenderer({
  travelRef,
  velocityRef,
  experimentRef,
  paused = false
}) {
  const mount = useRef(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const host = mount.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance'
      });
    } catch {
      queueMicrotask(() => setFailed(true));
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x06131d);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.autoClear = false;
    host.appendChild(renderer.domElement);
    const backdrop = new THREE.Scene();
    const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const shader = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: {
          value: 0
        },
        uTravel: {
          value: travelRef.current
        },
        uTurbidity: {
          value: 0
        },
        uSize: {
          value: new THREE.Vector2(1200, 800)
        }
      }
    });
    backdrop.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shader));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, .1, 80);
    camera.position.set(0, 1.7, 10);
    camera.lookAt(0, .4, 0);
    scene.add(new THREE.HemisphereLight(0xd9fff3, 0x0d2742, 3));
    const key = new THREE.DirectionalLight(0xffedd9, 5);
    key.position.set(-4, 5, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x70deff, 4);
    rim.position.set(4, 1, -3);
    scene.add(rim);
    const logoTexture=new THREE.TextureLoader().load('/branding/logo-signet.svg');logoTexture.colorSpace=THREE.SRGBColorSpace;
    const vehicles = makeVehicles(logoTexture);
    scene.add(vehicles.submarine, vehicles.rocket);
    const objectScene = new THREE.Scene();
    const objectCamera = new THREE.OrthographicCamera(-600, 600, 400, -400, .1, 3000);
    objectCamera.position.z = 1000;
    objectScene.add(new THREE.HemisphereLight(0xd9fff3, 0x0d2742, 2.5));
    const objectKey = new THREE.DirectionalLight(0xffedd9, 4);
    objectKey.position.set(-200, 400, 700);
    objectScene.add(objectKey);
    const objectRim = new THREE.DirectionalLight(0x70deff, 2.5);
    objectRim.position.set(400, 50, -200);
    objectScene.add(objectRim);
    const objects = LANDMARKS.map(a => {
      const model = createLandmarkModel(a.id);
      const holder = new THREE.Group();
      holder.add(model.group);
      objectScene.add(holder);
      return {
        a,
        model,
        holder
      };
    });
    const dustGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(330 * 3);
    for (let i = 0; i < 330; i++) {
      positions[i * 3] = Math.sin(i * 39.7) * 12;
      positions[i * 3 + 1] = Math.sin(i * 17.4) * 8;
      positions[i * 3 + 2] = -2 - Math.abs(Math.sin(i * 11.8)) * 20;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      color: 0xb0ece1,
      size: .018,
      transparent: true,
      opacity: .3,
      depthWrite: false
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);
    let width = 1,
      height = 1;
    const resize = () => {
      width = Math.max(1, host.clientWidth);
      height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      objectCamera.left = -width / 2;
      objectCamera.right = width / 2;
      objectCamera.top = height / 2;
      objectCamera.bottom = -height / 2;
      objectCamera.updateProjectionMatrix();
      shader.uniforms.uSize.value.set(width, height);
      const size = width < 750 ? Math.min(.34, width / 1200) : 1;
      vehicles.submarine.scale.setScalar(size);
      vehicles.rocket.scale.setScalar(size * .76);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let last = 0;
    let disposed = false;
    const draw = time => {
      if (disposed) return;
      frame = requestAnimationFrame(draw);
      if (document.hidden || host.clientWidth === 0) return;
      if (time - last < 1000 / (width < 700 ? 30 : 50)) return;
      last = time;
      const t = reduce ? 0 : time * .001;
      const u = travelRef.current;
      const state = experimentRef.current;
      shader.uniforms.uTime.value = t;
      shader.uniforms.uTravel.value = u;
      shader.uniforms.uTurbidity.value = state.turbidity;
      vehicles.submarine.visible = u <= .03;
      vehicles.rocket.visible = u > .03;
      const active = vehicles.submarine.visible ? vehicles.submarine : vehicles.rocket;
      active.position.y = (width < 750 ? -1.05 : -.6) + (reduce ? 0 : Math.sin(t * .8) * .045);
      active.rotation.z = (u <= .03 ? -.03 : -.07) + velocityRef.current * (u <= .03 ? .13 : .08);
      active.rotation.y = -.35 + (reduce ? 0 : Math.sin(t * .25) * .045);
      for (const p of vehicles.propellers) p.rotation.x = t * (paused ? 1 : 15);
      vehicles.flame.scale.y = .8 + Math.sin(t * 30) * .1 + Math.abs(velocityRef.current) * .3;
      vehicles.core.scale.y = .9 + Math.sin(t * 40) * .12;
      dust.position.y = (u * .5 - t * .025) % 4;
      dust.rotation.z = t * .002;
      dustMaterial.size = u < -.5 ? .025 : .018;
      dustMaterial.color.set(u < -1.2 ? 0x70bdbd : 0xb0ece1);
      dustMaterial.opacity = u < -.1 ? .12 + state.turbidity * .28 : .06;
      renderer.clear();
      renderer.render(backdrop, ortho);
      renderer.clearDepth();
      renderer.render(scene, camera);
      for (const {
        a,
        model,
        holder
      } of objects) {
        const layout = landmarkLayout(a, u, width);
        holder.visible = layout.visible;
        if (!holder.visible) continue;
        const pixels = layout.pixels;
        holder.scale.setScalar(pixels);
        holder.position.set((layout.x / 100 - .5) * width, (.5 - layout.y / 100) * height, 0);
        model.update(t, state);
        const fade = width < 750 ? layout.opacity : THREE.MathUtils.clamp((.52 - Math.abs(a.travel - u)) * 5, 0, 1);
        for (const material of model.materials) {
          if (material.userData.baseOpacity === undefined) {
            material.userData.baseOpacity = material.opacity;
            material.userData.originalTransparent = material.transparent;
          }
          material.opacity = material.userData.baseOpacity * fade;
          const transparent = material.userData.originalTransparent || fade < 1;
          if (material.transparent !== transparent) {
            material.transparent = transparent;
            material.needsUpdate = true;
          }
        }
      }
      renderer.clearDepth();
      renderer.render(objectScene, objectCamera);
    };
    frame = requestAnimationFrame(draw);
    const contextLost = e => {
      e.preventDefault();
      setFailed(true);
    };
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      for (const {
        model
      } of objects) model.materials.forEach(m => m.dispose());
      for (const s of [scene, backdrop, objectScene]) s.traverse(o => {
        o.geometry?.dispose();
        if (o.material) {
          for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.dispose();
        }
      });
      logoTexture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [travelRef, velocityRef, experimentRef, paused]);
  return <div ref={mount} className="world-renderer" aria-hidden={!failed}>{failed && <p className="render-fallback">Die 3D-Ansicht ist auf diesem Gerät nicht verfügbar. Die Erkundung und alle Inhalte bleiben bedienbar.</p>}</div>;
}


