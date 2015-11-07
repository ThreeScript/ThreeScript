# ThreeScript
TS ThreeScript is a shortcut language for 3D scenes creation.

The scenes created with the language can be exported and included into your site.

TS was launched in 2015 By Roberto Plácido Teixeira and Ivan Moura Miranda.

ThreeScript is the language script using function returning Three.js instantiated classes.

for example, 'scene':
```
function scene() {
  return THREE.Scene();
}
```
The main functions are:

- scene();
- pcam(fov, aspect, near, far);
- wrend(parameters);
- boxgeo(w, h, d, ): create a box with the width 'w', height 'h', depth 'd', width segments 'ws', height segments 'hs', depth segments 'ds';
- sphgeo(r, ws, hs, ps, pl, ts, tl): creates a sphere geometry with the radius 'r', width segments 'ws', height segments, phi start 'ps', phiLength 'pl', thetaStart 'ts', thetaLength 'tl';
