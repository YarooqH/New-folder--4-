import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {initializeDomEvents} from "./js/threex.domevents.js";
import * as TWEEN from './js/tween.esm.js';

const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 0);
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 20;

const ring0 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#ff1419', side: THREE.DoubleSide, transparent: true, opacity: 0.5 }) );

const ring1 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#fda016', side: THREE.DoubleSide, transparent: true, opacity: 0.5  }) );
ring1.scale.set(0.98,0.98,0)

const ring2 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#fdfa15', side: THREE.DoubleSide, transparent: true, opacity: 0.5  }) );
ring2.scale.set(0.96,0.96,0)

const ring3 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#76d442', side: THREE.DoubleSide, transparent: true, opacity: 0.5  }) );
ring3.scale.set(0.94,0.94,0)

const ring4 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#00acf2', side: THREE.DoubleSide, transparent: true, opacity: 0.5  }) );
ring4.scale.set(0.92,0.92,0)

const ring5 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#0973bd', side: THREE.DoubleSide, transparent: true, opacity: 0.5  }) );
ring5.scale.set(0.90,0.90,0)

const ring6 = new THREE.Mesh( new THREE.RingGeometry( 4.5, 4.6, 64 ), new THREE.MeshBasicMaterial( { color: '#67318e', side: THREE.DoubleSide, transparent: true, opacity: 0.5  }) );
ring6.scale.set(0.8809,0.8809,0)

const rainbow = new THREE.Group();
rainbow.add( ring0, ring1, ring2, ring3, ring4, ring5, ring6 );

rainbow.scale.set(2,1.4,0)
rainbow.position.set(0,-3,-0.25);

const cloudClr = '#686564';

const sunGeometry = new THREE.CircleGeometry( 1, 32 );
const sunMaterial = new THREE.MeshBasicMaterial( { color: 'yellow' });
const sun = new THREE.Mesh( sunGeometry, sunMaterial );
scene.add( sun );
sun.position.set(-6,3.1,-0.4)


const cloudGeometry = new THREE.CircleGeometry( 0.5, 32 );
const cloudMaterial = new THREE.MeshBasicMaterial( { color: cloudClr });
const minicloud = new THREE.Mesh( cloudGeometry, cloudMaterial );

const minicloud1 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.52, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
);
minicloud1.position.set(0.5,0.1,0);

const minicloud2 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.52, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
);
minicloud2.position.set(1,0.05,0);

const minicloud3 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.52, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
)
minicloud3.position.set(1.5,0.05,0);

const minicloud4 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.59, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
)
minicloud4.position.set(0.5,-0.5,0);

const minicloud5 = new THREE.Mesh(
  new THREE.CircleGeometry( 0.59, 32),
  new THREE.MeshBasicMaterial({ color: cloudClr })
)
minicloud5.position.set(1.2,-0.4,0);

const cloudGrp = new THREE.Group();
cloudGrp.add(minicloud1, minicloud2, minicloud3, minicloud4, minicloud5, minicloud);
cloudGrp.position.set(-3,0,0);

const cloud2 = cloudGrp.clone();
cloud2.scale.set(1.1,1.1, 0);
cloud2.position.set(-1,0.6,0);

const cloud3 = cloudGrp.clone();
cloud3.scale.set(1.5,1.5, 0);
cloud3.position.set(-3,1.2,0);

const cloudGroup2 = new THREE.Group();
cloudGroup2.add(cloudGrp, cloud2, cloud3);
cloudGroup2.position.set(-4.29,1.95,0);
cloudGroup2.scale.set(0.7,0.7,0);


const cloudGroup3 = cloudGroup2.clone();
cloudGroup3.scale.set(0.7,0.7, 0);
cloudGroup3.rotateZ(3.2);
cloudGroup3.position.set(-5.6,2.5,0);

const cloudGrpLeft = new THREE.Group();
cloudGrpLeft.add(cloudGroup2, cloudGroup3);
cloudGrpLeft.position.set(0,0.3,0);

const cloudGroup4 = cloudGrpLeft.clone();
cloudGroup4.position.set(3.1,0.3,0);

const cloudGroup5 = cloudGrpLeft.clone();
cloudGroup5.position.set(5,0.3,0);

const cloudLeft = new THREE.Group();
cloudLeft.add(cloudGroup4, cloudGroup5, cloudGrpLeft);
scene.add(cloudLeft);

const cloudRight = cloudLeft.clone();
scene.add(cloudRight);

cloudLeft.position.set(-15,0,0);
cloudRight.position.set(20,0.3,0);

cloudLeft.scale.set(1.2,1.2,0);
cloudRight.scale.set(1.2,1.2,0);

// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();

// Load an image file into a custom material
var imgMaterial = new THREE.MeshLambertMaterial({
  map: loader.load('./assets/background.jpg')
});

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var imgGeometry = new THREE.PlaneGeometry(15, 10*.75);

// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(imgGeometry, imgMaterial);

// set the position of the image mesh in the x,y,z dimensions
mesh.position.set(0,0,-0.5);

// add the image to the scene
scene.add(mesh);

var flagLoader = new THREE.TextureLoader();
var flagMaterial = new THREE.MeshBasicMaterial({ map: flagLoader.load( './assets/pak-flag.png' ), transparent: true, opacity:1 });
var flagGeometry = new THREE.PlaneGeometry(5, 10*.4);
var flag = new THREE.Mesh(flagGeometry, flagMaterial);
flag.position.set(0,-1.6,-0.2);
flag.scale.set(0.8,0.8,0)
scene.add(flag);

const rainParticles = new THREE.BufferGeometry();
const rainParticleCount = 5000;

const rainArray = new Float32Array(rainParticleCount * 2);

for (let i = 0; i < rainParticleCount; i++) {
    rainArray[i * 2] = Math.random() * 15 - 1;
    rainArray[i * 2 + 1] = Math.random() * 30 - 1;
}

rainParticles.setAttribute('position', new THREE.BufferAttribute(rainArray, 2));

const rainMaterial = new THREE.PointsMaterial({
    color: 'rgb(89, 126, 248)',
    size: 4,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: false
});

const rain = new THREE.Points(rainParticles, rainMaterial);
scene.add(rain);

rain.position.set(-6.5,4,-0.3);

// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, 1 , 0 );

// Specify the light's position
light.position.set(1, 1, 100 );
// light.intensity.set(0.7);

// Add the light to the scene
scene.add(light)

let rainCheck = false;

var THREEx = {}
initializeDomEvents(THREE, THREEx)

const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(sun, 'click', event =>{
    console.log('click');
    rainCheck = !rainCheck;
    cloudFunction(rainCheck);
});

camera.position.z = 3;

let newTime = -4;
let clock = new THREE.Clock();
let elapsedTime, anthemFlag = false;
let rainAudio, natureAudio, anthemAudio;
var intoScreenLeft, outOfScreenLeft, intoScreenRight, outOfScreenRight, sunLightDim, sunLightBright;
let rainCount = 0;


rainAudio = new Audio('./assets/sounds/rain.mp3');
natureAudio = new Audio('./assets/sounds/nature.mp3');
anthemAudio = new Audio('./assets/sounds/pak-anthem.mp3');

domEvents.addEventListener(mesh, 'click', event =>{
  if(anthemFlag){
    anthemAudio.pause();
    anthemFlag = false;
  } else {
    anthemAudio.play();
    anthemFlag = true;
  }
});

intoScreenLeft = new TWEEN.Tween(cloudLeft.position)
.to({x: 0}, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)

outOfScreenLeft = new TWEEN.Tween(cloudLeft.position)
.to({x: -15}, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)

intoScreenRight = new TWEEN.Tween(cloudRight.position)
.to({x: 9}, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)

outOfScreenRight = new TWEEN.Tween(cloudRight.position)
.to({x: 20}, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)

sunLightDim = new TWEEN.Tween(light.position)
.to({z: 2}, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)

sunLightBright = new TWEEN.Tween(light.position)
.to({z: 100}, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)

const rainFunction = (rainCheck) => {
  if(rainCheck){
    elapsedTime = clock.getElapsedTime();
    rain.position.y = (elapsedTime + newTime) * (-2);
    if(elapsedTime > 8){
      clock = new THREE.Clock();
      newTime = 4;
    } 
  } else {
    clock = new THREE.Clock();
    rain.position.y = 10;
    newTime = -4;
  }

}

const cloudFunction = (rainCheck) => {
    if(rainCheck){
      console.log("intoScreen")
      intoScreenLeft.start();
      intoScreenRight.start();
      sunLightDim.start();
      natureAudio.pause();
      rainCount = rainCount + 1;
      if(rainCount > 1){
        scene.remove(rainbow)
      }
      setTimeout(() => {
        rainAudio.play();
      }, 5000);

    } else {    
      console.log("outOfScreen")
      outOfScreenLeft.start();
      outOfScreenRight.start();
      sunLightBright.start();
      rainAudio.pause();
      if(rainCount > 0){
        scene.add(rainbow);
        rainCount = 1;
      }
      setTimeout(() => {
        natureAudio.play();
        natureAudio.volume = 0.05;
      }, 3000);
    }
}






function animate(t) {
    requestAnimationFrame( animate ); 
    TWEEN.update();
    rainFunction(rainCheck);    
    renderer.render( scene, camera );
};

animate();