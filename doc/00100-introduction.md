TS ThreScript is a shortcut language for three dimension environments development.

The TS scripts can be presented with the ThreeScriptor, the ThreeScriptor Editor.

There are 3 types of cameras:

- perspective camera;
- orthographic camera;
- cube camera;

The perspective camera ...

Command              | Parameters | Description       
---------------------|------------|----------------------------
pcam(fov, a, n, f)   | fov: FOV   | FOV - Field of Vision.
- Perspective Camera | a: aspect  | Aspect of width / height.
                     | n: near    | Near rendering distance.
                     | f: far     | Far rendering dsitance.

The ortographic camera ...

Command                | Parameters | Description       
-----------------------|------------|--------------
ocam(l, r, t, b, n, f) | l: left    | Left.
Ortographic Camera     | r: right   | Right.
                       | t: top     | Top.
                       | b: bottom  | Bottom.
                       | n: near    | Near.
                       | f: far     | Far.

The cube camera ...

Command        |    Parameters       | Description       
---------------|---------------------|------------------
ccam(n, f, cr) | n: near             | Near.
Cube Camera    | f: far              | Far.
               | cr: cube resolution | Cube resolution.
