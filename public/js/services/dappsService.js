require('angular');

angular.module('riseApp').service('dappsService', function () {

    var dapp = {
        searchForDapp: '',
        searchForDappGlobal: ''
    }

    return dapp;

});
