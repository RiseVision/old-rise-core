import { defineCollection } from "./helpers.js";

export const Migrations = defineCollection("migrations", new SimpleSchema({
    name: {
        type: String
    }
}));
