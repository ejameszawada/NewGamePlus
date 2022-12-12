import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
