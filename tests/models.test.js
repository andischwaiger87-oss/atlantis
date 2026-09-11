import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ARTICLES } from '../src/data/expedition.js';
import { LANDMARKS, landmarkLayout, SURFACE_IDS } from '../src/simulation/landmarks.js';
import { MODEL_IDS, createLandmarkModel } from '../src/components/LandmarkModels.js';
import { experimentState } from '../src/simulation/model.js';
test('every field note has a finite, animated geometry model', () => {
  assert.deepEqual([...MODEL_IDS].sort(), ARTICLES.map(a => a.id).sort());
  for (const id of MODEL_IDS) {
    const model = createLandmarkModel(id);
    let meshes = 0;
    model.group.traverse(o => {
      if (o.isMesh) {
        meshes++;
        assert.ok(o.geometry.attributes.position.count > 0);
        assert.equal(o.material.map, null);
      }
    });
    assert.ok(meshes >= 3, id);
    for (const t of [0, 2, 30]) {
      model.update(t, experimentState({
        heat: 2,
        weeks: 6,
        nutrients: 1
      }));
      model.group.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(model.group);
      assert.ok([...box.min.toArray(), ...box.max.toArray()].every(Number.isFinite), id);
    }
    model.group.traverse(o => o.geometry?.dispose());
    model.materials.forEach(m => m.dispose());
  }
});
test('surface models and targets track the shader waterline throughout movement', () => {
  for (const id of SURFACE_IDS) {
    const a = LANDMARKS.find(item => item.id === id);
    for (const travel of [-.4, 0, .3]) {
      const layout = landmarkLayout(a, travel);
      assert.ok(Math.abs(layout.y / 100 - (1 - (.5 - travel * .94))) < 1e-10);
    }
  }
});
test('reef materials respond continuously to the heat experiment', () => {
  const m = createLandmarkModel('coral-reef');
  m.update(0, experimentState({
    heat: 0,
    weeks: 0,
    nutrients: 0
  }));
  const before = m.materials.map(x => x.color.getHex());
  m.update(0, experimentState({
    heat: 2,
    weeks: 6,
    nutrients: 0
  }));
  assert.ok(m.materials.some((x, i) => x.color.getHex() !== before[i]));
  m.group.traverse(o => o.geometry?.dispose());
  m.materials.forEach(x => x.dispose());
});
test('mobile discovery keeps at most three surface objects and reaches every entry', () => {
  const seen = new Set();
  for (let i = -5000; i <= 5000; i++) {
    const visible = LANDMARKS.filter(a => landmarkLayout(a, i / 1000, 390).visible);
    assert.ok(visible.length <= 3);
    if (visible.length > 1) assert.ok(visible.every(a => a.surface));
    visible.forEach(a => seen.add(a.id));
  }
  assert.equal(seen.size, LANDMARKS.length);
});
test('plastic exposure changes turtle posture independently from heat', () => {
  const turtle = createLandmarkModel('sea-turtle');
  const capture = () => {
    const result = [];
    turtle.group.traverse(o => result.push([o.visible, o.rotation.x, o.rotation.y, o.rotation.z]));
    return result;
  };
  turtle.update(1, experimentState({
    heat: 3,
    weeks: 12,
    debris: false
  }));
  const healthy = capture();
  turtle.update(1, experimentState({
    heat: 0,
    weeks: 6,
    debris: true
  }));
  assert.notDeepEqual(capture(), healthy);
  turtle.group.traverse(o => o.geometry?.dispose());
  turtle.materials.forEach(m => m.dispose());
});
