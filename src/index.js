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
  
  class C extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    async componentDidMount() {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [0, 10, 5, 2, 20, 30, 45]
              }]
          },

          // Configuration options go here
          options: {}
      });
      console.log( chart);
    }

    render(){
      return(
        <h2>Graph From chart.js</h2>
        
        
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
            <C />
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
  
  