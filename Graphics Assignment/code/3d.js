
//var clock = new THREE.Clock();
var camLock = false;
const scene = new THREE.Scene();
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


const wireframe = new THREE.WireframeGeometry( geometry );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 1;
line.material.transparent = true;

line.material =  new THREE.LineBasicMaterial( {
	color: 0xDCFF00});


// var modifier = new SubdivisionModifier( 2 ); // Number of subdivisions

// modifier.modify( line );

// scene.add( line );

//scene.add(pyramid);






//Initial
camera.position.x= 60;
camera.position.y= 70;
camera.position.z= -40;
camera.lookAt(scene.position);


var clock = new THREE.Clock();
var firstCam = new THREE.FirstPersonControls(camera,renderer.domElement);

firstCam.lookSpeed = 0.05;
firstCam.movementSpeed = 10;

	this.onKeyDown = function ( event ) {

		//event.preventDefault();

		switch ( event.keyCode ) {

			case 75: camLock = !camLock; break; /*LOCKCAM*/


		}

	};
function render() {
	firstCam.update(clock.getDelta());
	renderer.clear();
	requestAnimationFrame( render );
	renderer.render(scene, camera)
}
function otherRender() {
	renderer.clear();
	requestAnimationFrame( render );
}
if (camLock)
{
otherRender();
}
else
{
render();
}