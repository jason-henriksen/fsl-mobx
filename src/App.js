import React, { Component } from 'react';
import Emoji from './Emoji';

//styles
import './App.scss';
import './App.less';
import './App.styl';

//modules
import cssStyles from './First.module.css';


import MicroDemo from './MicroDemo/MicroDemo';
import AsyncDemo from './AsyncDemo/AsyncDemo';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import autoBind from 'react-autobind';



@observer class App extends Component 
{

  constructor(props) { super(props); autoBind(this); }
  
  @observable demoNumber = 1;               // demo only, model in UI
  
  @action plusOne() { this.demoNumber++; }  // increment the number. just setting the var re-renders
  @action lessOne() { this.demoNumber--; }  // decrement the number. just setting the var re-renders
  
  
  render() {

    var demo='';
    if (this.demoNumber===0){demo = 
        <div>
          <h1>Minimum Possible Demo</h1>
          <MicroDemo />
        </div>
      
    }
    else if (this.demoNumber === 1) {demo =
        <div>
          <h1>Async Handling Demo</h1>
          <AsyncDemo />
        </div>

    }
    else{demo = <div><h1>Demo {this.demoNumber}</h1></div>   }


    return (
      <div className="App">
        <div className={cssStyles.header}>
          <h2 className="App-title">
            <Emoji label="danger" emoji="☢" />
            <span> Full Stack Labs: MobX Demo </span>
            <Emoji label="danger" emoji="☢" />
          </h2>
          <div className="App-subtitle">
            A tour of MobX features and techniques
          </div>
        </div>
        <button onClick={this.lessOne}>&lt;&lt;&lt; Prev Demo</button>
        <button onClick={this.plusOne}>Next Demo >>></button>        
        <div style={{ padding: '10px', boder: '1px solidblack', minHeight:'400px' }}>
          {demo}
        </div>

      </div>
    );
  }
}

export default App;
