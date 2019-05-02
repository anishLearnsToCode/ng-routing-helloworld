import {Component, OnDestroy} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Subscription} from 'rxjs';
import {Server} from '../Server.model';
import {EditServerQueryParametersFinal} from './EditServerQueryParametersFinal';
import {StringUtils} from '../../StringUtils';
import {ICanDeactivate} from '../../../routing/servers-route-deactivate-guard.service';
import {EditServerRouteParameters} from './EditServerRouteParameters';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnDestroy, ICanDeactivate {
  private readonly routeParametersSubscription: Subscription;
  private readonly routeQueryParametersSubscription: Subscription;
  public changesCommitted = false;
  public server: Server;
  public serverName = '';
  public serverStatus: 'Online' | 'Offline';
  public servers: Server[];
  public canEditServer = false;

  constructor(private readonly serversService: ServersService, private readonly route: ActivatedRoute) {
    this.servers = this.serversService.getServers();

    this.routeParametersSubscription = this.route.params.subscribe((parameters: EditServerRouteParameters) => {
      if (parameters.id) {
        this.setServer(Number(parameters.id));
      } else {
        this.setServer(1);
      }
    });

    this.routeQueryParametersSubscription = this.route.queryParams.subscribe((queryParameters: EditServerQueryParametersFinal) => {
      this.canEditServer = StringUtils.equalsTrue(queryParameters.allowEditing);
    });
  }

  public canDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    if (!this.canEditServer) {
      return true;
    }

    return this.changesCommitted;
  }

  public onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, new Server(
      this.server.id,
      this.serverName,
      Server.mapToServerStatus(this.serverStatus)
    ));

    this.changesCommitted = true;
  }

  public ngOnDestroy(): void {
    this.routeParametersSubscription.unsubscribe();
    this.routeQueryParametersSubscription.unsubscribe();
  }

  private setServer(serverId: number) {
    this.server = this.serversService.getServer(serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.getStatus();
  }

}
