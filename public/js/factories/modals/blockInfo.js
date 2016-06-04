require('angular');

angular.module('riseApp').factory('blockInfo', function (btfModal) {
    return btfModal({
        controller: 'blockInfoController',
        templateUrl: '/partials/modals/blockInfo.html'
    });
});
