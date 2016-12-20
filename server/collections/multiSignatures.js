import { defineCollection } from "./helpers.js";

export const MultiSignatures = defineCollection("multiSignatures", new SimpleSchema({
    min: {
        type: Number
    },
    lifetime: {
        type: Number
    },
    keysgroup: {
        type: String
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
