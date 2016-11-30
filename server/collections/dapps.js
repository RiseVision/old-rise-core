import { defineCollection } from './helpers.js';

export const DApps = defineCollection('dapps', new SimpleSchema({
    // TODO: Validate that the id exists in the transaction collection.
    transactionId: {
        type: String
    },

    name: {
        type: String
    },
    description: {
        type: String,
        optional: true
    },
    tags: {
        type: String,
        optional: true
    },
    link: {
        type: String,
        optional: true
    },
    type: {
        type: Number
    },
    category: {
        type: Number
    },
    icon: {
        type: String,
        optional: true
    }
}));
