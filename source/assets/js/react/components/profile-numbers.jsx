import React, { Component, PropTypes } from 'react';
import MakeRequestJson from '../utils/request';

export default class ProfileNumbers extends Component {

  constructor(props) {
    super(props);

    this.state = {data: []};
  }

  componentDidMount() {
    let me = this;

    MakeRequestJson({ url: '/1.1/users/show.json?screen_name=americanascom'}, (data) => {
      me.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <nav className="profileNumbers">
        <ul className="profileNumbers-list">
          <li className="profileNumbers-item">
            <a className="profileNumbers-link on" href="">
              <span className="profileNumbers-title">Tweets</span>
              <em className="profileNumbers-amount">{this.state.data.followers_count}</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Following</span>
              <em className="profileNumbers-amount">{this.state.data.friends_count}</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Followers</span>
              <em className="profileNumbers-amount">{this.state.data.favourites_count}</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Likes</span>
              <em className="profileNumbers-amount">{this.state.data.statuses_count}</em>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
