require('angular');

angular.module('riseApp').factory('forgingModal', function (btfModal) {
    return btfModal({
        controller: 'forgingModalController',
        templateUrl: '/partials/modals/forgingModal.html'
    });
});
