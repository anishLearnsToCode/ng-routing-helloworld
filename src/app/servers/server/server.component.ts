import {Component, OnDestroy, OnInit} from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from '../Server.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {EditServerQueryParameters} from '../edit-server/EditServerQueryParameters';
import {UsersService} from '../../users/users.service';
import {ServerComponentRouteParameters} from './ServerComponentRouteParameters';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnDestroy {
  public server: Server;
  private readonly routeParametersSubscription: Subscription;

  constructor(private serversService: ServersService, private readonly route: ActivatedRoute,
              private readonly usersService: UsersService) {
    this.routeParametersSubscription = this.route.params.subscribe((parameters: ServerComponentRouteParameters) => {
      if (parameters.id) {
        this.server = this.serversService.getServer(Number(parameters.id));
      } else {
        this.server = this.serversService.getServer(1);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeParametersSubscription.unsubscribe();
  }

  public getQueryParameters(serverId: number): EditServerQueryParameters {
    return {
      allowEditing: this.usersService.canUserEditServer(serverId)
    };
  }
}
