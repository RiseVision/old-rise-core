require('angular');

angular.module('riseApp').factory('transactionInfo', function (btfModal) {
    return btfModal({
        controller: 'transactionInfoController',
        templateUrl: '/partials/modals/transactionInfo.html'
    });
});
