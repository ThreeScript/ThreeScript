var s = scene();

var r = wrend({antiAlias: true},0xeeeeee);

var ct = container("id-threescript-animation", r);

var c = pcam(45, ct.w / ct.h, 0.1, 10000);
c.updateProjectionMatrix();
c.position.set(-30, 40, 30);
c.lookAt(s.position);
resize(ct, c, r);

var gp = plageo(60, 20, 1, 1);
var mp = lammat({color: 0xffffff});
var pl = mesh(gp, mp);
pl.receiveShadow = true;
pl.rotation.x = -0.5 * Math.PI;
pl.position.set(15,0,0);
// addsce(s, pl);

var gb = boxgeo(4, 4, 4);
var mb = lammat({color: 0xff0000});
var bx = mesh(gb, mb);
// pos(bx,-3,3,0);
bx.position.set(-4, 3, 0);
// bx.castShadow = true;
// addsce(s, bx);

var gs = sphgeo(4, 20, 20);
var ms = lammat({color: 0x7777ff});
var sp = mesh(gs, ms);
// pos(sp, 20, 0, 2);
sp.position.set(20, 0, 2);
// sp.castShadow = true;
// addsce(s,sp);

var al = amblig(0x0c0c0c);
// addsce(s,al);

var sl = spolig(0xffffff);
sl.position.set(-40, 20, -10);
// sl.castShadow = true;
// addsce(s,sl);

cassha(bx, sp, sl); 
addsce(s, pl, bx, sp, al, sl);

// render(r, s, c);
animate(r, s, c, startCallback, loopCallback);

function startCallback(loop) {
   loop.step = 0;
}

function loopCallback(loop) {
   bx.rotation.x += 0.02;
   bx.rotation.y += 0.02;
   bx.rotation.z += 0.02;

   loop.step += 0.04;
   sp.position.x = 20 + ( 10 * (Math.cos(step)));
   sp.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));
};
