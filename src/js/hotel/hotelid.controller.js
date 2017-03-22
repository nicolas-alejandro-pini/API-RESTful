class HotelidCtrl {
  constructor(Hotels, $state, $http) {
    'ngInject';
    this._Hotel = Hotels.current;
    this._$http = $http;
    this._$state = $state;
    this.title = $state.current.title;
  }

}

export default HotelidCtrl;
