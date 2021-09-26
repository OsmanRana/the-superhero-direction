import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className ="header py-3 rounded bg-success">
            <div>
                <h1 className ="title">Inception Academic Care</h1>
                <p className = "fw-bold ">Teacher Recruitement Plan 2021</p>
                <h5 className = "fw-bold text-light">TOTAL BUDGET: <span>TK. 100000</span></h5>
            </div>
        </header>
    );
};

export default Header;