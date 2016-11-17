import { defineCollection } from './helpers.js';

export const MemAccounts2MultiSignatures = defineCollection('memAccounts2MultiSignatures', new SimpleSchema({
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
