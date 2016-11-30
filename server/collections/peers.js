import { defineCollection } from './helpers.js';

export const Peers = defineCollection('peers', new SimpleSchema({
    // TODO: Validate with IP regex.
    ip: {
        type: String
    },
    port: {
        type: Number,
        min: 0,
        max: 65535
    },
    state: {
        type: Number
    },
    os: {
        type: String,
        optional: true,
        max: 64
    },
    version: {
        type: String,
        optional: true,
        max: 11
    },
    clock: {
        type: Number,
        optional: true
    }
}));
