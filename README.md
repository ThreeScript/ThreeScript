# ThreeScript
TS ThreeScript is an opensource project with a lot of useful resources for 3D scenes development in site of the Internet.

You can use the ThreeScript javascript library in use with the Threejs javascript library and it's extension modules in your javascript programs, writing code a short and clear 3D code.

Also you have and editor to the 3D scenes creation, available in http://threescript.com.

You can create and your scenes, and export them to your code, both cutting and paste the editor's code in you javascript source files, as embedding it directly from the ThreeScript's site.

# History

TS was launched in 2015 By Roberto Plácido Teixeira and Ivan de Moura Miranda.

# resume

ThreeScript is the language script using function returning Three.js instantiated classes.

The first ThreeScript does is create the global **THREESCRIPT**, **threescript**, **TS** and **ts** vars, ponting to the function object used to host all ThreeScript own functions and vars.

```javascript
var TS = ts = THREESCRIPT = threescript = function() {
  return THREE.Scene();
}
```

For every Threejs class, it is created a function with the same parameters, return a new class object instantiation.

for example, 'scene':
```javascript
function TS.scene() {
  return THREE.Scene();
}
```

Some of the most common used ThreeScript functions are:
```javascript
- TS.scene();
- TS.percam(fov, aspect, near, far);
- TS.wrend(parameters);
- TS.boxgeo(w, h, d, ): create a box with the width 'w', height 'h', depth 'd', width segments 'ws', height segments 'hs', depth segments 'ds';
- TS.sphgeo(r, ws, hs, ps, pl, ts, tl): creates a sphere geometry with the radius 'r', width segments 'ws', height segments, phi start 'ps', phiLength 'pl', thetaStart 'ts', thetaLength 'tl';
```
## Usage

Download the minified library and include it with the [three.js](https://github.com/mrdoob/three.js) library in your html.

```html
<script src="js/three.min.js"></script>
<script src="js/threescript.min.js"></script>
```
You can use one of the scripts in 'utils/build' folder to create your custom build.
