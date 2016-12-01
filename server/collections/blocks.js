import { defineCollection } from './helpers.js';

export const Blocks = defineCollection('blocks', new SimpleSchema({
    timestamp: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return { $setOnInsert: new Date() };
            } else {
                this.unset();
            }
        }
    },
    rowId: {
        type: Number,
        autoValue: function() {
            if (this.isInsert) {
                return Meteor.call("getCollectionCount", "Blocks") + 1;
            } else if (this.isUpsert) {
                return { $setOnInsert: Meteor.call("getCollectionCount", "Blocks") + 1 };
            } else {
                this.unset();
            }
        },
        unique: true
    },
    version: {
        type: Number
    },
    height: {
        type: Number
    },
    previousBlock: {
        type: String,
        unique: true,
        optional: true
    },
    numberOfTransactions: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    reward: {
        type: Number
    },
    payloadLength: {
        type: Number
    },
    payloadHash: {
        type: Uint8Array
    },
    generatorPublicKey: {
        type: Uint8Array
    },
    blockSignature: {
        type: Uint8Array
    },
}), [
    {
        timing: "after",
        type: "insert",
        func: function(userId, doc){
            let prevBlockId = Meteor.call("getPreviousId", "Blocks", doc._id);
            Meteor.call("updateCollection", "Blocks", {
                _id: doc._id
            }, {
                $set: { previousBlock: prevBlockId }
            });
        }
    }
]);
