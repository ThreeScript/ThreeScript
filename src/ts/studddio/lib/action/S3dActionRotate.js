/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionRotate                                                        */
/* ========================================================================== */

S3D.S3dActionRotate = function(actionRotateParam) {
   S3D.S3dAction.call(this, actionRotateParam);
   if (actionRotateParam) {
      this.setActionRotateParam(actionRotateParam);
      this.prepareRotate();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype = new S3D.S3dAction();
S3D.S3dActionRotate.prototype.constructor = S3D.S3dActionRotate;

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.setActionRotateParam = function(actionRotateParam) {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.prepareRotate = function() {
   this.setOrigin();
   this.setTarget();
   this.setStep();
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.setOrigin = function() {
   if (this.x !== null)
      this.origin.x = this.s3dObj.obj3d.rotation.x;
   if (this.y !== null)
      this.origin.y = this.s3dObj.obj3d.rotation.y;
   if (this.z !== null)
      this.origin.z = this.s3dObj.obj3d.rotation.z;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.setTarget = function() {
   if (this.x !== null)
      this.target.x = this.origin.x;
   if (this.y !== null)
      this.target.y = this.origin.y;
   if (this.z !== null)
      this.target.z = this.origin.z;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.setStep = function() {
   if (this.x !== null) {
      this.step.x = (this.target.x - this.origin.x) / this.stepCount;
   }
   if (this.y !== null) {
      this.step.y = (this.target.y - this.origin.y) / this.stepCount;
   }
   if (this.z !== null) {
      this.step.z = (this.target.z - this.origin.z) / this.stepCount;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.continueX = function() {
   return ((this.x) &&
           (((this.step.x < 0) && (this.s3dObj.obj3d.rotation.x >= this.target.x)) ||
                   ((this.step.x >= 0) && (this.s3dObj.obj3d.rotation.x < this.target.x))));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.continueY = function() {
   return ((this.y) &&
           (((this.step.y < 0) && (this.s3dObj.obj3d.rotation.y >= this.target.y)) ||
                   ((this.step.y >= 0) && (this.s3dObj.obj3d.rotation.y < this.target.y))));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.continueZ = function() {
   return ((this.z) &&
           (((this.step.z < 0) && (this.s3dObj.obj3d.rotation.z >= this.target.z)) ||
                   ((this.step.z >= 0) && (this.s3dObj.obj3d.rotation.z < this.target.z))));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.onAction = function() {
   if (this.continueX())
      this.s3dObj.obj3d.rotation.x += this.step.x;

   if (this.continueY())
      this.s3dObj.obj3d.rotation.y += this.step.y;

   if (this.continueZ())
      this.s3dObj.obj3d.rotation.z += this.step.z;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionRotate.prototype.stopNow = function() {
   return !((this.continueX()) || (this.continueY()) || (this.continueZ()));
};

/* ========================================================================== */
