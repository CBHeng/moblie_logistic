import React, { Component } from 'react';
import { ListGroupItem, Badge, ListGroup } from 'reactstrap';
import newsImg from 'static/images/news.svg';
import firebase from 'firebase';
import New from './New';

const config = {
  apiKey: "AIzaSyC1mIiwSJjCdiPyNqERyMZrcdWfYH_GTCk",
  authDomain: "nkfust-logistics.firebaseapp.com",
  databaseURL: "https://nkfust-logistics.firebaseio.com",
  projectId: "nkfust-logistics",
  storageBucket: "nkfust-logistics.appspot.com",
  messagingSenderId: "672807961119"
};
const app = firebase.initializeApp(config);

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      time: "test",
      news: [{
        title: "loading...",
        date: "loading..."
      }]
    };
  }
  componentWillMount() {
    const meRef = firebase.database().ref().child('news');

    meRef.limitToFirst(5).on('value', (response) => {
      this.setState({
        news: response.val()
      });
    });
  }
  render() {
    return (
      <div>
        <h4 className="mt-5 mb-2">
          <img src={newsImg} alt="" width="30px" />
          <span className="ml-4">NEWS</span>
        </h4>
        <ListGroup>
          {
            this.state.news.map((element, index) => (
              <New title={element.title} date={element.date} newSsn={index}/>
            ))
          }
          <ListGroupItem tag="a" href="./#/news/" className="justify-content-between border-right-0 border-left-0 border-bottom-0"><p className="m-0 p-0" /><Badge>查看全部消息</Badge></ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
