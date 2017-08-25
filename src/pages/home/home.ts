import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { SalonProvider } from '../../providers/salon/salon';
import { MapPage } from '../map/map';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  selectedSalon: any;
  salons = [];

  constructor(
    public navCtrl: NavController,
    private salonProvider: SalonProvider,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.salons = this.salonProvider.getSalons();
  }

  showOnMap(salon) {
    let modal = this.modalCtrl.create(MapPage, {salon: salon});
    modal.present();
  }

  onAddressSelect(salon) {
    this.selectedSalon = salon;
  }

  continue(salon) {
    this.navCtrl.push(ContactsPage, {salon: salon});
  }

}
