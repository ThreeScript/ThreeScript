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
pcam(fov, a, n, f)    | fov        | Field of view – this is part of scene that can be seen from the position of the camera. As you probably know, we, humans, have almost 180-degree field of view, while some birds might even have a complete 360-degree field of view. However, for computers, we usually use the field of view between 60 and 90 degrees.
perspective_camera    | a aspect   | The aspect ratio is ratio between the horizontal and vertical size of the area where we render the output. As we usually use the entire window, we will just use that ratio. The aspect ratio determines the difference between the horizontal field of view and the vertical field of view as you can see in the figure on the following page. Ordinary value is window.innerWidth / window.innerHeight.
                      | n near     | This property defines a min distance from the camera the Three.js renders the scene. Usually, this is a very small value, e.g. 0.1
                      | f far      | This property defines a max distance we see the scene from the position of the camera. If we set this as too low, a part of our scene might not be rendered; if we set it as too high, in some cases, it might affect the rendering performance. Normal value is between 500 and 2000.

The ortographic camera projection isn’t normally how we directly perceive the world, but it’s a form we
commonly use nonetheless. For example, assembly instructions usually show an orthographic
view. Architectural plans showing a front, side, or top view of a building use this sort of
projection. You can take measurements off these types of views. Having the distortion caused by
perspective projection would most likely hinder our understanding of what we’re seeing.

Command                | Parameters | Description
-----------------------|------------|--------------
ocam(l, r, t, b, n, f) | l left     | Camera frustum left plane – you should see this as what is the left border of what will be rendered. If we set this value to -100, you won’t see any objects that are farther to the left.
Ortographic Camera     | r right    | Camera frustum right plane. Anything farther to the right won’t be rendered.
                       | t top      | Camera frustum top plane – the top position to be rendered.
                       | b bottom   | Camera frustum bottom plane – the bottom position to be rendered.
                       | n near     | Camera frustum near plane – from this point, based on the position of the camera, the scene will be rendered.
                       | f far      | Camera frustum far plane – to this point, based on the position of the camera, the scene will be rendered.

The cube camera creates 6 cameras that render to a WebGLRenderTargetCube.

Command          |    Parameters      | Description       
-----------------|--------------------|------------------
cubcam(n, f, cr) | n near             | Near.
Cube Camera      | f far              | Far.
                 | cr cube_resolution | Cube resolution.

http://content.udacity-data.com/cs291/notes/UdacityLesson7Cameras.pdf
https://www.script-tutorials.com/webgl-with-three-js-lesson-9/
