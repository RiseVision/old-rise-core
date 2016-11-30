import { defineCollection } from './helpers.js';

export const MemAccounts2Delegates = defineCollection('memAccounts2Delegates', new SimpleSchema({
    // TODO: Validate that the id exists in the mem_accounts collection.
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
