/**
 * @author betobyte / http://rpt.com.br/
 */

/* ========================================================================== */
/* tjlGeometryStyleArrayChar                                                     */
/* ========================================================================== */

S3D.S3dGeometryStyleChar = function(keyCode, params) {
   this.char = String.fromCharCode(keyCode);
   if (S3dGlobal.engine === engineTHREEJS) {
      S3D.S3dGeometryStyle.call(this, keyCode, params, new THREE.TextGeometry(this.char, params));
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* --------------------------------------------------------------------------- */

S3D.S3dGeometryStyleChar.prototype = new S3D.S3dGeometryStyle();
S3D.S3dGeometryStyleChar.prototype.constructor = S3D.S3dGeometryStyleChar;

/* ========================================================================== */
/* tjlGeometryStyleArrayChar                                                     */
/* ========================================================================== */

S3D.S3dGeometryStyleArrayChar = function() {
   S3D.S3dGeometryStyleArray.call(this);
};

/* --------------------------------------------------------------------------- */

S3D.S3dGeometryStyleArrayChar.prototype = new S3D.S3dGeometryStyleArray();
S3D.S3dGeometryStyleChar.prototype.constructor = S3D.S3dGeometryStyleArrayChar;

/* ========================================================================== */

S3D.S3dGeometryStyleArrayChar.prototype.newGeometryStyle = function(keyCode, params) {
   return new S3D.S3dGeometryStyleChar(keyCode, params);
};

/* ========================================================================== */
