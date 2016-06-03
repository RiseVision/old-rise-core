require('angular');

angular.module('riseApp').factory('addContactModal', function (btfModal) {
    return btfModal({
        controller: 'addContactModalController',
        templateUrl: '/partials/modals/addContactModal.html'
    });
});
