class HomeCtrl {
  constructor(AppConstants, Hotels, $state) {
    'ngInject';

    this._Hotels = Hotels.current;
    this.appName = AppConstants.appName;
    this.title = $state.current.title;

  }


}

export default HomeCtrl;
