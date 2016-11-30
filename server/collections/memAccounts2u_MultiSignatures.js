import { defineCollection } from './helpers.js';

export const MemAccounts2u_MultiSignatures = defineCollection('memAccounts2u_MultiSignatures', new SimpleSchema({
    // TODO: Validate that the id exists in the mem_accounts collection.
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
