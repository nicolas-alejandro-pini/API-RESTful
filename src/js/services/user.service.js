export default class User {
  constructor(JWT, AppConstants, $http, $state) {
    'ngInject';

    this._JWT=JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;

    // Objecto a guardar las propiedades de usuario
    this.current = null;

  }

  // Try to authenticate by registering or logging in
  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '/register';
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      // on success...
      (res) => {
        // Set the JWT Token
        this._JWT.save(res.data.user);

        // Store the user's info for easy lookup
        this.current = res.data.user;

        return res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
    // Hard reload of current state
    this._$state.go(this._$state.$current, null, { reload: true });
  }
}
