import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render(){
        return (
            <div class="header">
                <h1>Trading-bot</h1>
            </div>
        );
    }

}

class page extends React.Component {
    render(){
        <Header />
    }
}

ReactDOM.render(
    <page />,
    document.getElementById('root')
);
