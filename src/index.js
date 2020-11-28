import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

   class Header extends React.Component {
    constructor() {
      super();
      this.state = { data: [] };
    }
  
    async componentDidMount() {
      const apiKey = 'L8C77NWX4MSGXC71';
      const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=` + apiKey);
      const json = await response.json();
      console.log(json);
      this.setState({ data: json });
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
  
  