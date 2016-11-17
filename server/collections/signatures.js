import { defineCollection } from './helpers.js';

export const Signatures = defineCollection('signatures', new SimpleSchema({
    transactionId: {
        type: String
    },
    publicKey: {
        type: Uint8Array
    }
}));
