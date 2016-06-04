require('angular');

angular.module('riseApp').factory('confirmDeletionModal', function (btfModal) {
    return btfModal({
        controller: 'confirmDeletionModalController',
        templateUrl: '/partials/modals/confirmDeletionModal.html'
    });
});
