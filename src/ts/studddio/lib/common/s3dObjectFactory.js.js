S3D.S3dObjectFactory = function(factoryParam) {
   this.owner = factoryParam.owner;
};

S3D.S3dObjectFactory.prototype.circle = function() {
   return new S3D.S3dCircle(obj3dParam);
};

S3D.S3dObjectFactory.prototype.sphere = function(obj3dParam) {
   return new S3D.S3dSphere(obj3dParam);
};

S3D.S3dObjectFactory.prototype.box = function(obj3dParam) {
   return new S3D.S3dBox(obj3dParam);
};

S3D.S3dObjectFactory.prototype.plane = function(obj3dParam) {
   return new S3D.S3dPlane(obj3dParam);
};
