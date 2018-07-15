import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was Created";
  serverName = "Test Server Here";
  serverCreated = false;
  servers = ['TestServer','TestServer2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000,)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created" + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
