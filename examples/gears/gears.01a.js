
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var FLOOR = -250;

var container, stats;

var c, s, sceneAnimationClip;
var renderer;

var mesh, helper;

var mixer;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock();

document.addEventListener('mousemove', onDocumentMouseMove, false);

init();
animate();

function init() {

   container = document.getElementById('container');

   s = new THREE.Scene();
   s.fog = new THREE.Fog(0xffffff, 2000, 10000);

   c = pcam(30, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
   c.position.z = 150;

   resize(ct, c, r);
   mouseon(ct, c, 1, 2, 4);

   //s.add( c );

   // GROUND

   var g = plabufgeo(16000, 16000);
   var m = phomat({emissive: 0x000000});

   var ground = mesh(g, m);
   ground.position.set(0, FLOOR, 0);
   ground.rotation.x = -Math.PI / 2;
   /*s.add( ground );*/

   ground.receiveShadow = true;


   // RENDERER

   renderer = wrend({antialias: true}, s.fog.color);
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
   renderer.domElement.style.position = "relative";

   renderer.gammaInput = true;
   renderer.gammaOutput = true;

   renderer.shadowMap.enabled = true;

   var ct = container("id-threescript-animation", r);

   var loader = new THREE.ObjectLoader();
   loader.load("models/json/s-animation.json", function(loadedScene) {

      sceneAnimationClip = loadedScene.animations[0];
      s = loadedScene;
      s.add(c);
      s.fog = new THREE.Fog(0xffffff, 2000, 10000);

      mixer = new THREE.AnimationMixer(s);

      mixer.addAction(new THREE.AnimationAction(sceneAnimationClip));

   });
}

animate(r, s, c, startCallback, loopCallback);

function startCallback(loop) {
   loop.step = 0;
}

function loopCallback(loop) {
   var delta = 0.75 * clock.getDelta();

   c.position.x += (mouseX - c.position.x) * .05;
   c.position.y = THREE.Math.clamp(c.position.y + (-mouseY - c.position.y) * .05, 0, 1000);

   c.lookAt(s.position);

   if (mixer) {
      //console.log( "updating mixer by " + delta );
      mixer.update(delta);
   }
}
