function AuthConfig($stateProvider, $httpProvider) {
    'ngInject';

    $stateProvider
        .state('app.login', {
            url: '/login',
            controller: 'AuthCtrl as $ctrl',
            templateUrl: 'auth/auth.html',
            title: 'Ingresar'
        })
        .state('app.register', {
            url: '/register',
            controller: 'AuthCtrl as $ctrl',
            templateUrl: 'auth/auth.html',
            title: 'Registrar'
        });
};

export default AuthConfig;
