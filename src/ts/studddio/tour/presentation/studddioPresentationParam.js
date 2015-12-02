var studddioPresentationParam = {
   materialList: {},
   fontParamList: {},
   textParamList: {}
};

studddioPresentationParam.materialList.dictOp30 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture("/img/studddio/textures/dictionary/dictionary-01b.jpg"),
      // color: 0x0000ff, 
      opacity: 0.3, 
      transparent: true, 
      shading: THREE.FlatShading
   }), // front
   new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture("/img/studddio/textures/letter/letter-01b.jpg"),
      // color: 0x00ff00, 
      opacity: 0.3, 
      transparent: true, 
      shading: THREE.SmoothShading
   }) // side
]);

studddioPresentationParam.materialList.blueOp30 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x0000ff, opacity: 0.3, transparent: true, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x0000ff, opacity: 0.3, transparent: true, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.red = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xff0000, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xff0000, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.green = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x00ff00, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x00ff00, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.blue = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x0000ff, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x0000ff, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.blue = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x0000ff, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x0000ff, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.yellow = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xffff00, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xffff00, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.orange = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xff8800, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xff8800, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.black = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x000000, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x000000, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.white = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xffffff, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xffffff, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray1 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x111111, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x111111, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray2 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x222222, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x222222, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayPhong3 = 
   new THREE.MeshPhongMaterial({color: 0x333333});
   
studddioPresentationParam.materialList.gray3 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x333333, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x333333, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray4 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x444444, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x444444, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray5 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x555555, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x555555, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray6 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray7 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x777777, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x777777, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray8 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x888888, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x888888, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.gray9 = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x999999, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x999999, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayA = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xAAAAAA, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xAAAAAA, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayB = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xBBBBBB, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xBBBBBB, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayC = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xCCCCCC, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xCCCCC, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayD = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xDDDDDD, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xDDDDDD, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayE = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xEEEEEE, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xEEEEEE, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.grayF = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0xFFFFFF, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0xFFFFFF, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.darkGrayYellow = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x666622, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x666622, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.darkGrayRed = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x662222, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x662222, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.darkGrayGreen = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x226622, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x226622, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.materialList.darkGrayBlue = new THREE.MeshFaceMaterial([
   new THREE.MeshPhongMaterial({color: 0x222266, shading: THREE.FlatShading}), // front
   new THREE.MeshPhongMaterial({color: 0x222266, shading: THREE.SmoothShading}) // side
]);

studddioPresentationParam.fontParamList.dsbn = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, null);

aux = studddioPresentationParam.fontParamList.dsbn;

studddioPresentationParam.textParamList.Dsbn8x2= {
   size: 8,
   height: 2,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn9x2= {
   size: 9,
   height: 2,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn10x3= {
   size: 10,
   height: 3,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn11x3= {
   size: 11,
   height: 3,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn12x3= {
   size: 12,
   height: 3,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn14x4= {
   size: 14,
   height: 4,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn18x4= {
   size: 18,
   height: 4,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn24x5= {
   size: 24,
   height: 5,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn36x6= {
   size: 36,
   height: 6,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn48x7= {
   size: 48,
   height: 7,
   font: aux.font,
   curveSegments: aux.curveSegments,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn72x8 = {
   size: 72,
   height: 8,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn144x16 = {
   size: 144,
   height: 16,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn288x32 = {
   size: 288,
   height: 32,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn320x34 = {
   size: 320,
   height: 34,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.Dsbn360x36 = {
   size: 360,
   height: 36,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.BigDsbn = {
   size: 70,
   height: 70,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.MediumDsbn = {
   size: 50,
   height: 10,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};

studddioPresentationParam.textParamList.SmallDsbn = {
   size: 12,
   height: 3,
   curveSegments: aux.curveSegments,
   font: aux.font,
   weight: aux.weight,
   style: aux.style,
   bevelThickness: aux.bevelThickness,
   bevelSize: aux.bevelSize,
   bevelEnabled: aux.bevelEnabled,
   material: 0,
   extrudeMaterial: 1
};
