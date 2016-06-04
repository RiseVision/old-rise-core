require('angular');

angular.module('riseApp').controller('templateController', ['$scope', '$rootScope', '$http', 'userService', "$interval", 'gettextCatalog', function ($rootScope, $scope, $http, userService, $interval, gettextCatalog) {

    $scope.getSync = function () {
        $http.get("/api/loader/status/sync").then(function (resp) {
            if (resp.data.success) {
                $rootScope.sync = resp.data.sync;
                $rootScope.height = resp.data.height;
                $rootScope.heightToSync = resp.data.blocks;
            }
        });
    }

    $scope.syncInterval = $interval(function () {
        $scope.getSync();
    }, 1000 * 10);

    $scope.getSync();

}]);
