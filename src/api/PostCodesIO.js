import $ from 'jquery';

export const getOutcode = (location, callback) => {
    var params = {
        lat: location.lat,
        lon: location.lng,
    };

    $.ajax({
        url: 'https://api.postcodes.io/outcodes?' + $.param(params),
        type: 'GET',
    })
    .done((data) => {             
        callback(data);
    });
};