import React from 'react';
import {Provider } from 'mobx-react';
import AsyncDemoStore  from './AsyncDemoStore.js'
import AsyncDemoLayout from './AsyncDemoLayout.js'

// a collection of model stores
const stores = { AsyncDemoStore };

export default class AsyncDemo extends React.Component 
{
  render(){
    // everything inside the provider has access to the stores
    return(
      <div>
        <Provider {...stores}>
          <AsyncDemoLayout/>
        </Provider>
      </div>
    );
  }
}

