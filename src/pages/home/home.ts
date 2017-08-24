import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { SalonProvider } from '../../providers/salon/salon';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  salons = [];

  constructor(
    public navCtrl: NavController,
    private salonProvider: SalonProvider,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.salons = this.salonProvider.getSalons();
    console.log(this.salons);
  }

  showOnMap(salon) {
    //To Do: show maps
    //To Do: find address on maps

    let modal = this.modalCtrl.create(MapPage);
    modal.present();
  }

}
