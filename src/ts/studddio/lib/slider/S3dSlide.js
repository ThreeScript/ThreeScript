/*============================================================================*/

S3D.S3dSlide = function(obj3dParams) {
   S3D.S3dObject3D.call(this, obj3dParams);
   if (obj3dParams) {
      this.createPlane();
      this.createHeader();
      this.createBody();
      this.createFooter();
   }
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype = new S3D.S3dObject3D;
S3D.S3dSlide.prototype.constructor = S3D.S3dSlide;

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createPlane = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createHeader = function() {
   this.createHeaderPlane();
   this.createHeaderLogo();
   this.createHeaderTitle();
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createHeaderPlane = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createHeaderLogo = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createHeaderTitle = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createBody = function() {
   this.createBodyPlane();
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createBodyPlane = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createFooter = function() {
   this.createFooterPlane();
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.createFooterPlane = function() {
};

/*----------------------------------------------------------------------------*/

S3D.S3dSlide.prototype.addText = function(text, textParam) {

};

/*============================================================================*/
