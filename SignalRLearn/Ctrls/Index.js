var app = angular.module('myApp', []);

app.controller('myController', function ($scope, $http, $timeout) {

    $scope.title = "大家來聊天";
    $scope.userName = "";
    $scope.userMsg = "";
    $scope.bindState = false;
    $scope.inputFocused = false;
    // 存放聊天資訊的位置
    $scope.chartList = [];

    $scope.chartTableHeader = ["姓名", "訊息"];

    function getbaseURL() {

        var currentURL = window.location.href;
        var url = new URL(currentURL);
        var baseURL = url.origin;



        return baseURL;
    }

    mySignalHub_web.client.clientMsgPublishToTable = function (data) {
        // 將資料放入
        // 將資料放入
        $scope.$apply(function () {
            $scope.chartList.push(data);
        });

        console.log($scope.chartList);
    }

    // 使用者名稱儲存
    $scope.SaveUserName = function () {
        var text = "用戶【" + $scope.userName + "】" + " 已加入聊天室. ";

        mySignalHub_web.server.publishMsg(text);
        $scope.bindState = true;
    }

    $scope.onInputFocus = function () {
        $scope.inputFocused = true;
    };

    $scope.onKeyPress = function (event) {
        if ($scope.inputFocused && event.keyCode === 13) { // Enter 鍵的 keyCode 為 13
            $scope.SendMsgAndClearMsgBox();
        }
    };

    $scope.SendMsgAndClearMsgBox = function () {
        // 給客戶端註冊方法，客戶端必須有方法來給Server 調用
        // 這裡創建了 getMyMethod 方法給Server 調用，Client 接收到請求後，執行方法，將Sever 傳來的文字打印出來

        if ($scope.userMsg == "") {
            return;
        }
        // 調用Hub 提供的方法
        mySignalHub_web.server.publishMsgToClientTable($scope.userName, $scope.userMsg);

        $scope.userMsg = "";
    }
});