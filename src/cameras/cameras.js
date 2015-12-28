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

TS.cube_camera = TS.cubcam = function(near, far, cubeResolution) {
   return new THREE.CubeCamera(near, far, cubeResolution);
};

/**
 * returns a new THREE.OrthographicCamera orthographic camera object.
 * @param {Number} left
 * @param {Number} right
 * @param {Number} top
 * @param {Number} bottom
 * @param {Number} near
 * @param {Number} far
 * @returns {Object} perspective camera
 */

TS.ortographic_camera = TS.ortcam = function(left, right, top, bottom, near, far) {
   return new THREE.OrthographicCamera(left, right, top, bottom, near, far);
};

/**
 * Returns the new THREE.PerspectiveCamera pespective camera object.
 * @param {Number} fov - FOV (Field of Vision)
 * @param {Number} a - aspect (width / height)
 * @param {Number} n - near
 * @param {Number} f
 * @returns {Object} Ortographic Camera
 */

TS.perspective_camera = TS.percam = function(fov, a, n, f) {
   return new THREE.PerspectiveCamera(fov, a, n, f);
};

TS.updpromat = function(camera) {
   camera.updateProjectionMatrix();
};

TS.update_projection_matrix = TS.updpromat;

/**
 * Returns the new THREE.PerspectiveCamera pespective camera object.
 * @param {Object} from - look from
 * @param {Object} to - look to
 * @returns {Boolean} operation success flag
 */

TS.lookat = function(from, to) {
   if (from && from.lookAt && to && to.position) {
      from.lookAt(to.position);
      return true;
   }
};
