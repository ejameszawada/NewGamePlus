import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  listingIDs: Array<dataCatcher>;
  listings: Array<dataCatcher>;
  IDs: Array<dataCatcher>;

  constructor(public alertController: AlertController, public authService: AuthenticationService, public router: Router) { }

  userLogged: boolean;

  ngOnInit() {
    this.userLogged = this.authService.isLoggedIn;
  }

  ionViewWillEnter() {
    this.userLogged = this.authService.isLoggedIn;
    this.listings = this.authService.pullCollectionDataFromDBForUser();
    this.listingIDs = this.authService.pullCollectionIDFromDBForUser();
    console.log(this.listings);
    console.log(this.listingIDs);
  }


  navigateToNewListing() {
    this.router.navigate(['add-item']);
  }

  deleteListing(i) {
    var listingID = this.listingIDs[i];
    console.log(listingID);
    this.authService.deleteListing(listingID);
  }

}

interface dataCatcher {
  [key: string]: any
}