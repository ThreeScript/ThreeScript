var amblig, ambient_light = function(color) {
   return new THREE.AmbientLight(color);
};

var dirlig, directional_light = function(color, intensity) {
   return new THREE.DirectionalLight(color, intensity);
};

var hemlig, hemispheric_light = function(skyColor, groundColor, intensity) {
   return new THREE.HemisphereLight(skyColor, groundColor, intensity);
};

var spolig, spot_light = function(color, intensity, distance, angle, exponent, decay) {
   return new THREE.SpotLight(color, intensity, distance, angle, exponent, decay);
};

var poilig, point_light = function(color, intensity, distance, decay) {
   return new THREE.PointLight(color, intensity, distance, decay);
};
