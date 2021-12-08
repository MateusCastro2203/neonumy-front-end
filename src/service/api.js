var lat;
var long;

export const getWeather = async () => {
    const apikey = '46cabc8421970f9e269fb51b388b0dcb';
    navigator.geolocation.getCurrentPosition(async (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("OIII: ", lat, long)
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${apikey}`);
        const value = await fetch(result.url).then(response=> response.json());
        return value;
    })
}