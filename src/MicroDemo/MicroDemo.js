import React from 'react';
import { observable,action } from 'mobx';
import { observer } from 'mobx-react';
import autoBind from 'react-autobind';

@observer export default class MicroDemo extends React.Component 
{
  // MobX does NOT need this constructor.  This is just my personal thing.
  constructor(props) { super(props); autoBind(this); }

  //===== MODEL CODE                      -- Dangerously in a view component! Demo only!
  @observable myNumber = 0;               // this is a variable that I want the UI to care about.

  //===== CONTROLLER CODE                 -- Dangerously in a view component! Demo only!
  @action plusOne() { this.myNumber++; }  // increment the number. just setting the var re-renders
  @action lessOne() { this.myNumber--; }  // decrement the number. just setting the var re-renders

  //===== VIEW CODE
  render(){
    return(
      <div>
        <button onClick={this.lessOne}>- -</button>
        <button onClick={this.plusOne}>+ +</button><br/>
        {this.myNumber} 
        <p>The simple act of reading this.myNumber during a render() tells Mobx:<br/>
        Whenever the value changes re-render this component.</p>        
      </div>
    );
  }
}