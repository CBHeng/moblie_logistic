import React, { Component } from 'react';
import { Container, Jumbotron, ListGroupItem, Badge, ListGroup } from 'reactstrap';
import newsImg from 'static/images/news.svg';
import firebase from 'firebase';
import NewIcon from 'react-icons/lib/fa/bullhorn';
import BugIcon from 'react-icons/lib/fa/bug';

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

    meRef.once('value', (response) => {
      this.setState({
        news: response.val()
      });
    });
  }
  render() {
    return (
      <div style={{ paddingBottom: "150px" }}>
        <Jumbotron id="News_Jumbotron" className="p-4">
          <Container>
            <h3 className="display-5" style={{ letterSpacing: "0.2em" }}><NewIcon /> <strong>運籌<span style={{ fontSize: "0.8em" }}>消息 </span></strong></h3>
            <hr className="my-2" />
            <p><BugIcon /> 系統爬蟲抓取原官網的消息，最新30筆，如果需要查詢更久之前的文章，請到官網查詢瞜!!</p>
          </Container>
        </Jumbotron>
        <Container>
          <h4 className="mt-5 mb-2">
            <img src={newsImg} alt="" width="30px" />
            <span className="ml-4">NEWS</span>
          </h4>
          <ListGroup>
            {
              this.state.news.map((element, index) => (
                <ListGroupItem className="justify-content-between" tag="a" href={`./#/news/${index}`}><p className="p-0 m-0">{element.title}</p><Badge color="success">{element.date}</Badge></ListGroupItem>
              ))
            }
          </ListGroup>
        </Container>
      </div>
    );
  }
}
