import * as THREE from '../js/three.module.js';
import { OrbitControls } from "../js/OrbitControls.js";

var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
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
for (let i = 1; i <= 10; i++) {
    points.push(new THREE.Vector2(i, 1));
}

const material = new THREE.LineBasicMaterial( { color: 'blue'} );
const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry,material);

scene.add(line);

line.position.set(-5, 0, 0);


function animate(){        
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

