import React, { Component, PropTypes } from 'react';

export default class WidgetTrends extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <section className="widgetTrends">
        <header className="widgetTrends-header">
          <h3 className="widgetTrends-header-title">Trends</h3>
          <button className="widgetTrends-header-link" type="button">Change</button>
        </header>
        <div className="widgetTrends-body">
          <ul className="widgetTrends-list">
            <li className="widgetTrends-item">
              <a className="widgetTrends-link" href="">
                <strong className="widgetTrends-name">#EuQueroTanto</strong>
                <span className="widgetTrends-stats">4,349 Tweets</span>
              </a>
            </li>
            <li className="widgetTrends-item">
              <a className="widgetTrends-link" href="">
                <strong className="widgetTrends-name">#SabadoClubeSDV</strong>
                <span className="widgetTrends-stats">10.2K Tweets</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
