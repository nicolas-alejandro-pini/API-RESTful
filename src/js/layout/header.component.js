class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.isCollapsed = true;
    this.appName = AppConstants.appName;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
