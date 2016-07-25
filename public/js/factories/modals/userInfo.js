require('angular');

angular.module('riseApp').factory('userInfo', function (btfModal) {
    return btfModal({
        controller: 'userInfoController',
        templateUrl: '/partials/modals/userInfo.html'
    });
});
