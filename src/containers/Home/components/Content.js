import React, { Component } from 'react';
import { Container, Row, Col, Card, CardDeck, CardTitle, CardText, CardImg, CardBlock, CardSubtitle, Button, } from 'reactstrap';
import FbIcon from 'react-icons/lib/fa/facebook-official';
import IgIcon from 'react-icons/lib/fa/instagram';
import LgIcon from 'react-icons/lib/fa/flag';
import GithubIcon from 'react-icons/lib/fa/github';
import StudentIcon from 'react-icons/lib/fa/street-view';
import GraduationIcon from 'react-icons/lib/fa/graduation-cap';
import InformationBar from './InformationBar';
import LogisticCarousel from './LogisticCarousel';
import News from './News';

export default class Content extends Component {
  render() {
    const color666 = {color: "#666"};
    const colorWhite = {color: "#fff"};
    const bgAndColorIsGray = { backgroundColor: "#888", color: "#d4d4d4" };
    const marginAuto = { margin: "auto" };
    return (
      <div style={{ paddingBottom: "150px" }}>
        <LogisticCarousel />
        <Container>
          <News />
          <CardDeck>
            <Card className="mt-3 mb-3" block>
              <CardTitle className="font-weight-bold">運籌 <span className="h6 font-weight-bold">資訊團</span></CardTitle>
              <Button className="m-2" href="https://www.facebook.com/logisticsnkfust/" color="primary" size="lg"><FbIcon /> Facebook</Button>
              <Button className="m-2" href="https://www.instagram.com/nkfust_logistics/" color="danger" size="lg"><IgIcon /> Instagram</Button>
              <Button className="m-2" href="http://www.logistics.nkfust.edu.tw/bin/home.php" color="success" size="lg"><LgIcon /> 原運籌官網</Button>
              <Button className="m-2" outline color="secondary" size="lg"><GithubIcon /> 關於我們的開源專案</Button>
            </Card>
            <InformationBar />
          </CardDeck>
          <Card className="mt-3 mb-3" block color="dark" style={color666}>
            <Row>
              <Col sm="6" className="text-center">
                <Col style={marginAuto} xs="6" sm="6" md="4" lg="3">
                  <StudentIcon width="100%" height="100%" style={marginAuto} />
                </Col>
                <CardText>在系學生</CardText>
                <CardText className="h2 font-weight-bold">961</CardText>
              </Col>
              <Col sm="6" className="text-center">
                <Col style={marginAuto} xs="6" sm="6" md="4" lg="3">
                  <GraduationIcon width="100%" height="100%" />
                </Col>
                <CardText>畢業學生</CardText>
                <CardText className="h2 font-weight-bold">1,061</CardText>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}
