
var TS = new function() {
};

var ts = TS;

TS.tsglobal = {
   mouse: {
      leftButtonDown: false,
      moveY: true,
      event: {x: 0, y: 0, z: 0},
      last: {x: 0, y: 0, z: 0},
      delta: {x: 0, y: 0, z: 0},
      velocity: {x: 1, y: 2, z: 4},
      direction: {x: -1, y: 1, z: -1}
   }
};

var tsg = TS.tsglobal;
var tsgm = tsg.mouse;
var tsgmevent = tsgm.event;
var tsgmlast = tsgm.last;
var tsgmdelta = tsgm.delta;
var tsgmvel = tsgm.velocity;
var tsgmdir = tsgm.direction;
