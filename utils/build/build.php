<?php
$silent = ($_REQUEST["silent"] === "1");
$verbose = !$silent;
// $save = ($_REQUEST["save"] === "1");
$save = true;
$comment = false;
function appendFileFromFilepath($output_file, $input_filepath, $verbose, $save, $comment) {
   if ($comment && $save)
      fwrite($output_file, "\n\n\\\\\ $input_filepath\n\n");
   if ($comment && $verbose)
      echo "\n\n\\\\\ $input_filepath\n\n";
   $input_file = fopen($input_filepath, "r");
   if ($input_file) {
      while (($input_line = fgets($input_file)) !== false) {
         if ($save)
            fwrite($output_file, $input_line);
         if ($verbose)
            echo $input_line;
      }
      fclose($input_file);
   }
}
function createFilepathFromFilepaths($input_filedir, $input_filepaths, $output_filepath, $verbose, $save, $comment) {
   if ($save)
      $output_file = fopen($output_filepath, "w");
   else
      $output_file = null;
   if ($output_file) {
      foreach ($input_filepaths as $filepath) {
         appendFileFromFilepath($output_file, "$input_filedir/$filepath", $verbose, $save, $comment);
      }
      fclose($output_file);
   }
}
$threejs_version = "r72";
$input_threescript_filedir = "../../src";
$input_threescript_filepaths = array(
    "cameras/cameras.js",
    "container/container.js",
    "core/core.js",
    "examples/js/controls.js",
    "examples/js/effects.js",
    "extras/extras.js",
    "extras/geometries/geometries.js",
    "lights/lights.js",
    "loaders/loaders.js",
    "materials/materials.js",
    "math/math.js",
    "meshes/meshes.js",
    "objects/objects.js",
    "renderers/renderers.js",
    "scenes/scenes.js",
    "textures/textures.js",
);
$output_threescript_filedir = "../../build";
$output_threescript_filename = "threescript.js";
$output_threescript_filepath = "$output_threescript_filedir/$output_threescript_filename";
createFilepathFromFilepaths(
        $input_threescript_filedir, $input_threescript_filepaths, $output_threescript_filepath, $verbose, $save, $comment);
?>
