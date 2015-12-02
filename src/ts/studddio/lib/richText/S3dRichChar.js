/**
 * @author Betobyte / www.rpt.com.br/site/threejslive
 */

/* ========================================================================== */
/* S3D.S3dRichChar                                                            */
/* ========================================================================== */

S3D.S3dRichChar = function(obj3dParams) {
   S3D.S3dRichCtrl.call(this, obj3dParams);
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichChar.prototype = new S3D.S3dRichCtrl();
S3D.S3dRichChar.prototype.constructor = S3D.S3dRichChar;

/* -------------------------------------------------------------------------- */

S3D.S3dRichChar.prototype.setObject3dParams = function() {
   S3D.S3dObject3D.prototype.setObject3dParams.call(this);
   this.keyCode = this.obj3dParams.keyCode;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichChar.prototype.prepareGeometry = function() {
   this.geometryStyle = this.geometryStyleArray.get(this.keyCode, this.textParam);
   this.geometry = this.geometryStyle.geometry;
};

/* ========================================================================== */
