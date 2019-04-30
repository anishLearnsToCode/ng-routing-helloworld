import {Component, OnDestroy, OnInit} from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from '../Server.model';
import {ActivatedRoute, Params} from '@angular/router';
import { RoutesParameters } from '../../RoutesParameters';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnDestroy {
  public server: Server;
  private readonly activeRouteSubscription: Subscription;

  constructor(private serversService: ServersService, private readonly activeRoute: ActivatedRoute) {
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

  public navigateToEditServerPage(event: MouseEvent): void {
    console.log(event);
  }
}
