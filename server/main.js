import { Meteor } from 'meteor/meteor';
import { DB } from './collections.js';
// TODO: Test github-todos
Meteor.methods({
    getCollectionCount: (collection) => {
        return DB[collection].find().count();
    },
    getPreviousId: (collection, id) => {
        let idQuery = DB[collection].findOne({
            _id: {
                $eq: id
            }
        });
        let rowQuery = DB[collection].findOne({
            rowId: {
                $eq: idQuery.rowId - 1
            }
        });
        return rowQuery._id;
    },
    // The purpose of this function is to update a collection during autovalue generation.
    updateCollection: (collection, selector, modifier) => {
        DB[collection].update(selector, modifier, function(error, result){
            if(error){
                console.log(error);
            }
        });
    }
});

Meteor.startup(() => {
  // code to run on server at startup
});
