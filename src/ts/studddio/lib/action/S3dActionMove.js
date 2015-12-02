/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionList                                                           */
/* ========================================================================== */

S3D.S3dActionMove = function(actionParams) {
   S3D.S3dAction.call(this, actionParams);
   if (actionParams) {
      this.prepareMove();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype = new S3D.S3dAction();
S3D.S3dActionMove.prototype.constructor = S3D.S3dActionMove;

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.prepareMove = function() {
   this.setOrigin();
   this.setTarget();
   this.setStep();
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.setOrigin = function() {
   if (this.x !== null)
      this.origin.x = this.obj3d.position.x;
   if (this.y !== null)
      this.origin.y = this.obj3d.position.y;
   if (this.z !== null)
      this.origin.z = this.obj3d.position.z;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.setTarget = function() {
   if (this.x !== null)
      this.target.x = this.origin.x;
   if (this.y !== null)
      this.target.y = this.origin.y;
   if (this.z !== null)
      this.target.z = this.origin.z;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.setStep = function() {
   if (this.x !== null)
      this.step.x = (this.target.x - this.origin.x) / this.stepCount;
   if (this.y !== null)
      this.step.y = (this.target.y - this.origin.y) / this.stepCount;
   if (this.z !== null)
      this.step.z = (this.target.z - this.origin.z) / this.stepCount;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.continueAxiz = function(axiz) {
   if (!(this[axiz] || (this[axiz] === 0)))
      return false;
   var step = this.step[axiz];
   return (step && (
           ((step < 0) && (this.obj3d.position[axiz] > this.target[axiz])) ||
           ((step > 0) && (this.obj3d.position[axiz] < this.target[axiz]))));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.continueX = function() {
   return this.continueAxiz("x");
   /*
    return (((this.x) || (this.x === 0)) && (this.step.x) &&
    (((this.step.x < 0) && (this.obj3d.position.x > this.target.x)) ||
    ((this.step.x > 0) && (this.obj3d.position.x < this.target.x))));
    */
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.continueY = function() {
   return this.continueAxiz("y");
   /*
    return (((this.y) || (this.y === 0)) && (this.step.y) &&
    (((this.step.y < 0) && (this.obj3d.position.y > this.target.y)) ||
    ((this.step.y > 0) && (this.obj3d.position.y < this.target.y))));
    */
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.continueZ = function() {
   return this.continueAxiz("z");
   /*
    return (((this.z) || (this.z === 0)) && (this.step.z) &&
    (((this.step.z < 0) && (this.obj3d.position.z > this.target.z)) ||
    ((this.step.z > 0) && (this.obj3d.position.z < this.target.z))));
    */
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.onAction = function() {
   if (this.continueX())
      this.obj3d.position.x += this.step.x;

   if (this.continueY())
      this.obj3d.position.y += this.step.y;

   if (this.continueZ())
      this.obj3d.position.z += this.step.z;
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionMove.prototype.stopNow = function() {
   return !((this.continueX()) || (this.continueY()) || (this.continueZ()));
};

/* ========================================================================== */
