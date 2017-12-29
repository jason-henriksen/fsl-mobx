import { observable, computed, action, autorun } from 'mobx';

class AsyncDemoModel {           // Just a class.  Nothing fancy here.
  @observable numberList = [-1]; // no magic, just numbers in an array
  @observable listSize=200;      // number of numbers to get
  
  @action getManyDataItems() {   // go ask for a bunch of random numbers
    this.numberList.replace();   // empty the list
    for (var ctr = 0; ctr < this.listSize; ctr++){        // count to goal 
      this.numberList.push(-1);                           // make the array the right size
      setTimeout( this.getRandomForIndex.bind(this,ctr) , // call a service
                  200+Math.random()*3000 );               // after a random wait
    } 
  }

  @action getRandomForIndex(idx){   // fake service.  Just sets a random number
    this.numberList[idx] = Math.floor( (Math.random()*100) );  
  }

  @computed get runningTotal() {    // running total of collected values
    var res=0;                      // *** automatically called when values in numberList change!!! ***
    for (var ctr = 0; ctr < this.numberList.length; ctr++) {
      if (this.numberList[ctr] !== -1){  res += this.numberList[ctr];   }
    }
    return res;
  }
  
  @computed get finalTotal() {      // only gives a total when all results are present
    var res = 0;
    for (var ctr = 0; ctr < this.numberList.length; ctr++) {
      if (  this.numberList[ctr] === -1) { return '???'; }
      else{ res += this.numberList[ctr];  }
    }                               // why iterate twice? fix it in demo 3!
    return res;
  }

  @computed get returnCount() {
    var res = 0;
    if (this.numberList.length === 0) { return 0; }
    for (var ctr = 0; ctr < this.numberList.length; ctr++) {
      if (this.numberList[ctr] !== -1) { res++; }
    }
    return res;
  }  

  popAlertWhenDone(){
    // this is called every time return count changes! When time is right, the action happens!
    if( this.returnCount === this.listSize){ 
      setTimeout( ()=>{window.alert('All data loaded!')} , 200);
    }
  }
}

const AsyncDemoStore = new AsyncDemoModel();

autorun(function () { 
 // autorun returns a disposer.  This is global so I'm ignoring it for today.
 // We do not call autorun inside the class because it needs the object for this-ness.
 AsyncDemoStore.popAlertWhenDone();
});

export default AsyncDemoStore;
