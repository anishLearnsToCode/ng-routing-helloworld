import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Server} from '../Server.model';
import {Observable} from 'rxjs';
import {ServersService} from '../servers.service';
import {RoutesParameters} from '../../../routing/RoutesParameters';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  constructor(private readonly serversManager: ServersService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversManager.getServer(Number(route.params[RoutesParameters.ID]));
  }

}
