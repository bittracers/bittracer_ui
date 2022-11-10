import React, { Component } from 'react';
import './engine.scss';
import Spreadsheet from 'react-spreadsheet';
class Engine extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        [{ value: "Case No" }, { value: "Case Desc" }, { value: "Test Method" }, { value: "Api Type" }, { value: "Env" }],
        [{ value: "No1" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No2" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No3" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No4" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No5" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No6" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No7" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No8" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No9" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
        [{ value: "No10" }, { value: "Verify parameter availabily" }, { value: "Regression" }, { value: "Single" }, { value: "stg, prod" }],
      ]
    }
  }
  render() {
    let { list } = this.state;
    return (
      <div className='engine'>
        {/* <div className='title'>🅂🅃🄰🅁🅃 🄷🄴🅁🄴</div> */}
        <Spreadsheet data={this.state.data} />
      </div>
    );
  }
}

export default Engine;