import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';

function nextButtom(props) {
  return (
    <div className="carousel-control-next" role="button">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </div>
    );
}

function prevArrow(props) {
  return (
    <div className="carousel-control-prev" role="button">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </div>
  );
}

export default class LogisticCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-item" id="carousel01">
            <div style={{ backgroundImage: "url('https://scontent.fkhh1-1.fna.fbcdn.net/v/t31.0-8/p960x960/14633180_575410562651481_1797260511392462885_o.jpg?oh=21b405030734c2740f3ff6b1f3369f51&oe=5A59B877')", backgroundSize: 'cover' }}>
              <div className="jumbotron m-0">
                <Container>
                  <p className="lead">提供智慧手機的您們，更好瀏覽的體驗</p>
                  <hr className="my-4" />
                  <p>建議Google chrome瀏覽器</p>
                </Container>
              </div>
            </div>
          </div>
          <div className="carousel-item" id="carousel02" >
            <div style={{ backgroundImage: "url('https://scontent.fkhh1-1.fna.fbcdn.net/v/t31.0-8/p960x960/16903362_10208046558508941_3868271182757277320_o.jpg?oh=03c2958668b702a664cb9e64fa10b4a3&oe=5A46BA56')", backgroundSize: 'cover' }}>
              <div className="jumbotron m-0">
                <Container>
                  <p className="lead">如果其他需求，請給我們想法</p>
                  <hr className="my-4" />
                  <p>We provide better experience about cell phone for you.</p>
                </Container>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
