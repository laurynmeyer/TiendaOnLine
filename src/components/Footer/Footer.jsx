import React from 'react';
import { ReactComponent as FacebookIcon } from '../CartWidget/assets/facebook.svg';
import { ReactComponent as InstagramIcon } from '../CartWidget/assets/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../CartWidget/assets/linkedin.svg';

export const MyFooter = () => {
    return (
        <div className="footer-bg">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="/bootstrap-icons.svg#bootstrap" /></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/Coderhouse" target="_blank" rel="noopener noreferrer"><FacebookIcon className="bi" width="24" height="24" /></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/coderhouse/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="bi" width="24" height="24" /></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/school/coderhouse/" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="bi" width="24" height="24" /></a></li>
                </ul>
            </footer>
        </div>
    );
};





