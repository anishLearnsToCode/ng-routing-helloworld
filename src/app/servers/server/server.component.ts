import {Component, OnDestroy, OnInit} from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from '../Server.model';
import {ActivatedRoute, Params} from '@angular/router';
import { RoutesParameters } from '../../../routing/RoutesParameters';
import {Subscription} from 'rxjs';
import {EditServerQueryParameters} from '../edit-server/EditServerQueryParameters';
import {UsersService} from '../../users/users.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnDestroy {
  public server: Server;
  private readonly activeRouteSubscription: Subscription;

  constructor(private serversService: ServersService,
              private readonly activeRoute: ActivatedRoute,
              private readonly usersService: UsersService) {
    this.activeRouteSubscription = this.activeRoute.params.subscribe((parameters: Params) => {
      if (parameters[RoutesParameters.ID]) {
        this.server = this.serversService.getServer(parameters[RoutesParameters.ID]);
      } else {
        this.server = this.serversService.getServer(1);
      }
    });
  }

  ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
  }


  public getQueryParameters(serverId: number): EditServerQueryParameters {
    return {
      allowEditing: this.usersService.canUserEditServer(serverId)
    };
  }
}
