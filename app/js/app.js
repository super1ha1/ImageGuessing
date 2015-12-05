'use strict';
var myApp = angular.module('myApp', ['ui.router', 'myApp.controller','myApp.DataController', 'timer','ds.clock', 'ui.bootstrap']);
myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/intro");
    //
    // Now set up the states
    $stateProvider
        .state('intro', {
            url: "/intro",
            templateUrl: "html/introduction.html"
        })

        .state('user_info', {
            url: "/user",
            templateUrl: "html/user_info.html",
            controller: "UserController"
        })

        .state('show', {
            url: "/show",
            templateUrl: "html/show.html",
            controller: "ShowController"
        })

        .state('question', {
            url: "/question",
            templateUrl: "html/question.html",
            controller: "QuestionController"
        })

        .state('test', {
            url: "/test",
            templateUrl: "html/test.html",
            controller: "TestController"
        })

        .state('summary', {
            url: "/summary",
            templateUrl: "html/summary.html",
            controller: "SummaryController"
        })

        .state('model',{
            url: "/model",
            templateUrl: "html/model.html",
            controller : "ModalDemoCtrl"
        })

        .state('rating', {
            url: "/rating",
            templateUrl: "html/rating.html",
            controller: "RatingModalController"
        })


});
Parse.initialize("8tR4QlSj9yIvErjnMHCvsielA5I3W7iQ5h6ACs4O", "LEPVlOIFyqPDHA8UyWskmjc0A9MyJ08pbyZbLlLn");

//var TestObject = Parse.Object.extend("TestObject");
//var testObject = new TestObject();
//testObject.save({foo: "bar"}).then(function(object) {
//    alert("yay! it worked");
//});
