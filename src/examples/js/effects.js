/**
 * 
 * @type anaglyph_effect
 */

TS.anaeff = anaglyph_effect = function(renderer) {
   return new THREE.AnaglyphEffect(renderer);
};

TS.anaglyph_effect = TS.anaeff;