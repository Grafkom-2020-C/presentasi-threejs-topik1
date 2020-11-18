//------PERSPECTIVE CAMERA---------------

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
/*
    (FOV, aspect ratio, near, far)
    75 = field of view (FOV) in degrees ->extent of the scene that is seen on the display
*/

//<canvas> element to display the scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

/*
    BoxGeometry = objek yang berisi vertices (points) dan faces (fill)
    MashBasicMaterial = material
    0x00ff00 = ijo
    Mesh = object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around
    scene.add() = the thing we add will be added to the coordinates (0,0,0)
*/


//create a loop that causes the renderer to draw the scene every time the screen is refreshed
var animate = function ()  //Rendering
{
	requestAnimationFrame( animate ); //pake ini biar ga boros, krn klo pindah tab dia bakal ngepause
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();
