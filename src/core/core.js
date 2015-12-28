/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * 
 */

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
         if (TS.isnum(x))
            obj.x = x;
         if (TS.isnum(y))
            obj.y = y;
         if (TS.isnum(z))
            obj.z = z;
      }
   }
   return mesh;
};

TS.objadd = function(mesh, objectName, x, y, z) {
   if (mesh) {
      var obj = mesh[objectName];
      if (obj) {
         if (TS.isnum(x))
            obj.x += x;
         if (TS.isnum(y))
            obj.y += y;
         if (TS.isnum(z))
            obj.z += z;
      }
   }
   return mesh;
};

TS.getobj = function(mesh, objectName) {
   if (mesh)
      return mesh[objectName];
   else
      return null;
};

TS.position = TS.pos = function(obj, x, y, z) {
   return TS.objto(obj, "position", x, y, z);
};

TS.position_add = TS.posadd = function(obj, x, y, z) {
   return TS.objadd(obj, "position", x, y, z);
};

TS.get_position = TS.getpos = function(obj) {
   return TS.getobj(obj, "position");
};

TS.copy_position = TS.coppos = function(from, to) {
   if (from && from.pos && to)
      return TS.pos(to, from.pos.x || null, from.pos.y || null, from.pos.z || null);
   else
      return null;
};

TS.rotation = TS.rot = function(obj, x, y, z) {
   return TS.objto(obj, "rotation", x, y, z);
};

TS.rotation_add = TS.rotadd = function(obj, x, y, z) {
   return TS.objadd(obj, "rotation", x, y, z);
};

TS.get_rotation = TS.getrot = function(obj) {
   return TS.getobj(obj, "rotation");
};

TS.copy_rotation = TS.coprot = function(from, to) {
   if (from && from.rot && to)
      return TS.rot(to, from.rot.x || null, from.rot.y || null, from.rot.z || null);
   else
      return null;
};

TS.scale = TS.sca = function(obj, x, y, z) {
   return TS.objto(obj, "scale", x, y, z);
};

TS.scale_add = TS.scaadd = function(obj, x, y, z) {
   return TS.objadd(obj, "scale", x, y, z);
};

TS.get_scale = TS.getsca = function(obj) {
   return TS.getobj(obj, "scale");
};

TS.copy_scale = TS.copsca = function(from, to) {
   if (from && from.sca && to)
      return TS.sca(to, from.sca.x || null, from.sca.y || null, from.sca.z || null);
   else
      return null;
};

TS.translate = TS.tra = function(obj, x, y, z) {
   return TS.objto(obj, "translate", x, y, z);
};

TS.translate_add = TS.traadd = function(obj, x, y, z) {
   return TS.objadd(obj, "translate", x, y, z);
};

TS.get_translate = TS.gettra = function(obj, x, y, z) {
   return TS.getobj(obj, "translate", x, y, z);
};

TS.copy_translate = TS.coptra = function(from, to) {
   if (from && from.tra && to)
      return TS.tra(to, from.tra.x || null, from.tra.y || null, from.tra.z || null);
   else
      return null;
};

TS.single_loop = TS.sngloo = function(start, end, step, object, loop_function) {
   for (var i = start; i < end; i = i + step) {
      loop_function(i, object);
   }
};

TS.buffer_attribute = TS.bufatt = function(array, itemSize) {
   return new THREE.BufferAttribute(array, itemSize);
};

TS.buffer_geometry = TS.bufgeo = function() {
   return new THREE.BufferGeometry();
};

TS.channels = function() {
   return new THREE.Channels();
};

TS.clock = function(autoStart) {
   return new THREE.Clock(autoStart);
};

TS.direct_geometry = TS.dirgeo = function() {
   return new THREE.DirectGeometry();
};

TS.event_dispatcher = TS.evedis = function() {
   return new THREE.EventDispatcher();
};

TS.face_3 = TS.fac3 = function(a, b, c, normal, color, materialIndex) {
   return new THREE.Face3(a, b, c, normal, color, materialIndex);
};

TS.face_4 = TS.fac4 = function(a, b, c, d, normal, color, materialIndex) {
   return new THREE.Face4(a, b, c, d, normal, color, materialIndex);
};

TS.geometry = TS.geom = function() {
   return new THREE.Geometry();
};

TS.instanced_buffer_attribute = TS.insbufatt = function(array, itemSize, meshPerAttribute) {
   return new THREE.InstancedBufferAttribute(array, itemSize, meshPerAttribute);
};

TS.instanced_buffer_geometry = TS.insbufgeo = function() {
   return new THREE.InstancedBufferGeometry();
};

TS.instanced_interleaved_buffer = TS.insintbuf = function(array, stride, meshPerAttribute) {
   return new THREE.InstancedInterleavedBuffer(array, stride, meshPerAttribute);
};

TS.interleaved_buffer = TS.intbuf = function() {
   return new THREE.InterleavedBuffer();
};

TS.interleaved_buffer_attribute = TS.intbufatt = function(interleavedBuffer, itemSize, offset) {
   return new THREE.InterleavedBufferAttribute(interleavedBuffer, itemSize, offset);
};

TS.object_3D = TS.obj3d = function() {
   return new THREE.Object3D();
};

TS.raycaster = TS.raycas = function(origin, direction, near, far) {
   return new Raycaster(origin, direction, near, far);
};
