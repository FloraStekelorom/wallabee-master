import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './privacy.scss';

class Privacy extends React.Component {

  render () {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <p className="mb-0">Privacy</p>
          </div>
        </div>
      </Layout>
    );
  };
}

export default Privacy;
