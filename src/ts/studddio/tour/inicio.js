function NewInit() {
   if (!Detector.webgl)
      Detector.addGetWebGLMessage();
   createInfo();
   createHelp();
   globalSceneMaker = new S3D.S3dSceneMaker(enumControlType.positional);
   globalSceneMaker.createObjects("id-s3d", 0xFFFFFF, true, devicePixelRatio);
   document.getElementById("postprocessing").addEventListener('click', function() {
      postprocessing.enabled = !postprocessing.enabled;
   }, false);
   CreateGlobalStudddioPresentation3d(studddioPresentationParam);
   if (globalUseTrackball) {
      globalSceneMaker.prepareTrackball();
   }
}

function createHelp() {
   globalDivMenuAjuda = document.getElementById("menu-ajuda");
   globalDivMenuAjuda.addEventListener('mouseover', MostrarAjuda, false);
   globalDivMenuAjuda.addEventListener('mouseleave', EsconderAjuda, false);
   globalDivAjuda = document.getElementById("ajuda");
   globalDivMolduraAjuda = document.getElementById("moldura-ajuda");
   globalDivMolduraAjuda.style.display = "none";
}

function createInfo() {
   info = document.getElementById("info");
   info.style.visibility = "hidden";
}

function MostrarAjuda() {
   globalDivMolduraAjuda.style.display = "block";
}

function EsconderAjuda() {
   globalDivMolduraAjuda.style.display = "none";
}
