TS.scene = function() {
   return new THREE.Scene();
};

TS.fog = function(color, near, far) {
   return new THREE.Fog(color, near, far);
};

TS.fogexp2 = function(color, density) {
   return new THREE.FogExp2(color, density);
};

TS.add = TS.add_to = function(receiver) {
   var count = 0;
   if ((receiver && receiver.add)) {
      var l = arguments.length;
      for (var i = 1; i < l; i++) {
         var a = arguments[i];
         if (a instanceof THREE.Object3D) {
            count++;
            receiver.add(a);
         }
      }
   }
   return count;
};

TS.sub = TS.subtract_from = function(receiver) {
   if ((receiver && receiver.remove)) {
      var l = arguments.length;
      for (var i = 1; i < l; i++) {
         var a = arguments[i];
         if (a instanceof THREE.Object3D)
            receiver.remove(a);
      }
   }
};

TS.objto = function(obj, x, y, z) {
   if (obj) {
      if (x)
         obj.x = x;
      if (y)
         obj.y = y;
      if (z)
         obj.z = z;
   }
   return obj;
};

TS.pos = TS.position = function(obj, x, y, z) {
   if (obj)
      return TS.objto(obj.position, x, y, z);
   else
      return null;
};

TS.rot = TS.rotation = function(obj, x, y, z) {
   if (obj)
      return TS.objto(obj.rotation, x, y, z);
   else
      return null;
};

TS.sca = TS.scale = function(obj, x, y, z) {
   if (obj)
      return TS.objto(obj.scale, x, y, z);
   else
      return null;
};

TS.tra = TS.translate = function(obj, x, y, z) {
   if (obj)
      return TS.objto(obj.translate, x, y, z);
   else
      return null;
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
         renderCallback(s, c);
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
