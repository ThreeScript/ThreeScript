TS.renderer_config = TS.rencon = function(renderer, clearColor, pixelRatio) {
   if (pixelRatio)
      this.pixrat(renderer, pixelRatio);
   else
      this.pixrat(renderer, window.devicePixelRatio);
   if (!clearColor)
      clearColor = 0xFFFFFF;
   renderer.setClearColor(TS.color(clearColor));
};

TS.webgl_renderer = TS.wglren = function(parameters, clearColor, pixelRatio) {
   var r = null;
   var try_webgl = ((!Detector) || (Detector && Detector.webgl));
   if (try_webgl) {
      r = new THREE.WebGLRenderer(parameters);
      TS.rencon(r, clearColor, pixelRatio);
   } else if (parameters && parameters.useCanvas)
      r = ts.canren();
   return r;
};

TS.canvas_renderer = TS.canren = function(parameters, clearColor, pixelRatio) {
   var r = new THREE.CanvasRenderer(parameters);
   TS.rencon(r, clearColor, pixelRatio);
   return r;
};

TS.set_pixel_ratio = TS.pixrat = function(r, pixelRatio) {
   if (r && r.setPixelRatio)
      r.setPixelRatio(pixelRatio);
};
