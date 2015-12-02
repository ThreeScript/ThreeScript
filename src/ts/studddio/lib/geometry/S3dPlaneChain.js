
/* ========================================================================== */
/* S3D.S3dPlaneChain                                                              */
/* ========================================================================== */

S3D.S3dPlaneChain = function(obj3dParams) {
   S3D.S3dObject3D.call(this,obj3dParams);
   this.planeArray = [];
   // this.width = 0;
   // this.height = 0;
   // this.depth = 0;
   // this.maxX = null;
   // this.maxY = null;
   // this.minX = null;
   // this.minY = null;
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneChain.prototype = new S3D.S3dObject3D();
S3D.S3dPlaneChain.prototype.constructor = S3D.S3dPlaneChain;

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneChain.prototype.addPlane = function(plane) {
   this.planeArray.push(plane);
   /*
   if (!plane.planePool) {
      plane.planePool = this;
   }
   */
  /*
   var bb = plane.obj3d.boundingBox;
   if ((!this.minX) || (bb.min.x < this.minX))
      this.minX = bb.min.x;
   if ((!this.minY) || (bb.min.x < this.minY))
      this.minY = bb.min.y;
   if ((!this.minZ) || (bb.min.x < this.minZ))
      this.minZ = bb.min.z;
   if ((!this.maxX) || (bb.max.x < this.maxX))
      this.maxX = bb.max.x;
   if ((!this.maxY) || (bb.max.y < this.maxY))
      this.maxY = bb.max.y;
   if ((!this.maxZ) || (bb.max.z < this.maxZ))
      this.maxZ = bb.max.z;
   this.calcDim();
   */
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneChain.prototype.calcDim = function() {
   /*
   this.width = this.maxX - this.minX + 1;
   this.height = this.maxY - this.minY + 1;
   this.depth = this.maxZ - this.minZ + 1;
   */
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneChain.prototype.refreshPlane = function() {
   for (var i = 0; i < this.planeArray.length; i++) {
      this.planeArray[i].refreshPlane();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dPlaneChain.prototype.addPlaneToChain = function(px, py, pz, height, size, hover, texture, mirror) {

   var planeParams = {
      owner: this,
      scene: this.obj3d,
      planeWidth: 700,
      planeHeight: 700,
      materialParam: {
         color: 0xfefefe,
         opacity: 0.9,
         transparent: true
      },
      pos: {x: px, y: py, z: pz},
      rot: {x: 0, y: Math.PI * 2, z: z},
      texture: texture,
      hover: hover,
      mirror: mirror
   };

   var p = new S3D.S3dPlane(planeParams);
   this.addPlane(p);
   this.calcDim();
   return p;
};
