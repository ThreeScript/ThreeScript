S3D.S3dTextParam = function(
        font, weight, style, curveSegments,
        bevelThickness, bevelSize, bevelSegments, bevelEnabled, material) {
   this.curveSegments = curveSegments;
   this.bevelThickness = bevelThickness;
   this.bevelSize = bevelSize;
   this.bevelSegments = bevelSegments;
   this.bevelEnabled = bevelEnabled;
   this.font = font; // helvetiker, optimer, gentilis, droid sans, droid serif
   this.weight = weight; // normal bold
   this.style = style; // normal italic;
   this.material = material;
};
