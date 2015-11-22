TS.box2 = function(min, max) {
   return new THREE.Box2(min, max);
};

TS.box3 = function(min, max) {
   return new THREE.Box3(min, max);
};

TS.color = function(color) {
   return new THREE.Color(color);
};

TS.euler = function(x, y, z, order) {
   return new THREE.Euler(x, y, z, order);
};

TS.frustrum = function(p0, p1, p2, p3, p4, p5) {
   return new THREE.Frustum(p0, p1, p2, p3, p4, p5);
};

TS.line3 = function(start, end) {
   return new THREE.Line3(start, end);
};

TS.math = function() {
   return new THREE.Math();
};

TS.matrix3 = function() {
   return new THREE.Matrix3();
};

TS.matrix4 = function() {
   return new THREE.Matrix4();
};

TS.plane = function(normal, constant) {
   return THREE.Plane(normal, constant);
};

TS.quaternion = function() {
   return new THREE.Quaternion(x, y, z, w);
};

TS.ray = function(origin, direction) {
   return new THREE.Ray(origin, direction);
};

TS.sphere = function(center, radius) {
   return new THREE.Sphere(center, radius);
};

TS.spline = function() {
   return new THREE.Spline(points);
};

TS.triangle = function(a, b, c) {
   return new THREE.Triangle(a, b, c);
};

TS.vec2 = function(x, y) {
   return new THREE.Vector2(x, y);
};

TS.vec3 = function(x, y, z) {
   return new THREE.Vector3(x, y, z);
};

TS.vec4 = function(x, y, z, w) {
   return new THREE.Vector4(x, y, z, w);
};

TS.sin = function(angle) {
    return Math.sin(angle) ;
};

TS.cos = function(angle) {
    return Math.cos(angle) ;
};
