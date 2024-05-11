var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http, $timeout) {

    $scope.title = "大家來聊天";
    $scope.userName = "";
    $scope.userMsg = "";
    $scope.bindState = false;

    function getbaseURL() {

        var currentURL = window.location.href;
        var url = new URL(currentURL);
        var baseURL = url.origin;

        return baseURL;
    }



    // 使用者名稱儲存
    $scope.SaveUserName = function () {
        var text = "用戶【" + $scope.userName + "】" + " 已加入聊天室. ";

        mySignalHub_web.server.publishMsg(text);
        $scope.bindState = true;
    }

    $scope.SendMsgAndClearMsgBox = function () {
        // 給客戶端註冊方法，客戶端必須有方法來給Server 調用
        // 這裡創建了 getMyMethod 方法給Server 調用，Client 接收到請求後，執行方法，將Sever 傳來的文字打印出來

        var text = $scope.userName + " : " + $scope.userMsg;
        // 調用Hub 提供的方法
        mySignalHub_web.server.publishMsg(text);

        $scope.userMsg = "";
    }
});