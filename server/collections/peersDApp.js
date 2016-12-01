import { defineCollection } from './helpers.js';

export const PeersDApp = defineCollection('peersDApp', new SimpleSchema({
    peerId: {
        type: Number,
        custom: function(){
            Meteor.call("isExistent", "Peers", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "peerId query error."
                }
                if(!result){
                    return "peerId not found."
                }
            });
        }
    },
    dappId: {
        type: String,
        custom: function(){
            Meteor.call("isExistent", "DApps", this.value, function(error, result){
                if(error){
                    console.error(error);
                    return "dappId query error."
                }
                if(!result){
                    return "dappId not found."
                }
            });
        }
    }
}));
