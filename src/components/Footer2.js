import { Component } from "react";
import './Footer'
import './Footer.css'
class Footer2 extends Component {

    render() {
        return (
            <>
                <footer className="site-footer section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-12 mb-4 pb-2">
                                <img src="img/topics/logo sans arriere .png" className="img-fluid logo-image imgfoot" alt="Logo de l'entreprise" />

                            </div>

                            <div className="col-lg-3 col-md-4 col-6">
                                <h6 className="site-footer-title mb-3">Services</h6>

                                <ul className="site-footer-links">
                                    <li className="site-footer-link-item">
                                        <a href="/" className="site-footer-link">Scénarios</a>
                                    </li>

                                    <li className="site-footer-link-item">
                                        <a href="/" className="site-footer-link">Activités</a>
                                    </li>

                                    <li className="site-footer-link-item">
                                        <a href="/" className="site-footer-link">Evaluations</a>
                                    </li>


                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                                <h6 className="site-footer-title mb-3">Support</h6>

                                <ul className="site-footer-links">
                                    <li className="site-footer-link-item">
                                        <a href="/" className="site-footer-link">Compte</a>
                                    </li>

                                    <li className="site-footer-link-item">
                                        <a href="/" className="site-footer-link">Centre d’aide</a>
                                    </li>

                                    <li className="site-footer-link-item">
                                        <a href="/" className="site-footer-link">Contact</a>
                                    </li>


                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                                <h6 class="site-footer-title mb-3">Réseaux sociaux</h6>
                                <ul class="list-unstyled d-flex social-icons">
                                    <li class="me-3"><a href="/"><i class="bi bi-facebook"></i></a></li>
                                    <li class="me-3"><a href="/"><i class="bi bi-twitter"></i></a></li>
                                    <li class="me-3"><a href="/"><i class="bi bi-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>
            </>
        )
    }

}
export default Footer2