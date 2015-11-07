function body() {
   this._face = face();
   this._neck = neck();
   this._knuckle_neck_head = knuckle();
   add(this._neck, this._knuckle_neck_head);
   add(this.knuckle_neck_head, this.face)
}

function face(moutheparam, noseparam) {
   this.face = obj();
   this.mouth = mouth(moutheparam);
   this.nose = nose(noseparam);
   add(this.face, this.mouth, this.nose);
}

function mouth(moutheparam) {
   var _mouth = obj();
   return _mouth;
}

function nose(noseparam) {
   var _nose = obj();
   return _nose;
}

function arm() {
   var _arm = obj();
   var _hand = ahand();
   var _wrist = wrist();
   add(_arm, _hand);
   return _arm;
}

var _face = face();
var _neckj = neckj();
var _chest = chect();
var _knuckle_neck_head = neck();

var _body = body();
add(_body, _face, _neck);
