import * as THREE from "three"
import {OrbitControls} from "jsm/controls/OrbitControls.js"

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

// adding renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// fill of view, aspect, near, far
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
camera.position.z = 2;

const scene = new THREE.Scene()
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.03

const geometry = new THREE.IcosahedronGeometry(0.75, 3)
// const material = new THREE.MeshBasicMaterial({
//     color: "cyan",
// })

//alternate better way
const  material = new THREE.MeshStandardMaterial({
    color: "white",
    flatShading: true
})
const headlight = new THREE.HemisphereLight("navy","red")
scene.add(headlight)
// here completed the alternate way

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const wireMaterial = new THREE.MeshBasicMaterial({
    color: "white",
    wireframe: true
})

const wireMesh = new THREE.Mesh(geometry, wireMaterial)
wireMesh.scale.setScalar(1.001)
mesh.add(wireMesh)


function animate(t=0) {
	renderer.render( scene, camera );
    mesh.rotation.y = t * 0.001
        controls.update();
}
renderer.setAnimationLoop( animate );

// function animate(t = 0) {
//     requestAnimationFrame(animate);
//     mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
//     mesh.rotation.y = t * 0.001
//     renderer.render(scene, camera);
//     controls.update()
// }
// animate()

