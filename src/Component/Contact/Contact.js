import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="form-section">
                    <form class="row g-3">
                        <div className="form-info" class="col-md-12">
                            <h1 className="heading">GET IN TOUCH</h1>
                            <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Name"></input>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Email"></input>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control" id="inputPassword4" placeholder="Phone"></input>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Subject"></input>
                        </div>
                        <div class="col-12">
                            <textarea name="message" class="form-control" id="inputPassword4" placeholder="Message Below" cols="160" rows="5"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" className="form-btn">SEND FORM</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact; <h3>opkokopkoi</h3>