/**
 * @author Betobyte / www.rpt.com.br/site/threejslive
 */

/* ========================================================================== */
/* S3D.S3dRichText                                                            */
/* ========================================================================== */

S3D.S3dRichText = function(richTextParam) {
   this.richCharLL = new S3D.LinkedList();
   S3D.S3dObject3D.call(this, richTextParam);
   if (richTextParam) {
      if (richTextParam.str)
         this.setStr(richTextParam.str);
      if (richTextParam.center)
         this.center();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype = new S3D.S3dObject3D();
S3D.S3dRichText.prototype.constructor = S3D.S3dRichText;

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype.clearStr = function() {
   while (this.richCharLL.linkedNodeCount > 0) {
      var rcn = this.richCharLL.getLinkedNode(0);
      var rc = rcn.object;
      if (rc)
         this.obj3.remove(rc);
      this.richCharLL.delete(0);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype.setStr = function(str, richCharParam) {
   if (!richCharParam)
      richCharParam = {};
   richCharParam.owner = this;
   richCharParam.scene = this.obj3d;
   this.clearStr();
   this.richCharLL.first = null;
   this.richCharLL.last = null;
   for (var i = 0; i < str.length; i++) {
      richCharParam.keyCode = str.charCodeAt(i);
      var rc = new S3D.S3dRichChar(richCharParam);
      this.richCharLL.insert(i, rc);
   }
   this.recalcCharsPos();
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype.editChar = function(cursorIndex, richCharParam) {
   richCharParam.owner = this;
   richCharParam.scene = this.obj3d;
   var richChar = new S3D.S3dRichChar(richCharParam);
   if (cursorIndex <= this.richCharLL.linkedNodeCount) {
      if (richCharParam.flagIns) {
         this.richCharLL.insert(cursorIndex, richChar);
      } else {
         this.richCharLL.replace(cursorIndex, richChar);
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype.forEachChar = function(maxIndex, charFunction) {
   var nextX = 0;
   if (this.richCharLL.first) {
      var richCharNode = this.richCharLL.first;
      for (var i = 0; i < maxIndex; i++) {
         // var richCharNode = this.get(i);
         var richChar = richCharNode.object;
         if (charFunction) {
            charFunction(richChar, nextX);
         }
         var cg = richChar.geometryStyle;
         if (cg.char === " ") {
            nextX += (this.spaceWidth + this.sep);
         } else {
            nextX += Math.abs(cg.max.x - cg.min.x) + this.sep;
         }
         richCharNode = richCharNode.next;
      }
   }
   return nextX;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype.recalcCharsPos = function() {
   var f = function(richChar, nextX) {
      richChar.obj3d.position.x = nextX;
   };
   return this.forEachChar(this.richCharLL.linkedNodeCount, f);
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichText.prototype.calcCursorPos = function(cursorIndex) {
   if (cursorIndex < 0) {
      cursorIndex = 0;
   } else if (cursorIndex > this.richCharLL.linkedNodeCount) {
      cursorIndex = this.richCharLL.linkedNodeCount;
   }
   return this.forEachChar(cursorIndex, null);
};

/* ========================================================================== */
