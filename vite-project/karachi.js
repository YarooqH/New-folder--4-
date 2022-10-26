import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera( 50 , window.innerWidth / window.innerHeight, 0.1, 500, 1000 );
camera.position.set( 0, 0, 6);

const scene = new THREE.Scene();
scene.background = new THREE.Color( 'black' );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 40;

const groundPlaneGeo = new THREE.PlaneGeometry(50, 100);
const groundMaterial = new THREE.MeshBasicMaterial( {color: 'grey', side: THREE.DoubleSide} );
const groundPlane = new THREE.Mesh(groundPlaneGeo, groundMaterial);

scene.add(groundPlane);
groundPlane.rotateX(1.5708);
groundPlane.position.set(4, -0.5, -11);

function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

  var L2 = new THREE.PointLight('white', 20);
  L2.position.z =400;
  L2.position.y = 50;
  L2.position.x = 200;
  scene.add(L2);

let buildingGeo = new THREE.BoxGeometry(1, 1, 1);
let buildingMaterial = new THREE.MeshBasicMaterial( {color: 'pink'} );

var phongMat = new THREE.MeshPhongMaterial({
    color: new THREE.Color("rgb(100,30,100)"),
    specular: new THREE.Color("rgb(140,70,140)"),
    shininess: 10,
    shading: THREE.FlatShading,
    transparent: 1,
    opacity: 1
  });


// const loader = new THREE.CubeTextureLoader();
// loader.setPath( '../assets/' );

// const textureCube = loader.load( [
// 	'building1.jpg', 'building4.jpg',
// 	'building2.jpg', 'building5.jpg',
// 	'building3.jpg', 'building1.jpg'
// ] );

// const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

var textureLoader = new THREE.TextureLoader();

var texture0 = textureLoader.load( '../assets/building1.jpg' );
var texture1 = textureLoader.load( '../assets/building1.jpg' );
var texture2 = textureLoader.load( '../assets/roof.png' );
var texture3 = textureLoader.load( '../assets/building1.jpg' );
var texture4 = textureLoader.load( '../assets/building1.jpg' );
var texture5 = textureLoader.load( '../assets/building1.jpg' );

var materials1 = [
    new THREE.MeshBasicMaterial( { map: texture0 } ),
    new THREE.MeshBasicMaterial( { map: texture1 } ),
    new THREE.MeshBasicMaterial( { map: texture2 } ),
    new THREE.MeshBasicMaterial( { map: texture3 } ),
    new THREE.MeshBasicMaterial( { map: texture4 } ),
    new THREE.MeshBasicMaterial( { map: texture5 } )
];
// var faceMaterial = new THREE.MeshBasicMaterial( materials );

const randomTexture = () => {
    const num = randomGen(1,5);
    if (num == 1){
        var texture0 = textureLoader.load( '../assets/building1.jpg' );
        var texture2 = textureLoader.load( '../assets/roof.png' );

        var materials = [
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture2 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } )
        ];

        return materials;
   }  else if (num == 2){
        var texture0 = textureLoader.load( '../assets/building2.jpg' );
        var texture2 = textureLoader.load( '../assets/roof.png' );

        var materials = [
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture2 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } )
        ];

        return materials;
   } else if (num == 3){
        var texture0 = textureLoader.load( '../assets/building3.jpg' );
        var texture2 = textureLoader.load( '../assets/roof.png' );

        var materials = [
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture2 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } )
        ];

        return materials;
   } else if (num == 4){
        var texture0 = textureLoader.load( '../assets/building4.jpg' );
        var texture2 = textureLoader.load( '../assets/roof.png' );

        var materials = [
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture2 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } )
        ];

        return materials;
   }  else {
        var texture0 = textureLoader.load( '../assets/building5.jpg' );
        var texture2 = textureLoader.load( '../assets/roof.png' );

        var materials = [
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture2 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } ),
            new THREE.MeshBasicMaterial( { map: texture0 } )
        ];

        return materials;
   } 
}


for(let i = 1; i <= 15; i++){
    for(let j = 1; j <= 15; j++){
        let newTexture = randomTexture();
        let building = new THREE.Mesh(buildingGeo, newTexture);
        
        // building.position.x = Math.random() * 200 - 50;
        building.position.x = 2 * i;
        // building.position.y = Math.random() * 200 - 50;
        // building.position.z = (Math.random() * 200 - 50);
        building.position.z = -1 * ((2) * j);

        building.scale.y = randomGen(1,5);
        
        scene.add(building);
        // cubes.push(building);
        // building.position.set(i + spacing , 0, ((-1)*(j)) + spacing);
    }
}

// console.log(groundPlane.getWorldPosition())
var point1 = new THREE.Vector3();
const pos = groundPlane.getWorldPosition(point1);
console.log(pos)

// camera.position.x = pos.x
// camera.position.y = pos.y
// camera.position.z = pos.z

function animate() {
    
    requestAnimationFrame( animate );
    renderer.render( scene, camera );        
};

animate();