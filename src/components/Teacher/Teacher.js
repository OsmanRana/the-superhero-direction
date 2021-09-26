import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    console.log(props.teacher)
    const {name, designation, subject, educational_qualification, proposed_salary } = props.teacher;
    const {honers, masters, others} = educational_qualification;
    return (
        <div>
            <img src = {props.teacher.image} alt ="" />
            <h2>Name: {name}</h2>
            <p>Position: {designation}</p>
            <p>Subject: {subject}</p>
            <p>Educational Qualification: {honers}, {masters}, {others}</p>
            <h3>Salary Offered: {proposed_salary}</h3>
        </div>
    );
};

export default Teacher;