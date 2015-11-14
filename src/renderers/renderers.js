var wrend = webgl_renderer = function(parameters, clearColor, pixelRatio) {
   var r = new THREE.WebGLRenderer(parameters);
   if (pixelRatio)
      r.setPixelRatio(pixelRatio)
   else
      r.setPixelRatio(window.devicePixelRatio);
   if (!clearColor)
      clearColor = 0xFFFFFF;
   r.setClearColor(new THREE.Color(clearColor));
   return r;
};

var pixrat = set_pixel_ratio = function(r, pixelRatio) {
   if (r && r.setPixelRatio)
      r.setPixelRatio(pixelRatio);
};
