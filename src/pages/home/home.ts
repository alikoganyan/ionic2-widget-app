import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalonProvider } from '../../providers/salon/salon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  salons = [];

  constructor(public navCtrl: NavController, private salonProvider: SalonProvider) {

  }

  ngOnInit() {
    this.salons = this.salonProvider.getSalons();
    console.log(this.salons);
  }

}
