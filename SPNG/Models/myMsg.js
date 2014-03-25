myApp.factory('myMsg', [function () {

    // Object Model using Constructor / Prototype pattern
    var MyMsg = function () {
        this.message = 'default';

        return this;
    }

    MyMsg.prototype.getMessage = function () {
        return this.message;
    }

    MyMsg.prototype.setMessage = function (val) {
        this.message = val;
    }

    return MyMsg;
}]);