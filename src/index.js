import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

   class Header extends React.Component {
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
  