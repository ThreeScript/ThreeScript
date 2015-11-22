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

TS.cantex = TS.canvas_texture = function(
        image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
   return new THREE.CanvasTexture(
           image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
};

TS.loatexcub = TS.load_texture_cube = function(urls) {
   return THREE.ImageUtils.loadTextureCube(urls);
};

TS.repwra = function(texture, width, anisotropy) {
   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
   if (width) {      
      texture.repeat.set(width, width);
   }
   if (anisotropy)
      texture.anisotropy = anisotropy;
};
