/* jshint undef:false*/
(function() {
  'use strict';

  describe('HomeCtrl', function() {
    var rootScope;
    var ctrl;
    var scope;

    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $controller) {
      rootScope = $rootScope;
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl as home', {
        $scope: scope
      });
    }));

    /*
    it('should not be null', function() {
      expect(ctrl).not.toEqual(null);
    });
    */

  });
})();
