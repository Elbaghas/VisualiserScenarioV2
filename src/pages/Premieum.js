import React, { useState, useEffect, useContext } from 'react'
import "./Premiem.css"

const Premium = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="mois-tab" data-bs-toggle="tab" data-bs-target="#mois-tab-pane" type="button" role="tab" aria-controls="mois-tab-pane" aria-selected="true">Mensuel</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="annee-tab" data-bs-toggle="tab" data-bs-target="#annee-tab-pane" type="button" role="tab" aria-controls="annee-tab-pane" aria-selected="false">Annuel</button>
                        </li>
                    </ul>
                </div>
            </div>

            <section id="pricing" className="pricing-content section-padding">
                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        {/* <div className="tab-pane fade show active" id="mois-tab-pane" role="tabpanel" aria-labelledby="mois-tab" tabindex="0">
                            <div className="row text-center">
                                <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                                    <div className="pricing_design">
                                        <div className="single-pricing">
                                            <div className="price-head">
                                                <h2>Plan basique</h2>
                                                <h1>30 DH</h1>
                                                <span>/mois</span>
                                            </div>


                                            <ul>
                                                <li>Créer 10 scénarios</li>
                                                <li>Modifier 10 scénarios</li>
                                                <li>Télécharger 10 scénarios</li>
                                            </ul>

                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <div className="pricing-price">
                                            </div>
                                            <a href="/" className="price_btn">Confirmer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                                    <div className="single-pricing">
                                        <div className="price-head">
                                            <h2>Plan moyen</h2>
                                            <h1 className="price">50 DH</h1>
                                            <span>/mois</span>
                                        </div>
                                        <ul>
                                            <li>Créer 20 scénarios</li>
                                            <li>Modifier 20 scénarios</li>
                                            <li>Télécharger 20 scénarios</li>
                                        </ul>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="pricing-price">
                                        </div>
                                        <a href="/" className="price_btn">Confirmer</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" >
                                <div className="pricing_design">
                                    <div className="single-pricing">
                                        <div className="price-head">
                                            <h2>Plan supérieur</h2>
                                            <h1 className="price">199 DH</h1>
                                            <span>/mois</span>
                                        </div>
                                        <ul>
                                            <li>Créations illimitées.</li>
                                            <li>Modifications illimitées.</li>
                                            <li>Téléchargements illimités</li>

                                        </ul>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="pricing-price">
                                        </div>
                                        <a href="/" className="price_btn">Confirmer</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="tab-pane fade show" id="annee-tab-pane" role="tabpanel" aria-labelledby="annee-tab" tabindex="0">
                        <div className="row text-center">
                            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" >
                                <div className="pricing_design">
                                    <div className="single-pricing">
                                        <div className="price-head">
                                            <h2>Plan basique</h2>
                                            <h1>300 DH</h1>
                                            <span>/année</span>
                                        </div>


                                        <ul>
                                            <li>Créer 10 scénarios</li>
                                            <li>Modifier 10 scénarios</li>
                                            <li>Télécharger 10 scénarios</li>
                                        </ul>

                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="pricing-price">
                                        </div>
                                        <a href="/" className="price_btn">Confirmer</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" >
                                <div className="pricing_design">
                                    <div className="single-pricing">
                                        <div className="price-head">
                                            <h2>Plan moyen</h2>
                                            <h1 className="price">500 DH</h1>
                                            <span>/année</span>
                                        </div>
                                        <ul>
                                            <li>Créer 20 scénarios</li>
                                            <li>Modifier 20 scénarios</li>
                                            <li>Télécharger 20 scénarios</li>
                                        </ul>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="pricing-price">
                                        </div>
                                        <a href="#" className="price_btn">Confirmer</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" >
                                <div className="pricing_design">
                                    <div className="single-pricing">
                                        <div className="price-head">
                                            <h2>Plan supérieur</h2>
                                            <h1 className="price">1500 DH</h1>
                                            <span>/année</span>
                                        </div>
                                        <ul>
                                            <li>Créations illimitées.</li>
                                            <li>Modifications illimitées.</li>
                                            <li>Téléchargements illimités</li>

                                        </ul>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="pricing-price">
                                        </div>
                                        <a href="/" className="price_btn">Confirmer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}


export default Premium