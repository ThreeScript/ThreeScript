var wait_time_01 = 3000;
var step_time_01 = 3000;
var step_time_02 = 20000;

var x_studddio = -230;
var z_studddio = 10000;

var startTime_studddio_01 = 5000;
var loopTime_studddio_01 = step_time_01;
var stepTime_studddio_01 = 20;
var zTo_studddio_01 = 11000;

var startTime_studddio_02 = loopTime_studddio_01 + wait_time_01;
var loopTime_studddio_02 = step_time_01;
var stepTime_studddio_02 = 20;
var zTo_studddio_02 = 16800;

var z_s3d = 15000;

var startTime_s3d_01 = startTime_studddio_02 + loopTime_studddio_02 + 3000; // 14000;
var loopTime_s3d_01 = step_time_01;
var stepTime_s3d_01 = 20;
var zTo_s3d_01 = 4000;

var startTime_s3d_02 = loopTime_s3d_01 + 1000; // 3000;
var loopTime_s3d_02 = step_time_01;
var stepTime_s3d_02 = 20;
var zTo_s3d_02 = 15500;

var z_carrousel = 0;

var startTime_carrousel_01 = startTime_s3d_02 + loopTime_s3d_02 + 1000; // 18000;
var loopTime_carrousel_01 = step_time_01;
var stepTime_carrousel_01 = 20;
var zTo_carrousel_01 = 200;

var startTime_carrousel_02 = 7000;
var loopTime_carrousel_02 = loopTime_carrousel_01 + step_time_01;
var stepTime_carrousel_02 = 20;
var zTo_carrousel_02 = 1500;

var z_first = z_carrousel - 6000;

var startTime_first = 1000; // 20000;
var loopTime_first = step_time_01;
var stepTime_first = 20;
var zTo_first = z_first + 1500;

var z_introduction = z_first - 6000;

var startTime_introduction = loopTime_first + 3000; // 10000;
var loopTime_introduction = loopTime_first + step_time_01;
var stepTime_introduction = 20;
var zTo_introduction = z_introduction + 500;

var z_explanation_01 = z_introduction - 6000;

var startTime_explanation_01 = loopTime_introduction + wait_time_01; // 3000;
var loopTime_explanation_01 = step_time_01;
var stepTime_explanation_01 = 20;
var zTo_explanation_01 = z_explanation_01 + 1500;

var z_explanation_02 = z_explanation_01 - 6000;

var startTime_explanation_02 = loopTime_explanation_01 + wait_time_01;
var loopTime_explanation_02 = step_time_01;
var stepTime_explanation_02 = 20;
var zTo_explanation_02 = z_explanation_02 + 1500;

var z_240 = z_explanation_02 - 6000;

var startTime_240 = loopTime_explanation_02 + wait_time_01; // 10000;
var loopTime_240 = step_time_01;
var stepTime_240 = 20;
var zTo_240 = z_240 + 1500;

var z_250 = z_240 - 6000;

var startTime_250 = wait_time_01; // 10000;
var loopTime_250 = step_time_01;
var stepTime_250 = 20;
var zTo_250 = z_250 + 1500;

var z_260 = z_250 - 6000;

var startTime_260 = wait_time_01; // 10000;
var loopTime_260 = step_time_01;
var stepTime_260 = 20;
var zTo_260 = z_260 + 1500;

var x_270 = 0;
var y_270 = 0;
var z_270 = z_260 - 6000;

var startTime_270 = wait_time_01; // 10000;
var loopTime_270 = step_time_01;
var stepTime_270 = 20;
var zTo_270 = z_270 + 1500;

var x_280 = 0;
var y_280 = 0;
var z_280 = z_270 - 6000;

var startTime_280 = wait_time_01; // 10000;
var loopTime_280 = step_time_01;
var stepTime_280 = 20;
var zTo_280 = z_280 + 1500;

var z_290 = z_280 - 6000;

var startTime_290 = wait_time_01; // 10000;
var loopTime_290 = step_time_01;
var stepTime_290 = 20;
var zTo_290 = z_290 + 1500;

var z_400 = z_290 - 6000;

var ts_pictures_01 = loopTime_290 + wait_time_01;
var tt_pictures_01 = step_time_01;
var st_pictures_01 = 20;
var xTo_pictures_01 = 10;
var yTo_pictures_01 = 20;
var zTo_pictures_01 = z_400 + 400;

var ts_pictures_02 = tt_pictures_01 + wait_time_01;
var tt_pictures_02 = step_time_02; // 20000;
var st_pictures_02 = 20;
var xTo_pictures_02 = 33300;
var yTo_pictures_02 = 20;
var zTo_pictures_02 = z_400 - 32300;

var x_490 = xTo_pictures_02 + 6000;
var y_490 = 0;
var z_490 = zTo_pictures_02 - 6000;

var startTime_490 = wait_time_01;
var loopTime_490 = step_time_01;
var stepTime_490 = 20;
var xTo_490 = x_490;
var yTo_490 = 20;
var zTo_490 = z_490 + 500;

// var z_495 = zTo_490 - 6000;

var startTime_495_01 = loopTime_490 + wait_time_01;
var loopTime_495_01 = step_time_01; // 20000;
var stepTime_495_01 = 20;
var xTo_495_01 = xTo_pictures_01;
var yTo_495_01 = yTo_pictures_01;
var zTo_495_01 = zTo_pictures_01;

var startTime_495_02 = 0; // loopTime_495_01 + wait_time_01;
var loopTime_495_02 = step_time_01; // 20000;
var stepTime_495_02 = 20;
var xTo_495_02 = 0;
var yTo_495_02 = 0;
var zTo_495_02 = zTo_s3d_02;

var z_08 = z_400 - 6000;

var startTime_08 = 1213;
var loopTime_08 = 1000;
var stepTime_08 = 20;
var zTo_08 = z_08 + 1000;

var z_09 = z_08 - 6000;

var startTime_09 = 1213;
var loopTime_09 = 1000;
var stepTime_09 = 20;
var zTo_09 = z_09 + 1000;

var z_10 = z_09 - 6000;

var startTime_10 = 1213;
var loopTime_10 = 1000;
var stepTime_10 = 20;
var zTo_10 = z_10 + 1000;

var z_11 = z_10 - 6000;

var startTime_11 = 1213;
var loopTime_11 = 1000;
var stepTime_11 = 20;
var zTo_11 = z_11 + 1000;

/*----------------------------------------------------------------------------*/

var slides = {actions: {}};

/*----------------------------------------------------------------------------*/

slides.actions.ac240 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_240},
      target: {x: 0, y: 0, z: zTo_240},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_240,
         total: loopTime_240,
         step: stepTime_240
      },
      callback: owner.p250,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac200 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_first},
      target: {x: 0, y: 0, z: zTo_first},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_first,
         total: loopTime_first,
         step: stepTime_first
      },
      callback: owner.p210,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac210 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_introduction},
      target: {x: 0, y: 0, z: zTo_introduction},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_introduction,
         total: loopTime_introduction,
         step: stepTime_introduction
      },
      callback: owner.p220,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac220 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_explanation_01},
      target: {x: 0, y: 0, z: zTo_explanation_01},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_explanation_01,
         total: loopTime_explanation_01,
         step: stepTime_explanation_01
      },
      callback: owner.p230,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac230 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_explanation_02},
      target: {x: 0, y: 0, z: zTo_explanation_02},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_explanation_02,
         total: loopTime_explanation_02,
         step: stepTime_explanation_02
      },
      callback: owner.p240,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac240 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_240},
      target: {x: 0, y: 0, z: zTo_240},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_240,
         total: loopTime_240,
         step: stepTime_240
      },
      callback: owner.p250,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac250 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_250},
      target: {x: 0, y: 0, z: zTo_250},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_250,
         total: loopTime_250,
         step: stepTime_250
      },
      callback: owner.p260,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac260 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_260},
      target: {x: 0, y: 0, z: zTo_260},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_260,
         total: loopTime_260,
         step: stepTime_260
      },
      callback: owner.p270,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac270 = function(owner) {
   return {
      type: "to",
      origin: {x: x_270, y: y_270, z: z_270},
      target: {x: 0, y: 0, z: zTo_270},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_270,
         total: loopTime_270,
         step: stepTime_270
      },
      callback: owner.p280,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac280 = function(owner) {
   return {
      type: "to",
      origin: {x: x_280, y: y_280, z: z_280},
      target: {x: 0, y: 0, z: zTo_280},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_280,
         total: loopTime_280,
         step: stepTime_280
      },
      callback: owner.p400,
      center: true
   };
};

/*----------------------------------------------------------------------------*/

slides.actions.ac290 = function(owner) {
   return {
      type: "to",
      origin: {x: 0, y: 0, z: z_290},
      target: {x: 0, y: 0, z: zTo_290},
      position: {x: 0, y: 0, z: 0},
      time: {
         start: startTime_290,
         total: loopTime_290,
         step: stepTime_290
      },
      callback: owner.p300,
      center: true
   };
};

/*----------------------------------------------------------------------------*/
