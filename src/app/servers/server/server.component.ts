import {Component, OnDestroy, OnInit} from '@angular/core';

import { Server } from '../Server.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditServerQueryParameters } from '../edit-server/EditServerQueryParameters';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  public server: Server;
  private readonly routeParametersSubscription: Subscription;

  constructor(private readonly route: ActivatedRoute, private readonly usersService: UsersService) {

    this.route.data.subscribe((data) => {
      this.server = data.server;
    });
  }

  public getQueryParameters(serverId: number): EditServerQueryParameters {
    return {
      allowEditing: this.usersService.canUserEditServer(serverId)
    };
  }

}
