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
