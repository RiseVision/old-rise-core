import { defineCollection } from './helpers.js';

export const MemAccounts2Delegates = defineCollection('memAccounts2Delegates', new SimpleSchema({
    accountId: {
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
    dependentId: {
        type: String
    }
}));
