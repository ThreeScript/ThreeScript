
/*============================================================================*/

S3D.S3dStudddioSlider = function(presentationParam) {
   S3D.S3dSlider.call(this, presentationParam);

   this.tpbig = this.textParamList.BigDsbn;
   this.tpnormal = this.textParamList.MediumDsbn;
   this.tpsmall = this.textParamList.SmallDsbn;

   this.tpbig2 = this.textParamList.Dsbn320x34;
   this.tpnormal2 = this.textParamList.Dsbn144x16;

   this.mgray6 = this.materialList.gray6;
   this.mgray3 = this.materialList.gray3;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype = new S3D.S3dSlider();
S3D.S3dStudddioSlider.prototype.constructor = S3D.S3dStudddioSlider;

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.loadPresentation = function() {
   this.pStudddio();
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.pStudddio = function() {

   var onCreate = this.onCreateDoubleMoveTo(
           this.pS3D, 100, zTo_studddio_01, startTime_studddio_01, loopTime_studddio_01, stepTime_studddio_01,
           null, null, zTo_studddio_02, startTime_studddio_02, loopTime_studddio_02, stepTime_studddio_02);

   var slide = S3D.slide(this, onCreate);

   this.pStudddio_slide = slide;

   var dg = -Math.PI / 180;

   slide.obj3d.position.x = x_studddio;
   slide.obj3d.position.z = z_studddio;

   slide.obj3d.rotation.y = dg * 110;

   var t1 = this.textParamList.Dsbn320x34;
   var m1 = this.materialList.gray3;

   this.createCharSlideStudddio("S", slide, t1, m1, dg);
   this.createCharSlideStudddio("T", slide, t1, m1, dg * 15);
   this.createCharSlideStudddio("U", slide, t1, m1, dg * 30);
   this.createCharSlideStudddio("D", slide, t1, m1, dg * 50);
   this.createCharSlideStudddio("D", slide, t1, m1, dg * 70);
   this.createCharSlideStudddio("D", slide, t1, m1, dg * 90);
   this.createCharSlideStudddio("I", slide, t1, m1, dg * 115);
   this.createCharSlideStudddio("O", slide, t1, m1, dg * 125);
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.createCharSlideStudddio = function(
        char, owner, textParam, textMaterial, rotY) {
   var chain = new THREE.Object3D();
   owner.obj3d.add(chain);
   chain.rotation.y = rotY;
   var richText = this.addText(char, owner, chain, 0, 0, 800, textParam, textMaterial);
   richText.center();
   richText.obj3d.position.z = 900;
   richText.obj3d.rotation.y = Math.PI;
   return richText;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.pS3D = function() {

   var onCreate = this.onCreateDoubleMoveTo(
           this.p100, 100, zTo_s3d_01, startTime_s3d_01, loopTime_s3d_01, stepTime_s3d_01,
           null, null, zTo_s3d_02, startTime_s3d_02, loopTime_s3d_02, stepTime_s3d_02);

   var slide = this.getSlide(onCreate);

   this.pS3D_slide = slide;

   var dg = -Math.PI / 180;

   this.pS3D_slide.obj3d.position.set(-180, -140, z_s3d);

   var t1 = this.textParamList.Dsbn288x32;
   var t2 = this.textParamList.Dsbn320x34;
   var m1 = this.materialList.darkGrayRed;
   var m2 = this.materialList.darkGrayYellow;
   var m3 = this.materialList.darkGrayBlue;

   this.createCharS3D("S", slide, t1, m3, -130, 30, 0, dg * -40, dg * -30, dg * 10);
   this.createCharS3D("3", slide, t2, m2, 0, 0, 20, dg * 20, dg * 30, dg * 10);
   this.createCharS3D("D", slide, t1, m1, 190, 0, 0, dg * -40, dg * -20, dg * -10);
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.createCharS3D = function(
        char, owner, textParam, textMaterial, px, py, pz, rx, ry, rz) {
   var richText = this.addText(char, owner, owner.obj3d, px, py, pz, textParam, textMaterial);
   // richText.center();
   richText.obj3d.rotation.set(rx, ry, rz);
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p100 = function() {

   var onCreate = this.onCreateDoubleMoveTo(
           null, null, zTo_carrousel_01, startTime_carrousel_01, loopTime_carrousel_01, stepTime_carrousel_01,
           this.p200, 100, zTo_carrousel_02, startTime_carrousel_02, loopTime_carrousel_02, stepTime_carrousel_02);

   var slide = this.getSlide(onCreate);

   this.p100_slide = slide;

   ts.pos(slide.obj3d, null, null, z_carrousel);

   slide.actionExec = function() {
      if (this.carrousel) {
         this.carrousel.rotation.y -= (Math.PI / 360);
      }
   };

   slide.actionExecTime = 200;

   var cg = ts.cylgeo(30, 30, 500);

   var sg = ts.sphgeo(30, 32, 32);

   var tsg = ts.sphgeo(200, 32, 32);

   var sc = ts.obj3d(); // new THREE.Object3D();

   slide.carrousel = sc;

   ts.add(slide.obj3d, slide.carrousel);

   var t1 = this.textParamList.Dsbn320x34;
   var m = this.materialList.gray3;
   var dg = Math.PI / 4;

   this.createCharCarrousel("S", sc, cg, sg, tsg, t1, m, 0);
   this.createCharCarrousel("T", sc, cg, sg, tsg, t1, m, dg);
   this.createCharCarrousel("U", sc, cg, sg, tsg, t1, m, dg * 2);
   this.createCharCarrousel("D", sc, cg, sg, tsg, t1, m, dg * 3);
   this.createCharCarrousel("D", sc, cg, sg, tsg, t1, m, dg * 4);
   this.createCharCarrousel("D", sc, cg, sg, tsg, t1, m, dg * 5);
   this.createCharCarrousel("I", sc, cg, sg, tsg, t1, m, dg * 6);
   this.createCharCarrousel("O", sc, cg, sg, tsg, t1, m, dg * 7);
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.createCharCarrousel = function(
        char, scene, cylinderGeometry, sphereGeometry,
        textSphereGeometry, textParam, textMaterial, rotY) {

   var chain = ts.obj3d(); // new THREE.Object3D();

   if (rotY)
      ts.rot(chain, null, rotY);

   ts.add(scene, chain);

   var cylinder = ts.mesh(cylinderGeometry, this.materialList.grayPhong3);
   ts.rot(ts.pos(cylinder, 0, -500, 250), Math.PI / 4);

   var sphere = ts.mesh(sphereGeometry, this.materialList.gray9);
   ts.pos(sphere, 0, -250, 500);

   ts.add(chain, sphere);
   // ts.add(chain, cylinder, sphere);

   if (true) {
      this.addSphereText(char, this, chain, 0, 0, 600, textParam, textMaterial,
              textSphereGeometry, this.materialList.dictOp30);
   } else {
      if ((this.geometryStyleArray) && (char.length > 0)) {
         var charParam = {
            owner: this,
            scene: chain,
            keyCode: char.charCodeAt(0),
            pos: {z: 500},
            // rot: {x: rx, y: ry, z: rz},
            textParam: textParam,
            material: textMaterial,
            geometryStyleArray: this.geometryStyleArray,
            onCreate: function(s3dObj) {
            },
            actionExec: function(s3dObj) {
               if (s3dObj) {
                  s3dObj.obj3d.rotation.y -= (Math.PI / 360);
               }
               if (this.execStep === 0) {
                  var pi2 = -Math.PI * 2;
                  if (s3dObj.obj3d.rotation.y < pi2) {
                     this.execStep === 1;
                     this.startMove(s3dObj, 0, -100, 0, 0);
                  }
               }
               if (this.execStep === 1) {
                  if (this.moveAction()) {
                     this.execStep === 2;
                     s3dObj.startMove(0, 1000, 0, 0);
                  }
               }
            },
            actionExecTime: 200
         };
         new S3D.S3dRichChar(charParam);
      }
   }
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p200 = function() {
   this.p200_texts = S3D.slitex(this, {
      texts: [
         ["STUDDDIO", 0, 100, 0, 0, 0, 0, this.tpbig2, this.mgray3, null],
         ["The Studio with 3D", 0, -100, 0, 0, 0, 0, this.tpnormal2, this.mgray6, null]
      ],
      action: slides.actions.ac200(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p210 = function() {
   this.p200_texts = S3D.slitex(this, {
      texts: [
         ["Introduction", 0, 0, 0, 0, 0, 0, this.tpbig, this.mgray6, null]
      ],
      action: slides.actions.ac210(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p220 = function() {
   this.p200_texts = S3D.slitex(this, {
      texts: [
         ["Studddio - the studio with 3d - is a small javascript ", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["framework to manage 3D scenes, embedded in HTML sites, ", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["providing a very realistic vision for the site in a ", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["three dimensional environment.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
      ],
      action: slides.actions.ac220(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p230 = function() {
   this.p200_texts = S3D.slitex(this, {
      texts: [
         ["With 3D you can move, rotate, scale and translate 2D", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["and 3D objects in the scene, using cameras that go", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["through it, using different colored lights on objects", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["and casting shadows on them.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
      ],
      action: slides.actions.ac230(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p240 = function() {
   this.p250_slideTexts = S3D.slitex(this, {
      texts: [
         ["3D objects are meshes with different geometries ", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["and materials, capable of grouping child objects ", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["and have their properties changed, ", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["thus having modified their appearance.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
      ],
      action: slides.actions.ac240(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p250 = function() {
   this.p250_slideTexts = S3D.slitex(this, {
      texts: [
         ["Studddio generates 3D texts, planes with pictures,", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["cubes and spheres with different colors and textures,", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["meshes with 2D and 3D geometries using different materials.", 0, -200, 0, 0, 0, this.tpnormal, this.mgray6, null]

      ],
      action: slides.actions.ac250(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p260 = function() {
   this.p260_slideTexts = S3D.slitex(this, {
      texts: [
         ["Texts can have different fonts, sizes, depth, ", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["color, materials, edges and other features", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
      ],
      action: slides.actions.ac260(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p270 = function() {
   this.p270_slideTexts = S3D.slitex(this, {
      texts: [
         ["The meshes can use materials with different properties,", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["such as color, transparency, texture to images, videos,", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["HTML elements of the document and other available sources.", 0, -200, 0, 0, 0, this.tpnormal, this.mgray6, null]
      ],
      action: slides.actions.ac270(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p280 = function() {
   this.p280_slideTexts = S3D.slitex(this, {
      texts: [
         ["Timers are used firing actions to move, rotate, scale,", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
         ["and translate the objects around the scene.", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
      ],
      action: slides.actions.ac280(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p290 = function() {
   this.p280_slideTexts = S3D.slitex(this, {
      texts: [
         ["Technical Aspects", 0, 0, 0, 0, 0, 0, this.tpbig, this.mgray6, null]
      ],
      action: slides.actions.ac290(this)
   });
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p300 = function() {
   var p300_texts = [
      ["Studdio is a middleware JavaScript 3D engine", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["acting over Threejs or Babylonjs", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["engines, they are software core for", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["easy 3D development.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p300_slideTexts = this.createSlideTexts(
           0, 0, z_300, "to", 0, 0, zTo_300,
           p300_texts, 0, 0, 0, startTime_300, loopTime_300, stepTime_300, this.p310);
   this.p300_slideTexts.centerX();
   // this.p300_slideTexts.position = 200;

};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p310 = function() {
   var p310_texts = [
      ["Studddio provides facilities using Threejs classes,", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["how to group objects to work together, for example to", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["dynamically move, rotate, scale and translate ", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["the grouped objects in the scene.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p310_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_310,
           p310_texts, 0, 0, 0, startTime_310, loopTime_310, stepTime_310, this.p320);
   this.p310_slideTexts.centerX();
   // this.p310_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p320 = function() {
   var p320_texts = [
      ["The first thing to say is that Studddio ", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["has the global variable S3D.", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_320, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p330);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p330 = function() {
   var p330_texts = [
      ["It'll internally receive all other properties ", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["and functions used in the library, therefore all classes, ", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["properties, and functions in studdio library ", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["are prefixed with S3D variable.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p330_slideTexts = this.createSlideTexts(
           0, 0, z_330, "to", 0, 0, zTo_330,
           p330_texts, 0, 0, 0, startTime_330, loopTime_330, stepTime_330, this.p340);
   this.p330_slideTexts.centerX();
   // this.p330_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p340 = function() {
   var p340_texts = [
      ["The S3D.S3dObject3D class is ancestral and inherited", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["by all other visual classes belonging to the library. ", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["This class provides basic and specialized behaviors ", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["for the descendant classes.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]

   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_340, "to", 0, 0, zTo_340,
           p320_texts, 0, 0, 0, startTime_340, loopTime_340, stepTime_340, this.p350);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p350 = function() {
   var p350_texts = [
      ["The S3D classes for characters, texts, memos, cubes, ", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["spheres, cilynders, chains and other objects are ", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["inherited from S3D.S3dObject3D class, inheriting ", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["its properties and methods and extending them.", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p350_slideTexts = this.createSlideTexts(
           0, 0, z_350, "to", 0, 0, zTo_350,
           p350_texts, 0, 0, 0, startTime_350, loopTime_350, stepTime_350, this.p400);
   this.p350_slideTexts.centerX();
   // this.p350_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p360 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p370 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p380 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p390 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p395 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p396 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);

   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p397 = function() {
   var p320_texts = [
      ["", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -100, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["", 0, -200, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      [".", 0, -300, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];
   this.p320_slideTexts = this.createSlideTexts(
           0, 0, z_310, "to", 0, 0, zTo_320,
           p320_texts, 0, 0, 0, startTime_320, loopTime_320, stepTime_320, this.p400);
   this.p320_slideTexts.centerX();
   // this.p320_slideTexts.position = 200;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p400_image = function(file, text, x, y, z) {
   var sp = this;
   var richTextParam = {
      textParam: this.tpnormal,
      material: this.mgray6,
      geometryStyleArray: null
   };
   var img = new Image();
   img.onload = function() {
      sp.addSlideImagePlaneWithText(sp.p400_images, text, richTextParam,
              x, y, z, this.width, this.height, sp.dir + file);
   };
   img.src = this.dir + file;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p400 = function() {
   var sp = this;
   var onCreate = function() {
      var onStop2 = function() {
         setTimeout(function() {
            sp.p490.call(sp);
         }, 100);
      };
      var onStop1 = function() {
         this.owner.sceneMaker.moveTo(xTo_pictures_02, yTo_pictures_02, zTo_pictures_02, ts_pictures_02, tt_pictures_02, st_pictures_02, onStop2);
      };
      this.sceneMaker.moveTo(xTo_pictures_01, yTo_pictures_01, zTo_pictures_01, ts_pictures_01, tt_pictures_01, st_pictures_01, onStop1);
   };

   this.p400_slide = this.getSlide(onCreate);
   this.p400_slide.obj3d.position.z = z_400;
   this.p400_images = new S3D.S3dPlaneChain({owner: this.p400_slide, scene: this.p400_slide.obj3d});
   this.dir = "http://studddio.com/workshop/webgl-threejs/img/learning-threejs/1/";
   var files = [
      "forced-materials.01a.png", "lens-flare.01a.png", "line-material.01a.png",
      "load-ctm.01a.png", "load-obj-mtl.png", "load-ply.01a.png",
      "load-str.01a.png", "material-properties.01a.png", "mesh-face-material.png",
      "mesh-normal-material.01a.png", "mesh-phng-material.png", "normal-map.01.png",
      "orbit.01a.png", "particles.01a.png", "physics.01a.png",
      "physics-basic-scene.01a.png", "point-light.01a.png", "point-light.02a.png",
      "polyedron.01a.png", "rainy.01a.png", "repeat-wrapping.01a.png",
      "selecting.01a.png", "shaderpass-blur.01a.png", "shaderpass-custom.01a.png",
      "shaderpass-simple.01a.png", "shaderpass-simple.02a.png", "shapes.png",
      "specular-map.01a.png", "spot-light.01a.png", "spot-light.02a.png",
      "sprite-rain.01a.png", "sprites.01a.png", "texture.01a.png",
      "trackball.01a.png"
   ];
   var texts = [
      "Forced Materials", "Lens Flare", "Line Material",
      "Load CTM", "Load OBJ", "Load PLY",
      "Load Str", "Material Properties", "Mesh Face Material",
      "Mesh Normal Material", "Mesh Phong Material", "Normal Map",
      "Orbit", "Particles", "Physics",
      "Physics Basic Scene", "Point Light", "Point Light",
      "Polyedron", "Rainy", "Repeat Wrapping",
      "Selecting", "Shaderpass Blur", "Shaderpass Custom",
      "Shaderpass Simple", "Shaderpass Simple", "Shapes",
      "Specular", "Spotlight", "Spotlight 2",
      "Sprite Rain", "Sprites", "Texture",
      "Trackball"
   ];
   var y = 0;
   var deltaX = 1000;
   var deltaZ = -1000;
   for (var i = 0; i < files.length; i++) {
      this.p400_image(files[i], texts[i], i * deltaX, y, i * deltaZ);
   }
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p490 = function() {

   var p490_texts = [
      ["TH", 0, 0, 0, 0, 0, 0, this.tpnormal, this.mgray6, null],
      ["E", 100, -20, 0, 0, 0, 0, this.tpbig, this.mgray6, null],
      ["ND", 160, -30, 0, 0, 0, 0, this.tpnormal, this.mgray6, null]
   ];

   this.p490_slideTexts = this.createSlideTexts(
           x_490, y_490, z_490, "to", xTo_490, yTo_490, zTo_490,
           p490_texts, 0, 0, 0, startTime_490, loopTime_490, stepTime_490, this.p495);

   this.p490_slideTexts.centerX();
   // this.p490_slideTexts.position = 200;

};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p495 = function() {
   var sp = this;
   var onStop2 = function() {
      setTimeout(function() {
         sp.p496.call(sp);
      }, 100);
   };
   var onStop1 = function() {
      this.owner.sceneMaker.moveTo(xTo_495_02, yTo_495_02, zTo_495_02, startTime_495_02, loopTime_495_02, stepTime_495_02, onStop2);
      /*
       this.owner.insertMoveTo({
       owner: this.owner,
       obj3d: this.obj3d,
       x: xTo_495_02,
       y: yTo_495_02,
       z: zTo_495_02,
       timeToStart: startTime_495_02,
       totalTime: loopTime_495_02,
       stepTime: stepTime_495_02,
       onStop: onStop2
       });
       */
   };
   var onCreate = function() {
      this.sceneMaker.moveTo(xTo_495_01, yTo_495_01, zTo_495_01, startTime_495_01, loopTime_495_01, stepTime_495_01, onStop1);
      /*
       this.actionChain.insertMoveTo({
       owner: this.actionChain,
       obj3d: this.owner.sceneMaker.cameraGroup,
       x: xTo_495_01,
       y: yTo_495_01,
       z: zTo_495_01,
       timeToStart: startTime_495_01,
       totalTime: loopTime_495_01,
       stepTime: stepTime_495_01,
       onStop: onStop1
       });
       */
   };
   this.p495_slide = this.getSlide(onCreate);
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p496 = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p500 = function() {
   this.p500_slide = this.getSlide();
   this.p500_slide.obj3d.position.z = -27000;
};
/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p600 = function() {
   this.p600_slide = this.getSlide();
   this.p600_slide.obj3d.position.z = -33000;
   var sphereGeometry = new THREE.SphereGeometry({
      radius: 350,
      widthSegments: 100,
      heightSegments: 100,
      phiStart: 0,
      phiLength: Math.PI,
      thetaStart: 0,
      thetaLength: Math.PI
   });
   var tpdsbn18x4 = this.textParamList.Dsbn18x4;
   var mblueOp30 = this.materialList.blueOp30;
   var owner = this.p600_slide;
   var scene = owner.obj3d;
   var a = this.addSphereText("Char", owner, scene, 0, 0, 1000, tpdsbn18x4, this.materialList.red, sphereGeometry, mblueOp30);
   var b = this.addSphereText("Text", owner, scene, -500, 300, 500, tpdsbn18x4, this.materialList.green, sphereGeometry, mblueOp30);
   var c = this.addSphereText("Cube", owner, scene, -1000, 600, 0, tpdsbn18x4, this.materialList.blue, sphereGeometry, mblueOp30);
   var d = this.addSphereText("Box", owner, scene, -500, 300, -500, tpdsbn18x4, this.materialList.blue, sphereGeometry, mblueOp30);
   var e = this.addSphereText("Sphere", owner, scene, 0, 0, -1000, tpdsbn18x4, this.materialList.blue, sphereGeometry, mblueOp30);
   var f = this.addSphereText("Mesh", owner, scene, 500, -300, -500, tpdsbn18x4, this.materialList.blue, sphereGeometry, mblueOp30);
   var g = this.addSphereText("Light", owner, scene, 1000, -600, 0, tpdsbn18x4, this.materialList.blue, sphereGeometry, mblueOp30);
   var h = this.addSphereText("Material", owner, scene, 500, -300, 500, tpdsbn18x4, this.materialList.blue, sphereGeometry, mblueOp30);
};
/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.p700 = function() {
   this.p700 = this.getSlide();
   this.p700.obj3d.position.z = -21000;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.addSphereText = function(
        str, owner, scene, px, py, pz, textParam, textMaterial, sphereGeometry, sphereMaterial) {

   var sphere = ts.mesh(sphereGeometry, sphereMaterial);
   ts.pos(sphere, px, py, pz);
   ts.add(scene, sphere);

   var richText = new S3D.S3dRichText({
      owner: owner,
      scene: sphere,
      textParam: textParam,
      material: textMaterial,
      geometryStyleArray: this.geometryStyleArray,
      str: str,
      center: true
   });

   return sphere;
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlider.prototype.addText = function(
        str, owner, scene, px, py, pz, textParam, textMaterial) {
   var richTextParam = {
      owner: owner,
      scene: scene,
      pos: {x: px, y: py, z: pz},
      textParam: textParam,
      material: textMaterial,
      geometryStyleArray: this.geometryStyleArray
   };
   var richText = new S3D.S3dRichText(richTextParam);
   richText.setStr(str);
   return richText;
};

/*----------------------------------------------------------------------------*/
/*
 S3D.S3dStudddioSlider.prototype.getTextArray = function() {
 
 var p220_rtc1_textArray = [["Studddio is a small opensource framework to make 3D objects.",
 -50, 0, 0, 0, 0, 0, tpmed, mgray, null]];
 var p10_rtc1_textArray = [["Studddio is a small opensource framework to make 3D objects.",
 -50, 0, 0, 0, 0, 0, tpmed, mgray, null]];
 };
 */
/*============================================================================*/
