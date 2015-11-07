function amblig(color) {
   return new THREE.AmbientLight(color);
}

function dirlig(color, intensity) {
   return new THREE.DirectionalLight(color, intensity);
}

function hemlig(skyColor, groundColor, intensity) {
   return new THREE.HemisphereLight(skyColor, groundColor, intensity);
}

function spolig(color, intensity, distance, angle, exponent, decay) {
   return new THREE.SpotLight(color, intensity, distance, angle, exponent, decay);
}

function poilig(color, intensity, distance, decay) {
   return new THREE.PointLight(color, intensity, distance, decay);
}
