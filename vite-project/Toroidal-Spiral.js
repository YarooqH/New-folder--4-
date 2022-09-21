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
    
const material = new THREE.LineBasicMaterial( { color: 'blue'} );

let points = [];
var innerRadius = 1;
var outterRadius = 5
var rotations = 30;
var x,y,z;

for (let i = 0; i <= 960 ; i += 1) {
    let theta = 2 * ( Math.PI / 480 ) * i;
    innerRadius = 1;
    outterRadius = 5
    rotations = 30
    x = (innerRadius * Math.cos(rotations * theta) + outterRadius) * Math.cos(theta);
    y = (innerRadius * Math.cos(rotations * theta) + outterRadius) * Math.sin(theta);
    z = (innerRadius * Math.sin(rotations * theta));
    points.push(new THREE.Vector3(x, y, z));
}

var geometry = new THREE.BufferGeometry().setFromPoints( points );
const toroidalSpiral = new THREE.Line( geometry, material );

scene.add(toroidalSpiral);

function animate(){        
    toroidalSpiral.rotateZ(0.001);
    toroidalSpiral.rotateX(0.01);
    toroidalSpiral.rotateY(0.01);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

