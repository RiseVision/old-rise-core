import { defineCollection } from './helpers.js';

export const Votes = defineCollection('votes', new SimpleSchema({
    votes: {
        type: String,
        optional: true
    },
    // TODO: Validate that the id exists in the transactions collection.
    transactionId: {
        type: String
    }
}));
