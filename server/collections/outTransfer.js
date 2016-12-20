import { defineCollection } from "./helpers.js";

export const OutTransfer = defineCollection("outTransfer", new SimpleSchema({
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
    },
    dappId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "DApps", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "dappId query error.";
                }
                if(!result){
                    return "dappId not found.";
                }
            });
        }
    },
    outTransactionId: {
        type: String,
        unique: true,
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
