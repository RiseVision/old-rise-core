import { defineCollection } from './helpers.js';

export const MemRound = defineCollection('memRound', new SimpleSchema({
    address: {
        type: String
    },
    amount: {
        type: Number
    },
    delegate: {
        type: String
    },
    blockId: {
        type: String
    },
    round: {
        type: Number
    }
}));
