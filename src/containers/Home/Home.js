import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
