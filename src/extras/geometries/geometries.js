/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * Returns the THREE.BoxGeometry box geometry object.
 * @param {Number} w - width
 * @param {Number} h - height
 * @param {Number} d - depth
 * @param {Number} ws - widthSegments
 * @param {Number} hs - heightSegments
 * @param {Number} ds - depthSegments
 * @returns {Object}
 */

TS.boxgeo = function(w, h, d, ws, hs, ds) {
   return new THREE.BoxGeometry(w, h, d, ws, hs, ds);
};

TS.box_geometry = TS.boxgeo;
/**
 * 
 * @param {Number} r - radius
 * @param {type} s - segments
 * @param {type} ts - theta start
 * @param {type} tl - theta length
 * @returns {Object} Returns a new THREE.CircleGeometry circle geometry object.
 */

TS.cirgeo = TS.circle_geometry = function(r, s, ts, tl) {
   return new THREE.CircleGeometry(r, s, ts, tl);
};

// r:  radius
// s:  segments
// ts: thetaStart
// tl: thetaLength

TS.cirbufgeo = TS.circle_buffer_geometry = function(r, s, ts, tl) {
   return new THREE.CircleBufferGeometry(r, s, ts, tl);
};

/**
 * Returns the THREE.CylinderGeometry cylinder geometry object.
 * @param {Number} rt - radius top
 * @param {Number} rb - radius bottom
 * @param {Number} h - height
 * @param {Number} rs - radial segments
 * @param {Number} hs - height segments
 * @param {Number} oe - open ended
 * @param {Number} ts - theta start
 * @param {Number} tl - theta length
 * @returns {Object} cilinder geometry
 */
TS.cylgeo = TS.cylinder_geometry = function(rt, rb, h, rs, hs, oe, ts, tl) {
   return new THREE.CylinderGeometry(rt, rb, h, rs, hs, oe, ts, tl);
};

/**
 * Returns the THREE.DodecahedronGeometry object.
 * @param {Number} radius - radius
 * @param {Number} detail - detail
 */
TS.dodgeo = TS.dodecahedron_geometry = function(radius, detail) {
   return new THREE.DodecahedronGeometry(radius, detail);
};

TS.edggeo = TS.edges_geometry = function(geometry, thresholdAngle) {
   return new THREE.EdgesGeometry(geometry, thresholdAngle);
};

TS.extgeo = TS.extrude_geometry = function(shapes, options) {
   return new THREE.ExtrudeGeometry(shapes, options);
};

TS.icogeo = TS.icosahedron_geometry = function(radius, detail) {
   return new THREE.IcosahedronGeometry(radius, detail);
};

TS.latgeo = TS.lathe_geometry = function(points, segments, phiStart, phiLength) {
   return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
};

TS.octgeo = TS.octahedron_geometry = function(radius, detail) {
   return new THREE.OctahedronGeometry(radius, detail);
};

TS.pargeo = TS.parametric_geometry = function(func, slices, stacks) {
   return new THREE.ParametricGeometry(func, slices, stacks);
};

TS.plabufgeo = TS.plane_buffer_geometry = function(width, height, widthSegments, heightSegments) {
   return new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
};

TS.plageo = TS.plane_geometry = function(width, height, widthSegments, heightSegments) {
   return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
};

TS.polgeo = TS.polyhedron_geometry = function(vertices, indices, radius, detail) {
   return new THREE.PolyhedronGeometry(vertices, indices, radius, detail);
};

TS.ringeo = TS.ring_geometry = function(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
   return new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
};

TS.shageo = TS.shape_geometry = function(shapes, options) {
   return new THREE.ShapeGeometry(shapes, options);
};

TS.sphbufgeo = TS.sphere_buffer_geometry = function(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};

TS.sphgeo = TS.sphere_geometry = function(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};

TS.tetgeo = TS.tetrahedron_geometry = function(radius, detail) {
   return new THREE.TetrahedronGeometry(radius, detail);
};

TS.txtgeo = TS.text_geometry = function(text, parameters) {
   return new THREE.TextGeometry(text, parameters);
};

TS.torgeo = TS.torus_geometry = function(radius, tube, radialSegments, tubularSegments, arc) {
   return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
};

TS.knogeo = TS.torus_knot_geometry = function(radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
   return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
};

TS.tubgeo = TS.tube_geometry = function(path, segments, radius, radialSegments, closed, taper) {
   return new THREE.TubeGeometry(path, segments, radius, radialSegments, closed, taper);
};

TS.wirgeo = TS.wireframe_geometry = function(geometry) {
   return new THREE.WireframeGeometry(geometry);
};
