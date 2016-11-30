import { defineCollection } from './helpers.js';

export const Intransfer = defineCollection('intransfer', new SimpleSchema({
    // TODO: Validate that the id exists in the dapps collection.
    dappId: {
        type: String
    },
    // TODO: Validate that the id exists in the transactions collection.
    transactionId: {
        type: String
    }
}));
