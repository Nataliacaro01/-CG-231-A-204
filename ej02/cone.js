var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z =50;
camera.position.x = 50;
camera.position.y = 20;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//Establecer el radio y altura para el cono
const radio= 15;
const Altura=radio*3;

//Creacion de cono con los parametros
var geometry = new THREE.ConeGeometry(radio, Altura, 10);

//Material y color del cono 
var material = new THREE.MeshNormalMaterial({ color: 0xCC99FF });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)

//Transformaciones  de cono 

cone.position.set(0,0,radio+radio/2); 
geometry.rotateX(Math.PI/2);  
geometry.rotateY(Math.PI/2);

geometry.translate(radio+radio/2,radio,-(radio+radio/2));  
geometry.rotateZ(-Math.atan(radio/Altura)); 

const size = 150;
const divisions = 160;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper( 100 );
    scene.add( axesHelper );
    scene.add(cone);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();