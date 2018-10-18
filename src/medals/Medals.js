import axios from 'axios';      // jscs:ignore
import Data from './Data';
// import Feed from './Feed';   // to mock AJAX
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './medals.css';
import './progress.css';

const Feed = {
  bronze: { height: 18 },
  errorStyle: { display: 'none' },
  gold: { height: 18 },
  list: [],
  silver: { height: 18 },
  goldHead: { backgroundColor: '#eee' },
  silverHead: { backgroundColor: 'white' },
  bronzeHead: { backgroundColor: 'white' },
  totalHead: { backgroundColor: 'white' },
  wheelStyle: { display: 'block' }
};

/**
 * Table of Olympic medal counts, sorted by country
 */
class Medals extends Component {

  constructor(props) {
    super(props);
    // Feed.list = Data.totals(Data.sort(Feed.list));   // to mock AJAX & disable following block
    axios.get('https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json')
      .then(json => {
        Feed.list = Data.totals(Data.sort(json.data));
        Feed.wheelStyle = { display: 'none'};     // hide progress throbber
        this.setState(Feed);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
        Feed.errorStyle = { display: 'block'};
        Feed.wheelStyle = { display: 'none'};
        this.setState(Feed);
      });
    // noinspection JSValidateTypes
    this.state = Feed;
  }

  sort = (key) => {
    Feed.list = Data.sort(Feed.list, key);

    Feed.goldHead = { backgroundColor: 'white' };
    Feed.silverHead = { backgroundColor: 'white' };
    Feed.bronzeHead = { backgroundColor: 'white' };
    Feed.totalHead = { backgroundColor: 'white' };
    switch (key) {
      case 'silver':
        Feed.silverHead = { backgroundColor: '#eee' };
        break;
      case 'bronze':
        Feed.bronzeHead = { backgroundColor: '#eee' };
        break;
      case 'total':
        Feed.totalHead = { backgroundColor: '#eee' };
        break;
      default :
        Feed.goldHead = { backgroundColor: '#eee' };
        break;
    }
    this.setState(Feed);
  };

  void() {}

  render() {
    return (
      <div>
      <h1 className="medal">MEDAL COUNT</h1>
        <img alt="loading..." id="wheel" src={"/img/loading-wheel.svg"}
             style={Feed.wheelStyle} />
        <br className="medal" />
        <div style={Feed.errorStyle}>Failed connection to data source. Please try back later</div>
      <table className="medal">
        <tbody>
        <tr>
          <td className="medalhead">&nbsp;</td>
          <td className="medalhead">&nbsp;</td>
          <td className="medalhead">&nbsp;</td>
          <td className="medalhead" style={Feed.goldHead}>
            <a href={this.void()} onClick={() => this.sort('gold')}><img alt="Gold" id="gold" src={"/img/gold.svg"} /></a></td>
          <td className="medalhead" style={Feed.silverHead}>
            <a href={this.void()} onClick={() => this.sort('silver')}><img alt="Silver" id="silver" src={"/img/silver.svg"} /></a></td>
          <td className="medalhead" style={Feed.bronzeHead}>
            <a href={this.void()} onClick={() => this.sort('bronze')}><img alt="Bronze" id="bronze" src={"/img/bronze.svg"} /></a></td>
          <td className="medalhead" style={Feed.totalHead}>
            <a href={this.void()} onClick={() => this.sort('total')}>TOTAL</a></td>
        </tr>
        {(this.state.list || []).slice(0,10).map((item, i) => (
          <tr key={i}>
            <td className="medal">{i+1}</td>
            <td className="medal"><img alt="{item.code}" src={`/img/${item.code}.svg`} /></td>
            <td className="medal big"><b>{item.code}</b></td>
            <td className="medal">{item.gold}</td>
            <td className="medal">{item.silver}</td>
            <td className="medal">{item.bronze}</td>
            <td className="medal"><b>{item.total}</b></td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Medals;
