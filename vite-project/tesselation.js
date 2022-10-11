import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 500, 1000 );
camera.position.set( 0, 0, 30);

const scene = new THREE.Scene();
scene.background = new THREE.Color( 'black' );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 }
)

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 40;

let light = new THREE.DirectionalLight(0xffffff, 1);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

let g = new THREE.IcosahedronGeometry(5, 3);

const count = g.attributes.position.count;
const color = new THREE.Color();

console.log(count)

g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));

const colors1 = g.attributes.color;

for (let i = 0; i < (count / 3); i++) {
  color.setHex(Math.random() * 0xffffff);
  colors1.setXYZ(i * 3 + 0, color.r, color.g, color.b);
  colors1.setXYZ(i * 3 + 1, color.r, color.g, color.b);
  colors1.setXYZ(i * 3 + 2, color.r, color.g, color.b);
}

let m = new THREE.MeshLambertMaterial({
  vertexColors: true,
});

let o = new THREE.Mesh(g, m);
scene.add(o);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );  
};

animate();