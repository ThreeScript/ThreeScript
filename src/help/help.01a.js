var help = [
   ['cameras', 'Contains the cameras.',
      ['pcam', 'Perpective Camera', 'Creates a perspective  camera.', [
            ['fov', 'field of view.'],
            ['aspect', 'aspect between container width and height.'],
            ['near', 'min distance to render.'],
            ['far', 'max distance to render.']]
      ],
      ['ocam', 'Ortographic Camera', 'Creates an ortographic camera.', [
            ['a', 'a.'],
            ['b', 'b.'],
            ['c', 'c.'],
            ['d', 'd.']]
      ]
   ]
];

var __ts_help = {
   json: {}
};

help.json.commands = {};
var __ts_hc = help.json.commands;

__ts_hc.animation = [
   'aniact', [
      ['clip'],
      ['startTime'],
      ['timeScale'],
      ['weight'],
      ['loop']
   ],
   'anicli', [
      ['name'],
      ['duration'],
      ['tracks']
   ]
];
