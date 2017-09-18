import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HistoryIcon from 'react-icons/lib/fa/history';
import TruckIcon from 'react-icons/lib/fa/truck';
import PackageIcon from 'react-icons/lib/go/package';
import GlobeIcon from 'react-icons/lib/fa/globe';
import FerryIcon from 'react-icons/lib/md/directions-ferry';
import AirportIcon from 'react-icons/lib/md/local-airport';
import EllipsisIcon from 'react-icons/lib/fa/ellipsis-h';
import CodeIcon from 'react-icons/lib/fa/code';
import ShillIcon from 'react-icons/lib/fa/sitemap';
import StarIcon from 'react-icons/lib/fa/star';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import './Introduction.less';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ paddingBottom: "100px" }}>
          <Row className="p-2 pt-4">
            <Col md="3" className="d-md-block d-none">
              <img width="100%" src="https://scontent.fkhh1-1.fna.fbcdn.net/v/t31.0-8/p960x960/19693800_1601755086509379_8013381213677384120_o.jpg?oh=1f63457fbf97cb3997eb2b93711f2891&oe=5A57A615" alt="nkfust-logistics-logo"/>
            </Col>
            <Col xs="12" sm="12" md="9" lg="9">
              <h2 className="m-0 p-0 font-weight-bold">國立高雄第一科技大學</h2>
              <p style={{ fontSize: "0.2em" }}>National Kaohsiung First University of Science and Technology</p>
              <h2 className="m-0 p-0  font-weight-bold">運籌管理系</h2>
              <p style={{ fontSize: "0.2em" }}>Logistics</p>
            </Col>
          </Row>
          <Row className="pl-2 pr-2 pb-3">
            <Col md="3">
              <h1><TruckIcon /><FerryIcon /><AirportIcon /><PackageIcon /><GlobeIcon /><EllipsisIcon /></h1>
            </Col>
            <Col xs="12" sm="12" md="9" lg="9">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;課程設計在「運輸」與「倉儲」專業基礎上，結合「採購」、「生產」、「配送」、「資訊」等四個專業功能，成為「整合的物流管理」；隨著產業與全球化的發展，在進階課程中加入「國際經貿」、「企業策略」、「產業政策」等三個領域，以將，進一步擴大至「企業運籌」的完整架構。其中博士班與碩專班課程以「物流整合」和「企業運籌」為主，而碩士班與大學部課程則以各專業功能領域和「物流整合」為規劃重點。</p>
            </Col>
          </Row>
          <Row className="pl-2 pr-2 pb-3">
            <Col md="3">
              <h1><HistoryIcon /><CodeIcon /><strong style={{ fontSize: "24px"}}> 系所歷史</strong></h1>
            </Col>
            <Col xs="12" sm="12" md="7">
              <div className="history">
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元1996年(民國八十五年)</strong><br />
                  <span className="content">成立運輸與倉儲營運系大學部（二技）</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元1998年(民國八十七年)</strong><br />
                  <span className="content">成立運輸與倉儲營運系碩士班</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元1997年(民國八十八年)</strong><br />
                  <span className="content">成立運輸與倉儲營運系碩士（在職專班）</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元1999年( 民國九十年)</strong><br />
                  <span className="content">管理學院成立博士班，本系屬資訊流通組</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元2000年(民國九十一年)</strong><br />
                  <span className="content">成立運輸與倉儲營運系大學部（四技）</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元2002年(民國九十三年)</strong><br />
                  <span className="content">改名為運籌管理系</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元2007年(民國九十八年)</strong><br />
                  <span className="content">博士班本系隸屬管理研究所運籌領域</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元2007年(民國九十八年)</strong><br />
                  <span className="content">大學部改為（四技雙班）</span>
                </div>
                <div className="timePoint">
                  <span className="point" />
                  <strong className="time">西元2011年(民國一百零二年)</strong><br />
                  <span className="content">與本校企業管理研究所合併</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="pl-2 pr-2 pb-3">
            <Col md="3">
              <h1><ShillIcon /><CodeIcon /><strong style={{ fontSize: "24px"}}> 課程分享<span style={{ fontSize: "18px"}}>(專業)</span></strong></h1>
            </Col>
            <Col xs="12" sm="12" md="9" lg="9">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <ul>
                <li>採購管理/生產管理/倉儲管理/運輸管理:<br />你的腦海中，將會有一張企業的作業藍圖，雖然現實中，每間企業特性不同，但要了解外包與自營的決策，都是滿滿的成本與技術考量，在E化方面，也逐漸推動自動化的趨勢，也衍生出很多有趣的軟體與設備應用。</li>
                <li>物流管理/供應鏈管理:<br />要跨組織、要跨企業、要跨國，脫離不了資訊的流動，越是透明，供應鏈可能越會成功，尤其在台灣以中小企業為支柱的環境，未來有很高的機率進入其中工作，如何提高配合度、提高效率、降低成本，資訊、流程、減少重工可能是重要的解藥。</li>
              </ul>
            </Col>
          </Row>
          <Row className="pl-2 pr-2 pb-3">
            <Col md="3">
              <h1><GlobeIcon /><CodeIcon /><strong style={{ fontSize: "24px"}}> 課程分享<span style={{ fontSize: "18px"}}>(資訊)</span></strong></h1>
            </Col>
            <Col xs="12" sm="12" md="9" lg="9">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI、物聯網、工業4.0、無人運輸...等應用，隨著計算機硬體性能大幅提升，讓資料計算、傳遞更加快速，物流領域也逐漸搭著E化的順風車，推出更多的商業應用，所以您不能不了解資訊的趨勢與概念。</p>
              <ul>
                <li>計算機概論:<br />程式就像工具，物件導向就像事情，很多事情需要用工具做事，但很多事情都重覆工作，如何找到事情的重複性，想辦法降低重工的方法，在這你/妳會在此紮下思考的基礎。</li>
                <li>統計學:<br />學會如何蒐集、歸納、分析、解釋資料與判斷決策等，可能擅長數學的你/妳，會知道一間有前景的企業，都會靠百萬筆顧客數據分析，來了解顧客目前的喜好，來改善產品設計。</li>
                <li>資料庫:<br />妳/你至少會了解資料是什麼型態，在生活上，資料就是紀錄事物，為了未來有一天以備不時之需，方便你/妳查詢資料，進一步也能統計分析。</li>
                <li>VISSIM:<br />如果你/妳對交通領域有興趣，那麼這堂課，可以學到如果要改善或規劃一種交通情況，該怎麼如何取得可信的資料數據，並加入軟體環境中監測、實驗，決策結果的服務水準將會帶來什麼樣的改善。</li>
                <li>物流軟體應用:<br />資料探勘，統計不錯的妳/你 或是 對現在大數據分析有興趣，不訪可以學這堂課，了解基本的各演算法用途與型態，找尋你想要關注的資料與訂定預期決策目標，其中送給分析軟體做計算，演算法做出的決策結果是否如你預期想做的應用目標!?</li>
                <li>電子商務:<br />你/妳有用過Yhool!、蝦皮、Amazon、PChome或是其他家自營電商平台嗎? 每一個實體產品的電商，都有各自的商業模式與文化，如果是妳/你會如何用物流專業知識來設計產品的核心價值，如果你對WEB技術更加了解，還能為平台前端客製更多獨一無二的功能。</li>
                <li>ERP:<br />課程上證照專業、ERP核心技術，大至上能了解資料是如何流動，在業界的企業中，每間的ERP軟體是不盡相同，但運作原理離不開，資料關聯性、即時更新兩大因素優化作業的效率。(本段需改善...)</li>
              </ul>
            </Col>
          </Row>
          <Row className="pl-2 pr-2 pb-3">
            <Col md="3">
              <h1><StarIcon /><CodeIcon /><strong style={{ fontSize: "24px"}}> 課程分享<span style={{ fontSize: "18px"}}>(選修)</span></strong></h1>
            </Col>
            <Col xs="12" sm="12" md="9" lg="9">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;累...需要有人求助 QQ</p>
              <ul>
                <li>累...需要有人求助 QQ<br /></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
