import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { RoutesParameters } from '../../../routing/RoutesParameters';
import { Server } from '../Server.model';
import {EditServerQueryParametersFinal} from './EditServerQueryParametersFinal';
import {StringUtils} from '../../StringUtils';
import {ICanDeactivate} from '../../../routing/servers-route-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnDestroy, OnChanges, ICanDeactivate {
  private readonly routeParametersSubscription: Subscription;
  private readonly routeQueryParametersSubscription: Subscription;
  public changesCommitted = false;
  public server: Server;
  public serverName = '';
  public serverStatus = '';
  public servers: Server[];
  public canEditServer = false;

  constructor(private readonly serversService: ServersService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
    this.servers = this.serversService.getServers();

    this.routeParametersSubscription = this.route.params.subscribe((parameters: Params) => {
      if (parameters[RoutesParameters.ID]) {
        this.setServer(parameters[RoutesParameters.ID]);
      } else {
        this.setServer(1);
      }
    });

    this.routeQueryParametersSubscription = this.route.queryParams.subscribe((queryParameters: EditServerQueryParametersFinal) => {
      this.canEditServer = StringUtils.equalsTrue(queryParameters.allowEditing);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, new Server(this.server.id, this.serverName, this.serverStatus));
    this.changesCommitted = true;
  }

  ngOnDestroy(): void {
    this.routeParametersSubscription.unsubscribe();
    this.routeQueryParametersSubscription.unsubscribe();
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  private setServer(serverId: number) {
    this.server = this.serversService.getServer(serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  // noinspection JSMethodCanBeStatic
  public onServerNameSelect(event: Event) {
    console.log(event, 'hello');
  }

  public canDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    if (!this.canEditServer) {
      return true;
    }

    return this.changesCommitted;
  }

}
