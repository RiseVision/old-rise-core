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
    // TODO: Validate that the id exists in the transactions collection.
    transactionId: {
        type: String
    }
}));
