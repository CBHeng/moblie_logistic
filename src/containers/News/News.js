import React, { Component } from 'react';
import Header from '../Home/components/Header';
import Content from './Content/Content';
import Footer from '../Home/components/Footer';
import './News.less';

export default class News extends Component {
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
