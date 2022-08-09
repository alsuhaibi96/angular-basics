import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent   {
btnStatus=false;
waitingAlert='wait three seconds to be able to see details';
secretPass='';
  constructor( ) { 

    this.callButtonToggler();
  }

  

  callButtonToggler(){

    setTimeout(()=>{
      this.btnStatus=true;
this.waitingAlert='Now you can toggle to see details';
    },3000)
  }
  onButtonClick(){
this.secretPass='tina';

  }

}
