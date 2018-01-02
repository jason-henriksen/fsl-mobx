import { observable, computed  } from 'mobx';
export class GridModel {
  @observable data = {'rows': [{ 'a': 5, 'b': 6, 'c': 7, 'd': 8 }, { 'a': 15, 'b': 7, 'c': 7, 'd': 4 },
                               { 'a': 25, 'b': 8, 'c': 7, 'd': 2 },{ 'a': 35, 'b': 9, 'c': 7, 'd': 0 }]};  
  @computed get rowSums() {    // total of deeply observable JSON values
    var res=[];                // automatically updated when nested data values change
    for (var rctr = 0; rctr < this.data.rows.length; rctr++) {
      var rowView = this.data.rows[rctr];
      var count=0, sum=0;
      if (Number(this.data.rows[rctr].a) >= 0) { count++; sum += Number(this.data.rows[rctr].a);}
      if (Number(this.data.rows[rctr].b) >= 0) { count++; sum += Number(this.data.rows[rctr].b); }
      if (Number(this.data.rows[rctr].c) >= 0) { count++; sum += Number(this.data.rows[rctr].c); }
      if (Number(this.data.rows[rctr].d) >= 0) { count++; sum += Number(this.data.rows[rctr].d); }
      rowView['sum'] = sum;
      rowView['count'] = count;
      rowView['avg'] = sum/count;
      res.push(rowView);
    }
    return res;
  }
  @computed get fullSums() {    // sum of the sums of values
    var res = this.rowSums;     // automatically updated when rowSums changes
    var tsum=0, tctr=0;
    for (var rctr = 0; rctr < res.length; rctr++) {
      tctr += res[rctr].count;
      tsum += res[rctr].sum;
    }
    res.push( {sum:tsum,count:tctr,avg:(tsum/tctr)} );    
    return res;
  }  
}
export default new GridModel();