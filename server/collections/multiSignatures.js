import { defineCollection } from './helpers.js';

export const MultiSignatures = defineCollection('multiSignatures', new SimpleSchema({
    min: {
        type: Number
    },
    lifetime: {
        type: Number
    },
    keysgroup: {
        type: String
    },
    transactionId: {
        type: String
    }
}));
