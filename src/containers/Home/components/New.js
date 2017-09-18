import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Badge } from 'reactstrap';

export default class Content extends Component {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    newSsn: PropTypes.string,
  }
  render() {
    const { title, date, newSsn } = this.props;
    const newslink = `./#/news/${newSsn}`;
    return (
      <ListGroupItem className="justify-content-between" tag="a" href={newslink}><p className="p-0 m-0">{title}</p><Badge color="success">{date}</Badge></ListGroupItem>
    );
  }
}
