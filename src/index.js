import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>Trading Bot</h1>
          <br></br>
        </div>
      );
    }
  }

  class StockView extends React.Component {
    constructor() {
      super();
      this.state = { realTimeData: {"c":116.59,"h":117.49,"l":116.22,"o":116.57,"pc":116.03,"t":1606582932} };
    }
  
    async componentDidMount() {
      const apiKey = 'bv184tv48v6p0f6idl20';
      const symbol = 'AAPL';
      const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=` + symbol + `&token=` + apiKey);
      const json = await response.json();
      console.log(json);
      this.setState({ realTimeData: json });
      this.update();
    }

    update() {
      return this.state.realTimeData.c;
    }
  
    render() {
      return (
        <div>
          APPL  Price: {this.update()}
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
            <StockView />
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
  
  