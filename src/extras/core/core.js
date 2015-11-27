/**
 * 
 * @returns {Object}
 */

TS.curve = function() {
   return new THREE.Curve();
};

/**
 * 
 * @returns {Object}
 */

TS.curve_path = TS.curpat = function() {
   return new THREE.CurvePath();
};

/**
 * 
 * @param {Object} points
 * @returns {Object}
 */

TS.path = function(points) {
   return new THREE.Path(points);
};

/**
 * 
 * @returns {Object}
 */

TS.shape = function() {
   return new THREE.Shape();
};
