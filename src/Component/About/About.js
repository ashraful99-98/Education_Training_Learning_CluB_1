import React from 'react';
import './About.css';
// About Course 
import aboutcourse1 from '../../images/about-course/darkicon_01.png';
import aboutcourse2 from '../../images/about-course/darkicon_02.png';
import aboutcourse3 from '../../images/about-course/darkicon_03.png';
// Expert 
import expert1 from '../../images/expert/testi_01.png';
import expert2 from '../../images/expert/testi_02.png';
import expert3 from '../../images/expert/testi_03.png';
import expert4 from '../../images/expert/testi_04.png';


const About = () => {
    return (
        <div>
            <div className="container">
                <div className="about-section">
                    <h1>Welcome to the Edu-T-L-Club Learning Management System</h1>
                    <div className="about-info">
                        <div>
                            A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue
                        </div>
                        <div>
                            A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col" className="cart">
                            <div class="card h-100" className="cart-info">
                                <img src={aboutcourse1} alt="" className="cart-img" class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title text-danger">Best Multi-Tier Courses</h5>
                                    <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col" className="cart">
                            <div class="card h-100" className="cart-info">
                                <img src={aboutcourse2} alt="" className="cart-img" class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title text-danger">Buy / Sell Courses</h5>
                                    <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col" className="cart">
                            <div class="card h-100" className="cart-info">
                                <img src={aboutcourse3} alt="" className="cart-img" class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title text-danger">Multi Purpose Dashboard</h5>
                                    <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-course-section">
                <div className="container">
                    <div className="best-course">
                        <div>
                            <h1>One of the Best Course| <br /> Template on the Market</h1>
                            <p>With our professional course pages, you can earn money from your online courses! We build beautiful course listing pages, search forms and singular learning systems..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="experts">
                    <div>
                        <h1>The Experts <br /> of Edu-T-L-Club</h1>
                    </div>
                    <div className="expert">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img img src={expert1} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h2 class="card-title">Jenny Doe</h2>
                                        <p class="card-title"><small className="small-title">CEO</small></p>
                                        <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Suspendisse ante mi.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img img src={expert2} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h2 class="card-title">Bernice Neumann</h2>
                                        <p class="card-title"><small className="small-title">Designer</small></p>
                                        <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Suspendisse ante mi.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img img src={expert3} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h2 class="card-title">Jenny Cameron</h2>
                                        <p class="card-title"><small className="small-title">English Teacher</small></p>
                                        <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Suspendisse ante mi.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img img src={expert4} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h2 class="card-title">Bob Neumann</h2>
                                        <p class="card-title"><small className="small-title">Designer</small></p>
                                        <p class="card-text">Edu-T-L-Club is a powerful Education HTML template that comes with an easy template option interface. Suspendisse ante mi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;