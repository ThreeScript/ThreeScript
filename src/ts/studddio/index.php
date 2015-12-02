
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>STUDDDIO - The Studio With 3D</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
      <link rel="stylesheet" type="text/css" href="/master/ThreeScript/src/ts/studddio/css/studddio-01.css" />
      <style>
         #id-s3d {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;   
         }
      </style>
   </head>
   <body>      
      <div id="info">
         <a href="http://threejs.org" target="_blank">three.js</a> - procedural 3D text by <a href="http://www.lab4games.net/zz85/blog" target="_blank">zz85</a> &amp; alteredq
         (fonts from <a href="http://typeface.neocracy.org/">typeface.js</a> and <a href="http://en.wikipedia.org/wiki/Droid_%28font%29">Droid</a>)
         <br/>type to enter new text, drag to spin the text
         <br/><span class="button" id="color">change color</span>,
         <span class="button" id="font">change font</span>,
         <span class="button" id="weight">change weight</span>,
         <span class="button" id="bevel">change bevel</span>,
         <span class="button" id="postprocessing">change postprocessing</span>,
         <a id="permalink" href="#">permalink</a>
      </div>

      <div id="menu-ajuda">
         Ajuda
      </div>

      <div id="moldura-ajuda">
         <div id="ajuda">
            <div class="div-ajuda">en-US</div>
            <div class="div-ajuda">Press the left mouse button moving the scene to the left and right sides in the X axis.</div>
            <div class="div-ajuda">Press the mouse up and down with the left mouse button to move the scene by the Y axis or the axis Z. Switch Y and Z axes with the double click of the left mouse button.</div>
            <div class="div-ajuda">Double-click the left mouse button to switch the moving up and down between the Y and Z axes.</div>
            <div class="div-ajuda">pt-BR</div>
            <div class="div-ajuda">Pressione o botão esquerdo do mouse movimentando a cena para os lados esquerdo e direito no eixo X.</div>
            <div class="div-ajuda">Pressione o mouse para cima e para baixo com o botão esquerdo do mouse pressionado, para movimentar a cena pelo eixo Y ou pelo eixo Z. Alterne os eixos Y e Z com o clique duplo do botão esquerdo do mouse.</div>
            <div class="div-ajuda">Clique duas vezes o botão esquerdo do mouse para alternar, o movimentando para cima e para baixo, entre os eixos Y e Z.</div>
         </div>
      </div>

      <div id="id-s3d">
      </div>

      <script src="/oslib/js/threejs/r73/build/three.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/geometries/TextGeometry.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/utils/FontUtils.js"></script>

      <script src="/oslib/js/threejs/r73/examples/js/shaders/ConvolutionShader.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/shaders/CopyShader.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/shaders/FilmShader.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/shaders/FXAAShader.js"></script>

      <script src="/oslib/js/threejs/r73/examples/js/postprocessing/EffectComposer.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/postprocessing/RenderPass.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/postprocessing/ShaderPass.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/postprocessing/MaskPass.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/postprocessing/BloomPass.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/postprocessing/FilmPass.js"></script>

      <script src="/oslib/js/threejs/r73/examples/js/effects/AnaglyphEffect.js"></script>

      <script src="/oslib/js/threejs/r73/examples/js/Detector.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/controls/TrackballControls.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/controls/FirstPersonControls.js"></script>
      <script src="/oslib/js/threejs/r73/examples/js/libs/stats.min.js"></script>

      <script src="/oslib/js/threejs/r73/examples/js/loaders/OBJLoader.js"></script>

      <!-- load the font files -->

      <script src="/oslib/js/threejs/r73/examples/fonts/gentilis_bold.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/gentilis_regular.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/optimer_bold.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/optimer_regular.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/helvetiker_bold.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/helvetiker_regular.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/droid/droid_sans_regular.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/droid/droid_sans_bold.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/droid/droid_serif_regular.typeface.js"></script>
      <script src="/oslib/js/threejs/r73/examples/fonts/droid/droid_serif_bold.typeface.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/common/S3dObject3D.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/common/S3dMesh.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/common/S3dPos.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/util/S3dLinkedList.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/util/S3dGeometryStyle.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/util/S3dGeometryStyleChar.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/geometry/S3dBox.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/geometry/S3dPlane.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/geometry/S3dPlaneParam.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/geometry/S3dPlaneChain.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/text/S3dText.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/text/S3dTextParam.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/text/S3dTextChain.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/slider/S3dSlider.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/slider/S3dSlide.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/richText/S3dRichCtrl.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/richText/S3dRichChain.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/richText/S3dRichChar.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/richText/S3dRichText.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/richText/S3dRichMemo.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/util/S3dEditor.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/sceneMaker/S3dSceneMaker.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/tour/tour.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/tour/global.js"></script>
      <!--script src="/master/ThreeScript/src/ts/studddio/tour/eventos.js"></script-->
      <script src="/master/ThreeScript/src/ts/studddio/tour/inicio.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/tour/animacao.js"></script>
      <!--script src="/master/ThreeScript/src/ts/studddio/tour/principal.js"></script-->

      <script src="/master/ThreeScript/src/ts/studddio/tour/presentation/studddioPresentation.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/tour/presentation/studddioPresentationFrame.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/tour/presentation/studddioPresentationParam.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/tour/presentation/startPresentation.js"></script>

      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dAction.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionMove.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionMoveOn.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionMoveTo.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionRotate.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionRotateOn.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionRotateTo.js"></script>
      <script src="/master/ThreeScript/src/ts/studddio/lib/action/S3dActionChain.js"></script>
      
      <?$threescriptSrcDir = "/master/ThreeScript/src";?>

      <? echo "<script src='$threescriptSrcDir/ts/ts.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/cameras/cameras.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/container/container.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/core/core.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/examples/js/controls.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/examples/js/effects.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/extras/extras.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/extras/geometries/geometries.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/lights/lights.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/loaders/loaders.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/materials/materials.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/math/math.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/meshes/meshes.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/objects/objects.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/renderers/renderers.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/scenes/scenes.js'></script>\n"; ?>
      <? echo "<script src='$threescriptSrcDir/textures/textures.js'></script>\n"; ?>

      <? echo "<script src='$threescriptSrcDir/locale/pt_BR/all.js'></script>\n"; ?>

      <script>
         document.body.onload = function() {
            globalStudddioPresentation = true;
            NewInit();
            Animate();
         };
      </script>
   </body>
</html>
