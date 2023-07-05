import React, { Component } from 'react'
import './Home.css'
import $ from 'jquery';
//const apilink ='http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44'
class Home extends Component {

    render() {
        return (
            <>
                <div className="container-fluid p-0 mb-5">
                    <div className="owl-carousel header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center onecss" >
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href=":" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                                        <h5 className="mb-3">Skilled Instructors</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                        <h5 className="mb-3">Online classNamees</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-home text-primary mb-4"></i>
                                        <h5 className="mb-3">Home Projects</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                                        <h5 className="mb-3">Book Library</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp fadeInUp" data-wow-delay="0.1s" >
                                <div className="position-relative h-100">
                                    <img className="img-fluid position-absolute w-100 h-100 next" src="img/about.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp fadeInUp1" data-wow-delay="0.3s">
                                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 className="mb-4">Welcome to eLEARNING</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                            <h1 className="mb-5">Popular Courses</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="/" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end linkone" >Read More</a>
                                            <a href="/" className="flex-shrink-0 btn btn-sm btn-primary px-3 linkone" >Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$149.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(123)</small>
                                        </div>
                                        <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src="img/course-2.jpg" alt="" />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="/" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end linkone">Read More</a>
                                            <a href="/" className="flex-shrink-0 btn btn-sm btn-primary px-3 linktwo" >Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$149.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(123)</small>
                                        </div>
                                        <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src="img/course-3.jpg" alt="" />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="/" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end linkone" >Read More</a>
                                            <a href="/" className="flex-shrink-0 btn btn-sm btn-primary px-3 linktwo" >Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$149.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(123)</small>
                                        </div>
                                        <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );

    }

}

export default Home;