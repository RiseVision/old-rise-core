import { Meteor } from "meteor/meteor";
import { DB } from "./collections.js";
import { DDP } from "meteor/ddp-client";

let serverIPs = ["192.168.56.101", "192.168.56.102", "192.168.56.103", "192.168.56.104"];
let myIP = "";
let servers = [];
let remoteCollections = [];

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
        if(myIP !== serverIP){
            servers.push(DDP.connect("http://" + serverIP + ":3000"));
        }
    });
    servers.forEach(function(server){
        remoteCollections.push(new Meteor.Collection("testingCollection", { connection: server }));
    });
    remoteCollections.forEach(function(collection){
        collection.find().observe({
            added: function(item){
                DB.TestingCollection.upsert(item);
            }
        });
    });
});
