import { defineCollection } from './helpers.js';

export const Delegates = defineCollection('delegates', new SimpleSchema({
    username: {
        type: String,
        max: 20
    },
    // TODO: Validate that the id exists in the transactions collection.
    transactionId: {
        type: String
    }
}));
