import { defineCollection } from './helpers.js';

export const Trs = defineCollection('trs', new SimpleSchema({
    timestamp: {
        type: Date,
        autoValue: () => {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return { $setOnInsert: new Date() };
            } else {
                this.unset();
            }
        }
    },
    rowId: {
        type: Number
    },
    blockId: {
        type: String
    },
    type: {
        type: Number
    },
    senderPublicKey: {
        type: Uint8Array
    },
    senderId: {
        type: String
    },
    recipientId: {
        type: String
    },
    amount: {
        type: Number
    },
    fee: {
        type: Number
    },
    signature: {
        type: Uint8Array
    },
    signSignature: {
        type: Uint8Array
    },
    requesterPublicKey: {
        type: Uint8Array
    },
    signatures: {
        type: String
    }
}));
