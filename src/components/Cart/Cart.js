import React from 'react';
import './Cart.css'

const Cart = (props) => {
    //Getting cart data
    const {cart} = props;

    let total = 0; 
    let name = '';
    for (const teacher of cart) {
        total = total + teacher.proposed_salary; 
        name = name + teacher.name + ", "
    }
    
    return (
        //Display cart data
        <div>
                <div className = "card border-0 py-5 shadow">
                    <h5 className ="text-success">SELECTED TEACHER</h5>
                    <p className = "fw-bold ">Teachers Selected:</p><h3 className ="text-success">{cart.length} </h3>
                    <p className = "fw-bold ">Total Salary:</p><h3 className ="text-success">TK. {total} </h3>
                </div>
                <div className ="my-3 card border-0 py-5 shadow">
                    <p className = "fw-bold ">Name of Selected Teacher:</p>
                    <h5 id="name" className ="text-success px-5">{name}</h5>
                </div>
        </div>
    );
};

export default Cart;