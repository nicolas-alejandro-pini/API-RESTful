function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl as $ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      hoteles: function(Hotels, $state, $stateParams){
          return Hotels.getAll();
      }
    }
  });

};

export default HomeConfig;
