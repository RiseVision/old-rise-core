import { defineCollection } from "./helpers.js";

export const TestingCollection = defineCollection("testingCollection", new SimpleSchema({
    value: {
        type: String,
        max: 20
    },
    timestamp: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return { $setOnInsert: new Date() };
            } else {
                this.unset();
            }
        }
    }
}));
