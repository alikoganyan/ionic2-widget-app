import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SalonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SalonProvider {
  salons = [
    {
      id: 1,
      img: "assets/images/salon_box/img1.jpg",
      address: "Непокоренных, 10",
      metroAddress: "Площадь мужества"
    },
    {
      id: 2,
      img: "assets/images/salon_box/img2.jpg",
      address: "Большая Зеленина, 3",
      metroAddress: "Чкаловская"
    },
    {
      id: 3,
      img: "assets/images/salon_box/img3.jpg",
      address: "Александра Невского 21 к.2",
      metroAddress: "Адмиралтейская"
    },
    {
      id: 4,
      img: "assets/images/salon_box/img4.jpg",
      address: "Невский проспект, 23",
      metroAddress: "Адмиралтейская"
    },
    {
      id: 5,
      img: "assets/images/salon_box/img5.jpg",
      address: "Непокоренных, 10",
      metroAddress: "Площадь мужества"
    },
    {
      id: 5,
      img: "assets/images/salon_box/img6.jpg",
      address: "СНепокоренных, 10",
      metroAddress: "Площадь мужества"
    },
    {
      id: 5,
      img: "assets/images/salon_box/img7.jpg",
      address: "СНепокоренных, 10",
      metroAddress: "Площадь мужества"
    },

  ];

  constructor(public http: Http) {
    console.log('Hello SalonProvider Provider');
  }

  getSalons() {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic ZW1haWxAZG9tYWluLmNvbToxMjM0NTY=');

    // return this.http.get('http://avisits.com:8080/api/salons', {headers: headers})
    // .map(response => response.json().data);
    return this.salons;
  }

}
