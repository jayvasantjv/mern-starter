import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../images/codeagni.png';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: undefined
    };
  }

  componentDidMount() {
    axios.get('/api/database').then(response => {
      this.setState({ status: response.data.status });
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <h1>MERN Starter</h1>

        <div className="container">
          {status === undefined ? (
            'Connecting to database ...'
          ) : (
            <div
              className={status === true ? 'led-green' : 'led-red'}
              style={{ display: 'inline-block' }}
            />
          )}
          {status !== undefined &&
            (status === false
              ? 'Database connection failed'
              : 'Database connection successful')}
        </div>
        <div id="footer">
          <a href="https://github.com/codeagni">
            <img
              src={Logo}
              alt="Codeagni"
              width="133"
              height="35"
              style={{ marginRight: '20px' }}
            />
          </a>
        </div>
      </div>
    );
  }
}
