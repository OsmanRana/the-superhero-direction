import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect (() => {
        fetch('./teachers.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div className = "main-section">
            <div className = "teachers">
            
                {
                    teachers.map(teacher => <Teacher
                        key = {teacher.ID}
                        teacher = {teacher}
                    />)
                }
            </div>
            <div>
                <h2>Selection</h2>
            </div>
        </div>
    );
};

export default Teachers;