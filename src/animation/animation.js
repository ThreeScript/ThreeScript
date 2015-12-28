/**
 * 
 * @param {type} clip
 * @param {type} startTime
 * @param {type} timeScale
 * @param {type} weight
 * @param {type} loop
 * @returns {Object}
 */

TS.animation_action = TS.aniact = function(clip, startTime, timeScale, weight, loop) {
   return new THREE.AnimationAction(clip, startTime, timeScale, weight, loop);
};

/**
 * 
 * @param {type} name
 * @param {type} duration
 * @param {type} tracks
 * @returns {Object}
 */

TS.animation_clip = TS.anicli = function(name, duration, tracks) {
   return new THREE.AnimationClip(name, duration, tracks);
};

/**
 * 
 * @param {type} root
 * @returns {Object}
 */

TS.animation_mixer = TS.animix = function(root, params) {
   var mixer = new THREE.AnimationMixer(root);
   if (params) {
      if (params.action) {
         mixer.addAction(params.action);
      }
   }
   return mixer;
};

/**
 * 
 * @param {type} mixer
 * @param {type} action
 * @returns {Object}
 */

TS.add_mixer_action = TS.addmixact = function(mixer, action) {
   if (mixer && action) {
      mixer.addAction(action);
   }
};

/**
 * 
 * @returns {Object}
 */

TS.animation_ttils = TS.aniuti = function() {
   return THREE.AnimationUtils;
};

/**
 * 
 * @param {type} rootNode
 * @param {type} trackName
 * @returns {Object}
 */

TS.keyframe_track = TS.keytra = function(name, keys) {
   return new THREE.KeyframeTrack(name, keys);
};
