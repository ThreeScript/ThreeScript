/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dAction                                                              */
/* ========================================================================== */

var S3D_ACTION_STATUS_STARTING = 0;
var S3D_ACTION_STATUS_RUNNING = 1;
var S3D_ACTION_STATUS_STOPPED = 2;
var S3D_ACTION_STATUS_PAUSED = 3;
var S3D_ACTION_STATUS_DELAYING = 4;
var S3D_ACTION_STATUS_DEAD = 5;

/* -------------------------------------------------------------------------- */

S3D.S3dAction = function(actionParam) {
   this.status = null;
   this.x = null;
   this.y = null;
   this.z = null;
   this.timeToStart = null;
   this.startTime = null;
   this.stepTime = null;
   this.nextTime = null;
   this.deltaTime = null;
   this.totalTime = null;
   this.origin = {x: null, y: null, z: null};
   this.target = {x: null, y: null, z: null};
   // this.distance = {x: null, y: null, z: null};
   this.step = {x: null, y: null, z: null};
   this.onStart = null;
   this.onRestart = null;
   this.onRun = null;
   this.onStop = null;
   this.onPause = null;
   this.onDelay = null;
   this.onDead = null;
   this.stopNow = null;
   if (actionParam) {
      this.setActionParam(actionParam);
      this.validadeActionParam();
      this.prepare();
      this.start();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.getParam = function(param) {
   if (param || param === 0)
      return param;
   else
      return null;
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.setActionParam = function(actionParam) {
   var ap = actionParam;
   this.owner = this.getParam(ap.owner);
   // this.s3dObj = this.getParam(ap.s3dObj);
   this.obj3d = this.getParam(ap.obj3d);
   this.x = this.getParam(ap.x);
   this.y = this.getParam(ap.y);
   this.z = this.getParam(ap.z);
   this.timeToStart = this.getParam(ap.timeToStart, 0);
   this.stepTime = this.getParam(ap.stepTime, 200);
   this.totalTime = this.getParam(ap.totalTime, 3000);
   if (actionParam.stopNow) {
      this.stopCondition = actionParam.stopNow;
   }
   if (actionParam.onStop) {
      this.onStop = actionParam.onStop;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.validadeActionParam = function() {
   /*
   if (!this.s3dObj)
      throw("need 's3dObj' object");
   */
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.prepare = function() {
   this.stepCount = this.totalTime / this.stepTime;
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.execAction = function() {
   if ((this.status === S3D_ACTION_STATUS_STARTING) && (Date.now() > this.startTime))
      this.run();

   if (this.status === S3D_ACTION_STATUS_RUNNING) {
      var now = Date.now();
      if (now > this.nextTime) {
         while (this.nextTime < now)
            this.nextTime = this.nextTime + this.stepTime;
         if (this.onAction) {
            this.onAction();
         }
         if (this.forceStop) {
            if (this.forceStop())
               this.stop();
         } else {
            this.stepCounter++;
            if (this.stepCounter >= this.stepCount)
               this.stop();
         }
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.start = function() {
   this.status = S3D_ACTION_STATUS_STARTING;
   this.startTime = Date.now() + this.timeToStart;
   if (this.onStart) {
      this.onStart();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.restart = function(actionParam) {
   if (actionParam) {
      this.setActionParam(actionParam);
      this.validadeActionParam();
      this.prepare();
   }
   this.start();
   if (this.onRestart) {
      this.onRestart();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.run = function() {
   this.status = S3D_ACTION_STATUS_RUNNING;
   this.stepCounter = 0;
   this.nextTime = this.startTime;
   if (this.onRun)
      this.onRun(this);
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.stop = function() {
   this.status = S3D_ACTION_STATUS_STOPPED;
   if (this.onStop)
      this.onStop(this);
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.pause = function() {
   this.status = S3D_ACTION_STATUS_PAUSED;
   if (this.onPause)
      this.onPause(this);
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.delay = function(delayTime) {
   this.status = S3D_ACTION_STATUS_DELAYING;
   if (this.onDelay)
      this.onDelay(this, delayTime);
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.dead = function() {
   this.status = S3D_ACTION_STATUS_DEAD;
};

/* -------------------------------------------------------------------------- */

S3D.S3dAction.prototype.kill = function() {
   this.status = S3D_ACTION_STATUS_DEAD;
};

/* ========================================================================== */
