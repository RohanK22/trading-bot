import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Stock from './components/Stock';
import StockInfoArray from './shared/stockSymbols';
import 'bootstrap/dist/css/bootstrap.min.css';
const Chart = require('chart.js');
const unix = require('to-unix-timestamp');

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockSymbol: 'GOOGL',
        };
    }

    componentDidMount() {
        console.log(this.state.stockSymbol);
    }

    render() {
        this.state.stockSymbol = document.getElementById('stockSymbol');
        console.log(this.state.stockSymbol);
        let n = 0;
        let renderedStocks = StockInfoArray.map((element) => {
            if (n < 2) {
                n++;
                return (
                    <Stock
                        name={element['Company Name']}
                        symbol={element.Symbol}
                    />
                );
            } else {
                return <div></div>;
            }
        });

        return (
            <div className="page">
                <div className="header">
                    <Header />
                    {renderedStocks}
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Page />, document.getElementById('root'));
