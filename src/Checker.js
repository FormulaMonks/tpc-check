import { addScript, removeScript } from './utils'

const BASE_URL = 'https://2plexv84m5.execute-api.us-east-1.amazonaws.com/prod'
const DEFAULT_SET_COOKIE_URL = `${BASE_URL}/set-third-party-cookie.js`
const DEFAULT_GET_COOKIE_URL = `${BASE_URL}/get-third-party-cookie.js`

export default class Checker {
  constructor(callback, options={}) {
    this.setCookieUrl = options.setCookieUrl || DEFAULT_SET_COOKIE_URL
    this.getCookieUrl = options.getCookieUrl || DEFAULT_GET_COOKIE_URL
    this.callback = callback
    this.scripts = {
      load: null,
      trigger: null
    }
  }

  /**
   * Setup a global trigger/callback function to be called when the
   * third-party cookie check has completed and there is result.
   */
  listenTrigger() {
    window.triggerTPCCallback = enabled => {
      removeScript(this.scripts.trigger)
      this.callback(enabled)
      window.triggerTPCCallback = undefined
    }
  }

  /**
   * Set a listener function for completed third-party cookie check
   * and initialize a script request that will call it when done.
   */
  initializeTrigger() {
    this.listenTrigger()
    this.scripts.trigger = addScript(this.getCookieUrl)
  }

  /**
   * Setup a global callback function to be called when the third-party
   * cookie is supposed to be set.
   */
  listenLoad() {
    window.loadTPCScript = () => {
      removeScript(this.scripts.load)
      this.initializeTrigger()
      window.loadTPCScript = undefined
    }
  }

  /**
   * Set a listener function for successfully set third-party cookie
   * and initialize a script request that will call it when done.
   */
  initializeLoad() {
    this.listenLoad()
    this.scripts.load = addScript(this.setCookieUrl)
  }

  /**
   * Initialize check.
   */
  execute() {
    this.initializeLoad()
  }
}
