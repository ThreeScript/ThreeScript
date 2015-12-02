
/* ========================================================================== */
/* S3D.S3dEditor                                                            */
/* ========================================================================== */

S3D.S3dEditor = function(editorParam) {
   // scene, addMemo, addLine, cursorParam, textParam, material, geometryStyleArray
   S3D.S3dRichCtrl.call(this);

   this.setParam(editorParam);

   this.flagIns = true;

   this.text = null;

   if (S3dGlobal.engine === engineTHREEJS) {
      if (!this.cursorParam) {
         this.cursorParam = {};
         this.cursorParam.geometry = new THREE.PlaneBufferGeometry(70, 30);
         this.cursorParam.material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            opacity: 0.9,
            transparent: true
         });
      }
   } else if (S3dGlobal.engine === engineBABYLON) {
   }
   
   if (editorParam.addMemo) {
      var richMemoParam = {
         owner: this,
         scene: this.obj3d,
         addLine: editorParam.addLine,
         textParam: this.textParam,
         material: this.material,
         geometryStyleArray: this.geometryStyleArray,
         cursorParam: this.cursorParam
      };
      this.richMemo = new S3D.S3dRichMemo(richMemoParam);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype = new S3D.S3dRichCtrl();
S3D.S3dEditor.prototype.constructor = S3D.S3dEditor;

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.recalcCharsPos = function() {
   this.richMemo.recalcCharsPos();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.calcCursorPos = function() {
   return this.richMemo.calcCursorPos();
};

/* -------------------------------------------------------------------------- */

var BACKSPACE = 8;
var TAB = 9;
var ENTER = 13;
var ESC = 27;
var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var INS = 45;
var RIGHT_ARROW = 39;
var DEL = 46;
var ESC = 27;

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.processKey = function(event) {
   var preventDefault = true;
   switch (event.keyCode) {
      case END :
         this.end();
         break;
      case HOME :
         this.home();
         break;
      case BACKSPACE :
         this.backspace();
         break;
      case ENTER :
         this.enter();
         break;
      case UP_ARROW:
         this.upArrow();
         break;
      case LEFT_ARROW:
         this.leftArrow();
         break;
      case DOWN_ARROW:
         this.DownArrow();
         break;
      case RIGHT_ARROW:
         this.rightArrow();
         break;
      case DEL:
         this.del();
         break;
      case INS:
         this.ins();
         break;
      default:
         preventDefault = false;
   }
   if (preventDefault) {
      this.recalcCharsPos();
      this.calcCursorPos();
      event.preventDefault();
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.processChar = function(event) {
   this.editChar(event.charCode);
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.end = function() {
   this.richMemo.cursorIndex = this.richMemo.richTextNode.object.linkedNodeCount;
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.home = function() {
   this.richMemo.cursorIndex = 0;
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.backspace = function() {
   this.richMemo.backspace();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.enter = function() {
   if (this.flagIns) {
      this.richMemo.addRichText(this.richMemo.richTextIndex + 1, true);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.upArrow = function() {
   this.richMemo.moveUp();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.leftArrow = function() {
   this.richMemo.moveLeft();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.DownArrow = function() {
   this.richMemo.moveDown();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.rightArrow = function() {
   this.richMemo.moveRight();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.del = function() {
   this.richMemo.del();
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.ins = function() {
   this.flagIns = !this.flagIns;
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.editChar = function(keyCode) {
   var richCharParam = {
      keyCode: keyCode,
      flagIns: this.flagIns,
      textParam: this.textParam,
      material: this.material,
      geometryStyleArray: this.geometryStyleArray,
      cursorParam: this.cursorParam
   };
   this.richMemo.editChar(richCharParam);
   this.recalcCharsPos();
   this.moveCursorPos(1);
};

/* -------------------------------------------------------------------------- */

S3D.S3dEditor.prototype.moveCursorPos = function(num) {
   this.richMemo.moveCursorPos(num);
};

/* ========================================================================== */
