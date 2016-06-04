require('angular');

angular.module('riseApp').factory('voteModal', function (btfModal) {
    return btfModal({
        controller: 'voteController',
        templateUrl: '/partials/modals/vote.html'
    });
});
