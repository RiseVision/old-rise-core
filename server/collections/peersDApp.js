import { defineCollection } from './helpers.js';

export const PeersDApp = defineCollection('peersDApp', new SimpleSchema({
    peerId: {
        type: Number
    },
    dappId: {
        type: String
    }
}));
