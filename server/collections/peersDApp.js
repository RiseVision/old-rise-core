import { defineCollection } from './helpers.js';

export const PeersDApp = defineCollection('peersDApp', new SimpleSchema({
    // TODO: Validate that the id exists in the peers collection.
    peerId: {
        type: Number
    },
    // TODO: Validate that the id exists in the dapps collection.
    dappId: {
        type: String
    }
}));
