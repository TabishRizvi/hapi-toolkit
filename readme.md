# hapi-toolkit

A hapi plugin which provides convenience methods for route configuration

Lead Maintainer - [Tabish Rizvi](https://github.com/TabishRizvi)

## Installation

```bash
$ npm install hapi-toolkit
```

## Usage

* **As a plugin**

```js
const Hapi = require('hapi'),
    HapiToolkit = require('hapi-toolkit');

const server = new Hapi.Server();
server.connection({
    port: 3000,
    host: 'localhost'
});

server.register([HapiToolkit],function (err) {
    if (err) {
        throw err;
    }

    server.start(function (err) {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.port}`);
    });
});
```

* **As a node module**

```js
const HapiToolkit = require('hapi-toolkit');

let userRoutes = HapiToolkit.prefixRoute("/user",require("./routes/user"));
let adminRoutes = HapiToolkit.prefixRoute("/admin",require("./routes/admin"));
let routes  = HapiToolkit.combineAndPrefixRoutes("/api",userRoutes,adminRoutes);

```
