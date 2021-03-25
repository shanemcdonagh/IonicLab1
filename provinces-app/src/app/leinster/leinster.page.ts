import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'; // Import Nav Controller for button url change

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
})

// Instantiate Nav Controller for button url change
export class LeinsterPage implements OnInit {


constructor(private navCtrl:NavController){}

  ngOnInit() {
  }

  // change url function
  openCountiesPage()
  {
    this.navCtrl.navigateForward('/leinstercounties');
  }
}
