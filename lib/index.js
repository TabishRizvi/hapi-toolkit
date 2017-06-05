/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

"use strict";

const path = require("path");

const Prefix = require("./prefix");
const Meta = require("./meta");
const Routes = require("./routes");

const HapiToolkit = {

    prefixRoutes : Prefix.prefixRoutes,
    combineRoutes : Prefix.combineRoutes,
    combineAndPrefixRoutes : Prefix.combineAndPrefixRoutes,
    register : function(server,options,next) {

        server.decorate("server","submitRoutes",Routes.submitRoutes);
        server.decorate("request","getMeta",Meta.getMeta);
        next();
    }

};

HapiToolkit.register.attributes = {
    pkg: require(path.resolve(__dirname,"..","./package.json"))
};

module.exports = HapiToolkit;
