import { defineCollection } from './helpers.js';

export const Signatures = defineCollection('signatures', new SimpleSchema({
    // TODO: Validate that the id exists in the transactions collection.
    transactionId: {
        type: String,
        unique: true
    },
    publicKey: {
        type: Uint8Array
    }
}));
