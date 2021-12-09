import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";
import { Info } from "../info/info";
import { WeatherCard } from "../Weather/weather";
export const Cards = () => {

    return (
        <Container>
            <Row className="align-items-center" style={{marginTop: 50}}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card style={{width: '40rem'}}>
                        <Card.Body variant="top">
                        <WeatherCard/>
                        </Card.Body>
                        <Card.Body >
                        <Info />
                        </Card.Body>
                    
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    )
}



