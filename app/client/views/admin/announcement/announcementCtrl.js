angular.module('reg')
  .controller('SidebarCtrl', [
    'Settings',
    '$sce',
    function(Settings, $sce){

      var Settings = Settings.data;

      $scope.isAnnouncementEnabled = 
        (Settings.announcementText == "" ||
        Settings.announcementText == null,
        Settings.announcementText == undefined) ? false : true;

      $scope.announcementText = $sce.trustAsHtml(converter.makeHtml(Settings.announcementText));
      
    }]);
