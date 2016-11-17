import { defineCollection } from './helpers.js';

export const Blocks = defineCollection('blocks', new SimpleSchema({
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
    version: {
        type: Number
    },
    height: {
        type: Number
    },
    previousBlock: {
        type: String
    },
    numberOfTransactions: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    reward: {
        type: Number
    },
    payloadLength: {
        type: Number
    },
    payloadHash: {
        type: Uint8Array
    },
    generatorPublicKey: {
        type: Uint8Array
    },
    blockSignature: {
        type: Uint8Array
    },
}));
