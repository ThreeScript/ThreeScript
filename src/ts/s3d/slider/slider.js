
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

S3D.slide = function(presentation, onCreate) {
   return presentation.getSlide(onCreate);
};

/*----------------------------------------------------------------------------*/
