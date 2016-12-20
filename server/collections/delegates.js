import { defineCollection } from "./helpers.js";

export const Delegates = defineCollection("delegates", new SimpleSchema({
    username: {
        type: String,
        max: 20
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
