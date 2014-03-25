myApp.controller('myCtrl', ['$scope', 'SharePointService', 'myMsg', function ($scope, SharePointService, myMsg) {
    // Instantiate our object model
    $scope.msg = new myMsg();
    
    // Update the view
    SharePointService.getCurrentUser()
        .then(function (user) {

            // Update the message
            $scope.msg.setMessage('Hello ' + user.get_title());

            //$scope is not updating so force with this command
            if (!$scope.$$phase) { $scope.$apply(); }

        });
    
}])
.directive('myMsg', function () {
    return {
        templateUrl: '../Views/myMsgView.html'
    };
});