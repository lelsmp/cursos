import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrtl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  login(){
    let alert = this.alertCrtl.create({
      title: 'Cadastro feito com sucesso',
      /**subTitle: `Username: ${this.username} 
      Password: ${this.password}`,**/
      buttons: ['OK']
    })
    alert.present();

    this.navCtrl.setRoot(HomePage);
  }

}
