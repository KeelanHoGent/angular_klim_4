import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {ClassroomService} from "../../services/classroom.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public error: string;

  constructor(
    private authService: AuthenticationService,
    private builder: FormBuilder,
    private router: Router,
    private classroomService: ClassroomService
  ) { }

  ngOnInit() {
    this.user = this.builder.group({
      username: ['',  Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.user.valid) {
      this.authService.login(
        this.user.value.username,
        this.user.value.password
      ).subscribe(val => {
        if (val) {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.authService.redirectUrl = undefined;
          } else {
            this.router.navigate(['']);
          }
          // initialize classrooms
          this.classroomService.getClassrooms$().subscribe();
        }
      }, err => this.error = "Ongeldige inloggegevens");
    } else {
      this.error = 'Niet alle velden zijn ingevuld!';
    }
  }

}
