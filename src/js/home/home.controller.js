class HomeCtrl {
  constructor(AppConstants, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.title = $state.current.title;

  }


}

export default HomeCtrl;
