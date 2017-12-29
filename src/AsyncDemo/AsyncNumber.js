import React from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import autoBind from 'react-autobind';

@inject("AsyncDemoStore") @observer 
export default class AsyncNumber extends React.Component {
  // MobX does NOT need this constructor.  This is just my personal thing.
  constructor(props) { super(props); autoBind(this); }

  //===== CONTROLLER CODE                 
  @action plusOne() { this.props.AsyncDemoStore.numberList[this.props.targetIndex]++; }  // no call to setState!
  @action lessOne() { this.props.AsyncDemoStore.numberList[this.props.targetIndex]--; }  // no call to setState!

  //===== VIEW CODE
  render() {
    var bgc ='#F9E79F';
    if (this.props.AsyncDemoStore.numberList[this.props.targetIndex]!==-1) {
      bgc ='#58D68D';
    }

    return (
      <div>
        <button onClick={this.lessOne}>&lt;&lt;</button>
        <div style={{minWidth:'75px',display:'inline-block',paddingLeft:'5px', backgroundColor:bgc}}>
          {this.props.targetIndex} : {this.props.AsyncDemoStore.numberList[this.props.targetIndex]}
        </div>
        <button onClick={this.plusOne}>&gt;&gt;</button>
      </div>
    );
  }
}