/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

"use strict";

const _ = require("underscore"),
    Hoek = require("hoek");

module.exports.prefixRoutes = function (prefix,routes) {

    Hoek.assert(_.isString(prefix),"`prefix` should be a string");
    Hoek.assert(_.isObject(routes) ,"`routes` should be a valid route configuration object or an array of such objects");

    let isSingleRoute = false;
    if(!_.isArray(routes)){
        isSingleRoute = true;
        routes = [routes];
    }

    routes = _.map(routes,function (route) {
        Hoek.assert(_.isString(route.path),"`path` option is invalid, please correct the route configuration");
        route.path = prefix+route.path ;
        return route;
    });

    if(isSingleRoute){
        routes = routes[0];
    }

    return routes;
};

module.exports.combineRoutes = function() {

    Hoek.assert(arguments.length !== 0, "At least one route object / array is required");

    let list = Array.prototype.slice.call(arguments, 0);

    return _.uniq(_.flatten(list));
};

module.exports.combineAndPrefixRoutes = function() {

    var self = this;
    let prefix = arguments[0];
    let list  = Array.prototype.slice.call(arguments, 1);

    let argumentsToBePassed = [];
    if(list.length!==0){
        argumentsToBePassed.push(list)
    }

    let routes = self.combineRoutes.apply(self,argumentsToBePassed);

    argumentsToBePassed = [];
    if(prefix!==undefined){
        argumentsToBePassed.push(prefix);
    }
    if(routes!==undefined){
        argumentsToBePassed.push(routes);
    }

    return self.prefixRoutes.apply(self,argumentsToBePassed);
};