import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="courses">
                <div className="container">
                    <div className="course-list">
                        <div className="course-info">
                            <h4>Courses</h4>
                            <p><small>Add your awesome subtitle here</small></p>
                        </div>
                        <div>
                            <nav><NavLink to="/home" className="small-nav">Home</NavLink>/<NavLink to="/services" className="small-nav">Courses</NavLink></nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="all-services">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}></SingleService>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Services;