/**
 * @author Betobyte / www.rpt.com.br/site/threejslive
 */

/* ========================================================================== */
/* S3D.S3dSceneMaker                                                        */
/* ========================================================================== */

var enumControlType = {
   rotational: 1,
   positional: 2,
   trackball: 3
};

S3D.S3dSceneMaker = function(controlType) {
   this.controlType = controlType;
   this.scene = new THREE.Scene();
   this.camera = null;
   this.cameraTarget = null;
   this.effectFXAA = null;
   this.deltaX = 0;
   this.deltaY = 0;
   this.deltaZ = 0;
   this.lastX = 0;
   this.lastY = 0;
   this.lastZ = 0;
   this.mouseX = 0;
   this.leftButtonDown = false;
   this.targetRotation = 0;
   this.targetRotationOnMouseDown = 0;
   this.mouseXOnMouseDown = 0;
   this.container = null;
   this.moveY = true;
   this.postprocessing = {enabled: false};
   this.geometryStyleArray = new S3D.S3dGeometryStyleArrayChar();
   this.s3dObjArray = [];
   this.webglAvailable = this.webglAvailable();
   this.useWebgl = true;
   this.useTrackball = false;
   this.actionChain = new S3D.S3dActionChain({});
   this.actionChain.sceneMaker = this;
};

/* -------------------------------------------------------------------------- * /
 
 S3D.S3dSceneMaker.prototype = new S3D.S3dObject3D();
 S3D.S3dSceneMaker.prototype.constructor = S3D.S3dRichText;
 
 /* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.webglAvailable = function() {
   try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (
              canvas.getContext('webgl') ||
              canvas.getContext('experimental-webgl'))
              );
   } catch (e) {
      return false;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createObjects = function(idContainer, clearColor, antialias, devicePixelRatio) {
   this.createContainer(idContainer);
   var w = this.container.clientWidth;
   var h = this.container.clientHeight;
   this.w = w;
   this.h = h;
   this.hw = w / 2;
   this.hh = h / 2;
   this.createPerspectiveCamera(45, w / h, 1, 100000, null, null, null);
   this.createRenderer({antialias: antialias}, w, h, clearColor, devicePixelRatio);
   this.prepareStats();
   this.prepareEvents();
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.prepareStats = function() {
   this.createStatWindow();
   this.stats.domElement.style.position = 'absolute';
   this.stats.domElement.style.top = '0px';
   this.stats.domElement.style.zIndex = 100;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createPerspectiveCameraGroup = function() {
   this.cameraGroup = new THREE.Object3D();
   this.cameraGroup.add(this.camera);
   this.scene.add(this.cameraGroup);
   this.createCameraGroupLights();
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createPerspectiveCamera = function(fov, aspect, near, far, position, rotation, cameraTarget) {
   this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
   if (position) {
      this.camera.position.set(position.x, position.y, position.z);
   }
   if (rotation) {
      this.camera.rotation.set(rotation.x, rotation.y, rotation.z);
   }
   if (cameraTarget) {
      this.cameraTarget = cameraTarget;
   }
   // this.scene.add(this.camera);
   this.createPerspectiveCameraGroup();
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createCameraGroupPointLight = function(color, intensity, px, py, pz, rx, ry, rz) {
   var pl = new THREE.PointLight(color, intensity);
   pl.position.set(px, py, pz);
   pl.rotation.set(px, py, pz);
   this.cameraGroup.add(pl);
   return pl;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createCameraGroupLights = function() {
   this.ambientLight = new THREE.AmbientLight(0xFFFFFF);
   this.scene.add(this.ambientLight);

   var useDirLight = false;
   var useWhiteLight = false;

   if (useDirLight) {
      var dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.125);
      dirLight.position.set(0, 0, 1).normalize();
      this.cameraGroup.add(dirLight);
   }

   if (useWhiteLight) {
      this.pointLight_01 = this.createCameraGroupPointLight(0xFFFFFF, 1.5, 0, 1000, 0, 0, 0, 0);
   } else {
      this.pointLight_01 = this.createCameraGroupPointLight(0xFF0000, 1.5, -5000, 1000, 0, 0, 3 * (Math.PI / 4), 0);
      this.pointLight_02 = this.createCameraGroupPointLight(0x00FF00, 1.5, 0, 1000, 0, 0, 0, 0);
      this.pointLight_03 = this.createCameraGroupPointLight(0x0000FF, 1.5, 5000, 1000, 0, 0, -3 * (Math.PI / 4), 0);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.cameraTarget = function(cameraTarget) {
   this.cameraTarget = cameraTarget;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createContainer = function(containerName) {
   if (containerName)
      this.container = document.getElementById(containerName);
   else {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
   }
   var w = this.container.clientWidth;
   var h = this.container.clientHeight;
   this.container.w = w;
   this.container.h = h;
   this.container.hw = w / 2;
   this.container.hh = h / 2;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createRenderer = function(
        param, width, heigth, clearColor, pixelRatio) {
   if (!this.container)
      return;

   if (this.useWebgl && this.webglAvailable) {
      this.renderer = new THREE.WebGLRenderer(param);
      this.renderer.setPixelRatio(pixelRatio);
   } else {
      this.renderer = new THREE.CanvasRenderer(param);
   }
   // renderer.setClearColor(globalSceneMaker.scene.fog.color);
   this.renderer.setSize(width, heigth);
   this.renderer.setClearColor(clearColor);
   this.container.appendChild(this.renderer.domElement);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.createStatWindow = function() {
   this.stats = new Stats();
   this.container.appendChild(this.stats.domElement);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.postProcessing = function(enabled, width, height) {
   this.postprocessing.enabled = enabled;

   if (this.postprocessing.enabled && !this.composer) {
      if ((!globalSceneMaker.useWebgl) || (!globalSceneMaker.webglAvailable)) {
         this.postprocessing.enabled = false;
         return;
      }

      this.renderer.autoClear = false;

      var renderModel = new THREE.RenderPass(this.scene, this.camera);
      var effectBloom = new THREE.BloomPass(0.25);
      var effectFilm = new THREE.FilmPass(0.5, 0.125, 2048, false);

      this.effectFXAA = new THREE.ShaderPass(THREE.FXAAShader);

      this.width = width || 2;
      this.height = height || 2;

      this.effectFXAA.uniforms[ 'resolution' ].value.set(1 / this.width, 1 / this.height);

      effectFilm.renderToScreen = true;

      this.composer = new THREE.EffectComposer(this.renderer);

      this.composer.addPass(renderModel);
      this.composer.addPass(this.effectFXAA);
      this.composer.addPass(effectBloom);
      this.composer.addPass(effectFilm);
   }
   this.postprocessing.enabled = this.postprocessing.enabled && this.composer;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.renderCameraScene = function() {
   // globalSceneMaker.camera.lookAt(globalSceneMaker.cameraTarget);
   this.renderer.clear();
   if (this.postprocessing.enabled) {
      this.composer.render(0.05);
   } else {
      this.renderer.render(this.scene, this.camera);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentMouseDown = function(event) {
   this.leftButtonDown = true;
   this.mouseXOnMouseDown = event.clientX - this.container.hw;
   if (this.controlType === enumControlType.rotational) {
      this.targetRotationOnMouseDown = this.targetRotation;
   } else if (this.controlType === enumControlType.positional) {
      this.deltaX = 0;
      this.deltaY = 0;
      this.deltaZ = 0;
      this.lastX = event.clientX;
      this.lastY = event.clientY;
      this.lastZ = event.clientY;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentMouseUp = function(event) {
   this.leftButtonDown = false;
   // this.container.removeEventListener('mousemove', this.onDocumentMouseMove, false);
   // this.container.removeEventListener('mouseup', this.onDocumentMouseUp, false);
   // this.container.removeEventListener('mouseout', this.onDocumentMouseOut, false);
   this.deltaX = 0;
   this.deltaY = 0;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentMouseOut = function(event) {
   // this.container.removeEventListener('mousemove', this.onDocumentMouseMove, false);
   // this.container.removeEventListener('mouseup', this.onDocumentMouseUp, false);
   // this.container.removeEventListener('mouseout', this.onDocumentMouseOut, false);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentMouseMove = function(event) {
   if (!(event.buttons && 1))
      return;
   this.mouseX = event.clientX - this.container.hw;
   if (this.controlType === enumControlType.rotational) {
      this.targetRotation = this.targetRotationOnMouseDown + (this.mouseX - this.mouseXOnMouseDown) * 0.02;
   } else if (this.controlType === enumControlType.positional) {
      var x = event.clientX;
      var y = event.clientY;
      this.deltaX = (x - this.lastX);
      if (this.moveY) {
         this.deltaY = (y - this.lastY) * 2;
         this.deltaZ = 0;
      } else {
         this.deltaY = 0;
         this.deltaZ = (y - this.lastY) * 4;
      }
      this.lastX = x;
      this.lastY = y;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentMouseWheel = function(event) {
   this.deltaY = -event.deltaY * 0.5;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentDblClick = function(event) {
   if (this.beforeDocumentDblClick)
      this.beforeDocumentDblClick(event);
   this.moveY = !this.moveY;
   this.onDocumentMouseDown(event);
   if (this.afterDocumentDblClick)
      this.afterDocumentDblClick(event);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentTouchStart = function(event) {
   if (this.beforeDocumentTouchStart)
      this.beforeDocumentTouchStart(event);
   if (this.controlType === enumControlType.rotational) {
      if (event.touches.length === 1) {
         event.preventDefault();
         this.mouseXOnMouseDown = event.touches[ 0 ].pageX - this.container.hw;
         this.targetRotationOnMouseDown = this.targetRotation;
      }
   } else if (this.controlType === enumControlType.positional) {
   }
   if (this.afterDocumentTouchStart)
      this.afterDocumentTouchStart(event);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentTouchMove = function(event) {
   if (this.beforeDocumentTouchMove)
      this.beforeDocumentTouchMove(event);
   if (this.controlType === enumControlType.rotational) {
      if (event.touches.length === 1) {
         event.preventDefault();
         this.mouseX = event.touches[ 0 ].pageX - this.container.hw;
         this.targetRotation = this.targetRotationOnMouseDown + (this.mouseX - this.mouseXOnMouseDown) * 0.05;
      }
   } else if (this.controlType === enumControlType.positional) {
   }
   if (this.afterDocumentTouchMove)
      this.afterDocumentTouchMove(event);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentKeyDown = function(event) {
   if (!this.container)
      return;

   // this.container.addEventListener('mousemove', this.onDocumentMouseMove, false);
   // this.container.addEventListener('mouseup', this.onDocumentMouseUp, false);
   // this.container.addEventListener('mouseout', this.onDocumentMouseOut, false);

   if (this.afterDocumentKeyDown) {
      this.afterDocumentKeyDown(event);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onDocumentKeyPress = function(event) {
   if (this.afterDocumentKeyPress) {
      this.afterDocumentKeyPress(event);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onWindowResize = function() {
   if (!this.container)
      return;

   var w = this.container.clientWidth;
   var h = this.container.clientHeight;

   this.container.w = w;
   this.container.h = h;

   this.container.hw = w / 2;
   this.container.hh = h / 2;

   this.camera.aspect = w / h;
   this.camera.updateProjectionMatrix();

   this.renderer.setSize(w, h);

   if (this.composer) {
      this.composer.reset();
      if (this.effectFXAA)
         this.effectFXAA.uniforms[ 'resolution' ].value.set(1 / w, 1 / h);
   }

   if (this.useTrackball) {
      this.trackballControls.handleResize();
      this.render();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.prepareTrackball = function() {
   this.trackballControls = new THREE.TrackballControls(this.camera);

   this.trackballControls.rotateSpeed = 1.0;
   this.trackballControls.zoomSpeed = 1.2;
   this.trackballControls.panSpeed = 0.8;

   this.trackballControls.noZoom = false;
   this.trackballControls.noPan = false;

   this.trackballControls.staticMoving = true;
   this.trackballControls.dynamicDampingFactor = 0.3;

   this.trackballControls.keys = [65, 83, 68];

   this.trackballControls.addEventListener('change', this.render);
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.executeActions = function() {
   this.executeActionChain();
   this.executeObjectActions();
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.executeActionChain = function() {
   this.actionChain.execActions();
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.executeObjectActions = function() {
   var arr = this.s3dObjArray;
   var len = arr.length;
   for (var i = 0; i < len; i++) {
      var s3dObj = arr[i];
      if (s3dObj.actionExec) {
         if (s3dObj.nextActionExecTime < Date.now()) {
            s3dObj.actionExec(s3dObj);
            s3dObj.nextActionExecTime = s3dObj.nextActionExecTime + s3dObj.actionExecTime;
         }
      }
      if (s3dObj.moving) {
         if (s3dObj.nextMoveActionExecTime < Date.now()) {
            s3dObj.moveActionExec(s3dObj);
            s3dObj.nextMoveActionExecTime = s3dObj.nextMoveActionExecTime + s3dObj.actionExecTime;
         }
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onBeforeRender = function() {
   if (this.controlType === enumControlType.rotational) {
      this.scene.rotation.y += (this.targetRotation - this.scene.rotation.y) * 0.05;
   } else if (this.controlType === enumControlType.positional) {
      this.cameraGroup.position.x -= this.deltaX * 2;
      this.cameraGroup.position.y += this.deltaY * 2;
      this.cameraGroup.position.z -= this.deltaZ * 2;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.onAfterRender = function() {
   this.deltaX = 0;
   this.deltaY = 0;
   this.deltaZ = 0;
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.render = function(callback) {

   this.stats.update();
   this.executeActions();
   if (this.onBeforeRender)
      this.onBeforeRender();
   if (this.controlType === enumControlType.rotational) {
      this.scene.rotation.y += (this.targetRotation - this.scene.rotation.y) * 0.05;
   } else if (this.controlType === enumControlType.positional) {
   }
   this.renderCameraScene();
   if (callback)
      callback();
   if (this.onAfterRender)
      this.onAfterRender();
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.prepareEvents = function() {
   var _this = this;
   this.container.addEventListener('resize', function(e) {
      _this.onWindowResize(e);
   }, false);
   this.container.addEventListener('mousedown', function(e) {
      _this.onDocumentMouseDown(e);
   }, false);
   this.container.addEventListener('mousemove', function(e) {
      _this.onDocumentMouseMove(e);
   }, false);
   this.container.addEventListener('mouseup', function(e) {
      _this.onDocumentMouseUp(e);
   }, false);
   this.container.addEventListener('mouseout', function(e) {
      _this.onDocumentMouseOut(e);
   }, false);
   this.container.addEventListener('mousewheel', function(e) {
      _this.onDocumentMouseWheel(e);
   }, false);
   this.container.addEventListener('dblclick', function(e) {
      _this.onDocumentDblClick(e);
   }, false);
   this.container.addEventListener('touchstart', function(e) {
      _this.onDocumentTouchStart(e);
   }, false);
   this.container.addEventListener('touchmove', function(e) {
      _this.onDocumentTouchMove(e);
   }, false);
   this.container.addEventListener('keypress', function(e) {
      _this.onDocumentKeyPress(e);
   }, false);
   this.container.addEventListener('keydown', function(e) {
      _this.onDocumentKeyDown(e);
   }, false);
   /*
    this.container.getElementById("postprocessing").addEventListener('click', function() {
    postprocessing.enabled = !postprocessing.enabled;
    }, false);
    */
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.moveTo = function(x, y, z, ts, tt, st, os) {
   return this.actionChain.insertMoveTo({
      owner: this.actionChain,
      obj3d: this.cameraGroup,
      x: x,
      y: y,
      z: z,
      timeToStart: ts,
      totalTime: tt,
      stepTime: st,
      onStop: os
   });
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.plane = function(ow, sc, w, h, img) {
   return new S3D.S3dPlane({
      owner: ow, scene: sc, width: w, height: h, img: img
   });
};

/* -------------------------------------------------------------------------- */

S3D.S3dSceneMaker.prototype.sphere = function(r, ws, hs, ps, pl, ts, tl) {
   return new S3D.S3dSphere({
      radius: r, widthSegments: ws, heightSegments: hs,
      phiStart: ps, phiLength: pl, thetaStart: ts, thetaLength: tl
   });
};

/* ========================================================================== */
