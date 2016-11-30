import { Meteor } from 'meteor/meteor';
import { DB } from './collections.js';

Meteor.methods({
    getCollectionCount: (collection) => {
        return DB[collection].find().count();
    }
});

Meteor.startup(() => {
  // code to run on server at startup
});
