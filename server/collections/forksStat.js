import { defineCollection } from './helpers.js';

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
    // TODO: Autovalue (Last block id)
    previousBlock: {
        type: String
    },
    cause: {
        type: Number
    }
}));
