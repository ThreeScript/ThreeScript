The function linemat or line_basic_material returns a new line basic material object.

```js
var linemat = line_basic_material = function(parameters) {
   return new THREE.LineBasicMaterial(parameters);
};
```

The function dashmat or line_dashed_material returns a new line dashed material object.

```js
var dashmat = line_dashed_material = function(parameters) {
   return new THREE.LineDashedMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var basmat = mesh_basic_material = function(parameters) {
   return new THREE.MeshBasicMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var depmat = mesh_depth_material = function(parameters) {
   return new THREE.MeshDepthMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var lammat = mesh_lambert_material = function(parameters) {
   return new THREE.MeshLambertMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var normat = mesh_normal_material = function(parameters) {
   return new THREE.MeshNormalMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var phomat = mesh_phong_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var mulmat = multi_material = function(parameters) {
   return new THREE.MultiMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var facmat = mesh_face_material = function(parameters) {
   return new THREE.MeshFaceMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var poimat = mesh_phong_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var rawmat = raw_shader_material = function(parameters) {
   return new THREE.RawShaderMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var shamat = shader_material = function(parameters) {
   return new THREE.ShaderMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var sprimat = sprite_material = function(parameters) {
   return new THREE.SpriteMaterial(parameters);
};
```

The function _ or _ returns a new _ object.

```js
var bascolmat = mesh_basic_colors_material = function(colors) {
   if (!colors || !colors.length || colors.length !== 6)
      return null;
   var matarr = [];
   for (var i = 0; i < 6; i++)
      matarr.push(basmat({color: colors[i]}));
   return facmat(matarr);
};
```
