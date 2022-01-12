import './style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import{GLTFLoader} from './GLTFLoader.js';
import { Loader } from './three.module.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth /window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),antialias:true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(4);
camera.position.setX(20);
camera.position.setY(16);




renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry,material);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);


const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(gridHelper);

const controls = new OrbitControls(camera,renderer.domElement)

var loaderGLTf = new GLTFLoader();

var iphoneMesh = new THREE.Object3D();
loaderGLTf.load("scene.gltf",function(gltf){
  iphoneMesh = gltf.scene;
  iphoneMesh.scale.multiplyScalar( 5 );
  iphoneMesh.position.setZ(-5);
  iphoneMesh.position.setX(4);
  iphoneMesh.position.setY(5);
  scene.add(gltf.scene);
});




//scene.add(torus);

const clock = new THREE.Clock();


 let light1,light2,light3,light4;
 const sphere = new THREE.SphereGeometry( 0, 16, 8 );

light1 = new THREE.PointLight( 0xffffaf, 12, 50 );
light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
scene.add( light1 );

light2 = new THREE.PointLight( 0xffffff, 10, 50 );
light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
scene.add( light2 );

light3 = new THREE.PointLight( 0x8 , 10, 50 );
light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
scene.add( light3 );

light4 = new THREE.PointLight( 0xffffaf, 10, 50 );
light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
scene.add(light4 );
 


function animate()
{
  requestAnimationFrame(animate);

  const r = Date.now() * 0.0005;
  iphoneMesh.rotation.x += 0.001;
  iphoneMesh.rotation.z += 0.002;

  camera.fov = 45 + 30 * Math.sin( 0.05 * r );
	camera.updateProjectionMatrix();

  init();

  renderLights();
  controls.update();
  renderer.render(scene, camera);
}
let firstRun = false;
function init()
{
  var initTime;
  if(!firstRun){
    initTime = Date.now() * 0.0005;
    firstRun = true;
  }
  const time = Date.now() * 0.0005;
  if(Math.abs(initTime-time)<0){
    iphone.position.x += .1;
  }
}
const geometryStar = new THREE.SphereGeometry(0.25,24,24);
const materialStar = new THREE.MeshStandardMaterial({Color:0xffffff})

function addStar(){
 
  const star = new THREE.Mesh(geometryStar,materialStar);

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}
//Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = new THREE.Color(0x0);

function renderLights() {

  const time = Date.now() * 0.0005;
  const delta = clock.getDelta();


  light1.position.x = Math.sin( time * 0.7 ) * 30;
  light1.position.y = Math.cos( time * 0.5 ) * 40;
  light1.position.z = Math.cos( time * 0.3 ) * 30;

  light2.position.x = Math.cos( time * 0.3 ) * 30;
  light2.position.y = Math.sin( time * 0.5 ) * 40;
  light2.position.z = Math.sin( time * 0.7 ) * 30;

  light3.position.x = Math.sin( time * 0.7 ) * 30;
  light3.position.y = Math.cos( time * 0.3 ) * 40;
  light3.position.z = Math.sin( time * 0.5 ) * 30;

  light4.position.x = Math.sin( time * 0.3 ) * 30;
  light4.position.y = Math.cos( time * 0.7 ) * 40;
  light4.position.z = Math.sin( time * 0.5 ) * 30;

  renderer.render( scene, camera );

}

animate();

window.addEventListener( 'resize', onWindowResize );



