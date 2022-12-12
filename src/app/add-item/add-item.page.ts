import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  

  submitNewListing(name, description, cost, contact) {
    this.authService.addListing(name.value, description.value, cost.value, contact.value)
      .then((res) => {
        this.router.navigate(['tabs'])
          .then(() => {
            window.location.href = window.location.protocol + '//' + window.location.host + '/tabs';
          });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  

}