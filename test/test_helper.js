import jsdom from 'jsdom'
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

export const expect = chai.expect
export const spy = chai.spy

global.document = jsdom.jsdom('');
global.window = document.defaultView

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
})

global.navigator = { userAgent: 'node.js' }
