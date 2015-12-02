
/* ========================================================================== */
/* S3D.S3dPlane                                                              */
/* ========================================================================== */

S3D.S3dPlane = function(obj3dParams) {
   this.width = 0;
   this.height = 0;
   this.textureImg = null;
   this.texture = null;
   S3D.S3dMesh.call(this, obj3dParams);
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlane.prototype = new S3D.S3dMesh();
S3D.S3dPlane.prototype.constructor = S3D.S3dPlane;

/* -------------------------------------------------------------------------- */

S3D.S3dPlane.prototype.setObject3dParams = function() {
   S3D.S3dObject3D.prototype.setObject3dParams.call(this);
   this.width = this.obj3dParams.width;
   this.height = this.obj3dParams.height;
   this.textureImg = this.obj3dParams.img;
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlane.prototype.processParams = function() {
   S3D.S3dObject3D.prototype.processParams.call(this);
   if (this.textureImg) {
      if (this.textureImg instanceof HTMLImageElement)
         this.texture = new THREE.Texture(this.textureImg);
      else
         this.texture = THREE.ImageUtils.loadTexture(this.textureImg);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlane.prototype.prepareGeometry = function() {
   this.geometry = new THREE.PlaneBufferGeometry(this.width, this.height);
   this.geometry.computeBoundingBox();
   this.geometry.computeVertexNormals();
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlane.prototype.prepareMaterial = function() {
   if (this.material) {
      if (this.cloneMaterial) {
         this.material = this.material.clone();
      }
   } else {
      var mat = null;
      if (this.materialParam) {
         mat = this.materialParam;
      } else {
         mat = {
            color: 0xfefefe,
            opacity: 0.9,
            transparent: true
         };
      }
      mat.map = this.texture;
      this.material = new THREE.MeshBasicMaterial(mat);
   } 
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlane.prototype.refreshPlane = function() {
   if (S3dGlobal.engine === engineTHREEJS) {
      // this.obj3d.remove(this.obj3d);      
      // this.createPlane();
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* ========================================================================== */
