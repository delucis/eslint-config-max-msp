/**
 * Convert an array of strings to an ESLint “globals” object
 * @param  {String[]} arr               An array of global names to allow
 * @param  {String}   [val='readonly']  ESLint value to use, e.g. “writable”
 * @return {Object}   An object using names as keys, all mapped to `val`
 */
const arrayToGlobalsObject = (arr, val = 'readonly') => arr.reduce((obj, name) => {
  obj[name] = val
  return obj
}, {})

/**
 * Global variable settings for class constructors in Max/MSP
 * @type {Object}
 */
const maxClasses = arrayToGlobalsObject([
  'CanvasGradient',
  'CanvasPattern',
  'CanvasPixelArray',
  'CanvasRenderingContext2D',
  'Dict',
  'File',
  'Folder',
  'Global',
  'Image',
  'ImageData',
  'Jitter3DUtils',
  'Jitter3dUtilsInterface',
  'JitterGUIElement',
  'JitterGUITracker',
  'JitterGUIUtils',
  'JitterGUIUtilsInterface',
  'JitterListener',
  'JitterMatrix',
  'JitterObject',
  'JitterReposUtils',
  'JitterReposUtilsInterface',
  'LiveApi',
  'MaxCanvas',
  'RGBAColor',
  'SQLite',
  'SQLResult',
  'Task',
  'Wind',
  'XMLHttpRequest'
])

/**
 * Global variable settings for methods in Max/MSP
 * @type {Object}
 */
const maxMethods = arrayToGlobalsObject([
  'arrayfromargs',
  'assist',
  'cpost',
  'declareattribute',
  'embedmessage',
  'error',
  'hslToRgba',
  'inlet',
  'jgt_callbackfun',
  'post',
  'postprops',
  'messnamed',
  'notifyclients',
  'notifydeleted',
  'outlet',
  'pointsort_dist',
  'refresh',
  'setinletassist',
  'setoutletassist'
])

/**
 * Global variable settings for readonly variables in Max/MSP
 * @type {Object}
 */
const maxReadonlyGlobals = arrayToGlobalsObject([
  'inlet', // `inlet` is overloaded as both a method and a getter :-/
  'jsarguments',
  'jsthis',
  'max',
  'messagename',
  'mgraphics',
  'sketch'
])

/**
 * Global variable settings for mutable variables in Max/MSP
 * @type {Object}
 */
const maxGlobals = arrayToGlobalsObject([
  'autowatch',
  'editfontsize',
  'inlets',
  'inspector',
  'outlets'
], 'writable')

/**
 * An ESLint `globals` configuration object for use in Max/MSP
 * @type {Object}
 */
module.exports = Object.assign(
  {},
  maxClasses,
  maxMethods,
  maxReadonlyGlobals,
  maxGlobals
)
