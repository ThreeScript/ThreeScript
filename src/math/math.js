var box2 = function(min, max) {
   return new THREE.Box2(min, max);
};

var box3 = function(min, max) {
   return new THREE.Box3(min, max);
};

function color() {
   return new THREE.Color(color);
}

function euler(x, y, z, order) {
   return new THREE.Euler(x, y, z, order);
}

function frustrum(p0, p1, p2, p3, p4, p5) {
   return new THREE.Frustum(p0, p1, p2, p3, p4, p5);
}

function line3(start, end) {
   return new THREE.Line3(start, end);
}

function math() {
   return new THREE.Math();
}

function matrix3() {
   return new THREE.Matrix3();
}

function matrix4() {
   return new THREE.Matrix4();
}

function plane(normal, constant) {
   return THREE.Plane(normal, constant);
}

function quaternion() {
   return new THREE.Quaternion(x, y, z, w);
}

function ray(origin, direction) {
   return new THREE.Ray(origin, direction);
}

function sphere(center, radius) {
   return new THREE.Sphere(center, radius);
}

function spline() {
   return new THREE.Spline(points);
}

function triangle(a, b, c) {
   return new THREE.Triangle(a, b, c);
}

function vec2(x, y) {
   return new THREE.Vector2(x, y);
}

function vec3() {
   return new THREE.Vector3(x, y, z);
}

function vec4() {
   return new THREE.Vector4(x, y, z, w);
}
