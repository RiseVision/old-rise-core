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
    // TODO: Autovalue (Total count of items in Blocks Collection +1)
    rowId: {
        type: Number
    },
    version: {
        type: Number
    },
    height: {
        type: Number
    },
    // TODO: Autovalue (Last block id)
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
