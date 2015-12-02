
/* ========================================================================== */
/* S3D.S3dTextChain                                                              */
/* ========================================================================== */

S3D.S3dTextChain = function(scene, params, showPlane) {
   S3D.S3dObject3D.call(this);
   this.textArray = [];
   this.params = params;
   this.showPlane = showPlane;
   this.showCube = showPlane;
   this.plane = null;
   this.cube = null;
   this.width = 0;
   this.height = 0;
   this.depth = 0;
   this.maxX = null;
   this.maxY = null;
   this.minX = null;
   this.minY = null;
   scene.add(this);
};

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype = new S3D.S3dObject3D();
S3D.S3dTextChain.prototype.constructor = S3D.S3dTextChain;

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype.CreateTextPoolPlane = function(width, height, depth) {
   this.plane = null;
   if (this.showPlane) {
      if (S3dGlobal.engine === engineTHREEJS) {
         this.plane = new THREE.Mesh(
                 new THREE.PlaneBufferGeometry(width, height),
                 new THREE.MeshBasicMaterial({color: 0x0000ff, opacity: 0.5, transparent: true})
                 );
         // this.plane.rotation.x = -Math.PI / 2;
         this.plane.position.x = width / 2;
         this.plane.position.y = -height / 2;
         this.plane.position.z = (-depth / 2);
         this.plane.position.z += this.plane.position.z / 10; // +10%
         this.plane.visible = false;
         this.add(this.plane);
      } else if (S3dGlobal.engine === engineBABYLON) {
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype.CreateTextPoolCube = function(width, faces) {
   if (this.showCube) {
      this.tjlCube = new S3D.S3dBox(width, faces);
      this.cube = this.tjlCube.cube;
      // this.cube.position.x = width / 2;
      // this.cube.position.y = -height / 2;
      this.cube.position.z = -600;
      //this.cube.position.z += this.cube.position.z / 10; // +10%
      this.cube.visible = false;
      this.add(this.cube);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype.addTextToChain = function(x, y, z, text, height, size, hover, mirror) {
   var t = new S3D.S3dText(this, text, height, size, hover, new S3D.S3dPos(x, y, z), mirror);
   this.addText(t);
   this.calcDim();
   return t;
};

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype.addText = function(text) {
   this.textArray.push(text);
   if (!text.textChain) {
      text.textChain = this;
   }
   var bb = text.textGeo.boundingBox;
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
};

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype.calcDim = function() {
   this.width = this.maxX - this.minX;
   this.height = this.maxY - this.minY;
   this.depth = this.maxZ - this.minZ;
};

/* -------------------------------------------------------------------------- */

S3D.S3dTextChain.prototype.refreshText = function() {
   for (var i = 0; i < this.textArray.length; i++) {
      this.textArray[i].refreshText();
   }
};

/* ========================================================================== */
