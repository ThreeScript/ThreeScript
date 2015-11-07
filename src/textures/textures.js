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

function cantex(c, m, ws, wt, mg, mn, f, t, a) {
   return new THREE.CanvasTexture(c, m, ws, wt, mg, mn, f, t, a);
}
