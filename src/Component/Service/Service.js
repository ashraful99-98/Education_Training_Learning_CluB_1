import React from 'react';
import './Service.css';
const Service = (props) => {
    const { date, time, image, money, course, address } = props.service;
    return (
        <div>
            <div class="col" className="single-service">
                <div>
                    <div className="img-div">
                        <img src={image} className="service-img" alt="" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Course Name:{course}</h4>
                        <h5 class="card-text">Course Price: ${money}</h5>
                        <div>
                            <h5>Date: "{date}"</h5>
                            <h5>Time: "{time}"</h5>
                        </div>
                        <p>Address: {address}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;