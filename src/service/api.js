var lat;
var long;
export const getLocation = () => {
    if (!navigator.geolocation) {
        alert('Geolocalização não é suportada no seu browser');
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            getWeather(lat, long);
        })
    }
}

const getWeather = async (latitude, longitude) => {
    const apikey = '46cabc8421970f9e269fb51b388b0dcb';
    try {
        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=${apikey}`);
        const value = await fetch(result.url).then(response=> response.json())
        console.log(result);
    }catch (err){
        alert(err)
    }
   
    

}