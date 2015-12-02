/**
 * @author Betobyte / www.rpt.com.br/site/threejslive
 */

/* ========================================================================== */
/* S3D.S3dRichMemo                                                            */
/* ========================================================================== */

S3D.S3dRichMemo = function(obj3dParams) {

   this.richTextLL = new S3D.LinkedList();
   this.richTextIndex = -1;
   this.cursorIndex = 0;
   this.richTextNode = null;
   this.richText = null;

   S3D.S3dObject3D.call(this, obj3dParams);

   if (obj3dParams) {
      this.createCursorBox();
      if (obj3dParams.addLine) {
         this.richTextNode = this.addRichText(0, true, null);
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype = new S3D.S3dObject3D();
S3D.S3dRichMemo.prototype.constructor = S3D.S3dRichMemo;

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.createCursorBox = function() {
   if (S3dGlobal.engine === engineTHREEJS) {
      this.cursorMesh = ts.pos(ts.cubmes(ts.basmat({
         color: 0xffffff, opacity: 0.5, transparent: true
      }), 10, 70, 20, 1, 1, 1), null, 35, 10);
      ts.add(this,this.cursorMesh);
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.clearStr = function() {
   while (this.richTextLL.linkedNodeCount > 0) {
      var rtn = this.richTextLL.getLinkedNode(0);
      var rt = rtn.object;
      if (rt) {
         rt.clearStr();
         this.remove(rt);
      }
      this.richTextLL.delete(0);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.setStr = function(str) {
   this.clearStr();
   if (str instanceof Array) {
      var l = str.length;
      this.richTextIndex = -1;
      for (var i = 0; i < l; i++) {
         var nextStr = str[i];
         this.richTextIndex++;
         var newRichTextNode = this.addRichText(this.richTextIndex, false, null);
         var newRichText = newRichTextNode.object;
         newRichText.setStr(nextStr);
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.addRichText = function(index, focus, richTextParam) {
   if (!richTextParam) {
      richTextParam = {
         textParam: null,
         material: null,
         geometryStyleArray: null,
         cursorParam: null};
   }
   richTextParam.owner = this;
   richTextParam.scene = this;
   var newRichText = new S3D.S3dRichText(richTextParam);
   var newRichTextNode = this.richTextLL.insert(index, newRichText);
   if (this.richTextNode !== null) {
      var oldRichText = this.richTextNode.object;
      if (this.cursorIndex === oldRichText.richCharLL.linkedNodeCount) {
         newRichText.richCharLL.first = null;
         newRichText.richCharLL.last = null;
      } else {
         var dif = 0;
         for (var i = this.cursorIndex; i < oldRichText.richCharLL.linkedNodeCount; i++) {
            var richCharNode = oldRichText.richCharLL.getLinkedNode(i);
            var richChar = richCharNode.object;
            richChar.richText = newRichText;
            oldRichText.remove(richChar);
            newRichText.add(richChar);
            dif++;
         }
         if (this.cursorIndex === 0) {
            newRichText.richCharLL.first = oldRichText.richCharLL.first;
            newRichText.richCharLL.last = oldRichText.richCharLL.last;
            oldRichText.richCharLL.first = null;
            oldRichText.richCharLL.last = null;
         } else
         if (this.cursorIndex < oldRichText.richCharLL.linkedNodeCount) {
            var charNode = oldRichText.richCharLL.getLinkedNode(this.cursorIndex);
            newRichText.richCharLL.first = charNode;
            oldRichText.richCharLL.last = charNode.previous;
            newRichText.richCharLL.first.previous = null;
            oldRichText.richCharLL.last.next = null;
         }
         oldRichText.richCharLL.linkedNodeCount -= dif;
         newRichText.richCharLL.linkedNodeCount += dif;
      }
   }
   if ((newRichTextNode) && (focus))
      this.setIndex(index);
   this.cursorIndex = 0;
   return newRichTextNode;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.setIndex = function(index) {
   this.richTextIndex = index;
   this.richTextNode = this.richTextLL.getLinkedNode(this.richTextIndex);
   this.richText = this.richTextNode.object;
   if (this.cursorIndex > this.richTextNode.object.richCharLL.linkedNodeCount)
      this.cursorIndex = this.richTextNode.object.richCharLL.linkedNodeCount;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.getRichText = function() {
   return this.richTextNode.object;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.moveUp = function() {
   if (this.richTextIndex > 0) {
      this.setIndex(this.richTextIndex - 1);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.moveDown = function() {
   if (this.richTextIndex < (this.richTextLL.linkedNodeCount - 1)) {
      this.setIndex(this.richTextIndex + 1);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.editChar = function(richCharParam) {
   var richText = this.richTextNode.object;
   if (richText) {
      richText.editChar(this.cursorIndex, richCharParam);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.recalcCharsPos = function() {
   var nextY = 0;
   var richTextNode = this.richTextLL.first;
   for (var i = 0; i < this.richTextLL.linkedNodeCount; i++) {
      richTextNode.object.position.y = nextY;
      richTextNode = richTextNode.next;
      nextY -= 70;
   }
   if (this.richTextNode) {
      var richText = this.richTextNode.object;
      if (richText)
         richText.recalcCharsPos();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.calcCursorPos = function() {
   if (!this.richTextNode)
      return 0;
   var cursorX = this.richTextNode.object.calcCursorPos(this.cursorIndex, this.cursorMesh);
   this.cursorMesh.position.x = cursorX;
   this.cursorMesh.position.y = -(this.richTextIndex * 70) + 35;
   return cursorX;
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.moveLeft = function() {
   if (this.cursorIndex > 0) {
      this.cursorIndex--;
   } else {
      if (this.richTextIndex > 0) {
         this.setIndex(this.richTextIndex - 1);
         this.cursorIndex = this.richTextNode.object.richCharLL.linkedNodeCount;
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.moveRight = function() {
   if (this.cursorIndex < this.richTextNode.object.richCharLL.linkedNodeCount) {
      this.cursorIndex++;
   } else {
      if (this.richTextIndex < (this.richTextLL.linkedNodeCount - 1)) {
         this.setIndex(this.richTextIndex + 1);
         this.cursorIndex = 0;
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.moveCursorPos = function(num) {
   this.cursorIndex += num;
   if (this.cursorIndex < 0) {
      this.cursorIndex = 0;
   } else {
      var richText = this.richTextNode.object;
      if (this.cursorIndex > richText.richCharLL.linkedNodeCount) {
         this.cursorIndex = richText.richCharLL.linkedNodeCount;
      }
   }
   this.calcCursorPos();
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.del = function() {
   if (this.cursorIndex < this.richText.richCharLL.linkedNodeCount) {
      var richCharNode = this.richText.richCharLL.getLinkedNode(this.cursorIndex);
      var richChar = richCharNode.object;
      this.richText.remove(richChar);
      this.richText.richCharLL.delete(this.cursorIndex);
   } else
      this.verifyDelFromTail();
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.verifyDelFromTail = function() {
   var richCharCount = this.richText.richCharLL.linkedNodeCount;
   if (this.cursorIndex !== richCharCount)
      return;
   var nextRichTextNode = null;
   var nextRichText = null;
   var firstCharFromNextRichTextNode = null;
   var firstCharFromNextRichText = null;
   var lastCharFromRichTextNode = null;
   var lastCharFromRichText = null;
   var nextRichTextIndex = this.richTextIndex + 1;
   if (nextRichTextIndex < this.richTextLL.linkedNodeCount) {
      nextRichTextNode = this.richTextLL.getLinkedNode(nextRichTextIndex);
      nextRichText = nextRichTextNode.object;
      var rcll = this.richText.richCharLL;
      var nrcll = nextRichText.richCharLL;
      lastCharFromRichTextNode = rcll.getLinkedNode(rcll.linkedNodeCount - 1);
      if (lastCharFromRichTextNode)
         lastCharFromRichText = lastCharFromRichTextNode.object;
      firstCharFromNextRichTextNode = nrcll.getLinkedNode(0);
      if (firstCharFromNextRichTextNode)
         firstCharFromNextRichText = firstCharFromNextRichTextNode.object;
      if (nextRichText) {
         if (lastCharFromRichTextNode)
            lastCharFromRichTextNode.next = firstCharFromNextRichTextNode;
         if (firstCharFromNextRichTextNode)
            firstCharFromNextRichTextNode.previous = lastCharFromRichTextNode;
         if (nrcll.linkedNodeCount > 0) {
            var richCharAux = null;
            var richCharNodeAux = firstCharFromNextRichTextNode;
            while (richCharNodeAux) {
               richCharAux = richCharNodeAux.object;
               richCharAux.owner = this.richText;
               richCharAux.scene = this.richText;
               nextRichText.remove(richCharAux);
               this.richText.add(richCharAux);
               richCharNodeAux = richCharNodeAux.next;
            }
            /* */
            rcll.last = nrcll.getLinkedNode(nrcll.linkedNodeCount - 1);
            rcll.linkedNodeCount += nrcll.linkedNodeCount;
            nrcll.linkedNodeCount = 0;
         }
         this.richTextLL.delete(nextRichTextIndex);
         /*
          var oldRichText = richText.richCharLL.getLinkedNode(this.cursorIndex);
          richText.richCharLL.delete(this.cursorIndex);
          */
      }
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dRichMemo.prototype.backspace = function() {
   if (this.cursorIndex > 0) {
      this.cursorIndex--;
      this.del();
   } else {
      if (this.richTextIndex > 0) {
         this.setIndex(this.richTextIndex - 1);
         this.cursorIndex = this.richText.richCharLL.linkedNodeCount;
         this.del();
      }
   }
};

/* ========================================================================== */
