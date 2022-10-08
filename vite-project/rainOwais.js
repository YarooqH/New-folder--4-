import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(0,0,58)

// Renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Orbital control
const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 500;

var loader = new THREE.TextureLoader();
var imgMaterial = new THREE.MeshLambertMaterial({
    map: loader.load("./assets/japan.jpg")
});
var imgGeometry = new THREE.PlaneGeometry(160,10*10);
var mesh = new THREE.Mesh(imgGeometry, imgMaterial);
mesh.position.set(0,0,-0.5);
scene.add(mesh);

var lightIntensity = 1;
var light = new THREE.PointLight( 0xffffff, lightIntensity , 0 );
light.position.set(100, 100, 30 );
scene.add(light);

const playAudio = () => {
    var rainAudio = new Audio('./assets/sounds/rain.mp3')
    rainAudio.play();
    rainAudio.loop = 1;
}

playAudio();
const material = new THREE.MeshBasicMaterial( { color: '#237DE3' } );

function animate() {
    requestAnimationFrame( animate ); 

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const shape = new THREE.Shape();
    const points = []
    points.push(new THREE.Vector2( -0.45, 0 ));
    points.push(new THREE.Vector2( 0, -0.55 ));
    points.push(new THREE.Vector2( 0.45, 0 ));
    points.push(new THREE.Vector2( 0, 1 ));
    shape.moveTo(0,1);
    shape.splineThru(points)
    // Rain drop Geometry and Material
    const geometry = new THREE.ShapeGeometry( shape );
    let rainDrops = []

    for(let i=0; i<=50; i++){
        // rainDrops.push(drop);
        // const drop = new THREE.Mesh( geometry, material ) ;
        rainDrops.push(new THREE.Mesh( geometry, material ));
        
        scene.add(rainDrops[i]);
        
        let posX = getRndInteger(-80,80);
        let posY = getRndInteger(-45,45);
        
        rainDrops[i].position.set(posX,posY,0);            
    }


    renderer.render( scene, camera );

    for(let i=0; i<=50;i++){
        scene.remove(rainDrops[i])
    }
};



animate();


