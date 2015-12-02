var S3D_PERSPECTIVE_CAMERA = 1;
var S3D_ORTOGRAPHIC_CAMERA = 2;

/* ========================================================================== */
/* S3D.S3dCamera                                                              */
/* ========================================================================== */

S3D.S3dCamera = function(cameraParam) {

   this.camera = null;
   this.fov = null;
   this.aspect = null;
   this.near = null;
   this.far = null;
   this.cameraTarget = null;

   S3D.S3dObject3D.call(this, cameraParam, this.setCameraParam);

   if (cameraParam) {
      this.setCameraParam(cameraParam);
      this.createObj3d();
      this.createCameraLights();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dCamera.prototype = new S3D.S3dObject3D();
S3D.S3dCamera.prototype.constructor = S3D.S3dCamera;

/* -------------------------------------------------------------------------- */

S3D.S3dCamera.prototype.setObject3dParams = function() {
   S3D.S3dObject3D.prototype.setObject3dParams.call(this);
   this.getValue(this.obj3dparams.fov, 45);
   this.getValue(this.obj3dparams.aspect, window.innerWidth / window.innerHeight);
   this.getValue(this.obj3dparams.near, 1);
   this.getValue(this.obj3dparams.far, 10000);
   this.getValue(this.obj3dparams.cameraTarget);
   this.getValue(this.obj3dparams.type, S3D_PERSPECTIVE_CAMERA);
};

/* -------------------------------------------------------------------------- */

S3D.S3dCamera.prototype.createObj3d = function() {
   if (cameraParam.type === S3D_PERSPECTIVE_CAMERA) {
      this.createPerspectiveCamera(
              this.obj3dparams.fov, this.obj3dparams.aspect,
              this.obj3dparams.near, this.obj3dparams.far, null, null, new THREE.Vector3(0, 0, 0));
      this.obj3d = this.camera;
      this.setXyzValue(this.camera.position, this.pos);
      this.setXyzValue(this.camera.rotation, this.rot);
      this.setXyzValue(this.camera.translate, this.tra);
      this.setXyzValue(this.camera.scale, this.sca);
   } else if (cameraParam.type === S3D_ORTOGRAPHIC_CAMERA) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dCamera.prototype.createPerspectiveCamera = function() {
   this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
   if (this.position) {
      this.camera.position.set(position.x, position.y, position.z);
   }
   if (this.rotation) {
      this.camera.rotation.set(rotation.x, rotation.y, rotation.z);
   }
   /*
    if (this.cameraTarget) {
    this.cameraTarget = this.cameraTarget;
    }
    */
   this.scene.add(this.camera);
};

/* -------------------------------------------------------------------------- */

S3D.S3dCamera.prototype.createCameraLights = function() {
};

/* ========================================================================== */
