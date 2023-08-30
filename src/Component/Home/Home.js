import React, { useEffect, useState } from 'react';
import './Home.css';
import award1 from '../../images/awards/awards_01.png';
import award2 from '../../images/awards/awards_02.png';
import award3 from '../../images/awards/awards_03.png';
import award4 from '../../images/awards/awards_04.png';
import award5 from '../../images/awards/awards_05.png';
import Service from '../Service/Service';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./education.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="main">
            <div className="main-section">
                <div className="container">
                    <div className="section">
                        <div>
                            <h1>A Powerful Course|
                                Website Template.</h1>
                            <p>We're among one of the best Education Bootstrap template on the Envato marketplace to build a powerful online university websites. The team family is a small collection of designers and who have one thing in common - we all love coding.</p>
                            <NavLink to="/services" className="section-btn">Visit Our Course</NavLink>
                        </div>
                        <div>
                            {/* empty div  */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="courses">
                <div className="container">
                    <div className="course-list">
                        <div className="course-info">
                            <h4>Course List</h4>
                            <p><small>A basic standard course list page.</small></p>
                        </div>
                        <div>
                            <nav><NavLink to="/home" className="small-nav">Home</NavLink>/<NavLink to="/services" className="small-nav">Courses</NavLink></nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className="container">
                <div className="services">
                    <h1>Our Courses Is</h1>
                    <h2>ONE OF THE BEST EDUCATION TEMPLATE ON THE MARKET</h2>
                    <p>The Edu-T-L-Club template compatible with all mobile devices and modern browsers. This template coded with Bootstrap Framework</p>
                    <div class="row row-cols-1 row-cols-md-2 g-4">

                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}></Service>)
                        }
                    </div>
                    <div className="browse-div">
                        <NavLink to="/course" className="browse-btn">BROWSE ALL COURSE</NavLink>
                    </div>
                </div>
            </div>
            {/* awards  */}
            <div className="container">
                <div className="awards">
                    <h1>Awards Of Course</h1>
                    <div className="award" class="text-center">
                        <img src={award1} class="rounded" alt="" />
                        <img src={award2} class="rounded" alt="" />
                        <img src={award3} class="rounded" alt="" />
                        <img src={award4} class="rounded" alt="" />
                        <img src={award5} class="rounded" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;