import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {


  listings: Array<dataCatcher>;

  constructor(public alertController: AlertController, public authService: AuthenticationService) { 
  }
  

  ngOnInit() {
    this.listings = this.authService.pullCollectionsFromDB();
    console.log(this.listings);
  }

  ionViewWillEnter() {
    this.listings = this.authService.pullCollectionsFromDB();
  }


}

interface dataCatcher {
  [key: string]: any
}