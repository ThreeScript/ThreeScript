TS.loatex = TS.load_texture = function(url) {
   return THREE.ImageUtils.loadTexture(url);
};

TS.loatexcub = TS.load_texture_cube = function(urls) {
   return THREE.ImageUtils.loadTextureCube(urls);
};
