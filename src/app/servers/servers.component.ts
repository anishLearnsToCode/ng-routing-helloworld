import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router } from '@angular/router';
import {Server} from './Server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  public servers: Server[] = [];

  constructor(private serversService: ServersService, private readonly router: Router) {
    this.servers = this.serversService.getServers();
  }

  public onReloadServers(): void {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/servers']);
  }
}
