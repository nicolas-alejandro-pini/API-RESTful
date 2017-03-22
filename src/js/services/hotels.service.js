export default class Hotels {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;

        // Objeto para guardar las propiedades del hotel
        this.current = null;
    }

    getAll() {
        return this._$http({
            url: this._AppConstants.api + '/hoteles',
            method: 'GET'
        }).then(
            (res) => {
                // Store the user's info for easy lookup
                this.current = res.data;
            }
        );
    }

    getHotel(id) {
        return this._$http({
            url: this._AppConstants.api + '/hoteles/' + id,
            method: 'GET',
        }).then((res) => {
            this.current = res.data;
        });
    }


}
