import { defineCollection } from './helpers.js';

export const MemAccounts2Delegates = defineCollection('memAccounts2Delegates', new SimpleSchema({
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
