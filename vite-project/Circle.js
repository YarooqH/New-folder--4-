import * as THREE from '../js/three.module.js';
import { OrbitControls } from "../js/OrbitControls.js";

var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 2);
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
    
// START circle
const geometry = new THREE.BufferGeometry();
const smoothness = 50;

let points = [];

const theta = (2 * Math.PI) / smoothness;

for (let i = 0; i <= smoothness; i++){
    points.push(new THREE.Vector3( Math.cos( theta * i ), Math.sin(theta * i), 0 ));
}

geometry.setFromPoints(points);

const material = new THREE.LineBasicMaterial({ color: "blue" });

let circle = new THREE.Line(geometry, material);

scene.add(circle);

function animate(){        
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

