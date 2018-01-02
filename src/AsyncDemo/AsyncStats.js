import React from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import autoBind from 'react-autobind';

@inject("AsyncDemoStore") @observer
export default class AsyncStats extends React.Component {
  constructor(props) { super(props); autoBind(this); }

  // do not put the guts into the <button onclick/>. You'd lack your this-ness. Yay autobind!
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
        <p>Code that retrieves a service result does not have to manage side affects.
          Mobx helps me write UI that reacts only to model changes.</p>       
      </div>
    );
  }
}