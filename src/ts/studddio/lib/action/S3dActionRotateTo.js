   /**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionRotateOn                                                        */
/* ========================================================================== */

S3D.S3dActionRotateTo = function(actionRotateToParam) {
   S3D.S3dActionRotate.call(this, actionRotateToParam);
   if (actionRotateToParam) {
      this.setActionRotateToParam(actionRotateToParam);
      this.prepareRotateTo();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateTo.prototype = new S3D.S3dActionRotate();
S3D.S3dActionRotateTo.prototype.constructor = S3D.S3dActionRotateTo;

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateTo.prototype.setActionRotateToParam = function(actionRotateToParam) {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateTo.prototype.prepareRotateTo = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotateTo.prototype.setTarget = function() {
   if (this.x !== null) {
      this.target.x = this.x;
   }
   if (this.y !== null) {
      this.target.y = this.y;
   }
   if (this.z !== null) {
      this.target.z = this.z;
   }
};

/* ========================================================================== */
