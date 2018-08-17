angular.module('reg')
  .controller('announcementCtrl', [
    'Settings',
    '$sce',
    '$scope',
    function(Settings, $sce, $scope){

      var Settings = Settings.data;

      $scope.isAnnouncementEnabled = 
        (Settings.announcementText == "" ||
        Settings.announcementText == null,
        Settings.announcementText == undefined) ? false : true;

      $scope.announcementText = $sce.trustAsHtml(converter.makeHtml(Settings.announcementText));
      
    }]);
