
TS.arc_curve = TS.arccur = function(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
   return new THREE.ArcCurve(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise);
};

TS.catmull_rom_curve_3 = TS.catromcur3 = function() {
   return THREE.CatmullRomCurve3;
};

TS.closed_spline_curve = TS.closplcur = function() {
   return THREE.ClosedSplineCurve;
};

TS.cubic_bezier_curve = TS.cubbezcur = function(v0, v1, v2, v3) {
   return new THREE.CubicBezierCurve(v0, v1, v2, v3);
};

TS.cubic_bezier_curve_3 = TS.cubbezcur3 = function() {
   return THREE.CubicBezierCurve3;
};

TS.EllipseCurve = TS.ellcur = function(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
   return new THREE.EllipseCurve(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
};

TS.LineCurve = TS.lincur = function(v1, v2) {
   return new THREE.LineCurve(v1, v2);
};

TS.line_curve_3 = TS.lincur3 = function() {
   return THREE.LineCurve3;
};

TS.quadratic_bezier_curve = TS.quabezcur = function(v0, v1, v2) {
   return new THREE.QuadraticBezierCurve(v0, v1, v2);
};

TS.quadratic_bezier_curve_3 = TS.quabezcur3 = function() {
   return THREE.QuadraticBezierCurve3;
};

TS.spline_curve = TS.splcur = function(points) {
   return new THREE.SplineCurve(points);
};

TS.spline_curve_3 = TS.splcur3 = function() {
   return THREE.SplineCurve3;
};
