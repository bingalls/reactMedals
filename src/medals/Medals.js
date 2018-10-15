import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Data from './Data';
// import Feed from './Feed';   // to mock AJAX
import './medals.css';

const Feed = {
  list: []
};

class Medals extends Component {

  constructor(props) {
    super(props);
    // Feed.list = Data.totals(Data.sort(Feed.list));   // to mock AJAX & disable following block
    axios.get('https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json')
      .then(json => {
        Feed.list = Data.totals(json.data);
        this.setState(Feed);
      });
    // noinspection JSValidateTypes
    this.state = Feed;
  }

  sort = (key) => {
    Feed.list = Data.sort(Feed.list, key);
    this.setState(Feed);
  };

  void() {}

  render() {
    return (
      <div>
      <h1 className="medal">MEDAL COUNT</h1>
        <br className="medal" />
      <table className="medal">
        <tbody>
        <tr>
          <td className="medalhead"> </td>
          <td className="medalhead"> </td>
          <td className="medalhead"> </td>
          <td className="medalhead"> </td>
          <td className="medalhead"><a href={this.void()} onClick={() => this.sort('gold')}><img alt="Gold" src={"/gold.svg"} /></a></td>
          <td className="medalhead"><a href={this.void()} onClick={() => this.sort('silver')}><img alt="Silver" src={"/silver.svg"} /></a></td>
          <td className="medalhead"><a href={this.void()} onClick={() => this.sort('bronze')}><img alt="Bronze" src={"/bronze.svg"} /></a></td>
          <td className="medalhead"><a href={this.void()} onClick={() => this.sort('total')}>TOTAL</a></td>
        </tr>
        {(this.state.list || []).slice(0,10).map((item, i) => (
          <tr key={i}>
            <td className="medal">{i+1}</td>
            <td className="medal"><img alt="{item.code}" src={`/${item.code}.svg`} /></td>
            <td className="medal big"><b>{item.code}</b></td>
            <td className="medal"> &nbsp; </td>     {/* todo: replace with css */}
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
