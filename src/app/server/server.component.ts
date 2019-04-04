import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
allowNewServer =false;
serverCreationStatus = "No server created yet";
serverName ="TestServer";
serverCreated = false;


  constructor() {
    setTimeout(() =>
    {
      this.allowNewServer =true;
    },3000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "server created and name is" + this.serverName
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
