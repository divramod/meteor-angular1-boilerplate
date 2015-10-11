// =========== [ ngOneApp PartiesListCtrl ] ===========
angular.module('ngOneApp').directive('exampleDirective', function() {
  return {
    templateUrl: 'example-directive.html'
  }
});

// =========== [ ngOneApp PartiesListCtrl ] ===========
angular.module('ngOneApp').controller('PartiesInsertCtrl', function(
  $scope,
  $meteor,
  formlyVersion
) {
  var vm = this;
  // funcation assignment
  vm.onSubmit = onSubmit;

  // variable assignment
  vm.author = { // optionally fill in your info below :-)
    name: 'Kent C. Dodds',
    url: 'https://twitter.com/kentcdodds' // a link to your twitter/github/blog/whatever
  };
  vm.exampleTitle = 'Introduction';
  vm.env = {
    angularVersion: angular.version.full,
    formlyVersion: formlyVersion
  };

  vm.model = {
    awesome: true
  };
  vm.options = {
    formState: {
      awesomeIsForced: false
    }
  };

  vm.fields = [{
    key: 'text',
    type: 'input',
    templateOptions: {
      label: 'Text',
      placeholder: 'Formly is terrific!'
    }
  }, {
    key: 'nested.story',
    type: 'textarea',
    templateOptions: {
      label: 'Some sweet story',
      placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
      description: ''
    },
    expressionProperties: {
      'templateOptions.focus': 'formState.awesomeIsForced',
      'templateOptions.description': function(viewValue, modelValue, scope) {
        if (scope.formState.awesomeIsForced) {
          return 'And look! This field magically got focus!';
        }
      }
    }
  }, {
    key: 'awesome',
    type: 'checkbox',
    templateOptions: {
      label: ''
    },
    expressionProperties: {
      'templateOptions.disabled': 'formState.awesomeIsForced',
      'templateOptions.label': function(viewValue, modelValue, scope) {
        if (scope.formState.awesomeIsForced) {
          return 'Too bad, formly is really awesome...';
        } else {
          return 'Is formly totally awesome? (uncheck this and see what happens)';
        }
      }
    }
  }, {
    key: 'whyNot',
    type: 'textarea',
    expressionProperties: {
      'templateOptions.placeholder': function(viewValue, modelValue, scope) {
        if (scope.formState.awesomeIsForced) {
          return 'Too bad... It really is awesome! Wasn\'t that cool?';
        } else {
          return 'Type in here... I dare you';
        }
      },
      'templateOptions.disabled': 'formState.awesomeIsForced'
    },
    hideExpression: 'model.awesome',
    templateOptions: {
      label: 'Why Not?',
      placeholder: 'Type in here... I dare you'
    },
    watcher: {
      listener: function(field, newValue, oldValue, formScope, stopWatching) {
        if (newValue) {
          stopWatching();
          formScope.model.awesome = true;
          formScope.model.whyNot = undefined;
          field.hideExpression = null;
          formScope.options.formState.awesomeIsForced = true;
        }
      }
    }
  }, {
    key: 'custom',
    type: 'custom',
    templateOptions: {
      label: 'Custom inlined',
    }
  }, {
    key: 'exampleDirective',
    template: '<div example-directive></div>',
    templateOptions: {
      label: 'Example Directive',
    }
  }];

  // function definition
  function onSubmit() {
    alert(JSON.stringify(vm.model), null, 2);
  }

});
