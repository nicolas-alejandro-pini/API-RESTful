class FindHotelCtrl {
  constructor(Hotels){
    'ngInject';
    
    this._Hotels = Hotels;
    this.startDate = new Date(new Date().getTime());
    this.endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    /// Calendario
    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    this.format = this.formats[0];
    this.altInputFormats = ['M!/d!/yyyy'];

    this.popup1 = {
      opened: false
    };

    this.popup2 = {
      opened: false
    };

    this.isSubmitting = false;
    this.formData = {
      city: 'Madrid',
      startDate: this.startDate,
      endDate: this.endDate,
      persons: 2
    }
  }

  today() {
      this.startDate = new Date();
      this.endDate = new Date();
  };
  clear() {
      this.startDate = null;
      this.endDate = null;
  };

  open1() {
    this.popup1.opened = true;
  }
  open2() {
    this.popup2.opened = true;
  }

  submitForm() {
    this.isSubmitting = true;
    console.log("submit");
    this._Hotels.findHotel(this.formData).then(
    // Callback for success
      (res) => {
        this.isSubmitting = false;
        console.log(res);
      }
    );
  };

};

let FindHotel = {
  controller: FindHotelCtrl,
  controllerAs: '$ctrl',
  stylesUrl: ['components/find-hotel.css'],
  templateUrl: 'components/find-hotel.html'
};

export default FindHotel;



//
//   // Disable weekend selection
//   function disabled(data) {
//     var date = data.date,
//       mode = data.mode;
//     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
//   }
//
//   $scope.toggleMin = function() {
//     $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
//     $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
//   };
//
//   $scope.toggleMin();
//
//   $scope.open1 = function() {
//     $scope.popup1.opened = true;
//   };
//
//   $scope.open2 = function() {
//     $scope.popup2.opened = true;
//   };
//
//   $scope.setDate = function(year, month, day) {
//     $scope.dt = new Date(year, month, day);
//   };
//
//   $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//   $scope.format = $scope.formats[0];
//   $scope.altInputFormats = ['M!/d!/yyyy'];
//
//   $scope.popup1 = {
//     opened: false
//   };
//
//   $scope.popup2 = {
//     opened: false
//   };
//
//   var tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   var afterTomorrow = new Date();
//   afterTomorrow.setDate(tomorrow.getDate() + 1);
//   $scope.events = [
//     {
//       date: tomorrow,
//       status: 'full'
//     },
//     {
//       date: afterTomorrow,
//       status: 'partially'
//     }
//   ];
//
//   function getDayClass(data) {
//     var date = data.date,
//       mode = data.mode;
//     if (mode === 'day') {
//       var dayToCheck = new Date(date).setHours(0,0,0,0);
//
//       for (var i = 0; i < $scope.events.length; i++) {
//         var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
//
//         if (dayToCheck === currentDay) {
//           return $scope.events[i].status;
//         }
//       }
//     }
//
//     return '';
//   }
// });
