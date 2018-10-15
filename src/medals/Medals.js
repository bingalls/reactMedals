// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Data from './Data';
import Feed from './Feed';
import './medals.css';

class Medals extends Component {
  constructor(props) {
    super(props);
    Feed.list = Data.totals(Data.sort(Feed.list));
    // noinspection JSValidateTypes
    this.state = Feed;
  }

  sortGold = () => {
    Feed.list = Data.sort(Feed.list, 'gold');
    this.setState(Feed);
  };

  // noinspection JSUnusedLocalSymbols
  sortSilver = () => {
    Feed.list = Data.sort(Feed.list, 'silver');
    this.setState(Feed);
  };

  // noinspection JSUnusedLocalSymbols
  sortBronze = () => {
    Feed.list = Data.sort(Feed.list, 'bronze');
    this.setState(Feed);
  };

  // noinspection JSUnusedLocalSymbols
  sortTotal = () => {
    Feed.list = Data.sort(Feed.list, 'total');
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
          <td className="medalhead"><a href={this.void()} onClick={this.sortGold}><img alt="Gold" src={"/gold.svg"} /></a></td>
          <td className="medalhead"><a href={this.void()} onClick={this.sortSilver}><img alt="Silver" src={"/silver.svg"} /></a></td>
          <td className="medalhead"><a href={this.void()} onClick={this.sortBronze}><img alt="Bronze" src={"/bronze.svg"} /></a></td>
          <td className="medalhead"><a href={this.void()} onClick={this.sortTotal}>TOTAL</a></td>
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
