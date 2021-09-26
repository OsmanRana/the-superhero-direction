import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    // console.log(props.teacher)
    const {name, designation, subject, educational_qualification, proposed_salary } = props.teacher;
    const {honers, masters, others} = educational_qualification;
    return (
        <div className ="card">
            <img className = "mx-auto d-block my-4" src = {props.teacher.image} alt ="" />
            <h3>{name}</h3>
            <small>Position:</small> <p>{designation}</p>
            <small>Subject:</small> <p>{subject}</p>
            <small>Educational Qualification:</small> <h5> {honers}, {masters}, {others}</h5>
            <small>Salary Offered:</small><h5> {proposed_salary}</h5>
            <button onClick = {() =>props.handleSelection(props.teacher)} className = "selection-btn btn btn-danger mt-3 mb-0">Select Teacher</button>
        </div>
    );
};

export default Teacher;