
//var clock = new THREE.Clock();
var spotvist =true;
var pointvis1 =true;
var pointvis2 =true;
var pointvis3 =true;
var R = 0;
var camLock = false;
const scene = new THREE.Scene();
const Tex=new THREE.TextureLoader()
Tex.load('../lib/ProceduralClouds_featured-1.jpg', function(Tex){
	scene.background=Tex;
});
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.lookAt( -2.5, 2, 0.1 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Geometry
var cbgeometry = new THREE.PlaneGeometry( 500, 500, 8, 8 );

// Materials
var cbmaterials = []; 

cbmaterials.push( new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide }) );
cbmaterials.push( new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide }) );

var l = cbgeometry.faces.length / 2; // <-- Right here. This should still be 8x8 (64)

console.log("This should be 64: " + l);// Just for debugging puporses, make sure this is 64

for( var i = 0; i < l; i ++ ) {
    j = i * 2; // <-- Added this back so we can do every other 'face'
    cbgeometry.faces[ j ].materialIndex = ((i + Math.floor(i/8)) % 2); // The code here is changed, replacing all 'i's with 'j's. KEEP THE 8
    cbgeometry.faces[ j + 1 ].materialIndex = ((i + Math.floor(i/8)) % 2); // Add this line in, the material index should stay the same, we're just doing the other half of the same face
}

// Mesh
floor = new THREE.Mesh( cbgeometry, new THREE.MeshFaceMaterial( cbmaterials ) );
floor.rotation.x = Math.PI/2;
scene.add( floor );


var FizzyText = function() {
	// Sets up inital values for the sliders
	  this.spotvist = true;
	  this.pointvis1 = true;
	  this.pointvis2 = true;
	  this.pointvis3 = true;
	this.BoxRot = 0
  }

  var text = new FizzyText();
  var gui = new dat.GUI();
  var spotvist = gui.add(text, 'spotvist')
  var pointvis1 = gui.add(text, 'pointvis1')
  var pointvis2 = gui.add(text, 'pointvis2')
  var pointvis3 = gui.add(text, 'pointvis3')
  var BoxRot = gui.add(text, 'BoxRot', 0, 360).step(10);


  spotvist.onChange(function(value) {
	spotvist = value;
	
});
pointvis1.onChange(function(value) {
	pointvis1 = value;
	
});
pointvis2.onChange(function(value) {
	pointvis2 = value;
	
});
pointvis3.onChange(function(value) {
	pointvis3 = value;
	
});
BoxRot.onChange(function(value) {
	BoxRot = value;
	R=value
});




	// First call to main on page load with ALL set to 0


// //WALL?
// // Geometry
// var wallgeo = new THREE.PlaneGeometry( 500, 500, 8, 8 );

// // Materials
// var wallmat = []; 

// wallmat.push( new THREE.MeshBasicMaterial( { color: 0xFF00FF, side: THREE.DoubleSide }) );
// wallmat.push( new THREE.MeshBasicMaterial( { color: 0x00FF00, side: THREE.DoubleSide }) );

// var l = wallgeo.faces.length / 2; // <-- Right here. This should still be 8x8 (64)

// console.log("This should be 64: " + l);// Just for debugging puporses, make sure this is 64

// for( var i = 0; i < l; i ++ ) {
//     j = i * 2; // <-- Added this back so we can do every other 'face'
//     wallgeo.faces[ j ].materialIndex = ((i + Math.floor(i/8)) % 2); // The code here is changed, replacing all 'i's with 'j's. KEEP THE 8
//     wallgeo.faces[ j + 1 ].materialIndex = ((i + Math.floor(i/8)) % 2); // Add this line in, the material index should stay the same, we're just doing the other half of the same face
// }

// // Mesh
// wall = new THREE.Mesh( wallgeo, new THREE.MeshFaceMaterial( wallmat ) );

// scene.add( wall );


// //anotherwall?
// // Geometry
// var wallgeo2 = new THREE.PlaneGeometry( 500, 500, 8, 8 );

// // Materials
// var wallmat2 = []; 

// wallmat2.push( new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide }) );
// wallmat2.push( new THREE.MeshBasicMaterial( { color: 0xFFFF00, side: THREE.DoubleSide }) );

// var l = wallgeo2.faces.length / 2; // <-- Right here. This should still be 8x8 (64)

// console.log("This should be 64: " + l);// Just for debugging puporses, make sure this is 64

// for( var i = 0; i < l; i ++ ) {
//     j = i * 2; // <-- Added this back so we can do every other 'face'
//     wallgeo2.faces[ j ].materialIndex = ((i + Math.floor(i/8)) % 2); // The code here is changed, replacing all 'i's with 'j's. KEEP THE 8
//     wallgeo2.faces[ j + 1 ].materialIndex = ((i + Math.floor(i/8)) % 2); // Add this line in, the material index should stay the same, we're just doing the other half of the same face
// }

// // Mesh
// wall2 = new THREE.Mesh( wallgeo2, new THREE.MeshFaceMaterial( wallmat2 ) );
// wall2.rotation.y = Math.PI/2;
// scene.add( wall2 );

// //Initial
// camera.position.x= 40;
// camera.position.y= 40;
// camera.position.z= 40;
// camera.lookAt(scene.position);

// //THIRDWALL?
// // Geometry
// var wallgeo3 = new THREE.PlaneGeometry( 500, 500, 8, 8 );

// // Materials
// var wallmat3 = []; 

// wallmat3.push( new THREE.MeshBasicMaterial( { color: 0xFF0000, side: THREE.DoubleSide }) );
// wallmat3.push( new THREE.MeshBasicMaterial( { color: 0x00FFFF, side: THREE.DoubleSide }) );

// var l = wallgeo3.faces.length / 2; // <-- Right here. This should still be 8x8 (64)

// console.log("This should be 64: " + l);// Just for debugging puporses, make sure this is 64

// for( var i = 0; i < l; i ++ ) {
//     j = i * 2; // <-- Added this back so we can do every other 'face'
//     wallgeo3.faces[ j ].materialIndex = ((i + Math.floor(i/8)) % 2); // The code here is changed, replacing all 'i's with 'j's. KEEP THE 8
//     wallgeo3.faces[ j + 1 ].materialIndex = ((i + Math.floor(i/8)) % 2); // Add this line in, the material index should stay the same, we're just doing the other half of the same face
// }

// // Mesh
// wall3 = new THREE.Mesh( wallgeo3, new THREE.MeshFaceMaterial( wallmat3 ) );
// wall3.translate(250,2,0.1)
// scene.add( wall3 );



var geometry = new THREE.CylinderGeometry(0, 150, 150, 4, 1)

var material = new THREE.MeshNormalMaterial();
var pyramid = new THREE.Mesh(geometry, material);
const texture = new THREE.TextureLoader().load('../lib/1e851cb8c77eb0db27ba55070ff05d4a.jpg')
pyramid.material =  new THREE.MeshBasicMaterial( {map: texture});
scene.add(pyramid);


pyramid.position.x=-200
pyramid.position.y=10
pyramid.position.z=10


const light = new THREE.AmbientLight( 0xFFFFFF, 0.5 ); // light
scene.add( light );

const Plight1= new THREE.PointLight(0xFF0000, 0.5, 50);
scene.add( Plight1 );
const Plight2= new THREE.PointLight(0x00FF00, 0.5, 50);
scene.add( Plight2 );
const Plight3= new THREE.PointLight(0x0000FF, 0.5, 50);
scene.add( Plight3 );


//add in option to toggle
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 100000;

scene.add( spotLight );

//Initial
camera.position.x= 60;
camera.position.y= 70;
camera.position.z= -40;
camera.lookAt(scene.position);

var objloader=new THREE.OBJLoader();
objloader.setPath('../lib/');
objloader.load('tree.obj', function(object){
	object.scale.x=object.scale.y=object.scale.z=30;
	object.position.z=-50;
	scene.add(object);
});
var mtlloader=new THREE.MTLLoader();
mtlloader.setPath('../lib/');
mtlloader.load('Touareg.mtl', function(materials){
	materials.preload();
	var objloader2=new THREE.OBJLoader();
	objloader2.setMaterials(materials);
	objloader2.setPath('../lib/');
	objloader2.load('Touareg.obj', function(object2){
		object2.scale.x=object2.scale.y=object2.scale.z=0.01;
		object2.position.x=-50;
		object2.position.z=50;
		scene.add(object2);
	});
});

var mtlloader=new THREE.MTLLoader();
mtlloader.setPath('../lib/');
mtlloader.load('IronMan.mtl', function(materials){
	materials.preload();
	var objloader3=new THREE.OBJLoader();
	objloader3.setMaterials(materials);
	objloader3.setPath('../lib/');
	objloader3.load('IronMan.obj', function(object3){
		object3.scale.x=object3.scale.y=object3.scale.z=0.1;
		scene.add(object3);
	});
});

var clock = new THREE.Clock();
var firstCam = new THREE.FirstPersonControls(camera,renderer.domElement);

firstCam.lookSpeed = 0.05;
firstCam.movementSpeed = 10;

var sphGeo = new THREE.SphereGeometry(40, 10, 25); //update second 10
var sphMat = new THREE.MeshBasicMaterial({
  color: 0xF3A2B0,
  wireframe: true
});

var wireSphere = new THREE.Mesh(sphGeo,sphMat)
scene.add(wireSphere)


wireSphere.position.y = 40
//var modifier = new THREE.SubdivisionModifier( 9 );
//modifier.modify( geometry ); 


//Toggle rotation
const geometry2 = new THREE.BoxBufferGeometry( 100, 150, 10 );
const material2 = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry2, material2 );
scene.add( mesh );

mesh.position.x=200
mesh.position.y=80
mesh.position.z=10
//fix sliders
function render() {
	firstCam.update(clock.getDelta());
	renderer.clear();



	mesh.rotation.x = R
	mesh.rotation.y = R

	wireSphere.rotation.x+=0.01;
	wireSphere.rotation.y+=0.01;



	Plight1.visible = pointvis1
	Plight2.visible = pointvis2
	Plight3.visible = pointvis3

	spotLight.visible = spotvist


	//UPDATE SPHERE GEO

	//UPDATE LIGHTS

  	requestAnimationFrame(render);
  	renderer.render(scene, camera)
}
render();

