import { defineCollection } from './helpers.js';

export const MemAccounts2u_Delegates = defineCollection('memAccounts2u_Delegates', new SimpleSchema({
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
