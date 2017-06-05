/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

"use strict";

const _ = require("underscore"),
    Hoek = require("hoek");

module.exports.setAliasRoutes = function(routes) {

    let aliasRoutes = [];

    routes = _.map(routes,function(route){

        if(route.alias) {

            Hoek.assert(_.isString(route.alias) || _.isArray(route.alias) ,"`alias` option is invalid, please correct the route configuration");

            if(_.isString(route.alias) ) {
                route.alias = [route.alias];
            }

            _.each(route.alias,function(aliasPath){

                Hoek.assert(_.isString(aliasPath),"`alias` should be a string or an array of strings");
                let aliasRoute = _.omit(route,["alias"]);
                aliasRoute.path = aliasPath;
                aliasRoutes.push(aliasRoute);
            });
        }

        return _.omit(route,["alias"]);
    });

    return _.union(routes,aliasRoutes);
};