import {Component} from '@angular/core'
@Component({
selector:'app-server',
templateUrl:'./server.component.html',

})
export class ServerComponent {
    serverStatus=false;
    content='Wait two seonds to be able to add a new server';
    creationStatus='no server was created';
    serverName='test server'
    userName='';
    nameStatus=false;
    constructor(){

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

//this method is called when clicking the add server button
onCreationStatus(){
    this.creationStatus='Server created';
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
}