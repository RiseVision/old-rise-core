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
    // TODO: Validate that the id exists in the blocks collection.
    blockId: {
        type: String,
        optional: true
    },
    round: {
        type: Number,
        optional: true
    }
}));
