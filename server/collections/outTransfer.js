import { defineCollection } from './helpers.js';

export const OutTransfer = defineCollection('outTransfer', new SimpleSchema({
    // TODO: Validate that the id exists in the transactions collection.
    transactionId: {
        type: String
    },
    // TODO: Validate that the id exists in the dapp collection.
    dappId: {
        type: String
    },
    // TODO: Validate that the id exists in the transactions collection.
    outTransactionId: {
        type: String,
        unique: true
    }
}));
