import * as THREE from 'three'
import {Factory} from './Factory'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SpriteFlipbook } from './SpriteFlipbook';


const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 500, 1000 );
camera.position.set( 0, 0, 5);

const scene = new THREE.Scene();
scene.background = new THREE.Color( 'black' );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );        
};

animate();

// let template = new Factory(0, 0, 20, 'black', true);
// let domElement = template.getRenderer();

// let animateFunction = template.getAnimate();

// document.body.appendChild( domElement );
// // console.log(animateFunction)
// // console.log(domElement)

// const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// const cube = new THREE.Mesh( geometry, material );


// template.addObj(cube, 10,0,0)

