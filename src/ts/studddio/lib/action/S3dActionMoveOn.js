/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionMoveOn                                                        */
/* ========================================================================== */

S3D.S3dActionMoveOn = function(actionMoveOnParam) {
   S3D.S3dActionMove.call(this, actionMoveOnParam);
   if (actionMoveOnParam) {
      this.setActionMoveOnParam(actionMoveOnParam);
      this.prepareMoveOn();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveOn.prototype = new S3D.S3dActionMove();
S3D.S3dActionMoveOn.prototype.constructor = S3D.S3dActionMoveOn;

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveOn.prototype.setActionMoveOnParam = function(actionMoveParam) {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveOn.prototype.prepareMoveOn = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMoveOn.prototype.setTarget = function() {
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
