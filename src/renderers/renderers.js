TS.wrend = TS.webgl_renderer = function(parameters, clearColor, pixelRatio) {
   var r = new THREE.WebGLRenderer(parameters);
   if (pixelRatio)
      this.pixrat(r, pixelRatio);
   else
      this.pixrat(r, window.devicePixelRatio);
   if (!clearColor)
      clearColor = 0xFFFFFF;
   r.setClearColor(TS.color(clearColor));
   return r;
};

TS.pixrat = TS.set_pixel_ratio = function(r, pixelRatio) {
   if (r && r.setPixelRatio)
      r.setPixelRatio(pixelRatio);
};
