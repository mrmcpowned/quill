angular.module('reg')
  .controller('AnnouncementCtrl', [
    '$scope',
    '$sce',
    'settings',
    function($scope, $sce, Settings){

      var Settings = Settings.data;

      $scope.isAnnouncementEnabled = 
        (Settings.announcementText == "" ||
        Settings.announcementText == null,
        Settings.announcementText == undefined) ? false : true;

      $scope.announcementText = $sce.trustAsHtml(converter.makeHtml(Settings.announcementText));
      
    }]);
