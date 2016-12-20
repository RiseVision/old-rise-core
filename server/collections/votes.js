import { defineCollection } from "./helpers.js";

export const Votes = defineCollection("votes", new SimpleSchema({
    votes: {
        type: String,
        optional: true
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
