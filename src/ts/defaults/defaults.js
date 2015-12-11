
ts.kitdef = function() {

   var defaultParams = {
      materialList: {},
      fontParamList: {},
      textParamList: {}
   };

   var ml = defaultParams.materialList;

   var tpl = defaultParams.textParamList;

   var fpl = defaultParams.fontParamList;

   ml.dictOp30 = new THREE.MeshFaceMaterial([
      new THREE.MeshPhongMaterial({
         map: ts.loatex("/img/studddio/textures/dictionary/dictionary-01b.jpg"),
         // color: 0x0000ff, 
         opacity: 0.3,
         transparent: true,
         shading: THREE.FlatShading
      }), // front
      new THREE.MeshPhongMaterial({
         map: ts.loatex("/img/studddio/textures/letter/letter-01b.jpg"),
         // color: 0x00ff00, 
         opacity: 0.3,
         transparent: true,
         shading: THREE.SmoothShading
      }) // side
   ]);
   /*
    ts.lazfatmatcol = function(color) {
    return null;
    };
    */
   ml.blueOp30 = TS.phofacmatcoltraopa(0xffffff, true, 0.3);

   ml.red = TS.phofacmatcol(0xff0000);

   ml.green = TS.phofacmatcol(0x00ff00);

   ml.blue = TS.phofacmatcol(0x0000ff);

   ml.yellow = TS.phofacmatcol(0xffff00);

   ml.orange = TS.phofacmatcol(0xff8800);

   ml.black = TS.phofacmatcol(0x000000);

   ml.white = TS.phofacmatcol(0xffffff);

   ml.gray1 = TS.phofacmatcol(0x111111);

   ml.gray2 = TS.phofacmatcol(0x222222);

   ml.gray3 = TS.phofacmatcol(0x333333);

   ml.gray4 = TS.phofacmatcol(0x444444);

   ml.gray5 = TS.phofacmatcol(0x555555);

   ml.gray6 = TS.phofacmatcol(0x666666);

   ml.gray7 = TS.phofacmatcol(0x777777);

   ml.gray8 = TS.phofacmatcol(0x888888);

   ml.gray9 = TS.phofacmatcol(0x999999);

   ml.grayA = TS.phofacmatcol(0xAAAAAA);

   ml.grayB = TS.phofacmatcol(0xBBBBBB);

   ml.grayC = TS.phofacmatcol(0xCCCCCC);

   ml.grayD = TS.phofacmatcol(0xDDDDDD);

   ml.grayE = TS.phofacmatcol(0xEEEEEE);

   ml.darkGrayYellow = TS.phofacmatcol(0x666622);

   ml.darkGrayRed = TS.phofacmatcol(0x662222);

   ml.darkGrayGreen = TS.phofacmatcol(0x226622);

   ml.darkGrayBlue = TS.phofacmatcol(0x222266);

   fpl.dsbn = new S3D.S3dTextParam(
           "droid sans", "bold", "normal", 4,
           2, 1.5, 3, true, null);

   var dsbn = fpl.dsbn;

   tpl.Dsbn8x2 = ts.fonstypar(8, 2, dsbn);

   tpl.Dsbn9x2 = ts.fonstypar(9, 2, dsbn);

   tpl.Dsbn10x3 = ts.fonstypar(10, 3, dsbn);

   tpl.Dsbn11x3 = ts.fonstypar(11, 3, dsbn);

   tpl.Dsbn12x3 = ts.fonstypar(12, 3, dsbn);

   tpl.Dsbn14x4 = ts.fonstypar(14, 4, dsbn);

   tpl.Dsbn18x4 = ts.fonstypar(18, 4, dsbn);

   tpl.Dsbn24x5 = ts.fonstypar(24, 5, dsbn);

   tpl.Dsbn36x68x2 = ts.fonstypar(36, 6, dsbn);

   tpl.Dsbn48x7 = ts.fonstypar(48, 7, dsbn);

   tpl.Dsbn72x8 = ts.fonstypar(72, 8, dsbn);

   tpl.Dsbn144x16 = ts.fonstypar(144, 16, dsbn);

   tpl.Dsbn288x32 = ts.fonstypar(288, 32, dsbn);

   tpl.Dsbn320x34 = ts.fonstypar(320, 34, dsbn);

   tpl.Dsbn360x36 = ts.fonstypar(360, 36, dsbn);

   tpl.BigDsbn = ts.fonstypar(70, 70, dsbn);

   tpl.MediumDsbn = ts.fonstypar(50, 10, dsbn);

   tpl.SmallDsbn = ts.fonstypar(12, 8, dsbn);

   tpl.Dsbn360x36 = ts.fonstypar(72, 3, dsbn);
   
   return defaultParams;
};