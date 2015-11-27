/**
 * 
 * @returns {Object}
 */

TS.curuti = function() {
   return THREE.CurveUtils;
};

/**
 * 
 * @returns {Object}
 */

TS.geouti = function() {
   return THREE.GeometryUtils;
};

/**
 * 
 * @returns {Object}
 */

TS.imauti = function() {
   return THREE.ImageUtils;
};
/**
 * 
 * @param {String} url
 * @returns {Object}
 */
TS.load_texture = TS.loatex = function(url) {
   return TS.imauti().loadTexture(url);
};
/**
 * 
 * @param {type} urls
 * @returns {Object}
 */

TS.load_texture_cube = TS.loatexcub = function(urls) {
   return TS.imauti().loadTextureCube(urls);
};

/**
 * 
 * @returns {Object}
 */

TS.sceuti = function() {
   return THREE.SceneUtils;
};

/**
 * 
 * @returns {Object}
 */

TS.shauti = function() {
   return THREE.ShapeUtils;
};
