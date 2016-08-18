/* jshint undef:false*/
(function() {
  'use strict';

  describe('app module', function() {
    var module;
    var deps;

    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      module = angular.module('app');
      deps = module.value('app').requires;
    });
  
    
    it('should be registered', function() {
      expect(module).not.toEqual(null);
    });

    
  });
})();
