The function linemat or line_basic_material returns a new line basic material object.

```js
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

var boxgeo = box_geometry = function(w, h, d, ws, hs, ds) {
   return new THREE.BoxGeometry(w, h, d, ws, hs, ds);
};
```

```js
/**
 * 
 * @param {Number} r - radius
 * @param {type} s - segments
 * @param {type} ts - theta start
 * @param {type} tl - theta length
 * @returns {Object} Returns a new THREE.CircleGeometry circle geometry object.
 */

var cirgeo = circle_geometry = function(r, s, ts, tl) {
   return new THREE.CircleGeometry(r, s, ts, tl);
};
```

```js
// r:  radius
// s:  segments
// ts: thetaStart
// tl: thetaLength

var cirbufgeo = circle_buffer_geometry = function(r, s, ts, tl) {
   return new THREE.CircleBufferGeometry(r, s, ts, tl);
};
```

```js
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
var cylgeo = cylinder_geometry = function (rt, rb, h, rs, hs, oe, ts, tl) {
   return new THREE.CylinderGeometry(rt, rb, h, rs, hs, oe, ts, tl);
};
```

```js
/**
 * Returns the THREE.DodecahedronGeometry object.
 * @param {Number} radius - radius
 * @param {Number} detail - detail
 */
var dodgeo = dodecahedron_geometry = function (radius, detail) {
   return new THREE.DodecahedronGeometry(radius, detail);
};
```

```js
var edggeo = edges_geometry =function (geometry, thresholdAngle) {
   return new THREE.EdgesGeometry(geometry, thresholdAngle);
};
```

```js
var extgeo = extrude_geometry = function (shapes, options) {
   return new THREE.ExtrudeGeometry(shapes, options);
};
```

```js
var icogeo = icosahedron_geometry =function (radius, detail) {
   return new THREE.IcosahedronGeometry(radius, detail);
};
```

```js
var latgeo = lathe_geometry = function (points, segments, phiStart, phiLength) {
   return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
};
```

```js
var octgeo = octahedron_geometry = function (radius, detail) {
   return new THREE.OctahedronGeometry(radius, detail);
};
```

```js
var pargeo = parametric_geometry = function (func, slices, stacks) {
   return new THREE.ParametricGeometry(func, slices, stacks);
};
```

```js
var plabufgeo = plane_buffer_geometry = function (width, height, widthSegments, heightSegments) {
   return new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
};
```

```
var plageo = plane_geometry = function (width, height, widthSegments, heightSegments) {
   return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
};
```

```js
var polgeo = polyhedron_geometry = function (vertices, indices, radius, detail) {
   return new THREE.PolyhedronGeometry(vertices, indices, radius, detail);
};
```

```js
var ringeo = ring_geometry = function (innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
   return new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
};
```

```js
var shageo = shape_geometry = function (shapes, options) {
   return new THREE.ShapeGeometry(shapes, options);
};
```

```js
var sphbufgeo = sphere_buffer_geometry = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};
```

```js
var sphgeo = sphere_geometry = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};
```

```js
var tetgeo = tetrahedron_geometry = function (radius, detail) {
   return new THREE.TetrahedronGeometry(radius, detail);
};
```

```js
var txtgeo = text_geometry = function (text, parameters) {
   return new THREE.TextGeometry(text, parameters);
};
```

```js
var torgeo = torus_geometry = function (radius, tube, radialSegments, tubularSegments, arc) {
   return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
};
```

```js
var knogeo = torus_knot_geometry= function (radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
   return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
};
```

```js
var tubgeo = tube_geometry = function (path, segments, radius, radialSegments, closed, taper) {
   return new THREE.TubeGeometry(path, segments, radius, radialSegments, closed, taper);
};
```

```js
var wirgeo = wireframe_geometry = function (geometry) {
   return new THREE.WireframeGeometry(geometry);
};
```
