import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="p-3">
        <Container>
          <p>聯絡信箱：chenboheng3@gmail.com</p>
          <p> © 2017運籌小天使.</p>
        </Container>
      </div>
    );
  }
}
