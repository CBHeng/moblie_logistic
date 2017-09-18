import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import firebase from 'firebase';
import PageViewsIcon from 'react-icons/lib/fa/paper-plane';
import NewsUpdateTimeIcon from 'react-icons/lib/fa/bug';
import DevelopUpdateTimeIcon from 'react-icons/lib/fa/cloud-upload';

export default class InformationBar extends Component {
  constructor() {
    super();
    this.state = {
      pageView: "loading...",
      updateTime: "loading..."
    };
  }
  componentWillMount() {
    const DBpageView = firebase.database().ref().child('pageView');
    const DBNewsUpdateTime = firebase.database().ref().child('updateTime').child('news');

    const pageView = window.localStorage.getItem("logistics_pageView");
    if (pageView === "viewed") {
      console.log('造訪過惹');
      // 直接顯示造訪人數
      DBpageView.once('value').then((response) => {
        console.log(response.val());
        this.setState({
          pageView: response.val()
        });
      });
    } else {
      console.log('未造訪過');
      window.localStorage.setItem("logistics_pageView", "viewed");
      // 先到db，拿出瀏覽紀錄
      DBpageView.once('value').then((response) => {
        // +1
        const updateData = response.val() + 1;
        // 儲存
        DBpageView.set(updateData);
        // 顯示
        this.setState({
          pageView: updateData
        });
      });
    }

    DBNewsUpdateTime.once('value', (response) => {
      console.log(response.val());
      this.setState({
        updateTime: response.val()
      });
    });
  }

  render() {
    return (
      <Card className="mt-3 mb-3" block >
        <CardTitle className="font-weight-bold"><PageViewsIcon />  造訪 <span className="h6 font-weight-bold">人數</span></CardTitle>
        <CardText className="text-center h4 font-weight-bold"> {this.state.pageView} <span className="h6 font-weight-bold">人 來觀看過瞜!</span></CardText>
        <CardTitle className="font-weight-bold pt-4"><NewsUpdateTimeIcon /> 消息 <span className="h6 font-weight-bold">Update Time</span></CardTitle>
        <CardText className="text-center h5 font-weight-bold">{this.state.updateTime}</CardText>
        <CardTitle className="font-weight-bold pt-4 mt-1"><DevelopUpdateTimeIcon /> 開發 <span className="h6 font-weight-bold">Update Time</span></CardTitle>
        <CardText className="text-center h5 font-weight-bold">{this.state.updateTime}</CardText>
      </Card>
    );
  }
}
