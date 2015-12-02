/*
 * @author betobyte / http://rpt.com.br/
 */

/* ========================================================================== */
/* tjlGeometryStyleArray                                                     */
/* ========================================================================== */

S3D.S3dGeometryStyle = function(key, textParam, geometry) {
   this.key = key;
   this.textParam = textParam;
   this.geometry = geometry;
   if (this.geometry) {
      this.geometry.computeVertexNormals();
      this.geometry.computeBoundingBox();
      this.max = this.geometry.boundingBox.max;
      this.min = this.geometry.boundingBox.min;
   }
};

/* ========================================================================== */

S3D.S3dGeometryStyleArray = function() {
   this.geometryStyleArray = [];
};

/* --------------------------------------------------------------------------- */

S3D.S3dGeometryStyleArray.prototype.addGeometryStyle = function(key, textParam) {
   var index = this.geometryStyleIndex(key, textParam);
   if (index >= 0)
      return this.geometryStyleArray[index];
   var gc = this.newGeometryStyle(key, textParam);
   this.geometryStyleArray.push(gc);
   return gc;
};

/* --------------------------------------------------------------------------- */

S3D.S3dGeometryStyleArray.prototype.newGeometryStyle = function(key, textParam) {
   return null;
};

/* --------------------------------------------------------------------------- */

S3D.S3dGeometryStyleArray.prototype.geometryStyleIndex = function(key, textParam) {
   var index = -1;
   for (var i = 0; (i < this.geometryStyleArray.length) && (index === -1); i++) {
      var tjlCharGeometry = this.geometryStyleArray[i];
      if ((tjlCharGeometry.key === key) && (tjlCharGeometry.textParam === textParam)) {
         index = i;
      }
   }
   return index;
};

/* --------------------------------------------------------------------------- */

S3D.S3dGeometryStyleArray.prototype.get = function(key, textParam) {
   var cg = null;
   var i = this.geometryStyleIndex(key, textParam);
   if (i === -1) {
      cg = this.addGeometryStyle(key, textParam);
   } else {
      cg = this.geometryStyleArray[i];
   }
   return cg;
};

/* ========================================================================== */
