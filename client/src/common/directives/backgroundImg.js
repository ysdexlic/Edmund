(function() {
  'use strict';
  function backgroundImg(){
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var url = attrs.backgroundImg;
        element.css({
          'background-image': 'url(' + url + ')',
          'background-size': 'cover'
        });
      }
    }
  }

  angular.module('common.directives.backgroundImg', [])
    .directive('backgroundImg', backgroundImg);

})();



/*

app.directive('backImg', function(){
  return function(scope, element, attrs){
    var url = attrs.backImg;
    element.css({
      'background-image': 'url(' + url +')',
      'background-size' : 'cover'
    });
  };
});​

*/
