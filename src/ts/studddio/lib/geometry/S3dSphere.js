
/* ========================================================================== */
/* S3D.S3dSphere                                                              */
/* ========================================================================== */

S3D.S3dSphere = function(obj3dParams) {
   S3D.S3dMesh.call(this,obj3dParams);
   this.width = null;
   this.material = null;
   if (S3dGlobal.engine === engineTHREEJS) {
      if (sphereParam) {
         this.setBoxParam(sphereParam);
         this.createObject3();
      }
   }
   else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSphere.prototype = new S3D.S3dMesh();
S3D.S3dSphere.prototype.constructor = S3D.S3dSphere;

/* -------------------------------------------------------------------------- */

S3D.S3dSphere.prototype.setObject3dParams = function() {
   S3D.S3dObject3D.prototype.setObject3dParams.call(this);

   if (this.obj3dParams.dim) {
      this.dim = this.obj3dParams.dim;
      
      if (this.dim.x)
         this.x = this.dim.x;
      else
         this.x = 1;

      if (this.dim.y)
         this.y = this.dim.y;
      else
         this.y = 1;

      if (this.dim.z)
         this.z = this.dim.z;
      else
         this.z = 1;
   } else {
      this.dim = {x: 1, y: 1, z: 1};
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSphere.prototype.prepareGeometry = function() {
   this.geometry = new THREE.SphereGeometry(this.width, this.width, this.width, 1, 1, 1);
};

/* ========================================================================== */
