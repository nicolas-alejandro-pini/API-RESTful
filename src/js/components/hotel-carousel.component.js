class HotelCarouselCtrl {
  constructor(){
    'ngInject';

    this.myInterval = 5000;
    this.noWrapSlides = false;
    this.active = 0;
    this.indexes = [];
    this.slides = [];
    this.currIndex = 0;

    for (var i = 0; i < 4; i++) {
        this.addSlide();
    }
  }

  addSlide() {
      var newWidth = 300 + this.slides.length + 1;
      this.slides.push({
        image: '//unsplash.it/' + newWidth + '/150',
        text: ['a','b','c','d'][this.slides.length % 4],
        id: this.currIndex++
      });
  }

  randomize() {
    this.indexes = generateIndexesArray();
    assignNewIndexesToSlides(this.indexes);
  };

}

let HotelCarousel = {
  bindings: {
    hotel: "="
  },
  controller: HotelCarouselCtrl,
  templateUrl: 'components/hotel-carousel.html'
};


// Randomize logic below
function assignNewIndexesToSlides(indexes) {
  for (var i = 0, l = this.slides.length; i < l; i++) {
    this.slides[i].id = indexes.pop();
  }
}

function generateIndexesArray() {
  var indexes = [];
  for (var i = 0; i < this.currIndex; ++i) {
    indexes[i] = i;
  }
  return shuffle(indexes);
}

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;

  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }

  return array;
}

export default HotelCarousel;
