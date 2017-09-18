import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Container, Jumbotron, ListGroupItem, Badge, ListGroup, Table } from 'reactstrap';
import NewIcon from 'react-icons/lib/fa/bullhorn';
import BugIcon from 'react-icons/lib/fa/bug';
import Header from '../Home/components/Header';
import Footer from '../Home/components/Footer';


export default class NewsPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.state = {
      news: {
        title: "loading...",
        content: [],
        date: "loading..."
      }
    };
  }
  componentWillMount() {
    const ssn = this.props.match.params.newsSsn;
    const meRef = firebase.database().ref().child('news').child(ssn);

    meRef.once('value', (response) => {
      this.setState({
        news: response.val()
      });
      console.log(this.state.news.content);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Jumbotron id="News_Jumbotron" className="p-4">
          <Container>
            <h3 className="display-5" style={{ letterSpacing: "0.2em" }}><NewIcon /> <strong>運籌<span style={{ fontSize: "0.8em" }}>消息 </span></strong></h3>
            <hr className="my-2" />
            <p><BugIcon /> 系統爬蟲抓取原官網的消息，最新30筆，如果需要查詢更久之前的文章，請到官網查詢瞜!!</p>
            <p> 由於爬蟲笨笨的，轉換文字、表格的過程中，有些跑版or未斷行，未來待改進中，如有其他的觀看bug，請mail or <a href="https://www.facebook.com/profile.php?id=100009408644647">負責人</a>!</p>
          </Container>
        </Jumbotron>
        <Container style={{ paddingBottom: "150px" }}>
          <h4 className="m-0 pb-1 font-weight-bold">{this.state.news.title}</h4>
          <h6 className="m-0 pb-3">發佈日期 於 {this.state.news.date}</h6>
          <div className="m-0 p-0">{ this.state.news.content.map((element, index) => {
            switch (element.html) {
              case 'p':
                return (<p className="m-0 pb-2 font-weight-bold">{element.content}</p>);
              case 'table':
                return (
                  <Table className="table-bordered table-striped" responsive>
                    <thead className="thead-inverse">{element.tr.map((trElement, trIndex) => {
                      if (trIndex === 0) {
                        return (
                          <tr>
                            {trElement.td.map((tdElement, tdIndex) => <td>{tdElement.p.map((pElement, pIndex) => <p>{pElement}</p>)}</td>)}
                          </tr>
                          );
                      }
                      return ("");
                    })}
                    </thead>
                    <tbody>{element.tr.map((trElement, trIndex) => {
                      if (trIndex !== 0) {
                        return (
                          <tr>
                            {trElement.td.map((tdElement, tdIndex) => <td>{tdElement.p.map((pElement, pIndex) => <p>{pElement}</p>)}</td>)}
                          </tr>
                          );
                      }
                      return ("");
                    })}
                    </tbody>
                  </Table>
                );
              default:
                break;
            }
            return ("error");
          }) }</div>
          <h6 className="m-0 p-0">附件</h6>
          <a href={this.state.news.dowload_1_link}><img src={this.state.news.dowload_1_img} alt=""/>{this.state.news.dowload_1_title}</a><br />
          <a href={this.state.news.dowload_2_link}><img src={this.state.news.dowload_2_img} alt=""/>{this.state.news.dowload_2_title}</a><br />
          <a href={this.state.news.dowload_3_link}><img src={this.state.news.dowload_3_img} alt=""/>{this.state.news.dowload_3_title}</a>
        </Container>
        <Footer />
      </div>
    );
  }
}
