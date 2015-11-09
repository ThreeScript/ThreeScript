FILE                                   | SHORT NAME, LONG NAME             | PARAMETERS                          | DESCRIPTION
---------------------------------------| ----------------------------------| ------------------------------------| ----------------------------------
src /cameras /cameras.js               | ccam, cube_camera                 | near, far, cube resolution          |
                                       | pcam, perspective_camera          | fov, aspect, near, far              |
                                       | ocam, orthogonal_camera           | left, right, top, bottom, near, far |
src /container /container.js           | cont, container                   | id, r                               |
                                       | resize                            | ct, c, r                            |
                                       | mouseon                           | ct, mo, xf, yf, zf                  |
src /core /core.js                     | obj3d                             |                                     |
src /examples /js /effects.js          | anaeff, anaglyph_effect           | r                                   |
src /extras /geometries /geometries.js | boxgeo, box_geometry              |                                     |
                                       | cirgeo, circle_geometry           |                                     |
                                       | cylgeo, cylinder_geometry         | rt, rb, h, rs, hs, oe, ts, tl       |
                                       | dodgeo, dodecahedron_geometry     | radius, detail                      |
                                       | edggeo, edges_geometry            | geometry, threshold angle           |
                                       | extgeo, extrude_geometry          |                                     |
                                       | icogeo, icosahedron_geometry      |                                     |
                                       | latgeo, lathe_geometry            |                                     |
                                       | octgeo, octahedron_geometry       |                                     |
                                       | pargeo, parametric_geometry       |                                     |
                                       | plabufgeo, plane_buffer_geometry  |                                     |
                                       | plageo, plane_geometry            |                                     |
                                       | polgeo, polyhedron_geometry       |                                     |
                                       | ingeo, ring_geometry              |                                     |
                                       | shageo, shape_geometry            |                                     |
                                       | shpbuggeo, sphere_buffer_geometry |                                     |
                                       | sphgeo, sphere_geometry           |                                     |
                                       | tetgeeo, tetrahedron_geometry     |                                     |
                                       | texgeo, text_geometry             |                                     |
                                       | torgeo, torus_geometry            |                                     |
                                       | knogeo, torus_knot_geometry       |                                     |
                                       | tubgeo, tube_geometry             |                                     |
                                       | wireframe_geometry                |                                     |
src /extras /extras.js                 | loatex, load_texture              | url                                                 |
                                       | loatexcub, load_texture_cube      | urls                                                |
src /lights /lights.js                 | amblig, ambient_light             | color                                               |
                                       | dirlig, directional_light         | color, intensity                                    |
                                       | hemlig, hemispheric_light         | skyColor, groundColor, intensity                    |
                                       | spolig, spot_light                | color, intensity, distance, angle, exponent, decay  |
                                       | poilig, point_light               | color, intensity, distance, decay                   |
src /loaders /loaders.js               | loajso, load_json                 | url, onLoad, onProgress, onError                    |
                                       | texloa, texture_loader            | url, onLoad, onProgress, onError    |
src /materials /materials.js           | linemat, line_basic_material      | parameters                          |
                                       | dashmat, line_dashed_material     | parameters                          |
                                       | basmat, mesh_basic_material       | parameters                          |
                                       | depmat, mesh_depth_material       | parameters                          |
                                       | lammat, mesh_lambert_material     | parameters                          |
                                       | normat, mesh_normal_material      | parameters                          |
                                       | phomat, mesh_phong_material       | parameters                          |
                                       | mulmat, multi_material            | parameters                          |
                                       | poimat, mesh_phong_material       | parameters                          |
                                       | rawmat, raw_shader_material       | parameters                          |
                                       | shamat, shader_material           | parameters                          |
                                       | sprimat, sprite_material          | parameters                          |
src /math /math.js                     | box2                              |                                     |
                                       | box3                              |                                     |
                                       | color                             |                                     |
                                       | euler                             |                                     |
                                       | frustum                           |                                     |
                                       | line3                             |                                     |
                                       | math                              |                                     |
                                       | matrix3                           |                                     |
                                       | matrix4                           |                                     |
                                       | plane_math                        |                                     |
                                       | quaternion                        |                                     |
                                       | ray                               |                                     |
                                       | sphere_math                       | center, radius                      |
                                       | spline                            |                                     |
                                       | triangle                          |                                     |
                                       | vec2                              |                                     |
                                       | vec3                              |                                     |
                                       | vec4                              |                                     |
                                       | mesbox, mesh_box                  |                                     |
src /meshes /meshes.js                 | messph, mesh_sphere               |                                     |
src /objects /objects.js               | mesh                              |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |              
                                       |                                   |                                     |             