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

TS.box_geometry = TS.boxgeo = function(w, h, d, ws, hs, ds) {
   return new THREE.BoxGeometry(w, h, d, ws, hs, ds);
};

/**
 * 
 * @param {Number} r - radius
 * @param {type} s - segments
 * @param {type} ts - theta start
 * @param {type} tl - theta length
 * @returns {Object} Returns a new THREE.CircleGeometry circle geometry object.
 */

TS.circle_geometry = TS.cirgeo = function(radius, segments, thetaStart, thetaLength) {
   return new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);
};

// r:  radius
// s:  segments
// ts: thetaStart
// tl: thetaLength

TS.circle_buffer_geometry = TS.cirbufgeo = function(r, s, ts, tl) {
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
TS.cylinder_geometry = TS.cylgeo = function(
        radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, tethaLength) {
   return new THREE.CylinderGeometry(radiusTop, radiusBottom, height,radialSegments, heightSegments, openEnded, thetaStart, tethaLength);
};

/**
 * Returns the THREE.DodecahedronGeometry object.
 * @param {Number} radius - radius
 * @param {Number} detail - detail
 */
TS.dodecahedron_geometry = TS.dodgeo = function(radius, detail) {
   return new THREE.DodecahedronGeometry(radius, detail);
};

TS.edges_geometry = TS.edggeo = function(geometry, thresholdAngle) {
   return new THREE.EdgesGeometry(geometry, thresholdAngle);
};

TS.extrude_geometry = TS.extgeo = function(shapes, options) {
   return new THREE.ExtrudeGeometry(shapes, options);
};

TS.icosahedron_geometry = TS.icogeo = function(radius, detail) {
   return new THREE.IcosahedronGeometry(radius, detail);
};

TS.lathe_geometry = TS.latgeo = function(points, segments, phiStart, phiLength) {
   return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
};

TS.octahedron_geometry = TS.octgeo = function(radius, detail) {
   return new THREE.OctahedronGeometry(radius, detail);
};

TS.parametric_geometry = TS.pargeo = function(func, slices, stacks) {
   return new THREE.ParametricGeometry(func, slices, stacks);
};

TS.plane_buffer_geometry = TS.plabufgeo = function(width, height, widthSegments, heightSegments) {
   return new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
};

TS.plane_geometry = TS.plageo = function(width, height, widthSegments, heightSegments) {
   return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
};

TS.polyhedron_geometry = TS.polgeo = function(vertices, indices, radius, detail) {
   return new THREE.PolyhedronGeometry(vertices, indices, radius, detail);
};

TS.ring_geometry = TS.ringeo = function(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
   return new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
};

TS.shape_geometry = TS.shageo = function(shapes, options) {
   return new THREE.ShapeGeometry(shapes, options);
};

TS.sphere_buffer_geometry = TS.sphbufgeo = function(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};

TS.sphere_geometry = TS.sphgeo = function(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};

TS.tetrahedron_geometry = TS.tetgeo = function(radius, detail) {
   return new THREE.TetrahedronGeometry(radius, detail);
};

TS.text_geometry = TS.txtgeo = function(text, parameters) {
   return new THREE.TextGeometry(text, parameters);
};

TS.torus_geometry = TS.torgeo = function(radius, tube, radialSegments, tubularSegments, arc) {
   return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
};

TS.torus_knot_geometry = TS.knogeo = function(radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
   return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
};

TS.tube_geometry = TS.tubgeo = function(path, segments, radius, radialSegments, closed, taper) {
   return new THREE.TubeGeometry(path, segments, radius, radialSegments, closed, taper);
};

TS.wireframe_geometry = TS.wirgeo = function(geometry) {
   return new THREE.WireframeGeometry(geometry);
};
