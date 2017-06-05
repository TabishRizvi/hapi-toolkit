/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

"use strict";

const _ = require("underscore"),
    Hoek = require("hoek");

module.exports.setMeta = function(routes) {

    routes = _.map(routes,function(route){

        if(route.meta) {

            Hoek.assert( _.isObject(route.meta) ,"`meta` option is invalid, please correct the route configuration");

            route.config = route.config || {};
            route.config.app = route.config.app || {};
            route.config.app.meta = route.meta;
        }

        return _.omit(route,["meta"]);
    });

    return routes;
};

module.exports.getMeta = function(key) {

    let meta = this.route.settings.app.meta || {};
    return meta[key];
};