import { defineCollection } from './helpers.js';

export const Intransfer = defineCollection('intransfer', new SimpleSchema({
    dappId: {
        type: String
    },
    transactionId: {
        type: String
    }
}));
