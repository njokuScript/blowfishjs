<p>
<img title="Blowfish" src= "https://res.cloudinary.com/njokuscript/image/upload/v1671695941/blowfish_x9tug4.svg" width="300px"/>
</p>


The Blowfish javascript library.


## Installation

To get started, install the Blowfish JS package from npm.

```sh
npm install blowfishjs
```
For browsers, via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/blowfishjs@latest/dist/index.bundle.min.js"></script>
```

## Getting Started

To create a new Blowfish instance, you have to pass in your blowfish API key in the constructor.

```js
// in browser
const blowfish = new Blowfish(BLOWFISF_API_KEY);

// in nodejs
const Blowfish = require('blowfishjs');
const blowfish = new Blowfish(BLOWFISF_API_KEY);
```

## Scanning a transaction

