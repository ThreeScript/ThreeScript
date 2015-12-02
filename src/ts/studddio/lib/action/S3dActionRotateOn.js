/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionRotateOn                                                        */
/* ========================================================================== */

S3D.S3dActionRotateOn = function(actionRotateOnParam) {
   S3D.S3dActionRotate.call(this, actionRotateOnParam);
   if (actionRotateOnParam) {
      this.setActionRotateOnParam(actionRotateOnParam);
      this.prepareRotateOn();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateOn.prototype = new S3D.S3dActionRotate();
S3D.S3dActionRotateOn.prototype.constructor = S3D.S3dActionRotateOn;

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateOn.prototype.setActionRotateOnParam = function(actionRotateParam) {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateOn.prototype.prepareRotateOn = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateOn.prototype.setTarget = function() {
   if (this.x !== null) {
      this.target.x = this.origin.x + this.x;
   }
   if (this.y !== null) {
      this.target.y = this.origin.y + this.y;
   }
   if (this.z !== null) {
      this.target.z = this.origin.z + this.z;
   }
};

/* ========================================================================== */
