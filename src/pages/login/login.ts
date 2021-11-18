import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CursoServiceProvider } from '../../providers/curso-service/curso-service';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: any = '';
  public senha: any = '';
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCrtl: AlertController, 
    public autenticacaoProvider: CursoServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log("entrar");
    this.autenticacaoProvider.login(this.email, this.senha).subscribe((data: any) =>{
      console.log("resposta", data);

      if (data.origin === "187.19.151.90" ) {

           console.log("Usuário Logado");
           this.navCtrl.setRoot(HomePage);

      }  else{
        const alert = this.alertCrtl.create({
          title: 'erro',
          subTitle: 'Verifique suas credenciais',
          buttons: ['OK']
  
        });
        alert.present();


      }

    }, error =>{
      console.log("erro", error);

      const alert = this.alertCrtl.create({
        title: 'Offline',
        subTitle: 'Verifique sua conexão e tente novamente',
        buttons: ['OK']

      });
      alert.present();
      
    
    });;

   
  }

  cadastro(){
    this.navCtrl.push(CadastroPage);
  }

}
