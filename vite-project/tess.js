import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 
0.1, 1000 );
// camera.position.set( 0, 0,10);
camera.position.set( 0, 10, 0);
camera.lookAt( 0, 0, 0 );
// camera.lookAt( 0, 0, 0 ); //Rotates the object to face a point in world space.

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

// Scene
const scene = new THREE.Scene();

let points = []

function parametricLine(xo,yo,a,b,  arr){
    let x;
    let y;
    for (let t = 0; t < 10; t++){
        x = xo + a*t;
        y = yo + b*t;
        arr.push(new THREE.Vector2(x,y));
    }
}


parametricLine(2,3,1,1,points);


// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, 1 , 0 );

// Specify the light's position
light.position.set(1, 1, 100 );
// light.intensity.set(0.7);

// Add the light to the scene
scene.add(light)

console.log(points);

const Geo = new THREE.BufferGeometry().setFromPoints(points);
const Mat = new THREE.LineBasicMaterial({color: "white"});
const line = new THREE.Line(Geo, Mat);

scene.add(line);

line.position.set(0,-10,0)

function animate() {
    requestAnimationFrame( animate ); 
    renderer.render( scene, camera );
};

animate();