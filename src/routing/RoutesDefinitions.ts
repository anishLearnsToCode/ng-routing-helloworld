import { Routes } from '@angular/router';
import { ServersComponent } from '../app/servers/servers.component';
import { UsersComponent } from '../app/users/users.component';
import { HomeComponent } from '../app/home/home.component';
import { UserComponent } from '../app/users/user/user.component';
import { EditServerComponent } from '../app/servers/edit-server/edit-server.component';
import {ServerComponent} from '../app/servers/server/server.component';
import {PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },

  { path: 'servers', component: ServersComponent, canActivateChild: [
      AuthGuardService
    ], children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },

  { path: '404', component: PageNotFoundComponent },

  { path: '**', redirectTo: '404'}
];
