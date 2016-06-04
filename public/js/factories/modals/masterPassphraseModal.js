require('angular');

angular.module('riseApp').factory('masterPassphraseModal', function (btfModal) {
    return btfModal({
        controller: 'masterPassphraseModalController',
        templateUrl: '/partials/modals/masterPassphraseModal.html'
    });
});
