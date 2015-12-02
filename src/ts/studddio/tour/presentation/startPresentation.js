
/*----------------------------------------------------------------------------*/

function CreateGlobalStudddioPresentation3d(studddioPresentationParams) {
   var presentationParams = {
      owner: null,
      scene: globalSceneMaker.scene,
      sceneMaker: globalSceneMaker,
      materialList: studddioPresentationParams.materialList,
      fontParamList: studddioPresentationParams.fontParamList,
      textParamList: studddioPresentationParams.textParamList,
      geometryStyleArray: globalSceneMaker.geometryStyleArray,
      s3dObjArray: globalSceneMaker.s3dObjArray,
      actionChain: globalSceneMaker.actionChain
   };
   globalStudddioPresentation = new S3D.S3dStudddioSlider(presentationParams);
}

/*----------------------------------------------------------------------------*/

S3D.slide_texts = S3D.slitex = function(presentation, params) {
   if (!params)
      return null;
   var ac = params.action;
   var slide = presentation.createSlideTexts(
           params.texts,
           ac.origin.x, ac.origin.y, ac.origin.z,
           ac.type,
           ac.target.x, ac.target.y, ac.target.z,
           ac.position.x, ac.position.y, ac.position.z,
           ac.time.start, ac.time.total, ac.time.step,
           ac.callback);
   if (ac.center)
      slide.center();
   return slide;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.getSlide = function(onCreate) {
   return new S3D.S3dStudddioSlide({
      owner: this,
      scene: this.obj3d,
      onCreate: onCreate,
      fontParamList: this.fontParamList,
      textParamList: this.textParamList,
      materialList: this.materialList,
      geometryStyleArray: this.geometryStyleArray
   });
};

/*----------------------------------------------------------------------------*/

S3D.slide = function(presentation, onCreate) {
   return presentation.getSlide(onCreate);
};

/*----------------------------------------------------------------------------*/

