import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Trading Bot</NavbarBrand>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Header;
