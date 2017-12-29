import React from 'react';
import { observer, inject } from 'mobx-react';
import autoBind from 'react-autobind';
import { action } from 'mobx';


@inject("AsyncDemoStore") @observer
export default class AsyncStats extends React.Component {
  constructor(props) { super(props); autoBind(this); }

  // just call the method.  no boilde rplate.
  // do not skip this and put the code into the onclick, you'll lack this-ness
  @action loadNumbers() { this.props.AsyncDemoStore.getManyDataItems(); }

  render() {
    // This a react thing:  smaller components perform better.
    // These stats change a lot.  If they were in the same render method
    // as my very long item list, the UI would be much slower
    return (
      <div>
        <button onClick={this.loadNumbers}>Get Random Numbers</button><br />
        <div style={{ fontFamily: 'monospace', fontSize: '18pt' }}>
          Running Sum..... {this.props.AsyncDemoStore.runningTotal}<br />
          Final Sum....... {this.props.AsyncDemoStore.finalTotal}<br />
          Returned Count.. {this.props.AsyncDemoStore.returnCount} / {this.props.AsyncDemoStore.listSize}<br />
        </div>
        <p>The code that retrieves the values, does not have to await other values returning.
          Mobx gives me control over how the UI reacts to new data.</p>       
      </div>
    );
  }
}