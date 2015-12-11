var aux = null;

var globalMaterial = ts.phofacmat({color: 0xffffff}, {color: 0xffffff});

var globalWhiteMaterial = ts.phofacmat({color: 0xffffff}, {color: 0xffffff});

var globalBlackMaterial = ts.phofacmat({color: 0x000000}, {color: 0x000000});

var globalRedMaterial = ts.phofacmat({color: 0xff0000}, {color: 0xff0000});

var globalGreenMaterial = ts.phofacmat({color: 0x00ff00}, {color: 0x00ff00});

var globalBlueMaterial = ts.phofacmat({color: 0x0000ff}, {color: 0x0000ff});

var globalYellowMaterial = ts.phofacmat({color: 0xffff00}, {color: 0xffff00});

var globalOrangeMaterial = ts.phofacmat({color: 0xffa500}, {color: 0xffa500});

var globalPlaneParameters = new S3D.S3dPlaneParam(
        4, 2, 1.5, 3, true, globalMaterial);

var globalTextParameters = new S3D.S3dTextParam(
        "gentilis", "bold", "normal", 4,
        2, 1.5, 3, true, globalMaterial);

var globalWhiteTextParameters = new S3D.S3dTextParam(
        "gentilis", "bold", "normal", 4,
        2, 1.5, 3, true, globalWhiteMaterial);

var globalBlackTextParameters = new S3D.S3dTextParam(
        "gentilis", "bold", "normal", 4,
        2, 1.5, 3, true, globalBlackMaterial);

var globalRedTextParameters = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, globalRedMaterial);

var globalGreenTextParameters = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, globalGreenMaterial);

var globalBlueTextParameters = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, globalBlueMaterial);

var globalYellowTextParameters = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, globalYellowMaterial);

var globalOrangeTextParameters = new S3D.S3dTextParam(
        "droid sans", "bold", "normal", 4,
        2, 1.5, 3, true, globalOrangeMaterial);

var globalGroup = null;

var globalTextPool = null;

var dirLight = null;

var pointLight = null;

var ambientLight = null;

var globalUseTrackball = false;

var globalTrackballControls = null;

var globalUseGlobalTextPool = false;

var globalControlType = enumControlType.positional;

var globalUseMirror = false;

var projector = new THREE.Projector();

var globalStudddioPresentation = false;

var keyboardMap = [
   "", "", "", "CANCEL", "", "", "HELP", "", "BACK_SPACE", "TAB", // 0-9
   "", "", "CLEAR", "ENTER", "RETURN", "", "SHIFT", "CONTROL", "ALT", "PAUSE", // 10-19
   "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", // 20-29
   "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", // 30-39
   "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", // 40-49
   "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", // 50-59
   "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E",
   "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
   "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
   "Z", "WIN", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3",
   "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT",
   "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8",
   "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18",
   "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "",
   "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA",
   "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "",
   "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN",
   "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "",
   "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA",
   "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "",
   "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET",
   "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP",
   "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP",
   "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL",
   "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW",
   "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1",
   "WIN_OEM_CLEAR", ""];

var globalSceneMaker = null;
var globalDivMenuAjuda = null;
var globalDivAjuda = null;
var globalDivMolduraAjuda = null;
