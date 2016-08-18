(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl as home'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl() {
    var home = this;
    home.stuff = 'stuff';
  }

  angular.module('home', [])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
