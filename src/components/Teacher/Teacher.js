import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    // console.log(props.teacher)
    const {name, designation, subject, educational_qualification, proposed_salary } = props.teacher;
    const {honers, masters} = educational_qualification;
    return (
        <div className ="card border-0 shadow">
            <img className = "mx-auto d-block my-4" src = {props.teacher.image} alt ="" />
            <h3 className ="text-success">{name}</h3>
            <small>Position:</small> <p>{designation}</p>
            <small>Subject:</small> <p className = "fw-bold ">{subject}</p>
            <small>Educational Qualification:</small> <h5> {honers}, {masters}</h5>
            <small>Salary Offered:</small><h5>TK.  {proposed_salary}</h5>
            <button onClick = {() =>props.handleSelection(props.teacher)} className = "selection-btn btn btn-success mt-3 mb-0"><i class="fas fa-check me-3"></i>Select Teacher</button>
        </div>
    );
};

export default Teacher;