# browser-supports-log-styles

> returns true if browser supports console log styling

[![NPM version](https://badge.fury.io/js/browser-supports-log-styles.svg)](https://www.npmjs.com/package/browser-supports-log-styles)
[![Build Status](https://travis-ci.org/gr2m/browser-supports-log-styles.svg?branch=master)](https://travis-ci.org/gr2m/browser-supports-log-styles)
[![Coverage Status](https://coveralls.io/repos/gr2m/browser-supports-log-styles/badge.svg?branch=master)](https://coveralls.io/r/gr2m/browser-supports-log-styles?branch=master)
[![Dependency Status](https://david-dm.org/gr2m/browser-supports-log-styles.svg)](https://david-dm.org/gr2m/browser-supports-log-styles)

Modern browsers support CSS-based styling of console log outputs.
See [Documentation on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Console#Styling_console_output)

### Usage

Download latest version here: https://wzrd.in/standalone/browser-supports-log-styles

Or install via npm: `npm install -S browser-supports-log-styles`

```js
if (browserSupportsLogStyles()) {
  console.log('%cLOG%c styling supported', 'color: white; padding: .2em .5em; border-radius: 1em; background-color: blue', 'color: inherit')
} else {
  console.log('styling not supported')
}
```

### Current Browser Support

- Chrome
- Safari
- Firefox >= v31

### Credit

Takend from [TJ Holowaychuk @visionmedia](https://github.com/visionmedia)'s fantastic [debug npm package](https://github.com/visionmedia/debug)
Original code: https://github.com/visionmedia/debug/blob/165e937e6dd529588fc3d9761d3f745969d3d054/browser.js#L28-L44

### License

MIT
