/*============================================================================*/

S3D.S3dSlider = function(obj3dParams) {
   S3D.S3dObject3D.call(this, obj3dParams);
   if (obj3dParams) {
      this.loadPresentation();
   }
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype = new S3D.S3dObject3D();
S3D.S3dSlider.prototype.constructor = S3D.S3dSlider;

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.getSlide = function(onCreate) {
   return new S3D.S3dSlide({
      owner: this, 
      scene: this.obj3d, 
      onCreate: onCreate,
      fontParamList: this.fontParamList,
      textParamList: this.textParamList,
      materialList: this.materialList,
      geometryStyleArray: this.geometryStyleArray});
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.getOnCreateSingle = function(
        presentation, moveType, x, y, z, timeToStart, totalTime, stepTime, functionToCall) {
   var onCreate = function() {
      var param = {
         owner: this.actionChain,
         obj3d: this.owner.sceneMaker.cameraGroup, // s3dObj: this.owner,
         s3dObj: this.owner,
         camera: this.owner.sceneMaker.camera,
         x: x,
         y: y,
         z: z,
         timeToStart: timeToStart,
         totalTime: totalTime,
         stepTime: stepTime,
         onStop: function() {
            setTimeout(function() {
               functionToCall.call(presentation);
            }, 100);
         }
      };
      switch (moveType) {
         case "to":
            this.actionChain.insertMoveTo(param);
            break;
         case "on":
            this.actionChain.insertMoveOn(param);
            break;
      }
   };
   return onCreate;
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.createSlide = function(
        slideX, slideY, slideZ, moveType, x, y, z, timeToStart, totalTime, stepTime, functionToCall) {
   var onCreate = this.getOnCreateSingle(
           this, moveType, x, y, z, timeToStart, totalTime, stepTime, functionToCall);
   var p = this.getSlide(onCreate);
   p.obj3d.position.set(slideX, slideY, slideZ);
   return p;
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.createSlideTexts = function(
        texts, 
        slideX, slideY, slideZ,
        moveType, x, y, z,
        vtX, vtY, vtZ,
        timeToStart, totalTime, stepTime, callback) {
   var s = this.createSlide(
           slideX, slideY, slideZ, moveType, x, y, z, timeToStart, totalTime, stepTime, callback);
   var rt = new S3D.S3dRichChain({owner: s, scene: s.obj3d, textArray: texts});
   rt.obj3d.position.set(vtX, vtY, vtZ);
   return rt;
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.addSlideImagePlane = function(
        images, x, y, z, w, h, img) {
   var planeImage = this.sceneMaker.plane(images, images.obj3d, w, h, img);
   /*
   var planeImage = new S3D.S3dPlane({
      owner: images,
      scene: images.obj3d,
      width: w,
      height: h,
      img: img
   });
   */
   planeImage.obj3d.position.set(x, y, z);
   images.addPlane(planeImage);
   images.calcDim();
   return planeImage;
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.addSlideImagePlaneWithText = function(
        images, text, richTextParam, x, y, z, w, h, img) {
   var planeImage = this.addSlideImagePlane(images, x, y, z, w, h, img);
   richTextParam.owner = planeImage;
   richTextParam.scene = planeImage.obj3d;
   var richText = new S3D.S3dRichText(richTextParam);
   richText.setStr(text);
   richText.center();
   richText.obj3d.position.y = -h / 2;
   richText.obj3d.position.z = 50;
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlider.prototype.onCreateDoubleMoveTo = function(
        callback1, callbackStartTime1,
        zTo1, startTime1, loopTime1, stepTime1,
        callback2, callbackStartTime2,
        zTo2, startTime2, loopTime2, stepTime2) {
   var sp = this;
   var onCreate = function() {
      this.actionChain.insertMoveTo({
         owner: this.actionChain,
         obj3d: this.owner.sceneMaker.cameraGroup,
         z: zTo1,
         timeToStart: startTime1,
         totalTime: loopTime1,
         stepTime: stepTime1,
         onStop: function() {
            if (callback1)
               setTimeout(function() {
                  callback1.call(sp);
               }, callbackStartTime1);
            this.owner.insertMoveTo({
               owner: this.owner,
               obj3d: this.obj3d,
               z: zTo2,
               timeToStart: startTime2,
               totalTime: loopTime2,
               stepTime: stepTime2,
               onStop: function() {
                  if (callback2)
                     setTimeout(function() {
                        callback2.call(sp);
                     }, callbackStartTime2);
               }
            });
         }
      });
   };
   return onCreate;
};

/*============================================================================*/
