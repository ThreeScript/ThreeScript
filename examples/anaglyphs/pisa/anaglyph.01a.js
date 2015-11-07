var s = scene();

var r = wrend({antiAlias: true},0xeeeeee);

var ct = container("id-threescript-animation", r);

var mouseX = null;
var mouseY = null;

function onDocumentMouseMove(event) {
	mouseX = ( event.clientX - windowHalfX ) * 10;
	mouseY = ( event.clientY - windowHalfY ) * 10;
}

ct.addEventListener("mousemove"),onDocumentMouseMove;

var c = pcam(60, ct.w / ct.h, 0.1, 10000);
c.updateProjectionMatrix();
c.position.z = 400;

resize(ct, c, r);

var path = "users/betobyte/studies/01/anaglyph/pisa/";
var format = '.png';
var urls = [
	path + 'px' + format, path + 'nx' + format,
	path + 'py' + format, path + 'ny' + format,
	path + 'pz' + format, path + 'nz' + format
];

var t = loatexcub(urls);

var sb = sphgeo(100, 32, 16);
var mb = basmat({color: 0xffffff, envMap: t});

var spheres = [];
for ( var i = 0; i < 500; i++) {
	var sp =  mesh(sb, mb);
	sp.position.set(Math.random() * 10000 - 5000, Math.random() * 10000 - 5000, Math.random() * 10000 - 5000);
	sp.scale.x = sp.scale.y = sp.scale.z = Math.random() * 3 + 1;
	add(s,sp);
	spheres.push(sp);
    addsce(s, sp);
}

var effect = anaeff(r);
effect.setSize(ct.w || 2, ct.h || 2);

animate(r, s, c, startCallback, loopCallback);

function startCallback(loop) {
}

function loopCallback(loop) {
	var timer = 0.0001 * Date.now();
	c.position.x += (mouseX-c.position.x ) * .05;
	c.position.y += (-mouseY-c.position.y ) * .05;
	c.lookAt(s.position);
	for ( var i = 0, il = spheres.length; i < il; i ++ ) {
		var sp = spheres[ i ];
		sp.position.x = 5000 * Math.cos( timer + i );
		sp.position.y = 5000 * Math.sin( timer + i * 1.1 );
 	}
	effect.render(s,c);
}

