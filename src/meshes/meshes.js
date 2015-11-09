function mesbox(material, w, h, d, ws, hs, ds) {
   return mesh(boxgeo(w, h, d, ws, hs, ds), material);
}

function messph(material) {
   return mesh(sphgeo(), material);
}
