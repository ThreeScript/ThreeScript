
/* ========================================================================== */
/* S3D.S3dCharCommon                                                              */
/* ========================================================================== */

S3D.S3dCharCommon = function(
        owner, textParam, material, geometryStyleArray) {

   S3D.S3dObject3D.call(this);

   this.owner = owner;
   
   if (textParam) {
      this.textParam = textParam;
   } else {
      if (this.owner) {
         this.textParam = this.tjlEditor.textParam;
      }
   }
   if (material) {
      this.material = material;
   } else {
      if (this.owner) {
         this.material = this.tjlEditor.material;
      }
   }
   if (geometryStyleArray) {
      this.geometryStyleArray = geometryStyleArray;
   } else {
      if ((this.owner) && (this.tjlEditor.geometryStyleArray)) {
         this.geometryStyleArray = this.tjlEditor.geometryStyleArray;
      } else {
         this.geometryStyleArray = new S3D.S3dGeometryStyleArrayChar();
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dCharCommon.prototype = new S3D.S3dObject3D();
S3D.S3dCharCommon.prototype.constructor = S3D.S3dCharCommon;

/* ========================================================================== */
