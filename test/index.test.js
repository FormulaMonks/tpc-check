import { expect, spy } from './test_helper'
import tpc from '../src/index'

describe('tpc', () => {
  it('calls the provided callback when result is available', () => {
    const callback = spy()

    tpc(callback)
    window.loadTPCScript()
    window.triggerTPCCallback(true)

    expect(callback).to.have.been.called.with(true)
  })

  it('throws an error if callback is not supplied', () => {
    expect(() => {
      tpc()
    }).to.throw('Please provide callback')
  })

  it('tears down listeners when scripts are executed', () => {
    tpc(() => {})

    window.loadTPCScript()
    window.triggerTPCCallback()

    expect(window.loadTPCScript).to.equal(undefined)
    expect(window.triggerTPCCallback).to.equal(undefined)
  })
})
