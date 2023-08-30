import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleService.css';

const SingleService = (props) => {

    const { date, student, time, image, money, course, about, teacher } = props.service;
    const clock = <FontAwesomeIcon icon={faClock} />
    const star = <FontAwesomeIcon icon={faStar} />
    const calendar = <FontAwesomeIcon icon={faCalendar} />
    const user = <FontAwesomeIcon icon={faUser} />


    return (
        <div>
            <div class="card mb-3" Style="max-width: 1100px;">
                <div class="row g-0">
                    <div class="col-md-4 my-auto">
                        <img src={image} alt="" class="img-fluid rounded-start" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-start">
                            <p class="card-text">{about}</p>
                            <h5 class="card-title">Course Name: {course}</h5>
                            <br />
                            <h5 class="card-title">Teacher: {teacher}</h5>
                            <div className="star-icon">
                                <p class="star">{star}{star}{star}{star}{star}</p>
                            </div>
                            <div className="smaill-text">
                                <p class="card-text"><small class="text-muted" className="small-icon">${money}</small></p>
                                <p class="card-text"><small class="text-muted" className="small-icon">{calendar} {date}</small></p>
                                <p class="card-text"><small class="text-muted" className="small-icon">{clock} {time}</small></p>
                                <p class="card-text"><small class="text-muted" className="small-icon">{user} {student}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleService;