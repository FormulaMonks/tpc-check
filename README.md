[![License](https://img.shields.io/github/license/citrusbyte/tpc-check.svg)](https://www.github.com/citrusbyte/tpc-check)

# TPC Check

Check if the user has enabled third-party cookies.

There is no direct way of checking whether third-party cookies are enabled or
not. In order to find out we should try to set and retrieve such cookie. This is
achieved by a backend service that interacts with `tpc-check` and executes the
passed callback when done.

### Example

```js
import tpc from 'tpc-check'

tpc(enabled => {
  if (!enabled) {
    alert('Please, enable third-party cookies to proceed')
  }
})
```

### Install

```bash
npm install --save tpc-check
```

### Development

```bash
git clone url
cd tpc-check
npm install
npm run test
```
