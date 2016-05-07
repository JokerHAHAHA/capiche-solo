angular.module('app.routes', [])


.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })

    .state('menu.homeGame', {
        url: 'homeGame',
        views: {
            'side-menu21': {
                templateUrl: 'templates/homeGame.html',
                controller: 'homeGameCtrl'
            }
        }
    })

    .state('menu.quiz', {
        url: 'quiz',
        views: {
            'side-menu21': {
                templateUrl: 'templates/quiz.html',
                controller: 'quizCtrl'
            }
        }
    })

    .state('menu.ruby', {
        url: 'quiz/ruby',
        views: {
            'side-menu21': {
                templateUrl: 'templates/games/quiz/ruby.html',
                controller: 'quizCtrl'
            }
        }
    })

    .state('menu.gage', {
        url: 'gage',
        views: {
            'side-menu21': {
                templateUrl: 'templates/gage.html',
                controller: 'quizCtrl'
            }
        }
    })

    .state('menu.compte', {
        url: 'compte',
        views: {
            'side-menu21': {
                templateUrl: 'templates/compte.html',
                controller: 'compteCtrl'
            }
        }
    })

    .state('menu', {
        url: '/',
        templateUrl: 'templates/menu.html',
        abstract: true
    })

    .state('menu.chat', {
        url: 'chat',
        views: {
            'side-menu21': {
                templateUrl: 'templates/chat.html',
                controller: 'chatCtrl'
            }
        }
    })

    .state('menu.signup', {
        url: 'signup',
        views: {
            'side-menu21': {
                templateUrl: 'templates/signup.html',
                controller: 'homeCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/homeGame')

});