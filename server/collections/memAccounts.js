import { defineCollection } from './helpers.js';

export const MemAccounts = defineCollection('memAccounts', new SimpleSchema({
    username: {
        type: String
    },
    isDelegate: {
        type: Number
    },
    u_isDelegate: {
        type: Number
    },
    secondSignature: {
        type: Number
    },
    u_secondSignature: {
        type: Number
    },
    u_username: {
        type: String
    },
    address: {
        type: String
    },
    publicKey: {
        type: Uint8Array
    },
    secondPublicKey: {
        type: Uint8Array
    },
    balance: {
        type: Number
    },
    u_balance: {
        type: Number
    },
    vote: {
        type: Number
    },
    rate: {
        type: Number
    },
    delegates: {
        type: String
    },
    u_delegates: {
        type: String
    },
    multisignatures: {
        type: String
    },
    u_multisignatures: {
        type: String
    },
    multimin: {
        type: Number
    },
    u_multimin: {
        type: Number
    },
    u_multilifetime: {
        type: Number
    },
    multilifetime: {
        type: Number
    },
    blockId: {
        type: String
    },
    nameexist: {
        type: Number
    },
    u_nameexist: {
        type: Number
    },
    producedblocks: {
        type: Number
    },
    missedblocks: {
        type: Number
    },
    fees: {
        type: Number
    },
    rewards: {
        type: Number
    }
}));
