var scene = function() {
   return new THREE.Scene();
};

var fog = function(color, near, far) {
   return new THREE.Fog(color, near, far);
};

var fogexp2 = function(color, density) {
   THREE.FogExp2(color, density);
};

var objadd = object_add = function(receiver) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      if (receiver.add)
         receiver.add(arguments[i]);
   }
};

var objsub = object_sub = function(receiver) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      if (receiver.remove)
         receiver.remove(arguments[i]);
   }
};

var objdo = function(obj, x, y, z) {
   if (!obj)
      return null;
   if (x)
      obj.x = x;
   if (y)
      obj.y = y;
   if (z)
      obj.z = z;
   return obj;
};

var objpos = object_position = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.position, x, y, z);
   else
      return null;
};

var objrot = object_rotation = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.rotation, x, y, z);
   else
      return null;
};

var objsca = object_scale = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.scale, x, y, z);
   else
      return null;
};

var objtra = object_translation = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.translation, x, y, z);
   else
      return null;
};

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
