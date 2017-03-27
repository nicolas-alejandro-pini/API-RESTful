class ListHotelsCtrl {
  constructor(Hotels){
    'ngInject';
    this._Hotels = Hotels.current;
  }
}

let ListHotels = {
  controller: ListHotelsCtrl,
  templateUrl: 'components/list-hotels.html'
}

export default ListHotels;
