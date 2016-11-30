import { defineCollection } from './helpers.js';

export const MemAccounts2u_Delegates = defineCollection('memAccounts2u_Delegates', new SimpleSchema({
    // TODO: Validate that the id exists in the mem_accounts collection.
    accountId: {
        type: String
    },
    dependentId: {
        type: String
    }
}));
