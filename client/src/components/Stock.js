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
            historyPeriod: 'M', // tells react to render one day span of prices by default
            historyDay: null,
            historyWeek: null,
            historyMonth: null,
            historyHalfYear: null,
            historyYear: null,
            historyAllTime: null,
        };
        console.log('Created a stock object! ' + this.state.name);
    }

    async makeGraph(canvas) {
        let historyLength = this.state.historyPeriod;
        let resolution;
        let startUNIX;
        const unix = require('to-unix-timestamp');
        let endUNIX = unix(Date.now());
        let secondsInADay = 24 * 3600;
        switch (historyLength) {
            case 'D':
                startUNIX = endUNIX - secondsInADay;
                resolution = '1';
                break;
            case 'W':
                startUNIX = endUNIX - secondsInADay * 7;
                resolution = '60'; // every 60 minutes
                break;
            case 'M':
                startUNIX = endUNIX - secondsInADay * 7 * 4;
                resolution = 'D'; // every Day
                break;
            case 'Y':
                startUNIX = endUNIX - secondsInADay * 7 * 4 * 12;
                resolution = 'W'; // every week
                break;
            case 'A': // corresponds to all time data
                startUNIX = endUNIX - secondsInADay * 7 * 4 * 12 * 10;
                resolution = 'M'; // every month
                break;
        }

        let apiCallString =
            `https://finnhub.io/api/v1/stock/candle?symbol=` +
            this.state.symbol +
            `&resolution=` +
            resolution +
            `&from=${startUNIX}&to=${endUNIX}&token=bv184tv48v6p0f6idl20`;
        console.log(apiCallString);
        let result = await fetch(apiCallString);
        let jsonResult = await result.json();
        console.log(jsonResult);
        switch (historyLength) {
            case 'D':
                this.setState({ historyDay: jsonResult });
                break;
            case 'W':
                this.setState({ historyWeek: jsonResult });
                break;
            case 'M':
                this.setState({ historyMonth: jsonResult });
                break;
            case 'Y':
                this.setState({ historyYear: jsonResult });
                break;
            case 'A': // corresponds to all time data
                this.setState({ historyAllTime: jsonResult });
                break;
        }
    }

    async componentDidMount() {
        setInterval(async () => {
            // fetch currentPrice from data from the API
            let response = await fetch(
                'https://finnhub.io/api/v1/quote?symbol=' +
                    this.state.symbol +
                    '&token=bv184tv48v6p0f6idl20'
            );
            let jsonRes = await response.json();

            // update state: makes this component re-render
            this.setState({
                currentPrice: jsonRes.c,
            });

            // graph the data based on historyPeriod
            var canvas = document
                .getElementById(this.state.symbol)
                .getContext('2d');
            await this.makeGraph(canvas, 'line');
            let dataSegment;
            switch (this.state.historyPeriod) {
                case 'D':
                    dataSegment = this.state.historyDay;
                    break;
                case 'W':
                    dataSegment = this.state.historyWeek;
                    break;
                case 'M':
                    dataSegment = this.state.historyMonth;
                    break;
                case 'Y':
                    dataSegment = this.state.historyYear;
                    break;
                case 'A': // corresponds to all time data
                    dataSegment = this.state.historyAllTime;
                    break;
            }
            let xs = dataSegment.t.map((timeStamp) => {
                    let d = new Date(timeStamp * 1000);
                    return d.getHours() + ':' + d.getMinutes();
                }),
                ys = dataSegment.c;

            var chart = new Chart(canvas, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: xs != null ? xs : [],
                    datasets: [
                        {
                            label: this.state.symbol,
                            backgroundColor: 'rgb(100%, 54.9%, 0%)',
                            borderColor: 'rgb(15.1%, 63.6%, 15.1%)',
                            fill: false,
                            data: ys != null ? ys : [],
                        },
                    ],
                },

                // Configuration options go here
                options: {},
            });
        }, 10000);
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
