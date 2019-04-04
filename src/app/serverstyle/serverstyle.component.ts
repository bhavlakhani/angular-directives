import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverstyle',
  templateUrl: './serverstyle.component.html',
  styleUrls: ['./serverstyle.component.css']
})
export class ServerstyleComponent implements OnInit {

  serverId = 1;
serverStatus = "offline";
  constructor() {
    this.serverStatus =Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
