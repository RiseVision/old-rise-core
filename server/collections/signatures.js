import { defineCollection } from './helpers.js';

export const Signatures = defineCollection('signatures', new SimpleSchema({
    transactionId: {
        type: String,
        unique: true,
        custom: function(){
            Meteor.call("isExistent", "Trs", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "transactionId query error."
                }
                if(!result){
                    return "transactionId not found."
                }
            });
        }
    },
    publicKey: {
        type: Uint8Array
    }
}));
