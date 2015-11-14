/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

var tsg = tsglobal = {
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

var tsgm = tsg.mouse;
var tsgmevent = tsgm.event;
var tsgmlast = tsgm.last;
var tsgmdelta = tsgm.delta;
var tsgmvel = tsgm.velocity;
var tsgmdir = tsgm.direction;

/**
 * Initialize a container
 * @param {String} id - container element id
 * @param {Renderer} renderer - renderer object
 */
function container(id, renderer) {
   if (!renderer)
      return null;
   var c = document.getElementById(id);
   if (!c)
      c = document.body;
   c.w = c.clientWidth;
   c.h = c.clientHeight;
   c.hw = c.w / 2;
   c.hh = c.h / 2;
   renderer.setSize(c.w, c.h);
   c.appendChild(renderer.domElement);
   return c;
}

/**
 * Bind resize event on window, update the view size according of window size
 * @param {Object} container - container object
 * @param {Object} camera - camera object
 * @param {Object} renderer - renderer object
 * @param {Function} callback - callback to resize
 */
function onresize(container, camera, renderer, callback) {
   window.addEventListener('resize', function(event) {
      if (!container)
         return;

      var w = container.clientWidth;
      var h = container.clientHeight;

      container.w = w;
      container.h = h;

      container.hw = w / 2;
      container.hh = h / 2;

      if (camera) {
         camera.aspect = w / h;
         if (camera.updateProjectionMatrix)
            camera.updateProjectionMatrix();
      }

      if (renderer)
         renderer.setSize(w, h);

      if (callback) {
         callack(event);
      }
   });
}

var containerControlType = 'positional';
var targetRotationOnMouseDown = null;

function onmouse(container, movingObject, moveY, velocity, direction) {
   if (moveY === true || (moveY === false))
      tsgm.moveY = moveY;
   if (velocity) {
      if (velocity.x || velocity.x === 0)
         tsgmvel.x = velocity.x;
      if (velocity.y || velocity.y === 0)
         tsgmvel.y = velocity.y;
      if (velocity.z || velocity.z === 0)
         tsgmvel.z = velocity.z;
   }
   if (direction) {
      if (direction.x === -1 || direction.x === 1)
         tsgmdir.x = direction.x;
      if (direction.y === -1 || direction.y === 1)
         tsgmdir.y = direction.y;
      if (direction.z === -1 || direction.z === 1)
         tsgmdir.z = direction.z;
   }
   container.addEventListener('mousedown', function(event) {
      tsgm.leftButtonDown = true;
      mouseXOnMouseDown = event.clientX - container.hw;
      if (containerControlType === 'rotational') {
         targetRotationOnMouseDown = targetRotation;
      } else if (containerControlType === 'positional') {
         tsgmdelta.x = 0;
         tsgmdelta.y = 0;
         tsgmdelta.z = 0;
         tsgmlast.x = event.clientX;
         tsgmlast.y = event.clientY;
         tsgmlast.z = event.clientY;
      }
   });
   var mousemove = function(event) {
      if (!(event.buttons && 1))
         return;
      if (containerControlType === 'rotational') {
         tsgmevent.x = event.clientX - container.hw;
         targetRotation = targetRotationOnMouseDown + (eventX - mouseXOnMouseDown) * 0.02;
      } else if (containerControlType === 'positional') {
         var x = event.clientX;
         var y = event.clientY;
         tsgmdelta.x = (x - tsgmlast.x) * tsgmvel.x * tsgmdir.x;
         if (tsgm.moveY) {
            tsgmdelta.y = (y - tsgmlast.y) * tsgmvel.y * tsgmdir.y;
            tsgmdelta.z = 0;
         } else {
            tsgmdelta.y = 0;
            tsgmdelta.z = (y - tsgmlast.z) * tsgmvel.z * tsgmdir.z;
         }
         var mp = movingObject.position;
         mp.x += tsgmdelta.x;
         mp.y += tsgmdelta.y;
         mp.z += tsgmdelta.z;
         tsgmlast.x = x;
         tsgmlast.y = y;
      }
   };
   container.addEventListener('mousemove', mousemove);
   container.addEventListener('mouseup', function() {
      tsgm.leftButtonDown = false;
      tsgmdelta.x = 0;
      tsgmdelta.y = 0;
      tsgmdelta.z = 0;
   });
   container.addEventListener('dblclick', function(event) {
      tsgm.moveY = !tsgm.moveY;
      mousemove(event);
   });
}

var perlooxyz = perform_loop_xyz = function(start, end, step, callback) {
   for (var x = start; x < end; x += step)
      for (var y = start; y < end; y += step)
         for (var z = start; z < end; z += step)
            callback(x, y, z);
};
