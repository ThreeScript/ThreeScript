TS.bone = function(skin) {
   return new THREE.Bone(skin);
};

TS.group = TS.grou = function() {
   return new THREE.Group();
};

TS.lod = function() {
   return new THREE.LOD();
};

TS.lens_flare = TS.lenfla = function(texture, size, distance, blending, color) {
   return new LensFlare(texture, size, distance, blending, color);
};

TS.line = function() {
   return new Line(geometry, material, mode);
};

TS.line_segments = TS.linseg = function(geometry, material) {
   return new THREE.LineSegments(geometry, material);
};

TS.mesh = function(geometry, material, extraparams) {
   var mesh = new THREE.Mesh(geometry, material, extraparams);
   if (extraparams) {
      ts.coppos(extraparams, mesh);
      ts.coprot(extraparams, mesh);
      ts.copsca(extraparams, mesh);
      ts.coptra(extraparams, mesh);
      if (extraparams.recsha)
         ts.recsha(mesh);
   }
   return mesh;
};

TS.points = TS.pois = function(geometry, material) {
   return new THREE.Points(geometry, material);
};

TS.skeleton = TS.skel = function(bones, boneInverses, useVertexTexture) {
   return new THREE.Skeleton(bones, boneInverses, useVertexTexture);
};

TS.skinned_mesh = TS.skimes = function(geometry, material, useVertexTexture) {
   return new THREE.SkinnedMesh(geometry, material, useVertexTexture);
};

TS.sprite = TS.spri = function() {
   return new THREE.Sprite();
};
