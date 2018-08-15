angular.module('reg')
  .controller('ConfirmationCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    'currentUser',
    'Utils',
    'UserService',
    function($scope, $rootScope, $state, currentUser, Utils, UserService){

      // Set up the user
      var user = currentUser.data;
      $scope.user = user;

      $scope.pastConfirmation = Date.now() > user.status.confirmBy;

      $scope.formatTime = Utils.formatTime;

      _setupForm();

      //$scope.fileName = user._id + "_" + user.profile.name.split(" ").join("_");

      // -------------------------------
      // All this just for dietary restriction checkboxes fml

      // -------------------------------

      function _updateUser(e){
        var confirmation = $scope.user.confirmation;

        UserService
          .updateConfirmation(user._id, confirmation)
          .success(function(data){
            sweetAlert({
              title: "Woo!",
              text: "You're confirmed!",
              type: "success",
              confirmButtonColor: "#ff1d8e"
            }, function(){
              $state.go('app.dashboard');
            });
          })
          .error(function(res){
            sweetAlert("Uh oh!", "Something went wrong.", "error");
          });
      }

      function _setupForm(){
        // Semantic-UI form validation
        $('.ui.form').form({
          fields: {
            signatureLiability: {
              identifier: 'liability-waiver',
              rules: [
                {
                  type: 'checked',
                  prompt: 'Please accept the liability waiver terms.'
                }
              ]
            },
            signaturePhotoRelease: {
              identifier: 'photo-release',
              rules: [
                {
                  type: 'checked',
                  prompt: 'Please accept the photo release terms.'
                }
              ]
            },
            signatureCodeOfConduct: {
              identifier: 'mlh-coc',
              rules: [
                {
                  type: 'checked',
                  prompt: 'Please accept the MLH Code of Conduct.'
                }
              ]
            },
            signaturePrivacyPolicy: {
              identifier: 'mlh-privacy',
              rules: [
                {
                  type: 'checked',
                  prompt: 'Please accept the MLH Privacy policy.'
                }
              ]
            }
          }
        });
      }

      $scope.submitForm = function(){
        if ($('.ui.form').form('is valid')){
          _updateUser();
        } else {
          sweetAlert("Uh oh!", "Please Fill The Required Fields", "error");
        }
      };

    }]);