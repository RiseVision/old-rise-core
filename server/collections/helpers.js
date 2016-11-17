import { Mongo } from 'meteor/mongo';

export const defineCollection = function(name, schema){
    let collection = new Mongo.Collection(name);
    collection.schema = schema;
    collection.attachSchema(schema);
    return collection;
}
