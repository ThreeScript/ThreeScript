/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionMoveOn                                                        */
/* ========================================================================== */

S3D.S3dActionMoveTo = function(actionParams) {
   S3D.S3dActionMove.call(this, actionParams);
   if (actionParams) {
      this.prepareMoveTo();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveTo.prototype = new S3D.S3dActionMove();
S3D.S3dActionMoveTo.prototype.constructor = S3D.S3dActionMoveTo;

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveTo.prototype.prepareMoveTo = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveTo.prototype.setTarget = function() {
   if (this.x !== null)
      this.target.x = this.x;

   if (this.y !== null)
      this.target.y = this.y;

   if (this.z !== null)
      this.target.z = this.z;
};

/* ========================================================================== */
