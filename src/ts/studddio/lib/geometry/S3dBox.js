
/* ========================================================================== */
/* S3D.S3dBox                                                              */
/* ========================================================================== */

S3D.S3dBox = function(boxParam) {
   S3D.S3dMesh.call(this);
   this.width = null;
   this.facesUrls = null;
   if (S3dGlobal.engine === engineTHREEJS) {
      if (boxParam) {
         this.setBoxParam(boxParam);
         this.createObj3d();
      }
   }
   else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dBox.prototype = new S3D.S3dMesh();
S3D.S3dBox.prototype.constructor = S3D.S3dBox;

/* -------------------------------------------------------------------------- */

S3D.S3dBox.prototype.setObject3dParams = function() {
   S3D.S3dObject3D.prototype.setObject3dParams.call(this);

   if (this.obj3dParams.width) {
      this.dim = this.obj3dParams.width;
      if (this.dim.x) {
         this.x = this.dim.x;
      } else {
         this.x = 1;
      }
      if (this.dim.y) {
         this.y = this.dim.y;
      } else {
         this.y = 1;
      }
      if (this.dim.z) {
         this.z = this.dim.z;
      } else {
         this.z = 1;
      }
   } else {
      this.dim = {x: 1, y: 1, z: 1};
   }

   if (this.obj3dParams.facesUrls) {
      this.facesUrls = boxParam.facesUrls;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dBox.prototype.prepareGeometry = function() {
   this.geometry = new THREE.BoxGeometry(this.width, this.width, this.width, 1, 1, 1);
};

/* -------------------------------------------------------------------------- */

S3D.S3dBox.prototype.prepareMaterial = function() {
   if (this.facesUrls) {
      this.faces = [
         this.createCubeFace(faces.f1),
         this.createCubeFace(faces.f2),
         this.createCubeFace(faces.f3),
         this.createCubeFace(faces.f4),
         this.createCubeFace(faces.f5),
         this.createCubeFace(faces.f6)
      ];
      this.material = new THREE.MeshFaceMaterial(this.material);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dBox.prototype.createCubeFace = function(face) {
   var cf = null;
   if (S3dGlobal.engine === engineTHREEJS) {
      cf = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(face)});
   }
   else if (S3dGlobal.engine === engineBABYLON) {
   }
   return cf;
};

/* ========================================================================== */
