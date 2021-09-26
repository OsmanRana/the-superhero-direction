import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className ="header py-3 rounded">
            <div>
                <h1 className ="title">Inception Academic Care</h1>
                <p>Teacher Recruitement Plan 2021</p>
                <h5>BUDGET: <span>TK 100000</span></h5>
            </div>
        </header>
    );
};

export default Header;