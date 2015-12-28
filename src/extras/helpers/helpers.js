TS.arrow_helper = TS.arrhel = function() {
   return new THREE.ArrowHelper();
};

TS.axis_helper = TS.axihel = function(size) {
   return new THREE.AxisHelper(size);
};

TS.bounding_box_helper = TS.bouhel = function(object, hex) {
   return new THREE.BoundingBoxHelper(object, hex);
};
TS.box_helper = TS.boxhel = function(object) {
   return new THREE.BoxHelper(object);
};

TS.camera_helper = TS.camhel = function(camera) {
   return new THREE.CameraHelper(camera);
};

TS.directional_light_helper = TS.dirlighel = function(light, size) {
   return new THREE.DirectionalLightHelper(light, size);
};
TS.edges_helper = TS.edghel = function(object, hex, thresholdAngle) {
   return new THREE.EdgesHelper(object, hex, thresholdAngle);
};

TS.face_normals_helper = TS.facnorhel = function(object, size, hex, linewidth) {
   return new THREE.FaceNormalsHelper(object, size, hex, linewidth);
};

TS.grid_helper = TS.grihel = function(size, step) {
   return new THREE.GridHelper(size, step);
};
TS.hemisphere_light_helper = TS.hemlighel = function(light, sphereSize) {
   return new THREE.HemisphereLightHelper(light, sphereSize);
};

TS.point_light_helper = TS.poilighel = function(light, sphereSize) {
   return new THREE.PointLightHelper(light, sphereSize);
};

TS.skeleton_helper = TS.skehel = function(object) {
   return new THREE.SkeletonHelper(object);
};
TS.spotLight_helper = TS.spolihel = function(light) {
   return new THREE.SpotLightHelper(light);
};

TS.vertex_normals_helper = TS.vetnorhel = function(object, size, hex, linewidth) {
   return new THREE.VertexNormalsHelper(object, size, hex, linewidth);
};

TS.wireframe_helper = TS.wirhel = function(object, hex) {
   return new THREE.WireframeHelper(object, hex);
};
