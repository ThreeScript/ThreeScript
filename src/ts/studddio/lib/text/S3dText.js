
/* ========================================================================== */
/* S3D.S3dText                                                              */
/* ========================================================================== */

S3D.S3dText = function(
        textChain, text, height, size, hover, pos, mirror) {

   S3D.S3dObject3D.call(this);

   this.textChain = textChain;
   this.text = text;
   this.height = height;
   this.size = size;
   this.hover = hover;
   this.pos = pos;
   this.mirror = mirror;

   this.normalTextMesh = null;
   this.mirrorTextMesh = null;
   this.textGeo = null;

   this.position.x = pos.x;
   this.position.y = pos.y;
   this.position.z = pos.z;

   this.textChain.add(this);

   this.CreateText();
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype = new S3D.S3dObject3D();
S3D.S3dText.prototype.constructor = S3D.S3dText;

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.Text = function(text) {
   this.text = text;
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.Params = function() {
   return;
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.CreateText = function() {

   var p = this.textChain.params;

   var textParams = {
      size: this.size,
      height: this.height,
      curveSegments: p.curveSegments,
      font: p.font,
      weight: p.weight,
      style: p.style,
      bevelThickness: p.bevelThickness,
      bevelSize: p.bevelSize,
      bevelEnabled: p.bevelEnabled,
      material: 0,
      extrudeMaterial: 1
   };

   this.textGeo = new S3D.TextGeometry(this.text, textParams);

   this.textGeo.computeBoundingBox();
   this.textGeo.computeVertexNormals();

   // "fix" side normals by removing z-component of normals for side faces
   // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

   if (!this.bevelEnabled) {
      this.DrawBevel();
   }

   // var centerOffset = -0.5 * (this.textGeo.boundingBox.max.x - this.textGeo.boundingBox.min.x);

   this.normalTextMesh = this.addMesh(
           this.getTextMesh(0, this.hover, 0, 0, Math.PI * 2));

   if (this.mirror) {
      this.mirrorTextMesh = this.addMesh(
              this.getTextMesh(0, -this.hover, this.height, Math.PI, Math.PI * 2));
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.getTextMesh = function(px, py, pz, rx, ry) {
   var textMesh = null;
   if (S3dGlobal.engine === engineTHREEJS) {
      textMesh = new THREE.Mesh(this.textGeo, this.textChain.params.material);

      textMesh.position.x = px;
      textMesh.position.y = py;
      textMesh.position.z = pz;

      textMesh.rotation.x = rx;
      textMesh.rotation.y = ry;
   } else if (S3dGlobal.engine === engineBABYLON) {
   }

   return textMesh;
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.addMesh = function(textMesh) {
   if (S3dGlobal.engine === engineTHREEJS) {
      this.obj3d.add(textMesh);
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
   return textMesh;
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.DrawBevel = function() {
   if (S3dGlobal.engine === engineTHREEJS) {
      var triangleAreaHeuristics = 0.1 * (this.height * this.size);
      for (var i = 0; i < this.textGeo.faces.length; i++) {
         var face = this.textGeo.faces[ i ];
         if (face.materialIndex === 1) {
            for (var j = 0; j < face.vertexNormals.length; j++) {
               face.vertexNormals[ j ].z = 0;
               face.vertexNormals[ j ].normalize();
            }
            var va = this.textGeo.vertices[ face.a ];
            var vb = this.textGeo.vertices[ face.b ];
            var vc = this.textGeo.vertices[ face.c ];

            var s = S3D.GeometryUtils.triangleArea(va, vb, vc);

            if (s > triangleAreaHeuristics) {
               for (var j = 0; j < face.vertexNormals.length; j++) {
                  face.vertexNormals[ j ].copy(face.normal);
               }
            }
         }
      }
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dText.prototype.refreshText = function() {
   if (S3dGlobal.engine === engineTHREEJS) {
      this.obj3d.remove(this.normalTextMesh);

      if (this.mirror)
         this.obj3d.remove(this.mirrorTextMesh);

      if (!this.text)
         return;
   } else if (S3dGlobal.engine === engineBABYLON) {
   }

   this.CreateText();
};

/* ========================================================================== */
