
/* ========================================================================== */
/* S3D.S3dMesh                                                                */
/* ========================================================================== */

S3D.S3dMesh = function(meshParam) {
   S3D.S3dObject3D.call(this, meshParam);
};

/* -------------------------------------------------------------------------- */

S3D.S3dMesh.prototype = new S3D.S3dObject3D();
S3D.S3dMesh.prototype.constructor = S3D.S3dMesh;

/* -------------------------------------------------------------------------- */

S3D.S3dMesh.prototype.createObj3d = function() {
   if ((this.geometry) && (this.material)) {
      this.obj3d = new THREE.Mesh(this.geometry, this.material);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dMesh.prototype.p = function(param) {
   if (param instanceof Array) {
      return "{pos: " + param[0] + "}";
   }
};

/* ========================================================================== */
