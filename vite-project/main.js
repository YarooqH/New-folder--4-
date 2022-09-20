import * as THREE from 'three'
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

const geometry = new THREE.BoxGeometry( 1, 2.5, -1 );
const material = new THREE.MeshBasicMaterial( { color: 'orange' });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(3,0,0);

const geometry1 = new THREE.BoxGeometry( 1, 2.5, -1 );
const material1 = new THREE.MeshBasicMaterial( { color: 'pink' });
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.set(17.5,0,0);

const flipBook = []
var chat = new SpriteFlipbook('./assets/MeowKnight/Meow-Knight_Idle.png', 1, 6, scene);

chat.loop([0,1,2,3,4,5], 1);
flipBook.push(chat);

chat.setPosition(-2.5,-1,0);

addImg('./assets/background/Gr.png', 0, 0);

const clock = new THREE.Clock();

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let currentPositon;
let pageEnd = [false, false, false];
let currentPage = 1;

document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

function addImg(src, x, y){
    var loader = new THREE.TextureLoader();
    var imgMaterial = new THREE.MeshLambertMaterial({
    map: loader.load(src)
    });
    var imgGeometry = new THREE.PlaneGeometry(2, 10*.2);
    var mesh = new THREE.Mesh(imgGeometry, imgMaterial);
    mesh.position.set(x,y,-0.5);
    scene.add(mesh);


    let lightIntensity = 1;
    var light = new THREE.PointLight( 0xffffff, lightIntensity , 0 );
    light.position.set(x, y, 100 );
    scene.add(light)

}

function onKeyDown(event) {
    let keyCode = event.which;
    if (keyCode == 37) { 
        leftPressed = true;
    } else if (keyCode == 38) {
        upPressed = true;
    } else if (keyCode == 39) {
        rightPressed = true;
    } else if (keyCode == 40) { 
        downPressed = true;
    } 
}

function onKeyUp(event) {
    let keyCode = event.which;
    if (keyCode == 37) { 
        leftPressed = false;
    } else if (keyCode == 38) {
        upPressed = false;
    }  else if (keyCode == 39) {
        rightPressed = false;
    } else if (keyCode == 40) {
        downPressed = false;
    }   
}

function checkKeys() {
    if (leftPressed) {
        console.log("nice");
        chat.addPosition(-0.02,0,0); 
        currentPositon = Math.floor(chat.getPosition().x);
    }  else if (rightPressed) {
        console.log("not nice")
        chat.addPosition(+0.1,0,0);
        currentPositon = Math.floor(chat.getPosition().x);
    } else if (upPressed) {
        console.log("hotnice")
        chat.addPosition(0,0.02,0);
    } else if (downPressed) {
        console.log("LOPPPED")
        chat.addPosition(0, -0.02, 0);
    }
}

function checkPageEnd(currPosition, currPage) {
    if(currPosition > 2 && currPage == 1){
        pageEnd[0] = true;
    } else if (currPosition > 16 && currPage == 2){
        pageEnd[1] = true;
    }
}

function newPage() {
    if(pageEnd[0]){
        chat.setPosition(12,-1,0);
        controls.target = chat.getPosition();
        camera.position.x = chat.getPosition().x+2.5;
        addImg('./assets/background/group-names.png', 14.5,0);
        cube.position.set(12,0,0);
        pageEnd[0] = false;
        currentPage = 2;
    } else if (pageEnd[1]){
        chat.setPosition(24,-1,0);
        controls.target = chat.getPosition();
        camera.position.x = chat.getPosition().x+2.5;
        cube1.position.set(24,0,0);
        addImg('./assets/background/new.png', 27,0);
        pageEnd[1] = false;
        currentPage = 3;
    }
}

let fpsLimiter = 60;

let count = 0;
let heading = document.getElementById("heading");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    fpsLimiter = parseInt(window.prompt("Enter FPS: "));
})

let delta = 0
let interval = 1 / 60;

function animate() {
    requestAnimationFrame( animate );
    let deltaTime = clock.getDelta();

    interval = 1 / fpsLimiter;
    
    delta += deltaTime;
    
    if (delta > interval) {
        renderer.render( scene, camera );    
        delta = delta % interval;
        count++;
    }
    
    flipBook.forEach(s => s.update(deltaTime));

    checkKeys();
    checkPageEnd(currentPositon, currentPage);
    newPage();    
};

animate();

setInterval(() => {
    heading.innerText = count + ' fps';
    count = 0;
}, 1000)