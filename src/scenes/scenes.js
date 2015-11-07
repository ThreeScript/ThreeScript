function scene() {
   return new THREE.Scene();
}

function fog(color, near, far) {
   return new THREE.Fog(color, near, far);
}

function fogexp2(color, density) {
   THREE.FogExp2(color, density);
}

function add(receiver) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      receiver.add(arguments[i]);
   }
}

function addsce(scene) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      scene.add(arguments[i]);
   }
}

function subsce(scene) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      scene.remove(arguments[i]);
   }
}

function cassha() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].castShadow = true;
   }
}

function notcassha() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].castShadow = false;
   }
}

var stopraf = false;

function animate(renderer, scene, camera, startCallback, animCallback) {
   function animationFrame() {
      if (!stopraf) {
         requestAnimationFrame(animationFrame);
      }
      if (animCallback)
         animCallback(this);
      renderer.clear();
      renderer.render(scene, camera);
   }
   stopraf = false;
   if (startCallback)
      startCallback(this);
   renderer.render(scene, camera);
   animationFrame();
}

function render(renderer, scene, camera) {
   renderer.clear();
   renderer.render(scene, camera);
}
