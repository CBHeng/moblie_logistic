import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import facebook from 'static/images/facebook.svg';
import instagram from 'static/images/instagram.svg';
import logo from 'static/images/logo.jpg';
import home from 'static/images/home.svg';
import news from 'static/images/news.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="header">
        <Container>
          <Navbar className="p-0" light toggleable>
            <NavbarToggler right className="m-0 mt-2" onClick={this.toggle} s />
            <NavbarBrand href="/">
              <img alt="Logistics" src={logo} height="50px"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="font-weight-bold pl-3" href="./#/news">全消息</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold pl-3" href="./#/introduction">運籌介紹</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold pl-3" href="./#/professor">教授介紹</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold pl-3" href="./#/development">開發初衷</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}
