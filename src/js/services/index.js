import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Servicios
import UserService from './user.service';
servicesModule.service('User', UserService);

import HotelsService from './hotels.service';
servicesModule.service('Hotels', HotelsService);

export default servicesModule;
