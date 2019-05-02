import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './RoutesDefinitions';
import {ServersRouteGuardService} from './servers-route-guard.service';
import {ServersRouteDeactivateGuardService} from './servers-route-deactivate-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ServersRouteGuardService,
    ServersRouteDeactivateGuardService
  ]
})
export class AppRoutingModule { }
