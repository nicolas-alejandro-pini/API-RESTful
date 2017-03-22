function HotelConfig($stateProvider, $httpProvider, $urlRouterProvider){
  'ngInject';

  $stateProvider
    .state('app.hoteles', {
      url: '/hoteles',
      controller: 'HotelCtrl as $ctrl',
      templateUrl: 'hotel/hotel.html',
      title: 'Hoteles',
      resolve: {
        hoteles: function(Hotels, $state, $stateParams){
            return Hotels.getAll();
        }
      }
    })
    .state('app.hotelid', {
      url: '/hoteles/:id',
      controller: 'HotelidCtrl as $ctrl',
      templateUrl: 'hotel/hotelid.html',
      title: 'Hotel',
      resolve: {
        hotel: function(Hotels, $state, $stateParams){
            return Hotels.getHotel($stateParams.id);
        }
      }
    })
};

export default HotelConfig;
