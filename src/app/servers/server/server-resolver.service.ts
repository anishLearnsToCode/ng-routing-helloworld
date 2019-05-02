import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Server} from '../Server.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return undefined;
  }

}
