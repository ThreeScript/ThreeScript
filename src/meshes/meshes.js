var mesbox = mesh_box = function(material, w, h, d, ws, hs, ds) {
   return mesh(boxgeo(w, h, d, ws, hs, ds), material);
};

var messph = mesh_sphere = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return mesh(sphgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material);
};

var mespla = mesh_plane = function(material, width, height, widthSegments, heightSegments) {
   return mesh(plageo(width, height, widthSegments, heightSegments), material);
};
