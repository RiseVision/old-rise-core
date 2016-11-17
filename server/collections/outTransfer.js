import { defineCollection } from './helpers.js';

export const OutTransfer = defineCollection('outTransfer', new SimpleSchema({
    transactionId: {
        type: String
    },
    dappId: {
        type: String
    },
    outTransactionId: {
        type: String
    }
}));
