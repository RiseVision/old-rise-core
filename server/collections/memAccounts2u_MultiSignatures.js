import { defineCollection } from './helpers.js';

export const MemAccounts2u_MultiSignatures = defineCollection('memAccounts2u_MultiSignatures', new SimpleSchema({
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
