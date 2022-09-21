import * as THREE from '../js/three.module.js';
import { OrbitControls } from "../js/OrbitControls.js";

var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 10);
camera.lookAt( 0, 0, 0 );

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight; 
})

let points = [];
const theta = (2 * Math.PI) * 2 / 30;

for(let i=0; i<=200; i++){
    points.push(new THREE.Vector3( Math.cos ( theta * i ), Math.sin ( theta * i ), -0.1 * theta * i));    
}

const material = new THREE.LineBasicMaterial( { color: 'blue'} );
const geometry = new THREE.BufferGeometry().setFromPoints(points);
let helix = new THREE.Line(geometry, material);

scene.add(helix);
helix.rotateX(5);
// helix.rotateY(0);
helix.position.set(0, 5, 0);

function animate(){        
    helix.rotateZ(0.1);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

