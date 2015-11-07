var s = scene();

var r = wrend({antiAlias: true}, 0xeeeeee);

var ct = container("id-threescript-animation", r);

var c = pcam(45, ct.w / ct.h, 0.1, 10000);
c.updateProjectionMatrix();
c.rotation.y = Math.PI;
// c.position.set(-30, 40, 30);
// c.lookAt(s.position);


resize(ct, c, r);

mouseon(ct, c, 1, 2, 4);

var al = amblig(0x0c0c0c);
addsce(s, al);

var sl = spolig(0xffffff);
sl.rotation.y = Math.PI;
s.add(sl);

//sl.position.set(-40, 20, -10);

var step = 64; // 1
var max = 256; // 256;

var boxdim =   5;
var x = 0;
while (x < max) {
   var y = 0;
   while (y < max) {
      var z = 0;
      while (z < max) {
         var geo = boxgeo(boxdim, boxdim, boxdim);
         var mat = lammat({color: "rgb(" + x + ", " + y + ", " + z + ")"});
         var box = mesh(geo, mat);
         box.position.set(x * boxdim, y * boxdim, z * boxdim);
         addsce(s, box);
         z += step;
      }
      y += step;
   }
   x += step;
}

animate(r, s, c, startCallback, loopCallback);

function startCallback(loop) {
}

function loopCallback(loop) {
}
