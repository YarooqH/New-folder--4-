import * as THREE from 'three'
import { Sprite } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SpriteFlipbook } from './SpriteFlipbook';
import { SpriteCharacterController } from './SpriteCharacterControl';

const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 500, 1000 );
camera.position.set( 0, 0, 5);

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
controls.maxDistance = 20;

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'orange' });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(3,0,0);

const flipBook = []
const chat = new SpriteFlipbook('./assets/MeowKnight/Meow-Knight_idle.png', 1, 6, scene);
chat.loop([0,1,2,3,4,5], 1);
// chat.position.set(0,5,0);
flipBook.push(chat);

// const spriteController = new SpriteCharacterController(camera, controls, scene);

const clock = new THREE.Clock();

const characterMovement = (event) => {    
        var key = event.key || event.keyCode;
    
        if (key === 'ArrowUp' || key === 'Up' || key === 23) {
            console.log("sad")
        }
    }
    
const checkBtnPress = () => {
    document.addEventListener('keyup', characterMovement);        
}

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

function onKeyDown(event) {
    // console.log('keypress');
    // debugger
    let keyCode = event.which;
    if (keyCode == 37) { // Left arrow key
        leftPressed = true;
    } else if (keyCode == 38) {
        upPressed = true;
    } else if (keyCode == 39) {
        rightPressed = true;
    } else if (keyCode == 40) { // Right arrow key
        downPressed = true;
    } 
}

function onKeyUp(event) {
    let keyCode = event.which;
    if (keyCode == 37) { // Left arrow ke
        leftPressed = false;
    } else if (keyCode == 38) {
        upPressed = false;
    }  else if (keyCode == 39) { // Right arrow key
        rightPressed = false;
    } else if (keyCode == 40) {
        downPressed = false;
    }
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    let deltaTime = clock.getDelta();
    // spriteController.update(deltaTime);
    flipBook.forEach(s => s.update(deltaTime));
    if (leftPressed) {
        console.log("nice")
        chat.addPosition(-0.02,0,0); 
    }  else if (rightPressed) {
        console.log("not nice")
        chat.addPosition(+0.02,0,0);
    } else if (upPressed) {
        console.log("hotnice")
        chat.addPosition(0,0.02,0);
    } else if (downPressed) {
        console.log("LOPPPED")
        chat.addPosition(0, -0.02, 0);
    }
    // checkBtnPress();
};

animate();