import { defineCollection } from "./helpers.js";

export const Peers = defineCollection("peers", new SimpleSchema({
    rowId: {
        type: Number,
        autoValue: function() {
            if (this.isInsert) {
                return Meteor.call("getCollectionCount", "Peers") + 1;
            } else if (this.isUpsert) {
                return { $setOnInsert: Meteor.call("getCollectionCount", "Peers") + 1 };
            } else {
                this.unset();
            }
        },
        unique: true
    },
    ip: {
        type: String,
        regEx: SimpleSchema.RegEx.IP
    },
    port: {
        type: Number,
        min: 0,
        max: 65535
    },
    state: {
        type: Number
    },
    os: {
        type: String,
        optional: true,
        max: 64
    },
    version: {
        type: String,
        optional: true,
        max: 11
    },
    clock: {
        type: Number,
        optional: true
    }
}));
