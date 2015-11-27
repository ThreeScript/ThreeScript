/**
 * 
 * @param {type} name
 * @param {type} keys
 * @returns {Object}
 */
TS.Boolean_keyframe_track = TS.bookeytra = function(name, keys) {
   return new THREE.BooleanKeyframeTrack(name, keys);
};

/**
 * 
 * @param {type} name
 * @param {type} keys
 * @returns {Object}
 */
TS.Color_keyframe_track = TS.colkeytra = function(name, keys) {
   return new THREE.ColorKeyframeTrack(name, keys);
};

/**
 * 
 * @param {type} name
 * @param {type} keys
 * @returns {Object}
 */
TS.number_keyframe_track = TS.numkeytra = function(name, keys) {
   return new THREE.NumberKeyframeTrack(name, keys);
};

/**
 * 
 * @param {type} name
 * @param {type} keys
 * @returns {Object}
 */
TS.quaternion_keyframe_track = TS.quakeytra = function(name, keys) {
   return new THREE.QuaternionKeyframeTrack(name, keys);
};

/**
 * 
 * @param {type} name
 * @param {type} keys
 * @returns {Object}
 */
TS.string_keyframe_track = TS.strkeytra = function(name, keys) {
   return new THREE.StringKeyframeTrack(name, keys);
};

/**
 * 
 * @param {type} name
 * @param {type} keys
 * @returns {Object}
 */
TS.vector_keyframe_track = TS.veckeytra = function(name, keys) {
   return new THREE.VectorKeyframeTrack(name, keys);
};
