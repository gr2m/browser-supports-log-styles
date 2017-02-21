var test = require('tape')
var browserSupportsLogStyles = require('../index')

// simulate browser environment
function resetBrowserEnvironment (options) {
  global.window = ('window' in options) ? options.window : {
    console: {}
  }
  global.document = ('document' in options) ? options.document : {
    documentElement: {
      style: {}
    }
  }
  global.navigator = ('navigator' in options) ? options.navigator : {
    userAgent: ''
  }
}

test('browserSupportsLogStyles default', function (t) {
  resetBrowserEnvironment({})

  t.is(browserSupportsLogStyles(), false, 'is false')

  t.end()
})

test('browserSupportsLogStyles in WebKit browser', function (t) {
  resetBrowserEnvironment({
    document: {
      documentElement: {
        style: {
          WebkitAppearance: 'foo'
        }
      }
    }
  })

  t.is(browserSupportsLogStyles(), true, 'is true')

  t.end()
})

test('browserSupportsLogStyles in Firefox 30', function (t) {
  resetBrowserEnvironment({
    navigator: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:30.0) Gecko/20100101 Firefox/30.0'
    }
  })

  t.is(browserSupportsLogStyles(), false, 'is false')

  t.end()
})

test('browserSupportsLogStyles in Firefox 31', function (t) {
  resetBrowserEnvironment({
    navigator: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:31.0) Gecko/20100101 Firefox/31.0'
    }
  })

  t.is(browserSupportsLogStyles(), true, 'is true')

  t.end()
})

test('browserSupportsLogStyles with firebug', function (t) {
  resetBrowserEnvironment({
    window: {
      console: {
        firebug: {}
      }
    }
  })

  t.is(browserSupportsLogStyles(), true, 'is true if console.firebug is set')

  resetBrowserEnvironment({
    window: {
      console: {
        exception: function () {},
        table: function () {}
      }
    }
  })

  t.is(browserSupportsLogStyles(), true, 'is true if console.exception & .table are functions')

  t.end()
})

test('window is not defined', function (t) {
  resetBrowserEnvironment({
    window: undefined
  })

  t.is(browserSupportsLogStyles(), false, 'is false')

  t.end()
})

test('document is not defined', function (t) {
  resetBrowserEnvironment({
    document: undefined
  })

  t.is(browserSupportsLogStyles(), false, 'is false')

  t.end()
})
