import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stocks from 'stocks.js';

   class Header extends React.Component {
    constructor() {
      super();
      this.state = { data: [] };
    }
  
    async componentDidMount() {
    var stocks = new Stocks('L8C77NWX4MSGXC71');
    
    var options = {
      symbol: 'AAPL',
      interval: 'weekly',
      amount: 52
    };
    
    var result = await stocks.timeSeries(options);
    
    console.log(result);
    this.setState({ data: result });
    }
  
    render() {
      return (
        <div>
          <h1>Trading Bot</h1>
        </div>
      );
    }
  }
  
  class Page extends React.Component {
    render() {
      return (
        <div className="page">
          <div className="header">
            <Header />
          </div>
          
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );
  
  