import React, { useEffect, useState } from "react";
import { Comment } from "../comments/comment";
import { Like } from "../Likes/like";

export const Info = () => {
    //const weather = React.useContext(response);
    const [weather, setWeather] = useState();
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [values, setValues] = useState();
    const getWeather = async () => {
        const apikey = '46cabc8421970f9e269fb51b388b0dcb';
        try{
            await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${apikey}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result)
            });
        }catch(err){
            alert(err)
        }
        
        console.log(weather);
    }
    const getLocation = async () => {
        try{
        await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAcIf4coQuJvab_hIVIHIToYPlkXVal83E`,{method: 'POST'})
            .then(response => response.json())
            .then((data) => {
                setLat(data.location.lat);
                setLong(data.location.lng)
                getWeather()
            })        
        }catch(err){
            console.log(err)
        }
    }
        useEffect(() => {
            getLocation();
        },[]);



        return (
            <>

                <Like></Like>
                <Comment/>

            </>
        )

    }
