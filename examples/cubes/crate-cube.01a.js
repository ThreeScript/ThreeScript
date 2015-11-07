var s = scene();

var r = wrend({antiAlias: true},0xeeeeee);

var ct = container("id-threescript-animation", r);

var c = pcam(45, ct.w / ct.h, 0.1, 10000);
c.updateProjectionMatrix();
c.position.z = 400;

resize(ct, c, r);

// var texture = THREE.ImageUtils.loadTexture('users/betobyte/studies/01/crate.01a.gif');

var t = loatex('users/betobyte/studies/01/crate.01a.gif');

var gb = boxgeo(200, 200, 200);
var mb = basmat({ map: t});
var bx = mesh(gb, mb);
 
addsce(s, bx);

// render(r, s, c);
animate(r, s, c, startCallback, loopCallback);

function startCallback(loop) {
}

function loopCallback(loop) {
    bx.rotation.x += 0.005;
	bx.rotation.y += 0.01;
}
