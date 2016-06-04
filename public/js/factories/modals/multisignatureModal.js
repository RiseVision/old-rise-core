require('angular');

angular.module('riseApp').factory('multisignatureModal', function (btfModal) {
    return btfModal({
        controller: 'multisignatureModalController',
        templateUrl: '/partials/modals/multisignatureModal.html'
    });
});
