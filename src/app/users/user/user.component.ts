import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

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
      this.user.id = parameters['id'];
      this.user.name = parameters['name'];
    });
  }

  ngOnDestroy(): void {
    this.routerParametersSubscription.unsubscribe();
  }
}
