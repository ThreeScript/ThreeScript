/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * Load a THREEjs JSON file
 * @param {String} url - url to json file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */
var loajso = load_json = function(url, onLoad, onProgress, onError) {
   var loader = new THREE.JSONLoader();
   loader.load(url, onLoad, onProgress, onError);
};

/**
 * Load a texture file
 * @param {String} url - url to texture file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */
var texloa = texture_loader = function(url, onLoad, onProgress, onError) {
   var loader = new THREE.TextureLoader();
   loader.load(url, onLoad, onProgress, onError);
};

/**
 * Load a material file
 * @param {String} url - url to material file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */

var loadmat = load_material = function(url, onLoad, onProgress, onError) {
   var loader = new THREE.MaterialLoader();
   loader.load(url, onLoad, onProgress, onError);
};
