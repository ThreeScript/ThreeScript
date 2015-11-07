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

var bg = boxgeo = box_geometry = function(w, h, d, ws, hs, ds) {
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

var cg = cirgeo = circle = circle_geometry = function(r, s, ts, tl) {
   return new THREE.CircleGeometry(r, s, ts, tl);
};

// r:  radius
// s:  segments
// ts: thetaStart
// tl: thetaLength

var cbg = cirbufgeo = circlebufgeo = circle_buffer_geometry = function(r, s, ts, tl) {
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
function cylgeo(rt, rb, h, rs, hs, oe, ts, tl) {
   return new THREE.CylinderGeometry(rt, rb, h, rs, hs, oe, ts, tl);
}

function dodgeo(radius, detail) {
   return new THREE.DodecahedronGeometry(radius, detail);
}

function edggeo(geometry, thresholdAngle) {
   return new THREE.EdgesGeometry(geometry, thresholdAngle);
}

function extgeo(shapes, options) {
   return new THREE.ExtrudeGeometry(shapes, options);
}

function icogeo(radius, detail) {
   return new THREE.IcosahedronGeometry(radius, detail);
}

function latgeo(points, segments, phiStart, phiLength) {
   return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
}

function octgeo(radius, detail) {
   return new THREE.OctahedronGeometry(radius, detail);
}

function pargeo(func, slices, stacks) {
   return new THREE.ParametricGeometry(func, slices, stacks);
}

function plabufgeo(width, height, widthSegments, heightSegments) {
   return new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
}

function plageo(width, height, widthSegments, heightSegments) {
   return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
}

function polgeo(vertices, indices, radius, detail) {
   return new THREE.PolyhedronGeometry(vertices, indices, radius, detail);
}

function ringeo(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
   return new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
}

function shageo(shapes, options) {
   return new THREE.ShapeGeometry(shapes, options);
}

function sphbufgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
}

function sphgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
}

function tetgeo(radius, detail) {
   return new THREE.TetrahedronGeometry(radius, detail);
}

function txtgeo(text, parameters) {
   return new THREE.TextGeometry(text, parameters);
}

function torgeo(radius, tube, radialSegments, tubularSegments, arc) {
   return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
}

function knogeo(radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
   return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
}

function tubgeo(path, segments, radius, radialSegments, closed, taper) {
   return new THREE.TubeGeometry(path, segments, radius, radialSegments, closed, taper);
}

function wirgeo(geometry) {
   return new THREE.WireframeGeometry(geometry);
}
