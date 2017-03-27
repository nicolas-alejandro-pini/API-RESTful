import angular from 'angular';

let componentsModule = angular.module('app.components', ['ui.bootstrap']);

import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FindHotel from './find-hotel.component';
componentsModule.component('findHotel', FindHotel);

import ListHotels from './list-hotels.component';
componentsModule.component('listHotels', ListHotels);

import HotelCarousel from './hotel-carousel.component';
componentsModule.component('hotelCarousel', HotelCarousel);

import HotelDetail from './hotel-detail.component';
componentsModule.component('hotelDetail', HotelDetail);

import Maps from './maps.component';
componentsModule.component('maps', Maps);

export default componentsModule;
