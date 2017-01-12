import { expect, spy } from './test_helper'
import { addScript, removeScript } from '../src/utils'

describe('utils', () => {
  describe('addScript', () => {
    it('appends a script to the body with the right source', () => {
      const setAttribute = spy()
      const el = { setAttribute }
      document.body.appendChild = spy()
      document.createElement = function() {
        return el
      }

      addScript('http://example.com')

      expect(setAttribute).to.have.been.called.with('src', 'http://example.com')
      expect(document.body.appendChild).to.have.been.called.with(el)
    })

    it('throws an error when non-string value is provided', () => {
      expect(() => addScript({})).to.throw('Please, provide URL string to addScript()')
    })
  })

  describe('removeScript', () => {
    it('removes the provided script', () => {
      const el = 'el'
      document.body.removeChild = spy()

      removeScript(el)

      expect(document.body.removeChild).to.have.been.called.with(el)
    })
  })
})
