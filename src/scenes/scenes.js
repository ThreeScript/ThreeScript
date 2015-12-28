TS.scene = function() {
   return new THREE.Scene();
};

TS.fog = function(color, near, far) {
   return new THREE.Fog(color, near, far);
};

TS.fogexp2 = function(color, density) {
   return new THREE.FogExp2(color, density);
};

TS.cassha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].castShadow = true;
   }
};

TS.notcassha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].castShadow = false;
   }
};

TS.recsha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].receiveShadow = true;
   }
};

TS.notrecsha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].receiveShadow = false;
   }
};

TS.stopraf = false;

TS.animate = function(r, s, c, startCallback, animCallback, renderCallback) {
   var animator = {
      renderer: r,
      scene: s,
      camera: c};
   function localRender() {
      if (renderCallback)
         renderCallback(r, s, c);
      else
         TS.render(r, s, c);
   }
   function animationFrame() {
      if (!TS.stopraf)
         requestAnimationFrame(animationFrame);
      if (animCallback)
         animCallback(animator);
      localRender();
   }
   TS.stopraf = false;
   if (startCallback)
      startCallback(animator);
   localRender();
   animationFrame();
};

TS.render = function(renderer, scene, camera) {
   renderer.clear();
   renderer.render(scene, camera);
};
