import { defineCollection } from "./helpers.js";

export const Intransfer = defineCollection("intransfer", new SimpleSchema({
    dappId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "Peers", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "peerId query error.";
                }
                if(!result){
                    return "peerId not found.";
                }
            });
        }
    },
    transactionId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "Trs", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "transactionId query error.";
                }
                if(!result){
                    return "transactionId not found.";
                }
            });
        }
    }
}));
