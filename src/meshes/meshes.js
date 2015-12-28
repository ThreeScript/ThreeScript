TS.boxmes = TS.box_mesh = function(material, w, h, d, ws, hs, ds, extraparams) {
   return TS.mesh(TS.boxgeo(w, h, d, ws, hs, ds), material, extraparams);
};

TS.circle_mesh = TS.cirmes = function(material, radius, segments, thetaStart, thetaLength, extraparams) {
   return TS.mesh(TS.cirgeo(radius, segments, thetaStart, thetaLength), material, extraparams);
};

TS.circle_buffer_mesh = TS.cirbufmes = function(material, radius, segments, thetaStart, thetaLength, extraparams) {
   return TS.mesh(TS.cirbufgeo(radius, segments, thetaStart, thetaLength), material, extraparams);
};

TS.cylinder_mesh = TS.cylmes = function(material, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, tethaLength, extraparams) {
   return TS.mesh(TS.cylgeo(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, tethaLength), material, extraparams);
};

TS.dodecahedron_mesh = TS.dodmes = function(material, radius, detail, extraparams) {
   return TS.mesh(TS.dodgeo(radius, detail), material, extraparams);
};

TS.edges_mesh = TS.edgmes = function(material, geometry, thresholdAngle, extraparams) {
   return TS.mesh(TS.edggeo(geometry, thresholdAngle), material, extraparams);
};

TS.extrude_mesh = TS.extmes = function(material, shapes, options, extraparams) {
   return TS.mesh(TS.extgeo(shapes, options), material, extraparams);
};

TS.icosahedron_mesh = TS.icomes = function(material, radius, detail, extraparams) {
   return TS.mesh(TS.icogeo(radius, detail), material, extraparams);
};

TS.lathe_mesh = TS.latmes = function(material, points, segments, phiStart, phiLength, extraparams) {
   return TS.mesh(TS.latgeo(points, segments, phiStart, phiLength), material, extraparams);
};

TS.octahedron_mesh = TS.octmes = function(material, radius, detail, extraparams) {
   return TS.mesh(TS.octgeo(radius, detail), material, extraparams);
};

TS.parametric_mesh = TS.parmes = function(material, func, slices, stacks, extraparams) {
   return TS.mesh(TS.pargeo(func, slices, stacks), material, extraparams);
};

TS.plane_buffer_mesh = TS.plabufmes = function(material, width, height, widthSegments, heightSegments, extraparams) {
   return TS.mesh(TS.plabufgeo(width, height, widthSegments, heightSegments), material, extraparams);
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
TS.plane_mesh = TS.plames = function(material, width, height, widthSegments, heightSegments, extraparams) {
   return TS.mesh(TS.plageo(width, height, widthSegments, heightSegments), material, extraparams);
};

TS.polyhedron_mesh = TS.polmes = function(material, vertices, indices, radius, detail, extraparams) {
   return TS.mesh(TS.polgeo(vertices, indices, radius, detail), material, extraparams);
};

TS.ring_mesh = TS.rinmes = function(material, innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength, extraparams) {
   return TS.mesh(TS.ringeo(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength), material, extraparams);
};

TS.shape_mesh = TS.shames = function(material, shapes, options, extraparams) {
   return TS.mesh(TS.shageo(shapes, options), material, extraparams);
};

TS.sphere_buffer_mesh = TS.sphbufmes = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength, extraparams) {
   return TS.mesh(TS.sphbufgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material, extraparams);
};

TS.sphere_mesh = TS.sphmes = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength, extraparams) {
   return TS.mesh(TS.sphgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material, extraparams);
};

TS.tetrahedron_mesh = TS.tetmes = function(material, radius, detail, extraparams) {
   return TS.mesh(TS.tetgeo(radius, detail), material, extraparams);
};

TS.text_mesh = TS.txtmes = function(material, text, parameters, extraparams) {
   return TS.mesh(TS.txtgeo(text, parameters), material, extraparams);
};

TS.torus_mesh = TS.tormes = function(material, radius, tube, radialSegments, tubularSegments, arc, extraparams) {
   return TS.mesh(TS.torgeo(radius, tube, radialSegments, tubularSegments, arc), material, extraparams);
};

TS.torus_knot_mesh = TS.knomes = function(material, radius, tube, radialSegments, tubularSegments, p, q, heightScale, extraparams) {
   return TS.mesh(TS.knogeo(radius, tube, radialSegments, tubularSegments, p, q, heightScale), material, extraparams);
};

TS.tube_mesh = TS.tubmes = function(material, path, segments, radius, radialSegments, closed, taper, extraparams) {
   return TS.mesh(TS.tubgeo(path, segments, radius, radialSegments, closed, taper), material, extraparams);
};

TS.wireframe_mesh = TS.wirmes = function(material, geometry, extraparams) {
   return TS.mesh(TS.geo(geometry), material, extraparams);
};
