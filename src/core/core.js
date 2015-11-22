/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * The function TS.obj3d (TS.object_3D) returns a new THREE.Object3D class object instance.
 * @returns {Object} returns the new THREE.Object3D object.
 * 
 */

TS.object_3D = TS.obj3d = function() {
   return new THREE.Object3D();
};

TS.add_to = TS.add = function(receiver) {
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

TS.subtract_from = TS.sub = function(receiver) {
   if ((receiver && receiver.remove)) {
      var l = arguments.length;
      for (var i = 1; i < l; i++) {
         var a = arguments[i];
         if (a instanceof THREE.Object3D)
            receiver.remove(a);
      }
   }
};

TS.objto = function(mesh, objectName, x, y, z) {
   if (mesh) {
      var obj = mesh[objectName];
      if (obj) {
         if (x)
            obj.x = x;
         if (y)
            obj.y = y;
         if (z)
            obj.z = z;
      }
   }
   return mesh;
};

TS.position = TS.pos = function(obj, x, y, z) {
   return TS.objto(obj, "position", x, y, z);
};

TS.rotation = TS.rot = function(obj, x, y, z) {
   return TS.objto(obj, "rotation", x, y, z);
};

TS.scale = TS.sca = function(obj, x, y, z) {
   return TS.objto(obj, "scale", x, y, z);
};

TS.translate = TS.tra = function(obj, x, y, z) {
   return TS.objto(obj, "translate", x, y, z);
};

TS.single_loop = TS.sngloo = function(start, end, step, object, loop_function) {
    for (var i = start; i < end; i = i + step) {
        loop_function(i, object);
    }
};
