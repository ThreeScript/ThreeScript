TS.boxmes = TS.box_mesh = function(material, w, h, d, ws, hs, ds) {
   return TS.mesh(TS.boxgeo(w, h, d, ws, hs, ds), material);
};

TS.circle_mesh = TS.cirmes = function(material, radius, segments, thetaStart, thetaLength) {
   return TS.mesh(TS.cirgeo(radius, segments, thetaStart, thetaLength), material);
};

TS.circle_buffer_mesh = TS.cirbufmes = function(material, radius, segments, thetaStart, thetaLength) {
   return TS.mesh(TS.cirbufgeo(radius, segments, thetaStart, thetaLength), material);
};

TS.cylinder_mesh = TS.cylmes = function(material, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, tethaLength) {
   return TS.mesh(TS.cylgeo(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, tethaLength), material);
};

TS.dodecahedron_mesh = TS.dodmes = function(material, radius, detail) {
   return TS.mesh(TS.dodgeo(radius, detail), material);
};

TS.edges_mesh = TS.edgmes = function(material, geometry, thresholdAngle) {
   return TS.mesh(TS.edggeo(geometry, thresholdAngle), material);
};

TS.extrude_mesh = TS.extmes = function(material, shapes, options) {
   return TS.mesh(TS.extgeo(shapes, options), material);
};

TS.icosahedron_mesh = TS.icomes = function(material, radius, detail) {
   return TS.mesh(TS.icogeo(radius, detail), material);
};

TS.lathe_mesh = TS.latmes = function(material, points, segments, phiStart, phiLength) {
   return TS.mesh(TS.latgeo(points, segments, phiStart, phiLength), material);
};

TS.octahedron_mesh = TS.octmes = function(material, radius, detail) {
   return TS.mesh(TS.octgeo(radius, detail), material);
};

TS.parametric_mesh = TS.parmes = function(material, func, slices, stacks) {
   return TS.mesh(TS.pargeo(func, slices, stacks), material);
};

TS.plane_buffer_mesh = TS.plabufmes = function(material, width, height, widthSegments, heightSegments) {
   return TS.mesh(TS.plabufgeo(width, height, widthSegments, heightSegments), material);
};

/**
 * 
 * @param {Object} material
 * @param {Number} width
 * @param {Number} height
 * @param {Number} widthSegments
 * @param {Number} heightSegments
 * @returns {Object}
 */
TS.plane_mesh = TS.plames = function(material, width, height, widthSegments, heightSegments) {
   return TS.mesh(TS.plageo(width, height, widthSegments, heightSegments), material);
};

TS.polyhedron_mesh = TS.polmes = function(material, vertices, indices, radius, detail) {
   return TS.mesh(TS.polgeo(vertices, indices, radius, detail), material);
};

TS.ring_mesh = TS.rinmes = function(material, innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
   return TS.mesh(TS.ringeo(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength), material);
};

TS.shape_mesh = TS.shames = function(material, shapes, options) {
   return TS.mesh(TS.shageo(shapes, options), material);
};

TS.sphere_buffer_mesh = TS.sphbufmes = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return TS.mesh(TS.shpbufgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material);
};

TS.sphere_mesh = TS.sphmes = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return TS.mesh(TS.sphgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material);
};

TS.tetrahedron_mesh = TS.tetmes = function(material, radius, detail) {
   return TS.mesh(TS.tetgeo(radius, detail), material);
};

TS.text_mesh = TS.txtmes = function(material, text, parameters) {
   return TS.mesh(TS.txtgeo(text, parameters), material);
};

TS.torus_mesh = TS.tormes = function(material, radius, tube, radialSegments, tubularSegments, arc) {
   return TS.mesh(TS.torgeo(radius, tube, radialSegments, tubularSegments, arc), material);
};

TS.torus_knot_mesh = TS.knomes = function(material, radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
   return TS.mesh(TS.knogeo(radius, tube, radialSegments, tubularSegments, p, q, heightScale), material);
};

TS.tube_mesh = TS.tubmes = function(material, path, segments, radius, radialSegments, closed, taper) {
   return TS.mesh(TS.tubgeo(path, segments, radius, radialSegments, closed, taper), material);
};

TS.wireframe_mesh = TS.wirmes = function(material, geometry) {
   return TS.mesh(TS.geo(geometry), material);
};
