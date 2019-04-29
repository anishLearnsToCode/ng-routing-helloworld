import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  public loadServers(): void {
    // calculate complex stuff
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/servers']);
  }

}
