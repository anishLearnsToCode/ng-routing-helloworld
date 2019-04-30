import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutesParameters } from '../../RoutesParameters';
import { Server } from '../Server.model';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnDestroy, OnChanges {
  public server: Server;
  public serverName = '';
  public serverStatus = '';
  public servers: Server[];
  private readonly routeParametersSubscription: Subscription;

  constructor(private readonly serversService: ServersService, private readonly route: ActivatedRoute) {
    this.servers = this.serversService.getServers();

    this.routeParametersSubscription = this.route.params.subscribe((parameters: Params) => {
      if (parameters[RoutesParameters.ID]) {
        this.setServer(parameters[RoutesParameters.ID]);
      } else {
        this.setServer(1);
      }
    });
  }

  onUpdateServer() {
    console.log(this.server.id);
    this.serversService.updateServer(this.server.id, new Server(this.server.id, this.serverName, this.serverStatus));
  }

  ngOnDestroy(): void {
    this.routeParametersSubscription.unsubscribe();
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  private setServer(serverId: number) {
    this.server = this.serversService.getServer(serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  public onServerNameSelect(event: Event) {
    console.log(event, 'hello');
  }

}
