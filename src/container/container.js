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

function resize(container, camera, renderer) {
   var onresize = function() {
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
         camera.updateProjectionMatrix();
      }

      if (renderer)
         renderer.setSize(w, h);
   };
   container.onresize = onresize;
   window.addEventListener('resize', function() {
      container.onresize();
   });
}

var containerControlType = 'positional';
var targetRotationOnMouseDown = null;

function mouseon(container, movingObject, xFactor, yFactor, zFactor) {
   var lastX = null;
   var lastY = null;
   var lastZ = null;
   var deltaX = null;
   var deltaY = null;
   var deltaZ = null;
   var moveY = true;
   container.addEventListener('mousedown', function(event) {
      leftButtonDown = true;
      mouseXOnMouseDown = event.clientX - container.hw;
      if (containerControlType === 'rotational') {
         targetRotationOnMouseDown = targetRotation;
      } else if (containerControlType === 'positional') {
         deltaX = 0;
         deltaY = 0;
         deltaZ = 0;
         lastX = event.clientX;
         lastY = event.clientY;
         lastZ = event.clientY;
      }
   });
   var mousemove = function(event) {
      if (!(event.buttons && 1))
         return;
      if (containerControlType === 'rotational') {
         mouseX = event.clientX - container.hw;
         targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
      } else if (containerControlType === 'positional') {
         var x = event.clientX;
         var y = event.clientY;
         deltaX = (x - lastX) * xFactor;
         if (moveY) {
            deltaY = (y - lastY) * yFactor;
            deltaZ = 0;
         } else {
            deltaY = 0;
            deltaZ = (y - lastY) * zFactor;
         }
         movingObject.position.x += deltaX;
         movingObject.position.y += deltaY;
         movingObject.position.z += deltaZ;
         lastX = x;
         lastY = y;
      }
   };
   container.addEventListener('mousemove', mousemove);
   container.addEventListener('mouseup', function() {
      deltaX = 0;
      deltaY = 0;
      deltaZ = 0;
   });
   container.addEventListener('dblclick', function(event) {
      moveY = !moveY;
      mousemove(event);
   });
}
