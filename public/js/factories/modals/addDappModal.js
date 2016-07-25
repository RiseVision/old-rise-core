require('angular');

angular.module('riseApp').factory('addDappModal', function (btfModal) {
    return btfModal({
        controller: 'addDappModalController',
        templateUrl: '/partials/modals/addDappModal.html'
    });
});
