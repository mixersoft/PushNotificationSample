/**
 * Author: hollyschinsky
 * twitter: @devgirfl
 * blog: devgirl.org
 * more tutorials: hollyschinsky.github.io
 */
var app = angular.module('app', ['ionic','ngCordova'])
.run(function($ionicPlatform, PARSE) {
        // initialize Parse so we have access to Parse._getInstallationId()
        Parse.initialize( PARSE.parse_appkey, PARSE.parse_jskey )
        PARSE.parseInstallationId = Parse._getInstallationId();
        console.log('Parse InstallationId= ' + PARSE.parseInstallationId );  

})

app.value( 'PARSE', {
  parse_appkey: "",
  // WARNING: for testing unregister only. do NOT include MASTER key in app. use cloudCode instead
  parse_MASTER_key: "",
  // end WARNING
  parse_restkey: "",
  parse_jskey: "",
  parseInstallationId: null,  // set with Parse._getInstallationId();
})

