import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Card, CardTitle, Badge, CardBlock, CardText, Media } from 'reactstrap';
import ProfessorIcon from 'react-icons/lib/fa/group';
import StarIcon from 'react-icons/lib/fa/star-o';
import GraduationIcon from 'react-icons/lib/fa/graduation-cap';
import PhoneIcon from 'react-icons/lib/fa/phone';
import MailIcon from 'react-icons/lib/fa/envelope';
import SpecialtyIcon from 'react-icons/lib/fa/thumbs-up';
import WebIcon from 'react-icons/lib/md/web';
import MapIcon from 'react-icons/lib/fa/map-signs';
import BoardIcon from 'react-icons/lib/go/circuit-board';
import TruckIcon from 'react-icons/lib/fa/truck';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';

export default class Introduction extends Component {
  render() {
    const SchoolfontSize = { fontSize: "14px", color: "#888" };
    return (
      <div>
        <Header />
        <Jumbotron id="Professor_Jumbotron" className="p-4">
          <Container>
            <h3 className="display-5" style={{ letterSpacing: "0.2em" }}><ProfessorIcon /> <strong>運籌<span style={{ fontSize: "0.8em" }}>教授 </span></strong></h3>
            <hr className="my-2" />
            <p>提供教授簡介、聯絡資訊提供查詢 ! (資料來自:原運籌官網)</p>
          </Container>
        </Jumbotron>
        <Container style={{ paddingBottom: "100px" }}>
          <Row className="mt-5 mb-5">
            <Col xs="12">
              <h3 className="font-weight-bold"><StarIcon /> 系主任</h3>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_01.gif" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                    林立千<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國喬治亞理工學院工業暨系統工程博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 物流管理、倉儲管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C417 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3213</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> lclin@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col xs="12">
              <h3 className="font-weight-bold"><BoardIcon /> 製造物流領域</h3>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_03.gif" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                    蔡坤穆<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國普渡大學工業工程博士</h6>
                  <h5><Badge color="primary" pill><SpecialtyIcon/> 物流資訊系統、通路管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C406 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3212</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> kmtsai@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_02.gif" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  林燦煌<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國喬治亞理工學院工業暨系統工程博士</h6>
                  <h5><Badge color="primary" pill><SpecialtyIcon/> 物流管理、倉儲管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C416 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3211</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> percy@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_04.gif" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                    郭幸民<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國俄亥俄州立大學工業暨系統工程博士</h6>
                  <h5><Badge color="primary" pill><SpecialtyIcon/> 系統模擬分析、生產管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C415 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3216</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> smguo@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_17.jpg" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                    蕭俊彥<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國亞利桑那州立大學工業工程博士</h6>
                  <h5><Badge color="primary" pill><SpecialtyIcon/> 資訊技術應用、組態管理、<br />產品生命週期管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C435 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3224</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> sho@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col xs="12">
              <h3 className="font-weight-bold"><TruckIcon /> 運輸配送</h3>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/wwu2.jpg" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  吳偉銘<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國內布拉斯加州大學林肯分校經濟博士</h6>
                  <h5><Badge color="success" pill><SpecialtyIcon/> 管理經濟、研究方法、<br />產業分析理論</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C462 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3812</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> wwu@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_15.jpg" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  楊大輝<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國普渡大學土木工程博士</h6>
                  <h5><Badge color="success" pill><SpecialtyIcon/> 運輸及物流網路設計、<br />動態交通運輸系統分析、<br />航空營運管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C430 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3223</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> yang@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_08.gif" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                   黃山琿<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國威斯康辛大學麥迪遜分校 土木與環境工程博士</h6>
                  <h5><Badge color="success" pill><SpecialtyIcon/> 交通預測、區位配置、<br />車輛指派問題</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C308 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3218</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> shanhuen@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.0-9/10429314_849093128457398_4161465767662463682_n.jpg?oh=f3056a5b88ea4859014af3f09210265b&oe=5A4DB1D9" alt="李明聰" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  李明聰<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />德國布朗施維克工業大學運輸科學及都市建設工程博士</h6>
                  <h5><Badge color="success" pill><SpecialtyIcon/>短期交通預測、車流理論<br />綠色運輸與配送</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( B334 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3222</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> m-t.lee@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/7488004_COPY.jpg" alt="王亮云" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  王亮云<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />法國東巴黎大學經濟、管理與區域研究學院運輸博士</h6>
                  <h5><Badge color="success" pill><SpecialtyIcon/> 國際物流、供應鏈管理 、<br />運輸經濟、質性研究法</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( B333 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3210</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> lywang@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
          </Row>
          <Row className="mt-5 pb-5">
            <Col xs="12">
              <h3 className="font-weight-bold"><TruckIcon /> 企業運籌</h3>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/roger.jpg" alt="陳振遠" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  陳振遠<span style={{ fontSize: "20px"}}>教授兼校長</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國德州大學達拉斯分校 財務博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 創業投資、企業併購、<br />投資銀行</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C438 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3810</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> roger@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_01.gif" alt="林立千" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  林立千<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國喬治亞理工學院工業暨系統工程博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 物流管理、倉儲管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C417 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3213</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> lclin@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/head1_small.jpg" alt="陳彥銘" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                    陳彥銘<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國華盛頓大學系統科學與數學博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 時間序列資料分析、<br />策略賽局、風險決策、<br />物聯網與穿戴裝置</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C418 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3214</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> yjjchen@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/lif.jpg" alt="劉宜芬" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  劉宜芬<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />國立中山大學 企業管理博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 消費者行為、企業管理、<br />服務行銷管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C429 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3221</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> yifenliu@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_06.jpg" alt="王仁宏" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  王仁宏<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國普渡大學工業工程博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 綠色供應鏈管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C407 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3217</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> jenhung@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_13.gif" alt="李恒綺" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  李恒綺<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />美國德州農工大學農業經濟博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 效率分析、風險分析、<br />資源環境政策</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C408 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3215</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> hlee@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
            <Col className="mt-3 mb-3" xs="12" sm="12" md="8" lg="6">
              <Media>
                <Media left top className="pr-3 text-center">
                  <img className="rounded-circle" src="http://www.logistics.nkfust.edu.tw/ezfiles/27/1027/img/167/pic_professor_10.gif" alt="陳珍珍" width="120px" /><br />
                </Media>
                <Media body>
                  <Media heading className="font-weight-bold h3">
                  陳珍珍<span style={{ fontSize: "20px"}}>教授</span><Button color="link"><WebIcon /> WebPage</Button>
                  </Media>
                  <h6 style={SchoolfontSize}><GraduationIcon />日本京都大學經濟博士</h6>
                  <h5><Badge color="danger" pill><SpecialtyIcon/> 企業管理、日本企業、<br />人力資源管理</Badge></h5>
                  <h5><Badge color="info" pill><MapIcon/> 教師實驗室( C409 )</Badge></h5>
                  <h5><Badge color="info" pill><PhoneIcon /> (07) 6011000 Ext.3217</Badge></h5>
                  <h5><Badge color="info" pill><MailIcon /> jjen@nkfust.edu.tw</Badge></h5>
                </Media>
              </Media>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
