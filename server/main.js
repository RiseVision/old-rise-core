import { Meteor } from "meteor/meteor";
import { DB } from "./collections.js";

let serverIPs = ["192.168.56.101", "192.168.56.102", "192.168.56.103"];
let servers = [];

Meteor.methods({
    getCollectionCount: (collection) => {
        return DB[collection].find().count();
    },
    getPreviousId: (collection, id) => {
        let idQuery = DB[collection].findOne({
            _id: {
                $eq: id
            }
        });
        let rowQuery = DB[collection].findOne({
            rowId: {
                $eq: idQuery.rowId - 1
            }
        });
        return rowQuery._id;
    },
    // The purpose of this function is to update a collection during autovalue generation.
    updateCollection: (collection, selector, modifier) => {
        DB[collection].update(selector, modifier, function(error){
            if(error){
                console.log(error);
            }
        });
    },
    isExistent: (collection, id) => {
        let idQuery = DB[collection].findOne({
            _id: {
                $eq: id
            }
        });
        return idQuery ? true : false;
    }
});

Meteor.startup(() => {
    serverIPs.forEach(function(serverIP){
        servers.push(new ServerSyncClient("http://" + serverIP + ":3000", {
            onConnect: function() {
                console.log("connected to master");
            },
            onReconnect: function() {
                console.log("reconnected to master");
            },
            beforeSyncDirty: function(count) {
                console.log("beforeSyncDirty", count);
            },
            afterSyncDirty: function(count) {
                console.log("afterSyncDirty", count);
            }
        }));
    });
    servers.forEach(function(server){
        server.sync("testingCollection", {
            onReady: function() {
                var coll = server.getCollection("testingCollection");
                console.log("ready", coll.find().count());
            },
            beforeSyncUp: function(type, id, doc) {
                console.log("beforeSyncUp", type, id, doc);
            },
            beforeSyncDown: function(type, id, doc) {
                console.log("beforeSyncDown", type, id, doc);
            },
            afterSyncUp: function(type, id, doc) {
                console.log("afterSyncUp", type, id, doc);
            },
            afterSyncDown: function(type, id, doc) {
                console.log("afterSyncDown", type, id, doc);
            },
            args: [Date.now()]
        });
    });
});
