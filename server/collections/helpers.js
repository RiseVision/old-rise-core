import { Mongo } from 'meteor/mongo';

export const defineCollection = function(name, schema, triggers){
    let collection = new Mongo.Collection(name);
    collection.schema = schema;
    collection.attachSchema(schema);
    if(triggers){
        triggers.forEach(function(obj){
            collection[obj.timing][obj.type](obj.func);
        });
    }
    return collection;
}
