import React from 'react';
import { observer,inject } from 'mobx-react';
import autoBind from 'react-autobind';
import Infinite from 'react-infinite';  // don't show out-of-scroll
import AsyncNumber from './AsyncNumber';// show a number
import AsyncStats from './AsyncStats';  // show the sums

@inject("AsyncDemoStore") @observer     // tells the provider to give access to the AsyncDemoStore
export default class AsyncDemoLayout extends React.Component {
  constructor(props) { super(props); autoBind(this); }

  render() {
    var numList=[];
    // this.props.StoreName gives me any store in the provider!
    for (var ctr = 0; ctr < this.props.AsyncDemoStore.numberList.length;ctr++){
      // why iterate instead of map? Because I want to react if the array length changes.
      numList.push( <AsyncNumber targetIndex={ctr} key={ctr}/> );
    }
    return (
      <div>
        <div style={{width:'450px', display:'inline-block',verticalAlign:'top'}}>
          <AsyncStats/>
        </div>
        <div style={{width: '200px',display:'inline-block',border: '1px solid grey', height: '250px',}}>
          <Infinite containerHeight={250} elementHeight={22}>{numList}</Infinite>
        </div>
      </div>
    );
  }
}