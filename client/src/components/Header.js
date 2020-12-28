import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateAndTimeUTC: null,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                dateAndTimeUTC: Date(Date.now()),
            });
        }, 1000);
    }

    getHoursUntilMarketsOpen() {
        let myUTCDate = new Date(Date.now()); //this.state.dateAndTimeUTC;
        let myUTCOffsetMinutes = myUTCDate.getTimezoneOffset();

        let NYC_UTC_OffsetMinutes = -5 * 60;
        let minsDiff = myUTCOffsetMinutes - NYC_UTC_OffsetMinutes;
        let hrsDiff = minsDiff / 60; // I'm ahead by NYC time by hrsDiff hours

        let hrsUntil9ForMe;
        if (myUTCDate.getHours() > 16) {
            hrsUntil9ForMe = 24 - myUTCDate.getHours() + 9.5;
        } else if (myUTCDate.getHours() < 9.5) {
            hrsUntil9ForMe = 9.5 - myUTCDate.getHours();
        } else {
            hrsUntil9ForMe = -1000;
        }
        let waitHrs = hrsUntil9ForMe + hrsDiff;
        if (waitHrs > 0) {
            return <p>NYSE Opens in : {waitHrs} hours</p>;
        } else {
            return <p>NYSE Markets Status: Open</p>;
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Navbar color="light" light expand="md" md="auto">
                        <NavbarBrand href="/">Trading Bot</NavbarBrand>
                    </Navbar>

                    <Col md="auto">
                        <Row>
                            <h6>{this.state.dateAndTimeUTC}</h6>
                        </Row>
                        <Row>{this.getHoursUntilMarketsOpen()}</Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;
