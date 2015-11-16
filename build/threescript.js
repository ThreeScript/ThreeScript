/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * Returns a new THREE.CubeCamera cube camera object.
 * @param {Number} n - near
 * @param {Number} f - far
 * @param {Number} cr - cubeResolution
 * @returns {Object} cube camera
 */

var ccam = cube_camera = function(n, f, cr) {
   return new THREE.CubeCamera(n, f, cr);
};

/**
 * returns a new THREE.OrthographicCamera orthographic camera object.
 * @param {Number} l - left
 * @param {Number} r - right
 * @param {Number} t - top
 * @param {Number} b - bottom
 * @param {Number} n - near
 * @param {Number} f - far
 * @returns {Object} perspective camera
 */

var ocam = ortographic_camera = function(l, r, t, b, n, f) {
   return new THREE.OrthographicCamera(l, r, t, b, n, f);
};

/**
 * Returns the new THREE.PerspectiveCamera pespective camera object.
 * @param {Number} fov - FOV (Field of Vision)
 * @param {Number} a - aspect (width / height)
 * @param {Number} n - near
 * @param {Number} f
 * @returns {Object} Ortographic Camera
 */

var pcam = perspective_camera = function(fov, a, n, f) {
   return new THREE.PerspectiveCamera(fov, a, n, f);
};

var updpromat = update_projection_matrix = function(c) {
   c.updateProjectionMatrix();
};

var lookat = function(from, to) {
   if (from.lookAt && to && to.position) {
      from.lookAt(to.position);
      return true;
   }
};
/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

var tsg = tsglobal = {
   mouse: {
      leftButtonDown: false,
      moveY: true,
      event: {x: 0, y: 0, z: 0},
      last: {x: 0, y: 0, z: 0},
      delta: {x: 0, y: 0, z: 0},
      velocity: {x: 1, y: 2, z: 4},
      direction: {x: -1, y: 1, z: -1}
   }
};

var tsgm = tsg.mouse;
var tsgmevent = tsgm.event;
var tsgmlast = tsgm.last;
var tsgmdelta = tsgm.delta;
var tsgmvel = tsgm.velocity;
var tsgmdir = tsgm.direction;

/**
 * Initialize a container
 * @param {String} id - container element id
 * @param {Renderer} renderer - renderer object
 */
function container(id, renderer) {
   if (!renderer)
      return null;
   var c = document.getElementById(id);
   if (!c)
      c = document.body;
   c.w = c.clientWidth;
   c.h = c.clientHeight;
   c.hw = c.w / 2;
   c.hh = c.h / 2;
   renderer.setSize(c.w, c.h);
   c.appendChild(renderer.domElement);
   return c;
}

/**
 * Bind resize event on window, update the view size according of window size
 * @param {Object} container - container object
 * @param {Object} camera - camera object
 * @param {Object} renderer - renderer object
 * @param {Function} callback - callback to resize
 */
function onresize(container, camera, renderer, callback) {
   window.addEventListener('resize', function(event) {
      if (!container)
         return;

      var w = container.clientWidth;
      var h = container.clientHeight;

      container.w = w;
      container.h = h;

      container.hw = w / 2;
      container.hh = h / 2;

      if (camera) {
         camera.aspect = w / h;
         if (camera.updateProjectionMatrix)
            camera.updateProjectionMatrix();
      }

      if (renderer)
         renderer.setSize(w, h);

      if (callback) {
         callack(event);
      }
   });
}

var containerControlType = 'positional';
var targetRotationOnMouseDown = null;

function onmouse(container, movingObject, moveY, velocity, direction) {
   if (moveY === true || (moveY === false))
      tsgm.moveY = moveY;
   if (velocity) {
      if (velocity.x || velocity.x === 0)
         tsgmvel.x = velocity.x;
      if (velocity.y || velocity.y === 0)
         tsgmvel.y = velocity.y;
      if (velocity.z || velocity.z === 0)
         tsgmvel.z = velocity.z;
   }
   if (direction) {
      if (direction.x === -1 || direction.x === 1)
         tsgmdir.x = direction.x;
      if (direction.y === -1 || direction.y === 1)
         tsgmdir.y = direction.y;
      if (direction.z === -1 || direction.z === 1)
         tsgmdir.z = direction.z;
   }
   container.addEventListener('mousedown', function(event) {
      tsgm.leftButtonDown = true;
      mouseXOnMouseDown = event.clientX - container.hw;
      if (containerControlType === 'rotational') {
         targetRotationOnMouseDown = targetRotation;
      } else if (containerControlType === 'positional') {
         tsgmdelta.x = 0;
         tsgmdelta.y = 0;
         tsgmdelta.z = 0;
         tsgmlast.x = event.clientX;
         tsgmlast.y = event.clientY;
         tsgmlast.z = event.clientY;
      }
   });
   var mousemove = function(event) {
      if (!(event.buttons && 1))
         return;
      if (containerControlType === 'rotational') {
         tsgmevent.x = event.clientX - container.hw;
         targetRotation = targetRotationOnMouseDown + (eventX - mouseXOnMouseDown) * 0.02;
      } else if (containerControlType === 'positional') {
         var x = event.clientX;
         var y = event.clientY;
         tsgmdelta.x = (x - tsgmlast.x) * tsgmvel.x * tsgmdir.x;
         if (tsgm.moveY) {
            tsgmdelta.y = (y - tsgmlast.y) * tsgmvel.y * tsgmdir.y;
            tsgmdelta.z = 0;
         } else {
            tsgmdelta.y = 0;
            tsgmdelta.z = (y - tsgmlast.z) * tsgmvel.z * tsgmdir.z;
         }
         var mp = movingObject.position;
         mp.x += tsgmdelta.x;
         mp.y += tsgmdelta.y;
         mp.z += tsgmdelta.z;
         tsgmlast.x = x;
         tsgmlast.y = y;
      }
   };
   container.addEventListener('mousemove', mousemove);
   container.addEventListener('mouseup', function() {
      tsgm.leftButtonDown = false;
      tsgmdelta.x = 0;
      tsgmdelta.y = 0;
      tsgmdelta.z = 0;
   });
   container.addEventListener('dblclick', function(event) {
      tsgm.moveY = !tsgm.moveY;
      mousemove(event);
   });
}

var perlooxyz = perform_loop_xyz = function(start, end, step, callback) {
   for (var x = start; x < end; x += step)
      for (var y = start; y < end; y += step)
         for (var z = start; z < end; z += step)
            callback(x, y, z);
};
/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 *
 * @returns {Object} returns the new THREE.Object3D object.
 *
 */
function obj3d() {
   return new THREE.Object3D();
}
var firpercon = first_person_control = function(object, domElement, ms, ls, lon, fz) {
   var fpc = new THREE.FirstPersonControls(object, domElement);
   if (ms)
      fpc.movementSpeed = ms;
   if (ls)
      fpc.lookSpeed = ls;
   if (lon)
      fpc.lon = lon;
   if (fz)
      fpc.freeze;
   return fpc;
};
/**
 *
 * @type anaglyph_effect
 */

var anaeff = anaglyph_effect = function(renderer) {
   return new THREE.AnaglyphEffect(renderer);
};
var loatex = load_texture = function(url) {
   return THREE.ImageUtils.loadTexture(url);
};

var loatexcub = load_texture_cube = function(urls) {
   return THREE.ImageUtils.loadTextureCube(urls);
};
/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * Returns the THREE.BoxGeometry box geometry object.
 * @param {Number} w - width
 * @param {Number} h - height
 * @param {Number} d - depth
 * @param {Number} ws - widthSegments
 * @param {Number} hs - heightSegments
 * @param {Number} ds - depthSegments
 * @returns {Object}
 */

var boxgeo = box_geometry = function(w, h, d, ws, hs, ds) {
   return new THREE.BoxGeometry(w, h, d, ws, hs, ds);
};

/**
 *
 * @param {Number} r - radius
 * @param {type} s - segments
 * @param {type} ts - theta start
 * @param {type} tl - theta length
 * @returns {Object} Returns a new THREE.CircleGeometry circle geometry object.
 */

var cirgeo = circle_geometry = function(r, s, ts, tl) {
   return new THREE.CircleGeometry(r, s, ts, tl);
};

// r:  radius
// s:  segments
// ts: thetaStart
// tl: thetaLength

var cirbufgeo = circle_buffer_geometry = function(r, s, ts, tl) {
   return new THREE.CircleBufferGeometry(r, s, ts, tl);
};

/**
 * Returns the THREE.CylinderGeometry cylinder geometry object.
 * @param {Number} rt - radius top
 * @param {Number} rb - radius bottom
 * @param {Number} h - height
 * @param {Number} rs - radial segments
 * @param {Number} hs - height segments
 * @param {Number} oe - open ended
 * @param {Number} ts - theta start
 * @param {Number} tl - theta length
 * @returns {Object} cilinder geometry
 */
var cylgeo = cylinder_geometry = function (rt, rb, h, rs, hs, oe, ts, tl) {
   return new THREE.CylinderGeometry(rt, rb, h, rs, hs, oe, ts, tl);
};

/**
 * Returns the THREE.DodecahedronGeometry object.
 * @param {Number} radius - radius
 * @param {Number} detail - detail
 */
var dodgeo = dodecahedron_geometry = function (radius, detail) {
   return new THREE.DodecahedronGeometry(radius, detail);
};

var edggeo = edges_geometry =function (geometry, thresholdAngle) {
   return new THREE.EdgesGeometry(geometry, thresholdAngle);
};

var extgeo = extrude_geometry = function (shapes, options) {
   return new THREE.ExtrudeGeometry(shapes, options);
};

var icogeo = icosahedron_geometry =function (radius, detail) {
   return new THREE.IcosahedronGeometry(radius, detail);
};

var latgeo = lathe_geometry = function (points, segments, phiStart, phiLength) {
   return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
};

var octgeo = octahedron_geometry = function (radius, detail) {
   return new THREE.OctahedronGeometry(radius, detail);
};

var pargeo = parametric_geometry = function (func, slices, stacks) {
   return new THREE.ParametricGeometry(func, slices, stacks);
};

var plabufgeo = plane_buffer_geometry = function (width, height, widthSegments, heightSegments) {
   return new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
};

var plageo = plane_geometry = function (width, height, widthSegments, heightSegments) {
   return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
};

var polgeo = polyhedron_geometry = function (vertices, indices, radius, detail) {
   return new THREE.PolyhedronGeometry(vertices, indices, radius, detail);
};

var ringeo = ring_geometry = function (innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {
   return new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
};

var shageo = shape_geometry = function (shapes, options) {
   return new THREE.ShapeGeometry(shapes, options);
};

var sphbufgeo = sphere_buffer_geometry = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};

var sphgeo = sphere_geometry = function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
};

var tetgeo = tetrahedron_geometry = function (radius, detail) {
   return new THREE.TetrahedronGeometry(radius, detail);
};

var txtgeo = text_geometry = function (text, parameters) {
   return new THREE.TextGeometry(text, parameters);
};

var torgeo = torus_geometry = function (radius, tube, radialSegments, tubularSegments, arc) {
   return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
};

var knogeo = torus_knot_geometry= function (radius, tube, radialSegments, tubularSegments, p, q, heightScale) {
   return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
};

var tubgeo = tube_geometry = function (path, segments, radius, radialSegments, closed, taper) {
   return new THREE.TubeGeometry(path, segments, radius, radialSegments, closed, taper);
};

var wirgeo = wireframe_geometry = function (geometry) {
   return new THREE.WireframeGeometry(geometry);
};
var amblig = ambient_light = function(color) {
   return new THREE.AmbientLight(color);
};

var dirlig = directional_light = function(color, intensity) {
   return new THREE.DirectionalLight(color, intensity);
};

var hemlig = hemispheric_light = function(skyColor, groundColor, intensity) {
   return new THREE.HemisphereLight(skyColor, groundColor, intensity);
};

var spolig = spot_light = function(color, intensity, distance, angle, exponent, decay) {
   return new THREE.SpotLight(color, intensity, distance, angle, exponent, decay);
};

var poilig = point_light = function(color, intensity, distance, decay) {
   return new THREE.PointLight(color, intensity, distance, decay);
};
/**
 @author: betobyte / threescript.com
 @author: ivan / threescript.com
 */

/**
 * Load a THREEjs JSON file
 * @param {String} url - url to json file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */
var loajso = load_json = function(url, onLoad, onProgress, onError) {
   var loader = new THREE.JSONLoader();
   loader.load(url, onLoad, onProgress, onError);
};

/**
 * Load a texture file
 * @param {String} url - url to texture file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */
var texloa = texture_loader = function(url, onLoad, onProgress, onError) {
   var loader = new THREE.TextureLoader();
   loader.load(url, onLoad, onProgress, onError);
};

/**
 * Load a material file
 * @param {String} url - url to material file
 * @param {function} onLoad - onLoad callback
 * @param {function} onProgress - onProgress callback
 * @param {function} onError - onError callback
 */

var loadmat = load_material = function(url, onLoad, onProgress, onError) {
   var loader = new THREE.MaterialLoader();
   loader.load(url, onLoad, onProgress, onError);
};
var linemat = line_basic_material = function(parameters) {
   return new THREE.LineBasicMaterial(parameters);
};

var dasmat = line_dashed_material = function(parameters) {
   return new THREE.LineDashedMaterial(parameters);
};

var basmat = mesh_basic_material = function(parameters) {
   return new THREE.MeshBasicMaterial(parameters);
};

var depmat = mesh_depth_material = function(parameters) {
   return new THREE.MeshDepthMaterial(parameters);
};

var lammat = mesh_lambert_material = function(parameters) {
   return new THREE.MeshLambertMaterial(parameters);
};

var normat = mesh_normal_material = function(parameters) {
   return new THREE.MeshNormalMaterial(parameters);
};

var phomat = mesh_phong_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};

var mulmat = multi_material = function(parameters) {
   return new THREE.MultiMaterial(parameters);
};

var facmat = mesh_face_material = function(parameters) {
   return new THREE.MeshFaceMaterial(parameters);
};

var poimat = mesh_points_material = function(parameters) {
   return new THREE.MeshPhongMaterial(parameters);
};

var rawmat = raw_shader_material = function(parameters) {
   return new THREE.RawShaderMaterial(parameters);
};

var shamat = shader_material = function(parameters) {
   return new THREE.ShaderMaterial(parameters);
};

var sprimat = sprite_material = function(parameters) {
   return new THREE.SpriteMaterial(parameters);
};

var bascolmat = mesh_basic_colors_material = function(colors) {
   if (!colors || !colors.length || colors.length !== 6)
      return null;
   var matarr = [];
   for (var i = 0; i < 6; i++)
      matarr.push(basmat({color: colors[i]}));
   return facmat(matarr);
};
var box2 = function(min, max) {
   return new THREE.Box2(min, max);
};

var box3 = function(min, max) {
   return new THREE.Box3(min, max);
};

var color = function() {
   return new THREE.Color(color);
};

var euler = function(x, y, z, order) {
   return new THREE.Euler(x, y, z, order);
};

var frustrum = function(p0, p1, p2, p3, p4, p5) {
   return new THREE.Frustum(p0, p1, p2, p3, p4, p5);
};

var line3 = function(start, end) {
   return new THREE.Line3(start, end);
};

var math = function() {
   return new THREE.Math();
};

var matrix3 = function() {
   return new THREE.Matrix3();
};

var matrix4 = function() {
   return new THREE.Matrix4();
};

var plane = function(normal, constant) {
   return THREE.Plane(normal, constant);
};

var quaternion = function() {
   return new THREE.Quaternion(x, y, z, w);
};

var ray = function(origin, direction) {
   return new THREE.Ray(origin, direction);
};

var sphere = function(center, radius) {
   return new THREE.Sphere(center, radius);
};

var spline = function() {
   return new THREE.Spline(points);
};

var triangle = function(a, b, c) {
   return new THREE.Triangle(a, b, c);
};

var vec2 = function(x, y) {
   return new THREE.Vector2(x, y);
};

var vec3 = function(x, y, z) {
   return new THREE.Vector3(x, y, z);
};

var vec4 = function(x, y, z, w) {
   return new THREE.Vector4(x, y, z, w);
};
var mesbox = mesh_box = function(material, w, h, d, ws, hs, ds) {
   return mesh(boxgeo(w, h, d, ws, hs, ds), material);
};

var messph = mesh_sphere = function(material, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
   return mesh(sphgeo(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength), material);
};

var mespla = mesh_plane = function(material, width, height, widthSegments, heightSegments) {
   return mesh(plageo(width, height, widthSegments, heightSegments), material);
};
function mesh(geometry, material) {
   return new THREE.Mesh(geometry, material);
}
var wrend = webgl_renderer = function(parameters, clearColor, pixelRatio) {
   var r = new THREE.WebGLRenderer(parameters);
   if (pixelRatio)
      r.setPixelRatio(pixelRatio)
   else
      r.setPixelRatio(window.devicePixelRatio);
   if (!clearColor)
      clearColor = 0xFFFFFF;
   r.setClearColor(new THREE.Color(clearColor));
   return r;
};

var pixrat = set_pixel_ratio = function(r, pixelRatio) {
   if (r && r.setPixelRatio)
      r.setPixelRatio(pixelRatio);
};
var scene = function() {
   return new THREE.Scene();
};

var fog = function(color, near, far) {
   return new THREE.Fog(color, near, far);
};

var fogexp2 = function(color, density) {
   THREE.FogExp2(color, density);
};

var objadd = object_add = function(receiver) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      if (receiver.add)
         receiver.add(arguments[i]);
   }
};

var objsub = object_sub = function(receiver) {
   var l = arguments.length;
   for (var i = 1; i < l; i++) {
      if (receiver.remove)
         receiver.remove(arguments[i]);
   }
};

var objdo = function(obj, x, y, z) {
   if (!obj)
      return null;
   if (x)
      obj.x = x;
   if (y)
      obj.y = y;
   if (z)
      obj.z = z;
   return obj;
};

var objpos = object_position = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.position, x, y, z);
   else
      return null;
};

var objrot = object_rotation = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.rotation, x, y, z);
   else
      return null;
};

var objsca = object_scale = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.scale, x, y, z);
   else
      return null;
};

var objtra = object_translation = function(obj, x, y, z) {
   if (obj)
      return objdo(obj.translation, x, y, z);
   else
      return null;
};

var cassha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].castShadow = true;
   }
};

var notcassha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].castShadow = false;
   }
};

var recsha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].receiveShadow = true;
   }
};

var notrecsha = function() {
   var l = arguments.length;
   for (var i = 0; i < l; i++) {
      arguments[i].receiveShadow = false;
   }
};

var stopraf = false;

var animate = function(r, s, c, startCallback, animCallback, renderCallback) {
   var animator = {
      renderer: r,
      scene: s,
      camera: c};
   function localRender() {
      if (renderCallback)
         renderCallback(s, c);
      else
         render(r, s, c);
   }
   function animationFrame() {
      if (!stopraf)
         requestAnimationFrame(animationFrame);
      if (animCallback)
         animCallback(animator);
      localRender();
   }
   stopraf = false;
   if (startCallback)
      startCallback(animator);
   localRender();
   animationFrame();
};

var render = function(renderer, scene, camera) {
   renderer.clear();
   renderer.render(scene, camera);
};
// c: canvas,
// m: mapping,
//
//
// ws: wrapS,
// wt: wrapT,
// mgf: magFilter,
// mn: min filter,
// f: format,
// t: type,
// a: anisotropy

var cantex = canvas_texture = function(c, m, ws, wt, mg, mn, f, t, a) {
   return new THREE.CanvasTexture(c, m, ws, wt, mg, mn, f, t, a);
};

var loatexcub = load_texture_cube = function(urls) {
   return THREE.ImageUtils.loadTextureCube(urls);
};
