import React from 'react';

import './layout.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-header">
          <a href="/"><span className="navbar-brand mb-0 h1 text-light">Wallabee</span></a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle text-light btn-lg" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-user-circle-o text-light" aria-hidden="true"></i></a>
              <ul className="dropdown-menu row dropdown-menu-right" role="menu">
                <li ><a href="#" className="text-secondary mx-3" >Log out</a></li>
                <div className="dropdown-divider"></div>
                <li ><a href="/" className="text-secondary mx-3">Your products</a></li>
                <div className="dropdown-divider"></div>
                <li ><a href="/" className="text-secondary mx-3">Your Rentals</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}

      <footer className="py-1 px-3 navbar navbar-expand navbar-dark bg-dark" role="navigation">
        <div>
          <p className="mr-3 mb-0 text-light footer-text">&#169; 2021 Wallabee. All Rights Reserved</p>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <a href="#" className="btn-lg"><i className="fa fa-facebook footer-menu"></i></a>
            <a href="#" className="btn-lg"><i className="fa fa-twitter footer-menu"></i></a>
            <a href="#" className="btn-lg"><i className="fa fa-instagram footer-menu"></i></a>
          </ul>
        </div>

      </footer>
    </React.Fragment>
  );
}
export default Layout;
