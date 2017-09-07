[![npm version](https://img.shields.io/npm/v/tpc-check.svg)](https://www.npmjs.com/package/tpc-check)
[![License](https://img.shields.io/github/license/citrusbyte/tpc-check.svg)](https://www.github.com/citrusbyte/tpc-check)

# TPC Check

Check if the user has enabled third-party cookies.

Third-party cookies are basically regular cookies but set from different domain.
They are useful for recognizing the user's browser, and aggregate requests and
data around a particular user. Unfortunately, they can be used for tracking
purposes by an entity that the user hasn't agreed to, so there are a lot of
users who disabled them in order to protect their privacy.

But in the same time there are certain types of software (payments, tracking
services, analytics, etc.) that might need third-party cookies to work and
disabling them would mean that the user won't be able to complete certain step.
In such cases it is useful to have a way to check whether they are allowed or
not and show message to the user explaining why they will need to enable them
in order to complete what they started.

Unfortunately, there is no direct way to check whether third-party cookies are
enabled or not (compared to regular cookies, for which check is very easy). This
library exists exactly for these cases, mainstreaming this process and
extracting this functionality in an easy to use interface.

### Inner Working

There are several steps to find out whether third-party cookies are enabled:
- Load a script from third-party domain (there is a separate backend service,
  that this library is communicating with which handles this) and try to set a
  cookie from it.
- When the script is loaded, load another script from the same domain, which
  tries to retrieve the cookie that was initialy set.
- If the retrieval is successful, then third-party cookies are enabled. If not,
  then they are disabled.
- Execute the passed callback with the result from this check.

### Install

```bash
npm install --save tpc-check
```

### Example

```js
import tpc from 'tpc-check'

tpc(enabled => {
  if (!enabled) {
    alert('Please, enable third-party cookies to proceed')
  }
})
```

#### Overriding default urls for cookie setting and getting

```js
import tpc from 'tpc-check'

tpc(enabled => {
  if (!enabled) {
    alert('Please, enable third-party cookies to proceed')
  }
}, {
  getCookieUrl: 'http://my-domain.com/get-cookie.js',
  setCookieUrl: 'http://my-domain.com/set-cookie.js',
})
```

Here the get-cookie.js contains:
```js
window.triggerTPCCallback(true)
```

And set-cookie.js contains:
```js
window.loadTPCScript()
```

### Development and Contribution

If you discovered a bug or have a feature suggestion, feel free to create an
issue on GitHub or open a Pull Request.

```bash
git clone git@github.com:citrusbyte/tpc-check.git
cd tpc-check
npm install
npm test
```

## About Citrusbyte

![Citrusbyte](http://i.imgur.com/W6eISI3.png)

This software is lovingly maintained and funded by [Citrusbyte](https://www.citrusbyte.com). Development is led by [Dimitar Valchanov](https://github.com/dvalchanov).
At Citrusbyte, we specialize in solving difficult computer science problems for startups and the enterprise.

At Citrusbyte we believe in and support open source software.
* Check out more of our open source software at Citrusbyte Labs.
* Learn more about [our work](https://citrusbyte.com/portfolio).
* [Hire us](https://citrusbyte.com/contact) to work on your project.
* [Want to join the team?](http://careers.citrusbyte.com)

*Citrusbyte and the Citrusbyte logo are trademarks or registered trademarks of Citrusbyte, LLC.*
