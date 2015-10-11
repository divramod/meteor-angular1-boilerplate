// =========== [ FORMLY ] ===========
angular.module('ngOneApp').config(function(formlyConfigProvider) {
  console.log("hello formly config");
  // set templates here
  formlyConfigProvider.setType({
    name: 'custom',
    templateUrl: 'custom.html'
  });
});
