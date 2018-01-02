import React from 'react';
import {Provider } from 'mobx-react';
import GridStore  from './GridStore.js'
import GridLayout from './GridLayout.js'

// a collection of model stores
const stores = { GridStore };

export default class GridDemo extends React.Component 
{
  render(){
    // everything inside the provider has access to the stores
    return(
      <div>
        <Provider {...stores}>
          <GridLayout/>
        </Provider>
      </div>
    );
  }
}

