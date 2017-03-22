import angular from 'angular';

// Crea el modulo principal donde nuestra funcionalidad se puede attachar
let authModule = angular.module('app.auth', []);

// Incluyo nuestro UI-Router config settings
import AuthConfig from './auth.config';
authModule.config(AuthConfig);

// Controllers
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;
