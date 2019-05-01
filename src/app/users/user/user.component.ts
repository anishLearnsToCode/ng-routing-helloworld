import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutesParameters } from '../../../routing/RoutesParameters';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {
  public user: {id: number, name: string} = {id: null, name: null};
  private routerParametersSubscription: Subscription;

  constructor(private readonly currentRoute: ActivatedRoute) {
    this.routerParametersSubscription = this.currentRoute.params.subscribe((parameters: Params) => {
      this.user.id = parameters[RoutesParameters.ID];
      this.user.name = parameters[RoutesParameters.NAME];
    });
  }

  ngOnDestroy(): void {
    this.routerParametersSubscription.unsubscribe();
  }
}
