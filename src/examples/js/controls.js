var firpercon = first_person_control = function(object, domElement, ms, ls, lon, fz) {
   var fpc = new THREE.FirstPersonControls(object, domElement);
   if (ms)
      fpc.movementSpeed = ms;
   if (ls)
      fpc.lookSpeed = ls;
   if (lon)
      fpc.lon = lon;
   if (fz)
      fpc.freeze;
   return fpc;
};
