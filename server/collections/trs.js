import { defineCollection } from './helpers.js';

export const Trs = defineCollection('trs', new SimpleSchema({
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
                return Meteor.call("getCollectionCount", "Trs") + 1;
            } else if (this.isUpsert) {
                return { $setOnInsert: Meteor.call("getCollectionCount", "Trs") + 1 };
            } else {
                this.unset();
            }
        },
        unique: true
    },
    blockId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "Blocks", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "blockId query error."
                }
                if(!result){
                    return "blockId not found."
                }
            });
        }
    },
    type: {
        type: Number
    },
    senderPublicKey: {
        type: Uint8Array
    },
    senderId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "MemAccounts", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "accountId query error."
                }
                if(!result){
                    return "accountId not found."
                }
            });
        }
    },
    recipientId: {
        type: String,
        optional: true,
        custom: function(){
            if(this.isSet){
                Meteor.call("isExistent", "MemAccounts", this.value, function(error, result){
                    if(error){
                        console.error(error);
                        return "accountId query error."
                    }
                    if(!result){
                        return "accountId not found."
                    }
                });
            }
        }
    },
    amount: {
        type: Number
    },
    fee: {
        type: Number
    },
    signature: {
        type: Uint8Array
    },
    signSignature: {
        type: Uint8Array,
        optional: true
    },
    requesterPublicKey: {
        type: Uint8Array,
        optional: true
    },
    signatures: {
        type: String,
        optional: true
    }
}));
