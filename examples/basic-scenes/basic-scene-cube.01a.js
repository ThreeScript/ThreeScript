var s = scene();

var r = wrend({antiAlias: true}, 0xeeeeee);

var ct = container("id-threescript-animation", r);

var camgroup = obj();
camgroup.rotation.y = Math.PI;

var c = pcam(45, ct.w / ct.h, 0.1, 10000);
var sl = spolig(0xffffff, 1, 10000);
sl.rotation.y = Math.PI;
add(camgroup, c, sl);

resize(ct, c, r);
mouseon(ct, camgroup, 1, 2, 4);

var gp = plageo(60, 20, 1, 1);
var mp = lammat({color: 0xffffff});
var pl = mesh(gp, mp);
pl.receiveShadow = true;
pl.rotation.x = -0.5 * Math.PI;
pl.position.set(15, 0, 0);

var gb = boxgeo(4, 4, 4);
var mb = lammat({color: 0xff0000});
var bx = mesh(gb, mb);
bx.position.set(-4, 3, 0);

var gs = sphgeo(4, 20, 20);
var ms = lammat({color: 0x7777ff});
var sp = mesh(gs, ms);
sp.position.set(20, 0, 2);

var al = amblig(0x0c0c0c);

cassha(bx, sp, sl);
addsce(s, camgroup, pl, bx, sp, al);

var step = 16; // 1
var max = 256; // 256;

var addCubeLight = false;

var boxdim = 5;
var x = 0;
while (x < max) {
   var y = 0;
   while (y < max) {
      var z = 0;
      while (z < max) {
         var geo = boxgeo(boxdim, boxdim, boxdim);
         // var mat = lammat({color: 0xffff00});
         var mat = lammat({color: 0xaaaaaa});
         var mbox = mesh(geo, mat);
         if (addCubeLight) {
            var box = obj();
            box.position.set(x * boxdim, y * boxdim, z * boxdim);
            var slbox = spolig("rgb(" + x + ", " + y + ", " + z + ")");
            slbox.position.set(step * boxdim / 2, step * boxdim / 2, step * boxdim / 2);
            slbox.lookAt(mbox);
            addsce(box, mbox, slbox);
            addsce(s, box);
         } else {
            mbox.position.set(x * boxdim, y * boxdim, z * boxdim);
            addsce(s, mbox);
         }
         z += step;
      }
      y += step;
   }
   x += step;
}

animate(r, s, c, startCallback, loopCallback);

function startCallback(loop) {
   loop.step = 0;
}

function loopCallback(loop) {
   bx.rotation.x += 0.02;
   bx.rotation.y += 0.02;
   bx.rotation.z += 0.02;

   loop.step += 0.04;
   sp.position.x = 20 + (10 * (Math.cos(step)));
   sp.position.y = 2 + (10 * Math.abs(Math.sin(step)));
}

