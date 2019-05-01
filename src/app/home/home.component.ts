import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../users/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public val: number;
  public val2: string;
  public val3: boolean;
  public val4: any;
  public val5: number;
  public val6: string;

  constructor(private readonly router: Router, private readonly authorization: AuthorizationService) { }

  ngOnInit() {
  }

  public loadServer1(): void {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/servers', 1, 'edit'], {
      queryParams: {
        allowEditing: true
      },
      fragment: 'loading'
    });
  }

  public logIn() {
    this.authorization.logIn();
  }

  public logOut() {
    this.authorization.logOut();
  }

}
