import React, { Component, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const WeatherCard = () => {
    const [weather, setWeather] = useState(null);

    let positions = []
    navigator.geolocation.getCurrentPosition(position => {
        positions.push(position.coords.latitude);
        positions.push(position.coords.longitude)
    });

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        const apikey = '46cabc8421970f9e269fb51b388b0dcb';

        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${positions[0]}&lon=${positions[1]}&lang=pt_br&appid=${apikey}`);
            const value = await response.json();
            setWeather(value);

        } catch (err) {
            alert(err)
        }
    }

    var temp = (weather?.main.temp - 273.15).toFixed(1)
    var sunrise = new Date(weather?.sys.sunrise);
    var sunset = new Date(weather?.sys.sunset);
    return (
        <Container>
            <Card>
                <Row className="justify-content-md-center">
                    <Col md='auto'>

                        <h3>{weather?.name} |</h3>

                    </Col>
                    <Col md='auto'>
                        <h3>{temp}°C</h3>
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        {weather?.weather.map((response) => (
                            <p>Tempo {response.description}</p>
                        ))}
                    </Col>
                    <Col md='auto'>
                        <p>Umidade Relativa do ar em: {weather?.main.humidity}%</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                            <p>Por do Sol: {sunrise.getHours()}:{sunrise.getMinutes()}</p>
                    </Col>
                    <Col md='auto'>
                        <p>Nascer do Sol: {sunset.getHours()}:{sunset.getMinutes()}</p>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}