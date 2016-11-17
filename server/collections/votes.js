import { defineCollection } from './helpers.js';

export const Votes = defineCollection('votes', new SimpleSchema({
    votes: {
        type: String
    },
    transactionId: {
        type: String
    }
}));
