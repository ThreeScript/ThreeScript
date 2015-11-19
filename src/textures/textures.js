// c: canvas,
// m: mapping,
// 
// 
// ws: wrapS,
// wt: wrapT,
// mgf: magFilter,
// mn: min filter,
// f: format,
// t: type,
// a: anisotropy

TS.cantex = TS.canvas_texture = function(c, m, ws, wt, mg, mn, f, t, a) {
   return new THREE.CanvasTexture(c, m, ws, wt, mg, mn, f, t, a);
};

TS.loatexcub = TS.load_texture_cube = function(urls) {
   return THREE.ImageUtils.loadTextureCube(urls);
};
