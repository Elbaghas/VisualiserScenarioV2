import React, { useState, useEffect, useContext } from 'react'
//import AuthContext from '../context/AuthContext'

const Contact = () => {

    return (
        <>
            <header className="site-header d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-5 col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">formulaire de contact</li>
                                </ol>
                            </nav>

                            <h4 className="text-white">formulaire de contact</h4>
                        </div>

                    </div>
                </div>
            </header>


            <section className="section-padding section-bg">
                <div className="container text-center ">



                    <h4 className="mb-4 pb-2">Nous aimerions recevoir de vos nouvelles</h4>



                    <form action="/" method="post" className="custom-form contact-form" role="form">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-floating">
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Name" required="" />

                                    <label for="floatingInput">Nom</label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-floating">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required="" />

                                    <label for="floatingInput">Adresse e-mail</label>
                                </div>
                            </div>

                            <div className="col-lg-12 col-12">
                                <div className="form-floating">
                                    <input type="text" name="subject" id="name" className="form-control" placeholder="Name" required="" />

                                    <label for="floatingInput">Sujet</label>
                                </div>

                                <div className="form-floating">
                                    <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>

                                    <label for="floatingTextarea">détail du sujet</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12 ms-auto">
                                <button type="submit" className="form-control">Enregistrer</button>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact