import { defineCollection } from './helpers.js';

export const Peers = defineCollection('peers', new SimpleSchema({
    ip: {
        type: String
    },
    port: {
        type: Number
    },
    state: {
        type: Number
    },
    os: {
        type: String
    },
    version: {
        type: String
    },
    clock: {
        type: Number
    }
}));
