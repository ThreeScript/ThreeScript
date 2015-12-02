// http://learningthreejs.com/blog/2013/04/30/closing-the-gap-between-html-and-webgl/

function CriarFrame1() {
   // create the plane mesh
   var material = new THREE.MeshBasicMaterial({wireframe: true});
   var geometry = new THREE.PlaneGeometry();
   var planeMesh = new THREE.Mesh(geometry, material);
// add it to the WebGL scene
   glScene.add(planeMesh);

// create the dom Element
   var element = document.createElement('iframe');
   element.src = 'www.totvs.com.br';
// create the object3d for this element
   var cssObject = new THREE.CSS3DObject(element);
// we reference the same position and rotation 
   cssObject.position = planeMesh.position;
   cssObject.rotation = planeMesh.rotation;
// add it to the css scene
   cssScene.add(cssObject);

   var cssRenderer = new THREE.CSS3DRenderer();
   cssRenderer.setSize(window.innerWidth, window.innerHeight);
   cssRenderer.domElement.style.position = 'absolute';
   cssRenderer.domElement.style.top = 0;

   var material = new THREE.MeshBasicMaterial();
   material.color.set('black');
   material.opacity = 0;
   material.blending = THREE.NoBlending;
// any mesh using this material will act as a see-thru to the css renderer
}


function CriarFrame2(sceneCSS) {
   var world = tQuery.createWorld().boilerplate().start();
//	var object	= tQuery.createTorusKnot().addTo(world);

   world.tRenderer().setClearColor('black', 0);

// world.removeCameraControls();
   world.camera().translateZ(20);

// your code goes here
   tQuery.createPlane().addTo(world)
           .scaleBy(16)
           .setBasicMaterial()
           // .wireframe(true)
           // .wireframeLinewidth(3)
           .opacity(0)
           .blending(THREE.NoBlending)
           .color('black')
           .back();

/*
   tQuery.createTorusKnot().addTo(world)
           .position(-8, 0, -4)
           .scaleBy(12);
   
   tQuery.createTorusKnot().addTo(world)
           .position(8, 0, 4)
           .scaleBy(12);
*/

   var rendererCSS = new THREE.CSS3DRenderer();
   rendererCSS.setSize(window.innerWidth, window.innerHeight);
   rendererCSS.domElement.style.position = 'absolute';
   rendererCSS.domElement.style.top = 0;
   rendererCSS.domElement.style.margin = 0;
   rendererCSS.domElement.style.padding = 0;
   document.body.appendChild(rendererCSS.domElement);

   THREEx.WindowResize.bind(rendererCSS, world.camera().get(0));

// put the mainRenderer on top
   var rendererMain = world.tRenderer();
   rendererMain.domElement.style.position = 'absolute';
   rendererMain.domElement.style.top = 0;
   rendererMain.domElement.style.zIndex = 1;
   rendererCSS.domElement.appendChild(rendererMain.domElement);

   var element = document.createElement('iframe');
   element.src = 'http://www.totvs.com.br';
   element.style.width = '1200px';
   element.style.height = '900px';

// var element = document.createElement( 'div' );
// element.style.width = '100px';
// element.style.height = '100px';
// element.style.background = new THREE.Color( Math.random() * 0xffffff ).getStyle();

   // var sceneCSS = new THREE.Scene();
   var objectCSS = new THREE.CSS3DObject(element);
   window.objectCSS = objectCSS;
   objectCSS.scale.multiplyScalar(1 / 63.5);
   sceneCSS.add(objectCSS);

   world.loop().hookPostRender(function(delta, now) {
      rendererCSS.render(sceneCSS, world.tCamera());
   });
   return objectCSS;
}
