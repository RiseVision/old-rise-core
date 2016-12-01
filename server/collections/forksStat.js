import { defineCollection } from './helpers.js';
import { Blocks } from './blocks.js'

export const ForksStats = defineCollection('forksStat', new SimpleSchema({
    delegatePublicKey: {
        type: Uint8Array
    },
    blockTimestamp: {
        type: Date
    },
    // TODO: Validate that the id exists in the blocks collection.
    blockId: {
        type: String
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
