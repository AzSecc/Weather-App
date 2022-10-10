const api_key = 'gDyeiroTu5wK3CqIl7bwQGyysbK3KIUX';

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${api_key}`;

    const resp = await fetch(base + query);
    const data = await resp.json();

    return data[0];
};


const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query_string = `?apikey=${api_key}&q=${city}`;

    const resp = await fetch(base + query_string);
    const data = await resp.json();

    return data[0];
};
