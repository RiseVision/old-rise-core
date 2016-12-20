import { defineCollection } from "./helpers.js";

export const MemAccounts2u_MultiSignatures = defineCollection("memAccounts2u_MultiSignatures", new SimpleSchema({
    accountId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "MemAccounts", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "accountId query error.";
                }
                if(!result){
                    return "accountId not found.";
                }
            });
        }
    },
    dependentId: {
        type: String
    }
}));
