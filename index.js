module.exports = browserSupportsLogStyles

function browserSupportsLogStyles () {
  // don’t run in non-browser environments
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false
  }

  // edge browser? https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
  var isEdge = navigator.userAgent.toLowerCase().indexOf('edge') > -1
  // http://stackoverflow.com/a/16459606/376773
  var isWebkit = 'WebkitAppearance' in document.documentElement.style
  // http://stackoverflow.com/a/398120/376773
  var isFirebug = window.console && (window.console.firebug || (window.console.exception && window.console.table)) && true
  // firefox >= v31? https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  var isFirefoxWithLogStyleSupport = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31

  return (isWebkit && !isEdge) || isFirebug || isFirefoxWithLogStyleSupport || false
}
