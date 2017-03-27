import angular from 'angular';

let componentsModule = angular.module('app.components', ['ui.bootstrap']);

import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import HotelCarousel from './hotel-carousel.component';
componentsModule.component('hotelCarousel', HotelCarousel);

export default componentsModule;
