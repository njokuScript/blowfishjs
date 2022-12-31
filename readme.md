<p>
<img title="Blowfish" src= "https://res.cloudinary.com/njokuscript/image/upload/v1671695941/blowfish_x9tug4.svg" width="300px"/>
</p>


The Blowfish javascript library compatible with browsers and Node.js backends


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
Scan transactions in order to receive recommended actions, tailored warnings and human-readable simulation results explaining what the transaction will do.

```js

const params = {
    chain: 'solana',
    chainId: 101,
    transactions: [
    'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIFRcely+GNw4HsXvDZ2vi8ZHSvnfYAbuGTK5XjxGyUJ60JrJ+YHtCWDBeA0FSzvcigxpHxRg4haKu4qFquf9nwtxDLqeLGT1Y9D3jvRn8BJWyEq8LHFGZpD+vfskCcD4EGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAD1D6qTjIhI3IvLaoY+jcKrCp7I8+Di2XK6tV2y4c2liAgMDAgQABAQAAAADAgABDAIAAAAA4fUFAAAAAA==',
    ],
    userAccount: '5hPhdbH8bVXNrx2Cy9bM6bXkZhNUGAUizq9QQW7zMguz',
    dappUrl: 'https://scammer.com',
}

const evaluationResult = await blowfish.scanTransaction(params);

```

| **Parameter** | **Type**        | **Description**                                                                                                                                                                |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chain`    | *string* | Blockchain to perform the transaction scanning on. See the list of supported blockchains here  |
| `chainId`      | *number*  | Network identifier of the blockchain .                                                                                      |
| `transactions`   | *array/object*       | For the Solana chain, transactions is an array of base58 or base64 encoded Solana transactions. For the Ethereum and Polygon chain, the transaction is an object containing the *from*, *to*, *value* and *data* properties. |
| `userAccount`        | *string*       | A hex-representation of the user account who is being asked to sign the supplied transaction addresses.      |
| `dappUrl`       | *string* | DApp domain proposing these transactions |

## Supported Chains
* ### Solana
    * Devnet
    * Testnet
    * Mainnet

* ### Ethereum/Polygon
  - Ethereum Mainnet
  - Goerli Testnet
  - Polygon Mainnet

### Ethereum and Polygon are equivalent when it comes to functionality as well as request and response formats.


