/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * Returns a new THREE.CubeCamera cube camera object.
 * @param {Number} n - near
 * @param {Number} f - far
 * @param {Number} cr - cubeResolution
 * @returns {Object} cube camera
 */

var cc = ccam = cubecam = cubecamera = function(n, f, cr) {
   return new THREE.CubeCamera(n, f, cr);
};

/**
 * returns a new THREE.OrthographicCamera orthographic camera object.
 * @param {Number} l - left
 * @param {Number} r - right
 * @param {Number} t - top
 * @param {Number} b - bottom
 * @param {Number} n - near
 * @param {Number} f - far
 * @returns {Object} perspective camera
 */

var ocam = ortographic_camera = function(l, r, t, b, n, f) {
   return new THREE.OrthographicCamera(l, r, t, b, n, f);
};

/**
 * Returns the new THREE.PerspectiveCamera pespective camera object.
 * @param {Number} fov - FOV (Field of Vision)
 * @param {Number} a - aspect (width / height)
 * @param {Number} n - near
 * @param {Number} f
 * @returns {Object} Ortographic Camera
 */

var pcam = perspective_camera = function(fov, a, n, f) {
   return new THREE.PerspectiveCamera(fov, a, n, f);
};
