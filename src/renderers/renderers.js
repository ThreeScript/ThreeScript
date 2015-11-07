function wrend(parameters, clearColor, pixelRatio) {
   var r = new THREE.WebGLRenderer(parameters);
   if (devicePixelRatio)
      r.setPixelRatio(devicePixelRatio)
   else
      r.setPixelRatio(window.devicePixelRatio);
   if (!clearColor)
      clearColor = 0xFFFFFF;
   r.setClearColor(new THREE.Color(clearColor));
   return r;
}
