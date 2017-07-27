import $ from 'jquery';

export const getStores = (outcode, callback) => {
    var params = {
        'sort': `near:'${outcode}, UK'`,
        'filter': 'category:Store AND status:Trading',
    };

    $.ajax({
        url: 'https://dev.tescolabs.com/locations/search?' + $.param(params),       
        beforeSend: (xhrObj) => {
            xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key','1f9d578f453643b48daf2fd4f5e61a98');
        },
        type: 'GET',
    })
    .done((data) => {
        callback(data.results);
    });
};