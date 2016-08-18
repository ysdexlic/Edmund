(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl loaded!');
  }

  function run($log) {
    $log.debug('App is running!');

    $(document).ready(function () {

      /**
       *
       * @name addElement
       * @param type
       * @param elClass
       * @param parent
       * @returns {Element}
       */
      function addElement (type, elClass, parent)
      {
        var newElement = document.createElement(type);

        if (elClass !== '') {
          $(newElement).addClass(elClass);
        }

        $(parent).append(newElement);

        return newElement;
      }

      /**
       * @name fillMenu
       * @param type
       * @param menuContent
       */
      function fillMenu(type, menuContent)
      {
        switch(type)
        {
          case 'music':
            menuContent.innerHTML = '<iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221116164&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
            break;

          case 'live':
            var liveText = addElement('div', '', menuContent);
            liveText.textContent = 'LIVE';
            menuContent.innerHTML = '<iframe class="songkick-widget iframewidget" src="http://widget.songkick.com/songkick-widget.html?artist=8320698&header=Tour%20dates&background-color=transparent&theme=light"</iframe>';
            if ($(window).width() <= 414) {
              $('.songkick-widget').addClass('smallphonewidget');
            }
            break;

          case 'video':
            var videoText = addElement('div', '', menuContent);
            menuContent.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Nh4isEZVWS0" frameborder="0" allowfullscreen></iframe>';
            break;
        }
      }

      function drawPage(currentPage)
      {

        switch (currentPage)
        {
          case 'home':

            var hesGirl = addElement('div', 'logoimage', $('#mainContent'));

            var menuOverlay = addElement('div', 'menuoverlay menufadedata', $('#mainContent'));
            var menuOverlayLogo = addElement('div', 'logoimage logooverlay', menuOverlay);

            var menuContentHolder = addElement('div', 'menucontentholder centertext', menuOverlayLogo);
            var closeButton = addElement('a', 'menuclosebtn', menuContentHolder);
            closeButton.href='#';
            var menuContent = addElement('div', 'menucontent', menuContentHolder);

            $('#musicnav').click(function ()
            {
              $(menuOverlay).addClass ('menuopen');
              fillMenu('music', menuContent);
            });
            $('#livenav').click(function ()
            {
              $(menuOverlay).addClass ('menuopen');
              fillMenu('live', menuContent);
            });
            $('#videonav').click(function ()
            {
              $(menuOverlay).addClass ('menuopen');
              fillMenu('video', menuContent);
            });

            $(closeButton).click(function ()
            {
              $(menuOverlay).removeClass ('menuopen');
              $(menuContent).empty();
            });


            break;

        }
      }
      drawPage('home');
    });
  }

  angular.module('app', [
      'ui.router',
      'home',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '0.0.1');
})();
