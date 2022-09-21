import * as THREE from '../js/three.module.js';
import { OrbitControls } from "../js/OrbitControls.js";

var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100)
camera.lookAt( 0, 0, 0 );

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 1;
controls.maxDistance = 100;

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight; 
})

var coordinatesList = [
   new THREE.Points(1, 1),
    new THREE.Points(2, 2),
    new THREE.Points(3, 3)
  ];
  
  
  // shape
  var geomShape = new THREE.ShapeBufferGeometry(new THREE.Shape(coordinatesList));
  var matShape = new THREE.MeshBasicMaterial({color:"blue"});
  var shape = new THREE.Mesh(geomShape, matShape);
  scene.add(shape);
  
  // points
//   var geom = new THREE.BufferGeometry().setFromPoints(coordinatesList);
//   var matPoints = new THREE.PointsMaterial({size: 0.55, color: "pink"});
//   var points = new THREE.Points(geom, matPoints);
//   scene.add(points);
  

function animate(){        
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

