//------PERSPECTIVE CAMERA---------------

//create scene
var scene = new THREE.Scene();  
scene.background = new THREE.Color( "rgb(26, 35, 55)" );

var camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 );
/*
    (FOV, aspect ratio, near, far)
    75 = field of view (FOV) in degrees -> seberapa lebar camera's viewnya
    aspect = ratio lebar:tinggi scene
    near =  near clipping plane (default = 0.1)
    far = far clipping plane (default = 2000)
*/

//<canvas> element to display the scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var length = 2;
var width = 2;
var depth = 2;
var geometry = new THREE.BoxBufferGeometry(length, width, depth);
//var material = new THREE.MeshBasicMaterial( { color: 0xea92b1 } ); //tidak terpengaruh light
// var material = new THREE.MeshLambertMaterial( { 
//     color: 0xea92b1, 
//     emissive: 0x0, 
//     emissiveIntensity: 1,
//     side: THREE.DoubleSide
// } );//kalo pake ini perlu light
var material = new THREE.MeshNormalMaterial( ); 
var cube = new THREE.Mesh( geometry, material );
scene.add( cube ); //add the mesh to the scene

// var color = 0xFFFFFF;
// var intensity = 1;
// var light = new THREE.AmbientLight(color, intensity);
// light.position.set( 0, 1, 1 ).normalize();
// scene.add( light );

//camera.position.z = 5;
camera.position.set(0, 0, 3);
// every object is initially created at ( 0, 0, 0 ) ->(x, y, z)
// move the camera back so we can view the scene

/*
    BoxGeometry = objek yang berisi vertices (points) dan faces (fill)
    MashBasicMaterial = material
    Mesh = object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around
    scene.add() = the thing we add will be added to the coordinates (0,0,0)
*/


//create a loop that causes the renderer to draw the scene every time the screen is refreshed
var animate = function ()  //Rendering
{
	requestAnimationFrame( animate ); //pake ini biar ga boros, krn klo pindah tab dia bakal ngepause
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // next, set the renderer to the same size as our container element
    //renderer.setSize(container.clientWidth, container.clientHeight);
    // finally, set the pixel ratio so that our scene will look good on HiDPI displays
    //renderer.setPixelRatio(window.devicePixelRatio);
    // add the automatically created <canvas> element to the page
    //container.append(renderer.domElement);

    // render, or 'create a still image', of the scene
    renderer.render( scene, camera );
}
animate();
