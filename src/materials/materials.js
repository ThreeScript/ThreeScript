TS.linemat = TS.line_basic_material = function(parameters) {
   return new THREE.LineBasicMaterial(parameters);
};

TS.dasmat = TS.line_dashed_material = function(parameters) {
   return new THREE.LineDashedMaterial(parameters);
};

TS.basmat = TS.mesh_basic_material = function(parameters) {
   return new THREE.MeshBasicMaterial(parameters);
};

TS.depmat = TS.mesh_depth_material = function(parameters) {
   return new THREE.MeshDepthMaterial(parameters);
};

TS.lammat = TS.mesh_lambert_material = function(parameters) {
   return new THREE.MeshLambertMaterial(parameters);
};

TS.normat = TS.mesh_normal_material = function(parameters) {
   return new THREE.MeshNormalMaterial(parameters);
};

TS.phomat = TS.mesh_phong_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};

TS.mulmat = TS.multi_material = function(parameters) {
   return new THREE.MultiMaterial(parameters);
};

TS.mesh_face_material = TS.facmat = function(parameters) {
   return new THREE.MeshFaceMaterial(parameters);
};

TS.mesh_face_material_phong = TS.phofacmat = function(front, side) {
   return TS.facmat([ts.phomat(front),ts.phomat(side)]);
};

TS.poimat = TS.mesh_points_material = function(parameters) {
   return new THREE.PointsMaterial(parameters);
};

TS.rawmat = TS.raw_shader_material = function(parameters) {
   return new THREE.RawShaderMaterial(parameters);
};

TS.shamat = TS.shader_material = function(parameters) {
   return new THREE.ShaderMaterial(parameters);
};

TS.sprimat = TS.sprite_material = function(parameters) {
   return new THREE.SpriteMaterial(parameters);
};

TS.bascolmat = TS.mesh_basic_colors_material = function(colors) {
   if (!colors || !colors.length || colors.length !== 6)
      return null;
   var matarr = []; // msterial array
   for (var i = 0; i < 6; i++)
      matarr.push(TS.basmat({color: colors[i]}));
   return TS.facmat(matarr);
};
