import React, { Component } from 'react';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: '',
            currentPrice: 0.0,
            highPriceDay: 0.0,
            lowPriceDay: 0.0,
            openPriceDay: 0.0,
            previousDayClosePrice: 0.0,
            mic: '', // which stock index it corresponds to
            marketOpen: false,
            historyDay: null,
            historyWeek: null,
            historyMonth: null,
            historyHalfYear: null,
            historyYear: null,
            historyAllTime: null,
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row"></div>
            </div>
        );
    }
}
