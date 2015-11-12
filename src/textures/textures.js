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

var cantex = canvas_texture = function(c, m, ws, wt, mg, mn, f, t, a) {
   return new THREE.CanvasTexture(c, m, ws, wt, mg, mn, f, t, a);
};

var loatexcub = load_texture_cube = function(urls) {
   return THREE.ImageUtils.loadTextureCube(urls);
};
