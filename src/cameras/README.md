There are 3 types of cameras:

- perspective camera;
- orthographic camera;
- cube camera;

The perspective camera is where things get interesting. This camera is more like real life, with
objects in the distance being smaller. That said, it uses the same sort of pipeline as before.
Internally you define a view matrix exactly the same as before. However, then the projection
matrix is formed differently.


Function              | Parameters | Description       
----------------------|------------|--------------------------------------------------------------
pcam(fov, a, n, f)    | fov        | Field of view – this is part of scene that can be seen from the position of the camera.
                      |            | As you probably know, we, humans, have almost 180-degree field of view, while some birds might even have a complete 360-degree field of view.
                      |            | However, for computers, we usually use the field of view between 60 and 90 degrees.
or perspective_camera | aspect     | Aspect of width / height.
                      | near       | Near rendering distance.
                      | far        | Far rendering distance.

The ortographic camera projection isn’t normally how we directly perceive the world, but it’s a form we
commonly use nonetheless. For example, assembly instructions usually show an orthographic
view. Architectural plans showing a front, side, or top view of a building use this sort of
projection. You can take measurements off these types of views. Having the distortion caused by
perspective projection would most likely hinder our understanding of what we’re seeing.

Command                | Parameters | Description       
-----------------------|------------|--------------
ocam(l, r, t, b, n, f) | l: left    | Left.
Ortographic Camera     | r: right   | Right.
                       | t: top     | Top.
                       | b: bottom  | Bottom.
                       | n: near    | Near.
                       | f: far     | Far.

The cube camera creates 6 cameras that render to a WebGLRenderTargetCube.

Command          |    Parameters      | Description       
-----------------|--------------------|------------------
cubcam(n, f, cr) | n near             | Near.
Cube Camera      | f far              | Far.
                 | cr cube_resolution | Cube resolution.
