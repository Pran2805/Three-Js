import * as THREE from "three"
import {OrbitControls} from "jsm/controls/OrbitControls.js"

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
camera.position.z = 5;
const loader = new THREE.TextureLoader()
const scene = new THREE.Scene()
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.03

const Sphere = new THREE.IcosahedronGeometry(2,12);

const  material = new THREE.MeshStandardMaterial({
    color: "white",
    flatShading: true,
    map: loader.load('./assets/earthmap1k.jpg')
})


const headlight = new THREE.HemisphereLight("white","black")
scene.add(headlight)

const mesh = new THREE.Mesh(Sphere, material)

scene.add(mesh)

function animate(t=0) {
	renderer.render( scene, camera );
    mesh.rotation.y = t * 0.001 
    controls.update();
}
renderer.setAnimationLoop( animate );


