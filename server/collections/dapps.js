import { defineCollection } from './helpers.js';

export const DApps = defineCollection('dapps', new SimpleSchema({
    transactionId: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    tags: {
        type: String
    },
    link: {
        type: String
    },
    type: {
        type: Number
    },
    category: {
        type: Number
    },
    icon: {
        type: String
    }
}));
