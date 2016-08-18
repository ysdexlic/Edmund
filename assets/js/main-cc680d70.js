/**
 * angular-boilerplate - Edmund Jeffery, singer-songwriter
 * @version v0.0.1
 * @link https://github.com/ysdexlic/Edmund
 * @license MIT
 */
!function(){"use strict";function config($stateProvider,$urlRouterProvider,$logProvider,$httpProvider){$urlRouterProvider.otherwise("/"),$logProvider.debugEnabled(!0),$httpProvider.interceptors.push("httpInterceptor"),$stateProvider.state("root",{})}function MainCtrl($log){$log.debug("MainCtrl loaded!")}function run($log){$log.debug("App is running!"),$(document).ready(function(){function addElement(type,elClass,parent){var newElement=document.createElement(type);return""!==elClass&&$(newElement).addClass(elClass),$(parent).append(newElement),newElement}function fillMenu(type,menuContent){switch(type){case"music":menuContent.innerHTML='<iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221116164&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';break;case"live":var liveText=addElement("div","",menuContent);liveText.textContent="LIVE",menuContent.innerHTML='<iframe class="songkick-widget iframewidget" src="http://widget.songkick.com/songkick-widget.html?artist=8320698&header=Tour%20dates&background-color=transparent&theme=light"</iframe>',$(window).width()<=414&&$(".songkick-widget").addClass("smallphonewidget");break;case"video":{addElement("div","",menuContent)}menuContent.innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Nh4isEZVWS0" frameborder="0" allowfullscreen></iframe>'}}function drawPage(currentPage){switch(currentPage){case"home":var menuOverlay=(addElement("div","logoimage",$("#mainContent")),addElement("div","menuoverlay menufadedata",$("#mainContent"))),menuOverlayLogo=addElement("div","logoimage logooverlay",menuOverlay),menuContentHolder=addElement("div","menucontentholder centertext",menuOverlayLogo),closeButton=addElement("a","menuclosebtn",menuContentHolder);closeButton.href="#";var menuContent=addElement("div","menucontent",menuContentHolder);$("#musicnav").click(function(){$(menuOverlay).addClass("menuopen"),fillMenu("music",menuContent)}),$("#livenav").click(function(){$(menuOverlay).addClass("menuopen"),fillMenu("live",menuContent)}),$("#videonav").click(function(){$(menuOverlay).addClass("menuopen"),fillMenu("video",menuContent)}),$(closeButton).click(function(){$(menuOverlay).removeClass("menuopen"),$(menuContent).empty()})}}drawPage("home")})}angular.element(document).ready(function(){angular.bootstrap(document,["app"])}),config.$inject=["$stateProvider","$urlRouterProvider","$logProvider","$httpProvider"],MainCtrl.$inject=["$log"],run.$inject=["$log"],angular.module("app",["ui.router","home","common.services.data","common.directives.version","common.filters.uppercase","common.interceptors.http","templates"]).config(config).run(run).controller("MainCtrl",MainCtrl).value("version","0.0.1")}(),function(){"use strict";function config($stateProvider){$stateProvider.state("root.home",{url:"/",views:{"@":{templateUrl:"src/app/home/home.tpl.html",controller:"HomeCtrl as home"}}})}function HomeCtrl(){var home=this;home.stuff="stuff"}config.$inject=["$stateProvider"],angular.module("home",[]).config(config).controller("HomeCtrl",HomeCtrl)}(),function(){"use strict";function versionDirective(version){return{restrict:"A",link:function(scope,elm,attrs){elm.text(version)}}}versionDirective.$inject=["version"],angular.module("common.directives.version",[]).directive("appVersion",versionDirective)}(),function(){"use strict";function httpInterceptor($q,$log){return{request:function(config){return config},requestError:function(rejection){return $log.debug(rejection),$q.reject(rejection)},response:function(response){return $log.debug("response: ",response),response},responseError:function(rejection){return $log.debug(rejection),$q.reject(rejection)}}}httpInterceptor.$inject=["$q","$log"],angular.module("common.interceptors.http",[]).factory("httpInterceptor",httpInterceptor)}(),function(){"use strict";function dataService(){return{get:function(){return["some","data"]}}}angular.module("common.services.data",[]).factory("DataService",dataService)}(),function(){"use strict";function uppercase(){return function(text){return text?text.toUpperCase():text}}angular.module("common.filters.uppercase",[]).filter("uppercase",uppercase)}(),function(module){try{module=angular.module("templates")}catch(err){module=angular.module("templates",[])}module.run(["$templateCache",function($templateCache){"use strict";$templateCache.put("src/app/home/home.tpl.html",'<!--\n\n<div id="background-wrapper" class="main-content">\n  <nav id = "mainNav">\n    <a href="#" id="musicnav" class="navlink"></a>\n    <a href="#" id="livenav" class="navlink"></a>\n    <a href="#" id="contactnav" class="navlink"></a>\n  </nav>\n  <div class="social-bar text-center">\n    <ul>\n      <li>\n        <a href="https://www.instagram.com/edmundjefferylive/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>\n      </li>\n      <li>\n        <a href="https://www.facebook.com/edmundjefferymusic/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>\n      </li>\n      <li>\n        <a href="https://twitter.com/EdmundJeffery" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div class="logo-image"></div>\n  <a href="https://geo.itunes.apple.com/us/album/running-ep/id1020403646?mt=1&app=music" target="_blank" id="itunes"></a>\n  <div class="video"></div>\n</div>\n\n-->\n\n\n<div id="mainContent" class="mainContainer">\n  <nav id = "mainNav">\n    <a href="#" id="musicnav" class="navlink">Music</a>\n    <a href="#" id="livenav" class="navlink">Live</a>\n    <a href="#" id="videonav" class="navlink">Video</a>\n  </nav>\n  <div class="social-bar text-center">\n    <ul>\n      <li>\n        <a href="https://www.instagram.com/edmundjefferylive/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>\n      </li>\n      <li>\n        <a href="https://www.facebook.com/edmundjefferymusic/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>\n      </li>\n      <li>\n        <a href="https://twitter.com/EdmundJeffery" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>\n      </li>\n    </ul>\n  </div>\n</div>\n')}])}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJGxvZ1Byb3ZpZGVyIiwiJGh0dHBQcm92aWRlciIsIm90aGVyd2lzZSIsImRlYnVnRW5hYmxlZCIsImludGVyY2VwdG9ycyIsInB1c2giLCJzdGF0ZSIsIk1haW5DdHJsIiwiJGxvZyIsImRlYnVnIiwicnVuIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhZGRFbGVtZW50IiwidHlwZSIsImVsQ2xhc3MiLCJwYXJlbnQiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZENsYXNzIiwiYXBwZW5kIiwiZmlsbE1lbnUiLCJtZW51Q29udGVudCIsImlubmVySFRNTCIsImxpdmVUZXh0IiwidGV4dENvbnRlbnQiLCJ3aW5kb3ciLCJ3aWR0aCIsImRyYXdQYWdlIiwiY3VycmVudFBhZ2UiLCJtZW51T3ZlcmxheSIsIm1lbnVPdmVybGF5TG9nbyIsIm1lbnVDb250ZW50SG9sZGVyIiwiY2xvc2VCdXR0b24iLCJocmVmIiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsImVtcHR5IiwiYW5ndWxhciIsImVsZW1lbnQiLCJib290c3RyYXAiLCIkaW5qZWN0IiwibW9kdWxlIiwiY29udHJvbGxlciIsInZhbHVlIiwidXJsIiwidmlld3MiLCJAIiwidGVtcGxhdGVVcmwiLCJIb21lQ3RybCIsImhvbWUiLCJ0aGlzIiwic3R1ZmYiLCJ2ZXJzaW9uRGlyZWN0aXZlIiwidmVyc2lvbiIsInJlc3RyaWN0IiwibGluayIsInNjb3BlIiwiZWxtIiwiYXR0cnMiLCJ0ZXh0IiwiZGlyZWN0aXZlIiwiaHR0cEludGVyY2VwdG9yIiwiJHEiLCJyZXF1ZXN0IiwicmVxdWVzdEVycm9yIiwicmVqZWN0aW9uIiwicmVqZWN0IiwicmVzcG9uc2UiLCJyZXNwb25zZUVycm9yIiwiZmFjdG9yeSIsImRhdGFTZXJ2aWNlIiwiZ2V0IiwidXBwZXJjYXNl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S0FBS04sV0FRZkQsaUJBQWlCWixTQUFXLFdBSDVCSCxRQUFRSSxPQUFPLGdDQUNabUIsVUFBVSxhQUFjUixxQkFHN0IsV0FDRSxZQUVBLFNBQVNTLGlCQUFnQkMsR0FBSXhELE1BQzNCLE9BQ0V5RCxRQUFTLFNBQVNwRSxRQUNoQixNQUFPQSxTQUVUcUUsYUFBYyxTQUFTQyxXQUVyQixNQURBM0QsTUFBS0MsTUFBTTBELFdBQ0pILEdBQUdJLE9BQU9ELFlBRW5CRSxTQUFVLFNBQVNBLFVBRWpCLE1BREE3RCxNQUFLQyxNQUFNLGFBQWM0RCxVQUNsQkEsVUFFVEMsY0FBZSxTQUFTSCxXQUV0QixNQURBM0QsTUFBS0MsTUFBTTBELFdBQ0pILEdBQUdJLE9BQU9ELGFBU3ZCSixnQkFBZ0JyQixTQUFXLEtBQU0sUUFKakNILFFBQVFJLE9BQU8sK0JBQ1o0QixRQUFRLGtCQUFtQlIsb0JBR2hDLFdBQ0UsWUFFQSxTQUFTUyxlQUNQLE9BQ0VDLElBQUssV0FDSCxPQUFRLE9BQVEsVUFLdEJsQyxRQUFRSSxPQUFPLDJCQUNaNEIsUUFBUSxjQUFlQyxnQkFHNUIsV0FDRSxZQUVBLFNBQVNFLGFBQ1AsTUFBTyxVQUFTYixNQUNkLE1BQU9BLE1BQU9BLEtBQUtjLGNBQWdCZCxNQUl2Q3RCLFFBQVFJLE9BQU8sK0JBQ1ppQyxPQUFPLFlBQWFGLGNBR3pCLFNBQVUvQixRQUNWLElBQU1BLE9BQVNKLFFBQVFJLE9BQU8sYUFDOUIsTUFBTWtDLEtBQU9sQyxPQUFTSixRQUFRSSxPQUFPLGdCQUNyQ0EsT0FBT2pDLEtBQUssaUJBQWtCLFNBQVNvRSxnQkFDckMsWUFDQUEsZ0JBQWVDLElBQUksNkJBQ2pCIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLWNjNjgwZDcwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9nUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcbiAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdodHRwSW50ZXJjZXB0b3InKTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdyb290Jywge1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBNYWluQ3RybCgkbG9nKSB7XG4gICAgJGxvZy5kZWJ1ZygnTWFpbkN0cmwgbG9hZGVkIScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuKCRsb2cpIHtcbiAgICAkbG9nLmRlYnVnKCdBcHAgaXMgcnVubmluZyEnKTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQG5hbWUgYWRkRWxlbWVudFxuICAgICAgICogQHBhcmFtIHR5cGVcbiAgICAgICAqIEBwYXJhbSBlbENsYXNzXG4gICAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudCAodHlwZSwgZWxDbGFzcywgcGFyZW50KVxuICAgICAge1xuICAgICAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICAgICAgaWYgKGVsQ2xhc3MgIT09ICcnKSB7XG4gICAgICAgICAgJChuZXdFbGVtZW50KS5hZGRDbGFzcyhlbENsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQocGFyZW50KS5hcHBlbmQobmV3RWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQG5hbWUgZmlsbE1lbnVcbiAgICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICAgKiBAcGFyYW0gbWVudUNvbnRlbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZmlsbE1lbnUodHlwZSwgbWVudUNvbnRlbnQpXG4gICAgICB7XG4gICAgICAgIHN3aXRjaCh0eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgY2FzZSAnbXVzaWMnOlxuICAgICAgICAgICAgbWVudUNvbnRlbnQuaW5uZXJIVE1MID0gJzxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIHNyYz1cImh0dHBzOi8vdy5zb3VuZGNsb3VkLmNvbS9wbGF5ZXIvP3VybD1odHRwcyUzQS8vYXBpLnNvdW5kY2xvdWQuY29tL3RyYWNrcy8yMjExMTYxNjQmYW1wO2F1dG9fcGxheT1mYWxzZSZhbXA7aGlkZV9yZWxhdGVkPWZhbHNlJmFtcDtzaG93X2NvbW1lbnRzPXRydWUmYW1wO3Nob3dfdXNlcj10cnVlJmFtcDtzaG93X3JlcG9zdHM9ZmFsc2UmYW1wO3Zpc3VhbD10cnVlXCI+PC9pZnJhbWU+JztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnbGl2ZSc6XG4gICAgICAgICAgICB2YXIgbGl2ZVRleHQgPSBhZGRFbGVtZW50KCdkaXYnLCAnJywgbWVudUNvbnRlbnQpO1xuICAgICAgICAgICAgbGl2ZVRleHQudGV4dENvbnRlbnQgPSAnTElWRSc7XG4gICAgICAgICAgICBtZW51Q29udGVudC5pbm5lckhUTUwgPSAnPGlmcmFtZSBjbGFzcz1cInNvbmdraWNrLXdpZGdldCBpZnJhbWV3aWRnZXRcIiBzcmM9XCJodHRwOi8vd2lkZ2V0LnNvbmdraWNrLmNvbS9zb25na2ljay13aWRnZXQuaHRtbD9hcnRpc3Q9ODMyMDY5OCZoZWFkZXI9VG91ciUyMGRhdGVzJmJhY2tncm91bmQtY29sb3I9dHJhbnNwYXJlbnQmdGhlbWU9bGlnaHRcIjwvaWZyYW1lPic7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNDE0KSB7XG4gICAgICAgICAgICAgICQoJy5zb25na2ljay13aWRnZXQnKS5hZGRDbGFzcygnc21hbGxwaG9uZXdpZGdldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgICB2YXIgdmlkZW9UZXh0ID0gYWRkRWxlbWVudCgnZGl2JywgJycsIG1lbnVDb250ZW50KTtcbiAgICAgICAgICAgIG1lbnVDb250ZW50LmlubmVySFRNTCA9ICc8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9OaDRpc0VaVldTMFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZHJhd1BhZ2UoY3VycmVudFBhZ2UpXG4gICAgICB7XG5cbiAgICAgICAgc3dpdGNoIChjdXJyZW50UGFnZSlcbiAgICAgICAge1xuICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuXG4gICAgICAgICAgICB2YXIgaGVzR2lybCA9IGFkZEVsZW1lbnQoJ2RpdicsICdsb2dvaW1hZ2UnLCAkKCcjbWFpbkNvbnRlbnQnKSk7XG5cbiAgICAgICAgICAgIHZhciBtZW51T3ZlcmxheSA9IGFkZEVsZW1lbnQoJ2RpdicsICdtZW51b3ZlcmxheSBtZW51ZmFkZWRhdGEnLCAkKCcjbWFpbkNvbnRlbnQnKSk7XG4gICAgICAgICAgICB2YXIgbWVudU92ZXJsYXlMb2dvID0gYWRkRWxlbWVudCgnZGl2JywgJ2xvZ29pbWFnZSBsb2dvb3ZlcmxheScsIG1lbnVPdmVybGF5KTtcblxuICAgICAgICAgICAgdmFyIG1lbnVDb250ZW50SG9sZGVyID0gYWRkRWxlbWVudCgnZGl2JywgJ21lbnVjb250ZW50aG9sZGVyIGNlbnRlcnRleHQnLCBtZW51T3ZlcmxheUxvZ28pO1xuICAgICAgICAgICAgdmFyIGNsb3NlQnV0dG9uID0gYWRkRWxlbWVudCgnYScsICdtZW51Y2xvc2VidG4nLCBtZW51Q29udGVudEhvbGRlcik7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5ocmVmPScjJztcbiAgICAgICAgICAgIHZhciBtZW51Q29udGVudCA9IGFkZEVsZW1lbnQoJ2RpdicsICdtZW51Y29udGVudCcsIG1lbnVDb250ZW50SG9sZGVyKTtcblxuICAgICAgICAgICAgJCgnI211c2ljbmF2JykuY2xpY2soZnVuY3Rpb24gKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJChtZW51T3ZlcmxheSkuYWRkQ2xhc3MgKCdtZW51b3BlbicpO1xuICAgICAgICAgICAgICBmaWxsTWVudSgnbXVzaWMnLCBtZW51Q29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJyNsaXZlbmF2JykuY2xpY2soZnVuY3Rpb24gKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJChtZW51T3ZlcmxheSkuYWRkQ2xhc3MgKCdtZW51b3BlbicpO1xuICAgICAgICAgICAgICBmaWxsTWVudSgnbGl2ZScsIG1lbnVDb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnI3ZpZGVvbmF2JykuY2xpY2soZnVuY3Rpb24gKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJChtZW51T3ZlcmxheSkuYWRkQ2xhc3MgKCdtZW51b3BlbicpO1xuICAgICAgICAgICAgICBmaWxsTWVudSgndmlkZW8nLCBtZW51Q29udGVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChjbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJChtZW51T3ZlcmxheSkucmVtb3ZlQ2xhc3MgKCdtZW51b3BlbicpO1xuICAgICAgICAgICAgICAkKG1lbnVDb250ZW50KS5lbXB0eSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHJhd1BhZ2UoJ2hvbWUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdob21lJyxcbiAgICAgICdjb21tb24uc2VydmljZXMuZGF0YScsXG4gICAgICAnY29tbW9uLmRpcmVjdGl2ZXMudmVyc2lvbicsXG4gICAgICAnY29tbW9uLmZpbHRlcnMudXBwZXJjYXNlJyxcbiAgICAgICdjb21tb24uaW50ZXJjZXB0b3JzLmh0dHAnLFxuICAgICAgJ3RlbXBsYXRlcydcbiAgICBdKVxuICAgIC5jb25maWcoY29uZmlnKVxuICAgIC5ydW4ocnVuKVxuICAgIC5jb250cm9sbGVyKCdNYWluQ3RybCcsIE1haW5DdHJsKVxuICAgIC52YWx1ZSgndmVyc2lvbicsICcwLjAuMScpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEBuYW1lICBjb25maWdcbiAgICogQGRlc2NyaXB0aW9uIGNvbmZpZyBibG9ja1xuICAgKi9cbiAgZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncm9vdC5ob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAnQCc6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9ob21lL2hvbWUudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDdHJsIGFzIGhvbWUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSAgSG9tZUN0cmxcbiAgICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXJcbiAgICovXG4gIGZ1bmN0aW9uIEhvbWVDdHJsKCkge1xuICAgIHZhciBob21lID0gdGhpcztcbiAgICBob21lLnN0dWZmID0gJ3N0dWZmJztcbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdob21lJywgW10pXG4gICAgLmNvbmZpZyhjb25maWcpXG4gICAgLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgSG9tZUN0cmwpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gdmVyc2lvbkRpcmVjdGl2ZSh2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAvKmpzaGludCB1bnVzZWQ6ZmFsc2UqL1xuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMpIHtcbiAgICAgICAgZWxtLnRleHQodmVyc2lvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdjb21tb24uZGlyZWN0aXZlcy52ZXJzaW9uJywgW10pXG4gICAgLmRpcmVjdGl2ZSgnYXBwVmVyc2lvbicsIHZlcnNpb25EaXJlY3RpdmUpO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gaHR0cEludGVyY2VwdG9yKCRxLCAkbG9nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSxcbiAgICAgIHJlcXVlc3RFcnJvcjogZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG4gICAgICAgICRsb2cuZGVidWcocmVqZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdyZXNwb25zZTogJywgcmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG4gICAgICAgICRsb2cuZGVidWcocmVqZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnY29tbW9uLmludGVyY2VwdG9ycy5odHRwJywgW10pXG4gICAgLmZhY3RvcnkoJ2h0dHBJbnRlcmNlcHRvcicsIGh0dHBJbnRlcmNlcHRvcik7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBkYXRhU2VydmljZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFsnc29tZScsICdkYXRhJ107XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdjb21tb24uc2VydmljZXMuZGF0YScsIFtdKVxuICAgIC5mYWN0b3J5KCdEYXRhU2VydmljZScsIGRhdGFTZXJ2aWNlKTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIHVwcGVyY2FzZSgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIHRleHQgPyB0ZXh0LnRvVXBwZXJDYXNlKCkgOiB0ZXh0O1xuICAgIH07XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnY29tbW9uLmZpbHRlcnMudXBwZXJjYXNlJywgW10pXG4gICAgLmZpbHRlcigndXBwZXJjYXNlJywgdXBwZXJjYXNlKTtcbn0pKCk7XG5cbihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7IG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIpOyB9XG5jYXRjaChlcnIpIHsgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pOyB9XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJzcmMvYXBwL2hvbWUvaG9tZS50cGwuaHRtbFwiLFxuICAgIFwiPCEtLVxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgaWQ9XFxcImJhY2tncm91bmQtd3JhcHBlclxcXCIgY2xhc3M9XFxcIm1haW4tY29udGVudFxcXCI+XFxuXCIgK1xuICAgIFwiICA8bmF2IGlkID0gXFxcIm1haW5OYXZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwibXVzaWNuYXZcXFwiIGNsYXNzPVxcXCJuYXZsaW5rXFxcIj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDxhIGhyZWY9XFxcIiNcXFwiIGlkPVxcXCJsaXZlbmF2XFxcIiBjbGFzcz1cXFwibmF2bGlua1xcXCI+PC9hPlxcblwiICtcbiAgICBcIiAgICA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwiY29udGFjdG5hdlxcXCIgY2xhc3M9XFxcIm5hdmxpbmtcXFwiPjwvYT5cXG5cIiArXG4gICAgXCIgIDwvbmF2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwic29jaWFsLWJhciB0ZXh0LWNlbnRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDx1bD5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VkbXVuZGplZmZlcnlsaXZlL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1pbnN0YWdyYW1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VkbXVuZGplZmZlcnltdXNpYy9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZmFjZWJvb2stc3F1YXJlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vRWRtdW5kSmVmZmVyeVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyLXNxdWFyZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPC91bD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibG9nby1pbWFnZVxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8YSBocmVmPVxcXCJodHRwczovL2dlby5pdHVuZXMuYXBwbGUuY29tL3VzL2FsYnVtL3J1bm5pbmctZXAvaWQxMDIwNDAzNjQ2P210PTEmYXBwPW11c2ljXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaWQ9XFxcIml0dW5lc1xcXCI+PC9hPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwidmlkZW9cXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIi0tPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgaWQ9XFxcIm1haW5Db250ZW50XFxcIiBjbGFzcz1cXFwibWFpbkNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8bmF2IGlkID0gXFxcIm1haW5OYXZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwibXVzaWNuYXZcXFwiIGNsYXNzPVxcXCJuYXZsaW5rXFxcIj5NdXNpYzwvYT5cXG5cIiArXG4gICAgXCIgICAgPGEgaHJlZj1cXFwiI1xcXCIgaWQ9XFxcImxpdmVuYXZcXFwiIGNsYXNzPVxcXCJuYXZsaW5rXFxcIj5MaXZlPC9hPlxcblwiICtcbiAgICBcIiAgICA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwidmlkZW9uYXZcXFwiIGNsYXNzPVxcXCJuYXZsaW5rXFxcIj5WaWRlbzwvYT5cXG5cIiArXG4gICAgXCIgIDwvbmF2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwic29jaWFsLWJhciB0ZXh0LWNlbnRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDx1bD5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VkbXVuZGplZmZlcnlsaXZlL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1pbnN0YWdyYW1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VkbXVuZGplZmZlcnltdXNpYy9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZmFjZWJvb2stc3F1YXJlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vRWRtdW5kSmVmZmVyeVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyLXNxdWFyZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPC91bD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=