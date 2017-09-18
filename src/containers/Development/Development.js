import React, { Component } from 'react';
import { Container, Jumbotron, Badge, Row, Col } from 'reactstrap';
import QuestionIcon from 'react-icons/lib/fa/question';
import './Development.less';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';

export default class Development extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron id="Development_Jumbotron" className="p-4">
          <Container>
            <h3 className="display-5" style={{ letterSpacing: "0.2em" }}> <strong>談談<span style={{ fontSize: "0.8em" }}>開發 </span></strong></h3>
            <hr className="my-2" />
            <p>系統爬蟲、網頁設計</p>
          </Container>
        </Jumbotron>
        <Container style={{ paddingBottom: "100px" }}>
          <div className="content">
            <h4>專案的建立契機</h4>
            <p>智慧型手機普遍的趨勢，學校官網還是PC版本，當我們想要查詢系上相關資訊時，發覺手機瀏覽的很不方便，剛好最近練習網頁技術的我們，希望能另外建立手機版本的官網消息，讓瀏覽者有更好的使用體驗。</p>
            <h4>專案的目的</h4>
            <p>並無什麼目的，最近研究網頁技術的我們，正在精進自我實力，練習網路爬蟲+網頁設計，我們正在找尋練習的作品，剛好上面的情況拿來做練習的專案。</p>
            <h4>只提供消息、介紹、教授</h4>
            <p>我們設計的內容，主要提供學生們經常查詢的內容，如果您覺得還有重要的內容需要添加，請聯絡我們!</p>
            <h4>專案未來趨向</h4>
            <p>我們會繼續研究網頁技術的新知，Moblie趨勢想朝向手機原生APP方面發展，未來不排除會修改成APP模式(可能不是近期(汗 ~..~ ))，不過希望大家能喜歡本專案，至於實用性不強求，希望大家能先記得有這個專案網站(開心)。</p>
            <h4>最後</h4>
            <p>如果你喜歡資訊程式或是想知道這個專案的架構，可以找尋我們 <a href="">負責人</a>，我們非常願意分享我們，</p>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
