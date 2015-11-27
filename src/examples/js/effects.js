/**
 * 
 * @param {Object} renderer
 * @param {Number} width
 * @param {Number} height
 * @returns {Object}
 */

TS.anaglyph_effect = TS.anaeff = function(renderer, width, height) {
   return new THREE.AnaglyphEffect(renderer, width, height);
};
