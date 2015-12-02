
/* ========================================================================== */
/* S3D.S3dObject3D                                                            */
/* ========================================================================== */

var engineTHREEJS = 1;
var engineBABYLON = 2;

var S3dGlobal = {};
S3dGlobal.engine = engineTHREEJS;

var S3D = {};

S3D.S3dObject3D = function(obj3dParams) {
   this.obj3dParams = null;
   // S3D.Object3D.call(this);
   this.obj3d = null;
   if (S3dGlobal.engine === engineTHREEJS) {
      this.s3dObjArray = null;
      this.owner = null;
      this.scene = null;
      this.sca = null;
      this.pos = null;
      this.rot = null;
      this.tra = null;
      this.material = null;
      this.materialList = null;
      this.geometry = null;
      this.geometryStyleArray = null;
      this.fontParamList = null;
      this.textParam = null;
      this.textParamList = null;
      this.onCreate = null;
      this.nextActionExecTime = null;
      this.cursorParam = null;
      this.moving = false;
      this.sep = 0;
      this.spaceWidth = 0;
      this.actionExec = null;
      this.actionExecTime = null;
      if (obj3dParams) {
         this.obj3dParams = obj3dParams;
         this.setObject3dParams();
         this.processParams();
         this.prepareGeometry();
         this.prepareMaterial();
         this.createObj3d();
         this.addObj3dToScene();
         this.afterAdd();
         if (this.onCreate)
            this.onCreate();
      }
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.setObject3dParams = function() {
   if (S3dGlobal.engine === engineTHREEJS) {
      this.owner = this.getValue(this.obj3dParams.owner);

      this.pos = this.getValue(this.obj3dParams.pos);
      this.rot = this.getValue(this.obj3dParams.rot);
      this.sca = this.getValue(this.obj3dParams.sca);
      this.tra = this.getValue(this.obj3dParams.tra);

      this.getPropertyUsingOwner("actionChain");

      this.getPropertyUsingOwner("s3dObjArray");

      this.getPropertyUsingOwner("scene");

      this.getPropertyUsingOwner("sceneMaker");

      this.onCreate = this.getValue(this.obj3dParams.onCreate);

      if (this.obj3dParams.actionExec) {
         var nowMs = Date.now();
         this.actionExec = this.obj3dParams.actionExec;
         if (this.obj3dParams.actionExecTime) {
            this.actionExecTime = this.obj3dParams.actionExecTime;
         } else {
            this.actionExecTime = 1000;
         }
         this.nextActionExecTime = nowMs + this.actionExecTime;
      }

      this.getPropertyUsingOwner("materialParam");

      this.getPropertyUsingOwner("textParam");

      this.getPropertyUsingOwner("cursorParam");

      this.getPropertyUsingOwner("material");

      this.getPropertyUsingOwner("geometry");

      this.getPropertyUsingOwner("geometryStyleArray");

      this.getPropertyUsingOwner("fontParamList");
      this.getPropertyUsingOwner("textParamList");
      this.getPropertyUsingOwner("materialList");

      /* REVER
       if (this.obj3dParams.setTimeout) {
       launchTimeout();
       }
       */
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.processParams = function() {
   if (!this.geometryStyleArray)
      this.geometryStyleArray = new S3D.S3dGeometryStyleArrayChar();

   if (this.s3dObjArray)
      this.s3dObjArray.push(this);

   if (this.textParam) {
      if (this.textParam.sep)
         this.sep = this.textParam.sep;
      else if (this.textParam.size)
         this.sep = this.textParam.size / 4;
      else
         this.sep = 0;

      if (this.textParam.spaceWidth)
         this.spaceWidth = this.textParam.spaceWidth;
      else if (this.textParam.size)
         this.spaceWidth = this.textParam.size / 3;
      else
         this.spaceWidth = 0;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.prepareGeometry = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.prepareMaterial = function() {
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.createObj3d = function() {
   this.obj3d = new THREE.Object3D();
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.addObj3dToScene = function() {
   if (this.scene && this.obj3d)
      this.scene.add(this.obj3d);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.afterAdd = function() {
   this.scaleTo(this.sca);
   this.positionTo(this.pos);
   this.rotationTo(this.rot);
   this.translateTo(this.tra);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.getValue = function(param, defaultValue) {
   if (param)
      return param;
   else if (defaultValue)
      return defaultValue;
   else
      return null;
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.getPropertyUsingOwner = function(propetyName) {
   if (this.obj3dParams[propetyName]) {
      this[propetyName] = this.obj3dParams[propetyName];
   } else {
      if (this.owner && this.owner[propetyName]) {
         this[propetyName] = this.owner[propetyName];
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.setXyzValue = function(xyzTo, xyzFrom) {
   if (xyzFrom) {
      if (xyzFrom.x)
         xyzTo.x = xyzFrom.x;
      if (this.rot.y)
         xyzTo.y = xyzFrom.y;
      if (this.rot.z)
         xyzTo.y = xyzFrom.z;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.commonTo = function(from, to) {
   if (from) {
      if (from.x)
         to.x = from.x;
      if (from.y)
         to.y = from.y;
      if (from.z)
         to.z = from.z;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.commonOn = function(from, to) {
   if (from) {
      if (from.x)
         to.x += from.x;
      if (from.y)
         to.y += from.y;
      if (from.z)
         to.z += from.z;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.scaleTo = function(sca) {
   if (this.obj3d)
      this.commonTo(sca, this.obj3d.scale);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.scaleOn = function(sca) {
   if (this.obj3d)
      this.commonOn(sca, this.obj3d.scale);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.positionTo = function(pos) {
   if (this.obj3d)
      this.commonTo(pos, this.obj3d.position);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.positionOn = function(pos) {
   if (this.obj3d)
      this.commonOn(pos, this.obj3d.position);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.rotationTo = function(rot) {
   if (this.obj3d)
      this.commonTo(rot, this.obj3d.rotation);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.rotationOn = function(rot) {
   if (this.obj3d)
      this.commonOn(rot, this.obj3d.rotation);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.translateTo = function(tra) {
   if (this.obj3d)
      this.commonTo(tra, this.obj3d.translate);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.translateOn = function(tra) {
   if (this.obj3d)
      this.commonOn(tra, this.obj3d.translate);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.getCompoundBoundingBox = function() {
   if (this.obj3d)
      return new THREE.Box3().setFromObject(this.obj3d);
   else
      return null;
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.intercepted = function(x, y, camera, projector) {

   var _intercepted = null;

   if (S3dGlobal.engine === engineTHREEJS) {
      var _vector = new THREE.Vector3(
              (x / window.innerWidth) * 2 - 1,
              -(y / window.innerHeight) * 2 + 1,
              0.5);

      projector.unprojectVector(_vector, camera);

      var _sub = _vector.sub(camera.position);

      var _raycaster = new THREE.Raycaster(
              camera.position, _sub.normalize());

      var _intersects = _raycaster.intersectObjects(this.obj3d.children, true);

      if (_intersects.length > 0) {
         _intercepted = _intersects[0];
      }
   } else if (S3dGlobal.engine === engineBABYLON) {
   }

   return _intercepted;
};

/*----------------------------------------------------------------------------*/

S3D.S3dObject3D.prototype.startMove = function(x, y, z) {
   this.moving = true;
   this.moveDeltaX = x;
   this.moveDeltaY = y;
   this.moveDeltaZ = z;
   this.moveTargetX = this.position.x + this.moveDeltaX;
   this.moveTargetY = this.position.y + this.moveDeltaY;
   this.moveTargetZ = this.position.z + this.moveDeltaZ;
};

/*----------------------------------------------------------------------------*/

S3D.S3dObject3D.prototype.moveAction = function(x, y, z) {
   if (this.moving) {
      var moveX = this.obj3d.position.x > this.moveTargetX;
      if (moveX)
         this.obj3d.position.x += this.moveDeltaX;
      var moveY = this.obj3d.position.x > this.moveTargetY;
      if (moveY)
         this.obj3d.position.y += this.moveDeltaY;
      var moveZ = this.obj3d.position.x > this.moveTargetZ;
      if (moveZ)
         this.obj3d.position.z += this.moveDeltaZ;
      this.moving = (moveX || moveY || moveZ);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.centerX = function() {
   if (!this.box)
      this.box = this.getCompoundBoundingBox();
   if (this.box)
      this.obj3d.position.x = -0.5 * (this.box.max.x - this.box.min.x);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.centerY = function() {
   if (!this.box)
      this.box = this.getCompoundBoundingBox();
   if (this.box)
      this.obj3d.position.y = -0.5 * (this.box.max.y - this.box.min.y);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.centerZ = function() {
   if (!this.box)
      this.box = this.getCompoundBoundingBox();
   if (this.box)
      this.obj3d.position.z = -0.5 * (this.box.max.z - this.box.min.z);
};

/* -------------------------------------------------------------------------- */

S3D.S3dObject3D.prototype.center = function() {
   if (!this.box)
      this.box = this.getCompoundBoundingBox();
   if (this.box) {
      this.centerX();
      this.centerY();
      this.centerZ();
   }
};

/* ========================================================================== */
