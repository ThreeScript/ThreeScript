var linemat = line_basic_material = function(parameters) {
   return new THREE.LineBasicMaterial(parameters);
};

var dasmat = line_dashed_material = function(parameters) {
   return new THREE.LineDashedMaterial(parameters);
};

var basmat = mesh_basic_material = function(parameters) {
   return new THREE.MeshBasicMaterial(parameters);
};

var depmat = mesh_depth_material = function(parameters) {
   return new THREE.MeshDepthMaterial(parameters);
};

var lammat = mesh_lambert_material = function(parameters) {
   return new THREE.MeshLambertMaterial(parameters);
};

var normat = mesh_normal_material = function(parameters) {
   return new THREE.MeshNormalMaterial(parameters);
};

var phomat = mesh_phong_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};

var mulmat = multi_material = function(parameters) {
   return new THREE.MultiMaterial(parameters);
};

var facmat = mesh_face_material = function(parameters) {
   return new THREE.MeshFaceMaterial(parameters);
};

var poimat = mesh_points_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};

var rawmat = raw_shader_material = function(parameters) {
   return new THREE.RawShaderMaterial(parameters);
};

var shamat = shader_material = function(parameters) {
   return new THREE.ShaderMaterial(parameters);
};

var sprimat = sprite_material = function(parameters) {
   return new THREE.SpriteMaterial(parameters);
};

var bascolmat = mesh_basic_colors_material = function(colors) {
   if (!colors || !colors.length || colors.length !== 6)
      return null;
   var matarr = [];
   for (var i = 0; i < 6; i++)
      matarr.push(basmat({color: colors[i]}));
   return facmat(matarr);
};
