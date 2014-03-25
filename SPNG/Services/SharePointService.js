myApp.factory('SharePointService', function ($q, $http) {
    SP.SOD.executeOrDelayUntilScriptLoaded(Function.createDelegate(this, function() { 
        
        this.getCurrentUser = function () {
            var deferred = $.Deferred();

            var context = SP.ClientContext.get_current();
            var user = context.get_web().get_currentUser(); 

            context.load(user);
            context.executeQueryAsync(
                Function.createDelegate(this, function (sender, args) {
                    // Success
                    deferred.resolve(user);
                }),
                Function.createDelegate(this, function (sender, args) {
                    // Failure
                    deferred.reject('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
                })
            );
            
            return deferred;
        };

    }), "SP.js");

    return {
        getCurrentUser: this.getCurrentUser
    };
});