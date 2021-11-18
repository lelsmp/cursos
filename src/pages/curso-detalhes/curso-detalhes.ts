import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CursoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso-detalhes',
  templateUrl: 'curso-detalhes.html',
})
export class CursoDetalhesPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoDetalhesPage');
  }

  ngOnInit() {
    fetch('./assets/db/cursos.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

}
