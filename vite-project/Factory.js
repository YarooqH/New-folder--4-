import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Factory {
    // fov = 30;
    // near = 0.1;
    // far = 2000;


    camera;
    scene;
    renderer;

    orbitControls = true

       /**
     * 
     * @param posX Camera Position along x-axis (Default is 0)
     * @param posY Camera Position along y-axis (Default is 0)
     * @param posZ Camera Position along z-axis (Default is 30)
     * @param backgroundClr Color of the background (#ffffff / '#EA225F' : Default is 'Black')
     * @param orbitControls Bool Datatype (true / false : Default is true)
     * @param fov Integer (Default is 30)
     * @param near Camera frustum near plane. (Default value is 0.1)
     * @param far Camera frustum far plane. (Default value is 2000)
     */

    constructor (posX = 0, posY = 0, posZ = 30, backgroundClr = 'black', orbitControls = true, fov = 30, near = 0.1, far = 2000) {

        this.camera = new THREE.PerspectiveCamera( fov, 800 / 600, near, far );
        this.camera.position.set(posX, posY, posZ);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( backgroundClr);
    
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( 800, 600 );
        // document.body.appendChild( this.renderer.domElement );
    
        // window.addEventListener( 'resize', () => {
        //     this.renderer.setSize(window.innerWidth, window.innerHeight)
        //     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        //     }
        // )

        // if(orbitControls) {
        //     this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        //     this.controls.minDistance = 1;
        //     this.controls.maxDistance = 40;
        // }
    
    }

    animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );  
    };

    addObj(obj, x, y, z) {
        this.scene.add(obj);
        obj.position.set(x, y, z)
    }


    getAnimate () {
        return this.animate;
    }

    getRenderer() {
        return this.renderer.domElement;
    }
}