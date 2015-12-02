function Animate() {
   requestAnimationFrame(Animate);
   if (globalUseTrackball) {
      globalSceneMaker.trackballControls.update();
   } else {
      Render();
   }
}

function Render() {
   var callback = null;
   var usarCallback = false;
   if (usarCallback)
      callback = function() {
      };
   globalSceneMaker.render(callback);
}
