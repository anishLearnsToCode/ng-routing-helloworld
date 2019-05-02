import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnDestroy {
  public errorMessage: string;
  private readonly routerDataSubscription: Subscription;

  constructor(private readonly route: ActivatedRoute) {
    this.routerDataSubscription = this.route.data.subscribe((data: ErrorPageComponentRouterData) => {
      this.errorMessage = data.message;
    });
  }

  ngOnDestroy(): void {
    this.routerDataSubscription.unsubscribe();
  }

}

export interface ErrorPageComponentRouterData {
  message: string;
}
