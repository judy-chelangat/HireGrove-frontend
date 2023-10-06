import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-custom text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-lg text-black">Let's keep in touch!</h4>
            <p className="mt-2 text-black">
              Find us on any of these platforms; we respond within 1-2 business days.
            </p>
            <div className="mt-3">
              <button className="btn btn-light btn-sm mr-2">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn btn-light btn-sm mr-2">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="btn btn-light btn-sm mr-2">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="btn btn-light btn-sm">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled lists">
              <li>
                <a className="text-black" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-black" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-black" href="https://github.com/judy-chelangat/HireGrove-frontend">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-sm text-black">
              Copyright © <span id="get-current-year">2023</span>
              <a className="text-black" href="https://www.creative-tim.com/product/notus-js" target="_blank"> HireGrove</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
