function box(material, w, h, d, ws, hs, ds) {
   return mesh(boxgeo(w, h, d, ws, hs, ds), material);
}

function sphere(material) {
   return mesh(sphgeo(), material);
}
