import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './layout.scss';

class Layout extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
        console.log(data);
      })
  }

  logout = (e) => {
    event.preventDefault();

    fetch(`/api/sessions`, safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(res => {
      if (res.success) {
        const params = new URLSearchParams(window.location.search);
        const redirect_url = params.get('redirect_url') || '/';
        window.location = redirect_url;
      }
    })
  }

  render () {
      const { authenticated } = this.state;

      return (
        <React.Fragment>
          <div className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-header">
                <a href="/"><span className="navbar-brand mb-0 h1 text-light">Wallabee</span></a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle text-light btn-lg" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-user-circle-o text-light" aria-hidden="true"></i></a>
                    <ul className="dropdown-menu row dropdown-menu-right" role="menu">
                      {authenticated ? <li ><a href="#" className="text-secondary username mx-3" onClick={this.logout}>Log out</a></li> : <li ><a href={`/login`} className="text-secondary mx-3">Log in</a></li>}
                      <div className="dropdown-divider"></div>
                      <li ><a href="/" className="text-secondary mx-3">Your products</a></li>
                      <div className="dropdown-divider"></div>
                      <li ><a href="/" className="text-secondary mx-3">Your Rentals</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="flex-fill">
              {this.props.children}
            </main>

            <footer className="footer mt-auto pt-1 px-3 navbar navbar-expand navbar-dark bg-dark" role="navigation">
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
          </div>

        </React.Fragment>
      );
    }
  }

export default Layout;
