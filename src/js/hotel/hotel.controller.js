class HotelCtrl {
  constructor(Hotels, $state, $http) {
    'ngInject';

    this._Hotels = Hotels.current;
    this._$http = $http;
    this._$state = $state;
    this.title = $state.current.title;
  }

}

export default HotelCtrl;
