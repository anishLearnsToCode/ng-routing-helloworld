import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './RoutesDefinitions';
import {ServersRouteGuardService} from './servers-route-guard.service';
import {ServersRouteDeactivateGuardService} from './servers-route-deactivate-guard.service';
import {ServerResolverService} from '../app/servers/server/server-resolver.service';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
