import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

 class AppNavbar extends Component {
    render() {
        const {branding}=this.props;
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4 py-0">
                <div className="container">
                <Link className="navbar-brand fas fa-tv" to="/"> {branding}</Link>
            
            <div>
                <ul className="navbar-nav  mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link fas fa-home"> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link fas fa-question"> About</Link>
                    </li>
                </ul>
            </div>
            </div>
          </nav>
        )
    }
}
AppNavbar.prototypes={
    branding:PropTypes.string.isRequired
}
export default AppNavbar;
