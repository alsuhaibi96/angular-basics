import {Component} from '@angular/core'
@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styles:[`.online {
    color:white;
}`]

})
export class ServerComponent {
    serverStatus=false;
    content='Wait two seonds to be able to add a new server';
    creationStatus=false;
    onCreationStatusVar='no server added';

    serverOnOrOff='';
    serverName='test server'
    userName='';
    nameStatus=false;
    constructor(){
             this.serverOnOrOff=Math.random() > 0.5?'online':'offline';
        this.callServerStatus();
        this.onUpdateUserName()
    
}

//calling to change the status of the server
callServerStatus(){
    setTimeout(()=>{
this.serverStatus=true
this.content='you can add as many severs as you want';
    },2000)
}

getServerStatus(){
  return  this.serverOnOrOff;
}

//this method is called when clicking the add server button
onCreationStatus(){
    this.creationStatus=true;
    this.onCreationStatusVar=this.serverName+'created successfully';
    // this.creationStatus='Server created';
}

//update server list
onUpdateServer(event:any){
    this.serverName=(<HTMLInputElement> event.target).value;
}
onUpdateUserName(){
    if(this.userName==='')
    this.nameStatus=false
    else
    this.nameStatus=true;

// this.userName
}


getColor(){
    return this.serverOnOrOff==='online' ?'green':'red';
}
}