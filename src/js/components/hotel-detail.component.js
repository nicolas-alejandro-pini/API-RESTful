class HotelDetailCtrl {
  constructor(){
  'ngInject';

  }
}

let HotelDetail = {
  bindings: {
    hotel: "="
  },
  controller: HotelDetailCtrl,
  templateUrl: 'components/hotel-detail.html'
}

export default HotelDetail;
