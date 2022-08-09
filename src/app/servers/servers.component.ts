import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']

})
export class ServersComponent   {
  serverStatus=false;
  content='Wait two seonds to be able to add a new server';
  creationStatus='no servser was created';
  serverName='test server'
  nameStatus=false;
  
  serverOnOrOff='';


  servers=['server test 1','servser test 2'];
  constructor(){
      this.callServerStatus();
      this.serverOnOrOff=Math.random() > 0.5?'online':'offline';
  
}

//calling to change the status of the server
callServerStatus(){
  setTimeout(()=>{
this.serverStatus=true
this.content='you can add as many severs as you want';
  },2000)
}


//this method is called when clicking the add server button
onCreationStatus(){
this.servers.push(this.serverName);
  this.creationStatus=this.serverName+'Server created';
}

//update server list
onUpdateServer(event:any){
  this.serverName=(<HTMLInputElement> event.target).value;
}

getServerStatus(){
  return  this.serverOnOrOff;
}

getColor(){
    return this.serverOnOrOff==='online' ?'green':'red';
}
}
