var box2 = function(min, max) {
   return new THREE.Box2(min, max);
};

var box3 = function(min, max) {
   return new THREE.Box3(min, max);
};

var color = function() {
   return new THREE.Color(color);
};

var euler = function(x, y, z, order) {
   return new THREE.Euler(x, y, z, order);
};

var frustrum = function(p0, p1, p2, p3, p4, p5) {
   return new THREE.Frustum(p0, p1, p2, p3, p4, p5);
};

var line3 = function(start, end) {
   return new THREE.Line3(start, end);
};

var math = function() {
   return new THREE.Math();
};

var matrix3 = function() {
   return new THREE.Matrix3();
};

var matrix4 = function() {
   return new THREE.Matrix4();
};

var plane = function(normal, constant) {
   return THREE.Plane(normal, constant);
};

var quaternion = function() {
   return new THREE.Quaternion(x, y, z, w);
};

var ray = function(origin, direction) {
   return new THREE.Ray(origin, direction);
};

var sphere = function(center, radius) {
   return new THREE.Sphere(center, radius);
};

var spline = function() {
   return new THREE.Spline(points);
};

var triangle = function(a, b, c) {
   return new THREE.Triangle(a, b, c);
};

var vec2 = function(x, y) {
   return new THREE.Vector2(x, y);
};

var vec3 = function(x, y, z) {
   return new THREE.Vector3(x, y, z);
};

var vec4 = function(x, y, z, w) {
   return new THREE.Vector4(x, y, z, w);
};
