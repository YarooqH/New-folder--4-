import * as AMMO from './node_modules/ammo-js/ammo-wasm.js';
// import { THREE } from 'enable3d'


console.log(AMMO);

let table = new AMMO.btTransform();

console.log(table);

// import { THREE } from 'enable3d'

// green sphere
// const geometry = new THREE.SphereGeometry(0.8, 16, 16)
// const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
// const cube = new THREE.Mesh(geometry, material)
// cube.position.set(0.2, 3, 0)
// this.scene.add(cube)
// // add physics to an existing object
// this.physics.add.existing(cube)