
TS.setpar = function(params, name, color) {
   if (!params)
      params = {};
   params[name] = color;
   return params;
};

TS.colpar = function(params, color) {
   return TS.setpar(params, "color", color);
};

TS.trapar = function(params, transparent) {
   return TS.setpar(params, "transparent", transparent);
};

TS.opapar = function(params, opacity) {
   return TS.setpar(params, "opacity", opacity);
};

TS.flashapar = function(params) {
   return TS.setpar(params, "shading", THREE.FlatShading);
};

TS.smoshapar = function(params) {
   return TS.setpar(params, "shading", THREE.SmoothShading);
};

TS.coltrapar = function(params, color, transparent) {
   return TS.trapar(TS.colpar(params, color), transparent);
};

TS.colopapar = function(params, color, opacity) {
   return TS.opapar(TS.colpar(params, color), opacity);
};

TS.coltraopapar = function(params, color, transparent, opacity) {
   return TS.opapar(TS.trapar(TS.colpar(params, color), transparent), opacity);
};

TS.coltraopamappar = function(params, color, transparent, opacity, map) {
   return TS.mappar(TS.opapar(TS.trapar(TS.colpar(params, color), transparent), opacity), map);
};

TS.fonpar = function(
        size,
        height,
        font,
        curveSegments,
        weight,
        style,
        bevelThickness,
        bevelSize,
        bevelEnabled,
        material,
        extrudeMaterial) {
   return {
      size: size,
      height: height,
      font: font,
      curveSegments: curveSegments,
      weight: weight,
      style: style,
      bevelThickness: bevelThickness,
      bevelSize: bevelSize,
      bevelEnabled: bevelEnabled,
      material: material,
      extrudeMaterial: extrudeMaterial
   };
};

TS.fonstypar = function(
        size,
        height,
        style,
        material,
        extrudeMaterial) {
   return {
      size: size,
      height: height,
      font: style.font,
      curveSegments: style.curveSegments,
      weight: style.weight,
      style: style.style,
      bevelThickness: style.bevelThickness,
      bevelSize: style.bevelSize,
      bevelEnabled: style.bevelEnabled,
      material: material || 0,
      extrudeMaterial: extrudeMaterial || 1
   };
};
