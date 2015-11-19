TS.boxmes = TS.box_mesh = function(material, w, h, d, ws, hs, ds) {
   return TS.mesh(TS.boxgeo(w, h, d, ws, hs, ds), material);
};

TS.sphmes = TS.sphere_mesh = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return TS.mesh(TS.sphgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material);
};
/**
 * 
 * @param {Object} material
 * @param {Number} width
 * @param {Number} height
 * @param {Number} widthSegments
 * @param {Number} heightSegments
 * @returns {Object}
 */
TS.plames = TS.plane_mesh = function(material, width, height, widthSegments, heightSegments) {
   return TS.mesh(TS.plageo(width, height, widthSegments, heightSegments), material);
};
