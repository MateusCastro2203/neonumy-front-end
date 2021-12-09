import React, { Component, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Comment } from "../comments/comment";
import { Like } from "../Likes/like";

export const Info = () => {
    //const weather = React.useContext(response);


    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <Like />
                    </Col>
                    <Col md='auto'>
                        <Comment />
                    </Col>
                </Row>


            </Container>
        </>
    )

}
