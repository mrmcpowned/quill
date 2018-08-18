angular.module('reg')
  .controller('AnnouncementCtrl', [
    '$scope',
    '$sce',
    'settings',
    function($scope, $sce, Settings){

      var Settings = Settings.data;

      var converter = new showdown.Converter();
      $scope.announcementText = $sce.trustAsHtml(converter.makeHtml(Settings.announcementText));

      $scope.showAnnouncement = $scope.announcementText;

      console.log("announcement text", announcementText);
      
    }]);
