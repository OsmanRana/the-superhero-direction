import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import Cart from '../Cart/Cart';
import './Teachers.css'

const Teachers = () => {
    //Loding data
    const [teachers, setTeachers] = useState([])
    const [cart, setCart] = useState([])
    useEffect (() => {
        fetch('./teachers.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])

    // Button event handler
    const handleSelection = (teacher) => {
        const newCount = [...cart,teacher]
        setCart(newCount);
    }

    return (
        <div className = "main-section my-5">
            <div className = "teachers">
            
                {
                    teachers.map(teacher => <Teacher
                        key = {teacher.ID}
                        teacher = {teacher}
                        handleSelection ={handleSelection}
                    />)
                }
            </div>
            <div className = "container">
                <Cart cart ={cart} />
                
            </div>
        </div>
    );
};

export default Teachers;