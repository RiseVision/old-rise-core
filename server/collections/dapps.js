import { defineCollection } from './helpers.js';

export const DApps = defineCollection('dapps', new SimpleSchema({
    transactionId: {
        type: String,
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
    name: {
        type: String
    },
    description: {
        type: String,
        optional: true
    },
    tags: {
        type: String,
        optional: true
    },
    link: {
        type: String,
        optional: true
    },
    type: {
        type: Number
    },
    category: {
        type: Number
    },
    icon: {
        type: String,
        optional: true
    }
}));
