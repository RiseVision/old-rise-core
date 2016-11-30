import { defineCollection } from './helpers.js';

export const MemAccounts = defineCollection('memAccounts', new SimpleSchema({
    username: {
        type: String,
        optional: true,
        max: 20
    },
    isDelegate: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_isDelegate: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    secondSignature: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_secondSignature: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_username: {
        type: String,
        optional: true
    },
    address: {
        type: String,
        unique: true
    },
    publicKey: {
        type: Uint8Array,
        optional: true
    },
    secondPublicKey: {
        type: Uint8Array,
        optional: true
    },
    balance: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_balance: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    vote: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    rate: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    delegates: {
        type: String,
        optional: true
    },
    u_delegates: {
        type: String,
        optional: true
    },
    multisignatures: {
        type: String,
        optional: true
    },
    u_multisignatures: {
        type: String,
        optional: true
    },
    multimin: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_multimin: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_multilifetime: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    multilifetime: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    blockId: {
        type: String,
        optional: true
    },
    nameexist: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    u_nameexist: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    producedblocks: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    missedblocks: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    fees: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    rewards: {
        type: Number,
        optional: true,
        defaultValue: 0
    }
}));
