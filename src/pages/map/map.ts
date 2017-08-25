import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';


/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  service: any;
  infowindow: any;
  
  salon: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public geolocation: Geolocation,
    public http: Http
  ) {
    this.salon = navParams.get('salon');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    if (this.salon.lat && this.salon.lng) {
      latLng = new google.maps.LatLng(this.salon.lat, this.salon.lng);
    }
    
    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.addMarker(latLng);
  }

  addMarker(latLng) {
    new google.maps.Marker({
      position: latLng,
      map: this.map,
    });
  }

  getUserCoordinates(): any {
    this.geolocation.getCurrentPosition().then((position) => {
      if (position.coords.latitude) {
        return new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      }

    }, (err) => {
      console.log(err);
    }); 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
