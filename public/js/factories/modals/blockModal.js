require('angular');

angular.module('riseApp').factory('blockModal', function (btfModal) {
    return btfModal({
        controller: 'blockModalController',
        templateUrl: '/partials/modals/blockModal.html'
    });
});
