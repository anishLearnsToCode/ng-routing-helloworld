import {Component, OnDestroy, OnInit} from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  public server: {id: number, name: string, status: string} = {id: null, name: null, status: null};
  public serverName = '';
  public serverStatus = '';
  private readonly routeParametersSubscription: Subscription;

  constructor(private readonly serversService: ServersService, private readonly route: ActivatedRoute) {
    this.routeParametersSubscription = this.route.params.subscribe((parameters: Params) => {
      if (parameters['id'] === undefined) {
        return;
      }

      this.server = this.serversService.getServer(parameters['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  ngOnInit() { }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  ngOnDestroy(): void {
    this.routeParametersSubscription.unsubscribe();
  }

}
