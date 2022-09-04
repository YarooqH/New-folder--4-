import * as THREE from 'three'
import { Sprite } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SpriteFlipbook } from './SpriteFlipbook';

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

// add cube

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'orange' });
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
cube.position.set(0,0,0);

// let currTile = 0;
// let horiTiles = 1;
// let vertTiles = 6;

// const map = new THREE.TextureLoader().load( './assets/MeowKnight/Meow-Knight_idle.png' );
// map.magFilter = THREE.NearestFilter;
// var annie = new TextureAnimator(map, 4, 4, 16, 150);
// map.offset.x = 0.5;
// let meVar = 0.2;
// map.repeat.x = 0.3;
// map.repeat.y = meVar;
// map.repeat.set(1/horiTiles, 1/vertTiles);
// const offsetX = (currTile % horiTiles) / horiTiles;
// const offsetY = (vertTiles - Math.floor(currTile / horiTiles) - 1) / vertTiles;

// map.offset.x = offsetX;
// map.offset.y = offsetY;

// const material1 = new THREE.SpriteMaterial( { map: map } );

// const sprite = new THREE.Sprite( material1 );
// sprite.scale.set(0.6, 1, 1);
// scene.add( sprite );

// const changeState = (a) => {
    let maxDisplayTime = 0;
    let elapsedTime = 0;
    let runningTileArrayIndex = 0;
    let playSpriteIndices = [];
// }
// function update(delta) {
//     elapsedTime += delta;

//     if (maxDisplayTime > 0 && elapsedTime >= maxDisplayTime) {
//         elapsedTime = 0;
//         runningTileArrayIndex = (runningTileArrayIndex + 1) % playSpriteIndices.length;
//         currTile = playSpriteIndices[runningTileArrayIndex];

//         // const offsetX  = (currTile % horiTiles) / horiTiles;
//         const offsetY = (vertTiles - Math.floor(currTile / horiTiles) -1 ) / vertTiles;

//         // map.offset.x = offsetX;
//         map.offset.y = offsetY;
//     }
// }

const flipBook = []
const chat = new SpriteFlipbook('./assets/MeowKnight/Meow-Knight_idle.png', 1, 6, scene);
chat.loop([0,1,2,3,4,5], 1);
flipBook.push(chat);

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    let deltaTime = clock.getDelta();
    flipBook.forEach(s => s.update(deltaTime));
};

animate();