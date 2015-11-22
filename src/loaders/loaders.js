/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * 
 * @param {type} loader
 * @param {type} url
 * @param {type} on_load
 * @param {type} on_progress
 * @param {type} on_error
 * @returns {undefined}
 */

TS.load = function(loader, url, on_load, on_progress, on_error) {
   loader.load(url, on_load, on_progress, on_error);
};

/**
 * Load a texture file
 * @param {String} url - url to texture file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */

TS.texture_loader = TS.texloa = function(manager) {
   return new THREE.TextureLoader(manager);
};

/**
 * Load a material file
 * @param {String} url - url to material file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */

TS.material_loader = TS.matloa = function(manager) {
   return new THREE.MaterialLoader(manager);
};

/**
 * Load a THREEjs JSON file
 * @param {String} url - url to json file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */

TS.json_loader = TS.jsoloa = function(manager) {
   return new THREE.JSONLoader(manager);
};

/**
 * Load a OBJ file
 * @param {String} manager - manager
 * @param {String} url - url to material file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */

TS.obj_loader = TS.objloa = function(manager) {
   return new THREE.OBJLoader(manager);
};

/**
 * 
 * @param {type} manager
 * @returns {Object}
 */

TS.image_loader = TS.imgloa = function(manager) {
   return new THREE.ImageLoader(manager);
};
