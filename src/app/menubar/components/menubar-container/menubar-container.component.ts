import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../user/authentication.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menubar-container',
  templateUrl: './menubar-container.component.html',
  styleUrls: ['./menubar-container.component.css']
})
export class MenubarContainerComponent implements OnInit {

  user: Observable<string>;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.user$;
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  public login() {
    this.router.navigateByUrl('/login');
  }

}
