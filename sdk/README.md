## RocketClient 🚀

A simple and fast client for RocketApi compatible with browser and node.js. 🎉

### Install ⬇️

```
yarn add rocket-api-js
```

### Setup 👨🏻‍💻

```js
import RocketClient from "rocket-api-js";

const myApi = new RocketClient({uid: "YOU-UID"});

//Basic usage
const products = myApi("products");

//create a product
await products.create({name: "Paint", price: 1.00})

//list all products
await products.list() // [{name: "Paint", price: 1.00}]

//create a product
await products.update({/*new values*/})

//create a product
await products.delte(id)
```
