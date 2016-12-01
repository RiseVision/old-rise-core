import { defineCollection } from './helpers.js';

export const MemRound = defineCollection('memRound', new SimpleSchema({
    address: {
        type: String,
        max: 22,
        optional: true
    },
    amount: {
        type: Number,
        optional: true
    },
    delegate: {
        type: String,
        max: 64,
        optional: true
    },
    blockId: {
        type: String,
        optional: true,
        custom: function(){
            if(this.isSet){
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
        }
    },
    round: {
        type: Number,
        optional: true
    }
}));
