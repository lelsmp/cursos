import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { CursoDetalhesPage } from '../curso-detalhes/curso-detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient ) {
       
  
  }


  
  ionViewDidEnter() {
    console.log('ionViewDidLoad HomePage');

  }

  detalheCurso(){
    /**fetch('./assets/db/cursos.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });**/

    console.log("click");
    this.navCtrl.push(CursoDetalhesPage)
  };
  


}



