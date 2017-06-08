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



module.exports.addMetaToRoutes = function(key,value,routes) {

    Hoek.assert(_.isString(key),"`key` should be a string");
    Hoek.assert(_.isObject(routes) ,"`routes` should be a valid route configuration object or an array of such objects");

    let isSingleRoute = false;
    if(!_.isArray(routes)){
        isSingleRoute = true;
        routes = [routes];
    }

    routes = _.map(routes,function (route) {
        route.meta = route.meta || {};
        route.meta[key] = value;
        return route;
    });

    if(isSingleRoute){
        routes = routes[0];
    }

    return routes;
};