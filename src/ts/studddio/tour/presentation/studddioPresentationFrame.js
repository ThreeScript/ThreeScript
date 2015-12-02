/*============================================================================*/

S3D.S3dStudddioSlide = function(presentationFrameParam) {
   S3D.S3dSlide.call(this, presentationFrameParam);
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlide.prototype = new S3D.S3dSlide;
S3D.S3dStudddioSlide.prototype.constructor = S3D.S3dStudddioSlide;

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlide.prototype.createHeaderLogo = function() {
/*
   var logoSphereParam = {
      radius: 80,
      widthSegments: 20,
      heightSegments: 20,
      phiStart: 0,
      phiLength: Math.pi,
      thetaStart: 0,
      thetaLength: Math.pi,
      opacity: 0.3,
      transparent: true
   };

   this.logoSphereGeometry = new THREE.SphereGeometry(
           logoSphereParam.radius,
           logoSphereParam.widthSegments,
           logoSphereParam.heightSegments,
           logoSphereParam.phiStart,
           logoSphereParam.phiLength,
           logoSphereParam.thetaStart,
           logoSphereParam.thetaLength);

   this.logoSphere = new THREE.Mesh(this.logoSphereGeometry, this.materialList.red);

   this.logoSphere.position.y = 500;
   this.logoSphere.position.x = -500;

   this.obj3d.add(this.logoSphere);
*/
};

/*----------------------------------------------------------------------------*/

S3D.S3dStudddioSlide.prototype.addText = function(text, textParam) {

};

/*============================================================================*/
