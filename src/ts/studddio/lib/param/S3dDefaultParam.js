
var S3D_DEFAULT_PARAM = {
   materialList: {},
   fontParamList: {},
   textParamList: {}
};
/*
 S3D_DEFAULT_PARAM.materialList.dictOp30 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({
 map: THREE.ImageUtils.loadTexture("/site/v2015/img/dictionary/dictionary-01b.jpg"),
 // color: 0x0000ff, 
 opacity: 0.3, 
 transparent: true, 
 shading: THREE.FlatShading
 }), // front
 new THREE.MeshPhongMaterial({
 map: THREE.ImageUtils.loadTexture("/site/v2015/img/letter/letter-01b.jpg"),
 // color: 0x00ff00, 
 opacity: 0.3, 
 transparent: true, 
 shading: THREE.SmoothShading
 }) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.blueOp30 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x0000ff, opacity: 0.3, transparent: true, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x0000ff, opacity: 0.3, transparent: true, shading: THREE.SmoothShading}) // side
 ]);
 */

function cloneColorMaterial(material, color) {
   var newMaterial = material.clone();
   newMaterial.color = color;
   return newMaterial;
}

function prepareColorMaterial(fspMaterial, pfsm) {
   pfsm.lightRed = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.red = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.DarkRed = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.LightGreen = cloneColorMaterial(fspMaterial, 0x00FF00);
   pfsm.green = cloneColorMaterial(fspMaterial, 0x00FF00);
   pfsm.DarkGreen = cloneColorMaterial(fspMaterial, 0x00FF00);
   pfsm.LightBlue = cloneColorMaterial(fspMaterial, 0x0000FF);
   pfsm.blue = cloneColorMaterial(fspMaterial, 0x0000FF);
   pfsm.DarkBlue = cloneColorMaterial(fspMaterial, 0x0000FF);
   pfsm.yellow = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.black = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.white = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.gray = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.orange = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.violet = cloneColorMaterial(fspMaterial, 0xFF0000);
   pfsm.cyan = cloneColorMaterial(fspMaterial, 0xFF0000);
   /*
    AliceBlue	#F0F8FF
    AntiqueWhite	#FAEBD7
    Aqua	#00FFFF
    Aquamarine	#7FFFD4
    Azure	#F0FFFF
    Beige	#F5F5DC
    Bisque	#FFE4C4
    Black	#000000
    BlanchedAlmond	#FFEBCD
    Blue	#0000FF
    BlueViolet	#8A2BE2
    Brown	#A52A2A
    BurlyWood	#DEB887
    CadetBlue	#5F9EA0
    Chartreuse	#7FFF00
    Chocolate	#D2691E
    Coral	#FF7F50
    CornflowerBlue	#6495ED
    Cornsilk	#FFF8DC
    Crimson	#DC143C
    Cyan	#00FFFF
    DarkBlue	#00008B
    DarkCyan	#008B8B
    DarkGoldenRod	#B8860B
    DarkGray	#A9A9A9
    DarkGrey	#A9A9A9
    DarkGreen	#006400
    DarkKhaki	#BDB76B
    DarkMagenta	#8B008B
    DarkOliveGreen	#556B2F
    DarkOrange	#FF8C00
    DarkOrchid	#9932CC
    DarkRed	#8B0000
    DarkSalmon	#E9967A
    DarkSeaGreen	#8FBC8F
    DarkSlateBlue	#483D8B
    DarkSlateGray	#2F4F4F
    DarkSlateGrey	#2F4F4F
    DarkTurquoise	#00CED1
    DarkViolet	#9400D3
    DeepPink	#FF1493
    DeepSkyBlue	#00BFFF
    DimGray	#696969
    DimGrey	#696969
    DodgerBlue	#1E90FF
    FireBrick	#B22222
    FloralWhite	#FFFAF0
    ForestGreen	#228B22
    Fuchsia	#FF00FF
    Gainsboro	#DCDCDC
    GhostWhite	#F8F8FF
    Gold	#FFD700
    GoldenRod	#DAA520
    Gray	#808080
    Grey	#808080
    Green	#008000
    GreenYellow	#ADFF2F
    HoneyDew	#F0FFF0
    HotPink	#FF69B4
    IndianRed	#CD5C5C
    Indigo	#4B0082
    Ivory	#FFFFF0
    Khaki	#F0E68C
    Lavender	#E6E6FA
    LavenderBlush	#FFF0F5
    LawnGreen	#7CFC00
    LemonChiffon	#FFFACD
    LightBlue	#ADD8E6
    LightCoral	#F08080
    LightCyan	#E0FFFF
    LightGoldenRodYellow	#FAFAD2
    LightGray	#D3D3D3
    LightGrey	#D3D3D3
    LightGreen	#90EE90
    LightPink	#FFB6C1
    LightSalmon	#FFA07A
    LightSeaGreen	#20B2AA
    LightSkyBlue	#87CEFA
    LightSlateGray	#778899
    LightSlateGrey	#778899
    LightSteelBlue	#B0C4DE
    LightYellow	#FFFFE0
    Lime	#00FF00
    LimeGreen	#32CD32
    Linen	#FAF0E6
    Magenta	#FF00FF
    Maroon	#800000	
    MediumAquaMarine	#66CDAA
    MediumBlue	#0000CD
    MediumOrchid	#BA55D3
    MediumPurple	#9370D8
    MediumSeaGreen	#3CB371
    MediumSlateBlue	#7B68EE
    MediumSpringGreen	#00FA9A
    MediumTurquoise	#48D1CC
    MediumVioletRed	#C71585
    MidnightBlue	#191970
    MintCream	#F5FFFA
    MistyRose	#FFE4E1
    Moccasin	#FFE4B5
    NavajoWhite	#FFDEAD
    Navy	#000080
    OldLace	#FDF5E6
    Olive	#808000
    OliveDrab	#6B8E23
    Orange	#FFA500
    OrangeRed	#FF4500
    Orchid	#DA70D6
    PaleGoldenRod	#EEE8AA
    PaleGreen	#98FB98
    PaleTurquoise	#AFEEEE
    PaleVioletRed	#D87093
    PapayaWhip	#FFEFD5
    PeachPuff	#FFDAB9
    Peru	#CD853F
    Pink	#FFC0CB
    Plum	#DDA0DD
    PowderBlue	#B0E0E6
    Purple	#800080
    Red	#FF0000
    RosyBrown	#BC8F8F	188, 143, 143	 	Tonalidades
    RoyalBlue	#4169E1	65, 105, 225	 	Tonalidades
    SaddleBrown	#8B4513	139, 69, 19	 	Tonalidades
    Salmon	#FA8072	250, 128, 114	 	Tonalidades
    SandyBrown	#F4A460	244, 164, 96	 	Tonalidades
    SeaGreen	#2E8B57	46, 139, 87	 	Tonalidades
    SeaShell	#FFF5EE	255, 245, 238	 	Tonalidades
    Sienna	#A0522D	160, 82, 45	 	Tonalidades
    Silver	#C0C0C0	192, 192, 192	 	Tonalidades
    SkyBlue	#87CEEB	135, 206, 235	 	Tonalidades
    SlateBlue	#6A5ACD	106, 90, 205	 	Tonalidades
    SlateGray	#708090	112, 128, 144	 	Tonalidades
    SlateGrey	#708090	112, 128, 144	 	Tonalidades
    Snow	#FFFAFA	255, 250, 250	 	Tonalidades
    SpringGreen	#00FF7F	0, 255, 127	 	Tonalidades
    SteelBlue	#4682B4	70, 130, 180	 	Tonalidades
    Tan	#D2B48C	210, 180, 140	 	Tonalidades
    Teal	#008080	0, 128, 128	 	Tonalidades
    Thistle	#D8BFD8	216, 191, 216	 	Tonalidades
    Tomato	#FF6347	255, 99, 71	 	Tonalidades
    Turquoise	#40E0D0	64, 224, 208	 	Tonalidades
    Violet	#EE82EE	238, 130, 238	 	Tonalidades
    Wheat	#F5DEB3	245, 222, 179	 	Tonalidades
    White	#FFFFFF	255, 255, 255	 	Tonalidades
    WhiteSmoke	#F5F5F5	245, 245, 245	 	Tonalidades
    Yellow	#FFFF00	255, 255, 0	 	Tonalidades
    YellowGreen	#9ACD32	154, 205, 50	 	Tonalidades
    
    */
}

var fspMaterial = new THREE.phongMaterial({shading: THREE.FlatShading});
var pfsm = {};

prepareColorMaterial(fspMaterial, pfsm);

S3D_DEFAULT_PARAM.phongFlatShadingMaterial = pfsm;
S3D_DEFAULT_PARAM.pfsm = pfsm;

/*
 S3D_DEFAULT_PARAM.materialList.red = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xff0000, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xff0000, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.green = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x00ff00, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x00ff00, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.blue = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x0000ff, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x0000ff, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.black = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x000000, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x000000, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.white = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xffffff, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xffffff, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray1 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x111111, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x111111, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray2 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x222222, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x222222, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray3 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x333333, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x333333, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray4 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x444444, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x444444, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray5 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x555555, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x555555, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray6 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray7 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x777777, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x777777, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray8 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x888888, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x888888, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.gray9 = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0x999999, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0x999999, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.grayA = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xAAAAAA, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xAAAAAA, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.grayB = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xBBBBBB, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xBBBBBB, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.grayC = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xCCCCCC, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xCCCCC, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.grayD = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xDDDDDD, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xDDDDDD, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.grayE = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xEEEEEE, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xEEEEEE, shading: THREE.SmoothShading}) // side
 ]);
 
 S3D_DEFAULT_PARAM.materialList.grayF = new THREE.MeshFaceMaterial([
 new THREE.MeshPhongMaterial({color: 0xFFFFFF, shading: THREE.FlatShading}), // front
 new THREE.MeshPhongMaterial({color: 0xFFFFFF, shading: THREE.SmoothShading}) // side
 ]);
 */

S3D_DEFAULT_PARAM.fontParamList.dsbn = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, null);

aux = S3D_DEFAULT_PARAM.fontParamList.dsbn;

S3D_DEFAULT_PARAM.textParamList.Dsbn8x2 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn9x2 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn10x3 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn11x3 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn12x3 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn14x4 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn18x4 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn24x5 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn36x6 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn48x7 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn72x8 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn144x16 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn288x32 = {
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

S3D_DEFAULT_PARAM.textParamList.Dsbn320x32 = {
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

S3D_DEFAULT_PARAM.textParamList.BigDsbn = {
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

S3D_DEFAULT_PARAM.textParamList.MediumDsbn = {
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

S3D_DEFAULT_PARAM.textParamList.SmallDsbn = {
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
