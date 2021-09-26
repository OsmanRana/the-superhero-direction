import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0; 
    let name = '';
    for (const teacher of cart) {
        total = total + teacher.proposed_salary; 
        name = name + teacher.name + ", "
    }
    
    return (
        <div className = "card side-cart border-0">
                <div className = "my-5">
                    <h5 className ="side-cart-title">SELECTED TEACHER</h5>
                    <small>Teachers Selected:</small><h3 className ="side-cart-title">{cart.length} </h3>
                    <small>Total Salary:</small><h3 className ="side-cart-title">TK. {total} </h3>
                    <p>Name of Selected Teacher:</p>
                    <h2 id="name" className ="side-cart-title">{name}</h2>
                </div>
        </div>
    );
};

export default Cart;