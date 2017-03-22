function ShowAuthed(User){
  'ngInject';

  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      scope.User = User;

      scope.$watch('User.current', function(val){
        // si detecta un usuario
        if(val){
          if(attrs.showAuthed === 'true'){
            element.css({ display: 'inherit' })
          } else {
            element.css({ display: 'none' })
          }
        }
        // no detecta usuario
        else {
          if(attrs.showAuthed === 'true'){
            element.css({ display: 'none' })
          } else {
            element.css({ display: 'inherit' })
          }
        }
      });
    }
  };
}

export default ShowAuthed;
