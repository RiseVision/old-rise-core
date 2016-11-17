import { defineCollection } from './helpers.js';

export const Delegates = defineCollection('delegates', new SimpleSchema({
    username: {
        type: String
    },
    transactionId: {
        type: String
    }
}));
