import React, { Component } from 'react';
import Chart from 'chart.js';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    CardColumns,
    Container,
    Row,
    Col,
} from 'reactstrap';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: this.props.symbol,
            name: this.props.name,
            currentPrice: 0.0,
            highPriceDay: 0.0,
            lowPriceDay: 0.0,
            openPriceDay: 0.0,
            previousDayClosePrice: 0.0,
            mic: '', // which stock index it corresponds to
            marketOpen: false,
            historyPeriod: 'D', // tells react to render one day span of prices by default
            historyDay: null,
            historyWeek: null,
            historyMonth: null,
            historyHalfYear: null,
            historyYear: null,
            historyAllTime: null,
        };
        console.log('Created a stock object! ' + this.state.name);
    }

    async componentDidMount() {
        setInterval(async () => {
            // fetch data from the APIs
            let response = await fetch(
                'https://finnhub.io/api/v1/quote?symbol=' +
                    this.state.symbol +
                    '&token=bv184tv48v6p0f6idl20'
            );
            let jsonRes = await response.json();
            console.log(jsonRes);

            // update state
            this.setState({
                currentPrice: jsonRes.c,
            });

            // graph the data based on historyPeriod
            var ctx = document
                .getElementById(this.state.symbol)
                .getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: this.state.symbol,
                            backgroundColor: 'rgb(100%, 54.9%, 0%)',
                            borderColor: 'rgb(15.1%, 63.6%, 15.1%)',
                            data: [],
                        },
                    ],
                },

                // Configuration options go here
                options: {},
            });
        }, 1000);
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col md="auto">
                                <CardTitle tag="h5">
                                    {this.state.name}
                                </CardTitle>
                                <CardSubtitle
                                    tag="h6"
                                    className="mb-2 text-muted"
                                >
                                    {this.state.currentPrice}
                                </CardSubtitle>
                            </Col>

                            <Col md="auto">
                                <CardTitle tag="h6">
                                    {this.state.symbol}
                                </CardTitle>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
                <canvas id={this.state.symbol}></canvas>
            </Card>
        );
    }
}

export default Stock;
