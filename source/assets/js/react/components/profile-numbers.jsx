import React, { Component, PropTypes } from 'react';

export default class ProfileNumbers extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="profileNumbers">
        <ul className="profileNumbers-list">
          <li className="profileNumbers-item">
            <a className="profileNumbers-link on" href="">
              <span className="profileNumbers-title">Tweets</span>
              <em className="profileNumbers-amount">20.3K</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Following</span>
              <em className="profileNumbers-amount">867</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Followers</span>
              <em className="profileNumbers-amount">232K</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Likes</span>
              <em className="profileNumbers-amount">20</em>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
