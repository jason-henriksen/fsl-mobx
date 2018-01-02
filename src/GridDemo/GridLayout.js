import React from 'react';
import { whyRun } from 'mobx';
import { observer,inject } from 'mobx-react';
import autoBind from 'react-autobind';
import ReactDataGrid from 'react-data-grid';

@inject("GridStore") @observer     // tells the provider to give access to the AsyncDemoStore
export default class GridLayout extends React.Component {
  constructor(props) { super(props); autoBind(this); }
  columns = [{ name:'a',key:'a',editable:true }, 
  { name: 'b', key: 'b', editable: true }, { name: 'c',key: 'c', editable: true }, {name:'d',key:'d', editable: true },
    { name: 'count', key: 'count', cellClass: 'right-align tableReadOnly' }, 
    { name: 'sum', key: 'sum', cellClass: 'right-align tableReadOnly' }, 
    { name: 'avg', key: 'avg', cellClass: 'right-align tableReadOnly' },
  ];

  handleGridRowsUpdated({fromRow,updated}){           // edit the underlying data
    if (this.props.GridStore.data.rows.length>fromRow){
      if (updated.a) { this.props.GridStore.data.rows[fromRow].a = updated.a };
      if (updated.b) { this.props.GridStore.data.rows[fromRow].b = updated.b };
      if (updated.c) { this.props.GridStore.data.rows[fromRow].c = updated.c };
      if (updated.d) { this.props.GridStore.data.rows[fromRow].d = updated.d };
    }
  };  

  rowGetter(i) { return this.props.GridStore.fullSums[i]; }  // render the calcuated data

  render() {
    var ui = 
    <div style={{ padding: '5px', maxWidth: '50%' }}>
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.GridStore.fullSums.length}
        minHeight={185}
        rowHeight={30}
        rowHeaderHeight={10}
        onGridRowsUpdated={this.handleGridRowsUpdated} />
        <p>This demo illustrated a grid editor with a data view.<br />
          It also shows the simplicity of writing a MobX store unit test.</p>
      </div>
    whyRun();    // run this last to see everything MobX accessed during this render
    return(ui);  // returning the UI as a variable lets whyRun see everything that happens 
  }
}