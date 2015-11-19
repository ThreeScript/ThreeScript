TS.amblig = TS.ambient_light = function(color) {
   return new THREE.AmbientLight(color);
};

TS.dirlig = TS.directional_light = function(color, intensity) {
   return new THREE.DirectionalLight(color, intensity);
};

TS.hemlig = TS.hemispheric_light = function(skyColor, groundColor, intensity) {
   return new THREE.HemisphereLight(skyColor, groundColor, intensity);
};

TS.spolig = TS.spot_light = function(color, intensity, distance, angle, exponent, decay) {
   return new THREE.SpotLight(color, intensity, distance, angle, exponent, decay);
};

TS.poilig = TS.point_light = function(color, intensity, distance, decay) {
   return new THREE.PointLight(color, intensity, distance, decay);
};
