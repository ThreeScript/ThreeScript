
/* ========================================================================== */
/* S3D.S3dPlaneMirror                                                              */
/* ========================================================================== */

S3D.S3dPlaneMirror = function(planeParam) {
   /* planeChain, height, size, hover, pos, textureUrl, mirror */

   this.normalPlaneMesh = null;
   this.mirrorPlaneMesh = null;
   this.planeGeo = null;
   this.texture = null;

   S3D.S3dObject3D.call(this);

   if (planeParam) {
      setPlanePram(planeParam);

      this.planeChain = planeChain;

      this.height = height;
      this.size = size;
      this.hover = hover;
      this.pos = pos;
      this.mirror = mirror;

      this.position.x = pos.x;
      this.position.y = pos.y;
      this.position.z = pos.z;

      this.planeChain.add(this);

      if (this.textureUrl) {
         this.texture = S3D.ImageUtils.loadTexture(this.textureUrl);
      }

      this.CreatePlane();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype = new S3D.S3dObject3D();
S3D.S3dPlaneMirror.prototype.constructor = S3D.S3dPlaneMirror;

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.setPlaneParam = function(planeParam) {
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.Plane = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.Params = function() {
   return;
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.CreatePlane = function() {

   var p = this.planeChain.params;
   /*
    var planeParams = {
    size: this.size,
    height: this.height,
    curveSegments: p.curveSegments,
    material: 0,
    extrudeMaterial: 1
    };
    */
   this.planeGeo = new S3D.PlaneBufferGeometry(700, 700);

   this.planeGeo.computeBoundingBox();

   this.planeGeo.computeVertexNormals();

   // var centerOffset = -0.5 * (this.planeGeo.boundingBox.max.x - this.planeGeo.boundingBox.min.x);

   this.normalPlaneMesh = this.addMesh(
           this.GetPlaneMesh(0, this.hover, 0, 0, Math.PI * 2));

   if (this.mirror) {
      this.mirrorPlaneMesh = this.addMesh(
              this.GetPlaneMesh(0, -this.hover, this.height, Math.PI, Math.PI * 2));
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.GetPlaneMesh = function(px, py, pz, rx, ry) {

   /*
    var planeMesh = new S3D.Mesh(this.planeGeo, this.planeChain.params.material);
    */

   var meshMaterialParams = {
      color: 0xfefefe,
      opacity: 0.9,
      transparent: true
   };

   if (this.texture) {
      meshMaterialParams.map = this.texture;
   }

   var meshMaterial = new S3D.MeshLambertMaterial(meshMaterialParams);

   var planeMesh = new S3D.Mesh(this.planeGeo, meshMaterial);

   planeMesh.position.x = px;
   planeMesh.position.y = py;
   planeMesh.position.z = pz;

   planeMesh.rotation.x = rx;
   planeMesh.rotation.y = ry;

   return planeMesh;
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.addMesh = function(planeMesh) {
   this.add(planeMesh);
   return planeMesh;
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneMirror.prototype.refreshPlane = function() {
   updatePermalink();

   this.remove(this.normalPlaneMesh);

   if (this.mirror)
      this.remove(this.mirrorPlaneMesh);

   if (!this.plane)
      return;

   this.CreatePlane();
};

/* ========================================================================== */
