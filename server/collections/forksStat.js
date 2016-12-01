import { defineCollection } from './helpers.js';
import { Blocks } from './blocks.js'

export const ForksStats = defineCollection('forksStat', new SimpleSchema({
    delegatePublicKey: {
        type: Uint8Array
    },
    blockTimestamp: {
        type: Date
    },
    blockId: {
        type: String,
        custom: function(){
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
    },
    blockHeight: {
        type: Number
    },
    previousBlock: {
        type: String,
        unique: true,
        autoValue: function(){
            let block;
            if (this.isInsert) {
                block = Blocks.findOne({
                    _id: {
                        $eq: id
                    }
                });
                return block.previousBlock;
            } else if (this.isUpsert) {
                block = Blocks.findOne({
                    _id: {
                        $eq: id
                    }
                });
                return { $setOnInsert: block.previousBlock };
            } else {
                this.unset();
            }
        }
    },
    cause: {
        type: Number
    }
}));
