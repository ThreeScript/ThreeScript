/**
 * @author Betobyte / www.rpt.com.br/site/threejslive
 */

/* ========================================================================== */
/* S3D.S3dRichChain                                                              */
/* ========================================================================== */

S3D.S3dRichChain = function(richChainParam) {
   S3D.S3dObject3D.call(this, richChainParam);
   if ((richChainParam) && (richChainParam.textArray))
      this.addTextPosRotArray(richChainParam.textArray);
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichChain.prototype = new S3D.S3dObject3D();
S3D.S3dRichChain.prototype.constructor = S3D.S3dRichChain;

/* -------------------------------------------------------------------------- */

S3D.S3dRichChain.prototype.addTextPosRotArray = function(textArray) {
   if (S3dGlobal.engine === engineTHREEJS) {
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
   if (textArray instanceof Array) {
      var len = textArray.length;
      for (var i = 0; i < len; i++) {
         var textParamArray = textArray[i];
         if ((textParamArray) && ((textParamArray.length === 8) || (textParamArray.length === 10))) {
            var str = textParamArray[0];
            var px = textParamArray[1];
            var py = textParamArray[2];
            var pz = textParamArray[3];
            var rx = textParamArray[4];
            var ry = textParamArray[5];
            var rz = textParamArray[6];
            var textParam = null;
            var material = null;
            var geometryStyleArray = null;
            if (textParamArray.lenght === 8) {
               var richParam = textParamArray[7];
               textParam = richParam.textParam;
               material = richParam.material;
               geometryStyleArray = richParam.geometryStyleArray;
            } else {
               textParam = textParamArray[7];
               material = textParamArray[8];
               geometryStyleArray = textParamArray[9];
            }
            this.addTextPosRot(str, px, py, pz, rx, ry, rz, textParam, material, geometryStyleArray);
         }
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichChain.prototype.addTextPosRot = function(str, px, py, pz, rx, ry, rz, textParam, material, geometryStyleArray) {
   var richText = null;
   if (S3dGlobal.engine === engineTHREEJS) {
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
   var richTextParam = {
      owner: this,
      scene: this.obj3d,
      pos: {x: px, y: py, z: pz},
      rot: {x: rx, y: ry, z: rz},
      textParam: textParam,
      material: material,
      geometryStyleArray: geometryStyleArray
   };
   richText = new S3D.S3dRichText(richTextParam);
   richText.setStr(str);
   return richText;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichChain.prototype.addMemoPosRot = function(text, px, py, pz, rx, ry, rz, textParam) {
   if (S3dGlobal.engine === engineTHREEJS) {
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
   var s = new S3D.S3dRichMemo();
   return s;
};

/* ========================================================================== */
