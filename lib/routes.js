/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

"use strict";

const alias = require("./alias"),
    meta = require("./meta");

module.exports.submitRoutes = function(routes) {

    routes = alias.setAliasRoutes(routes);
    routes = meta.setMeta(routes);

    this.route(routes);
};