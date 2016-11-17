import { defineCollection } from './helpers.js';

export const ForksStats = defineCollection('forksStat', new SimpleSchema({
    delegatePublicKey: {
        type: Uint8Array
    },
    blockTimestamp: {
        type: Date
    },
    blockId: {
        type: String
    },
    blockHeight: {
        type: Number
    },
    previousBlock: {
        type: String
    },
    cause: {
        type: Number
    }
}));
