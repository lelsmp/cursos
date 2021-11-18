import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';

  
@Injectable()
export class CursoServiceProvider {

  constructor(public http: HttpClient, public alertCrtl: AlertController, ) {
    console.log('Hello CursoServiceProvider Provider');
  }


  login(username, password){
    return this.http.get('http://httpbin.org/get')
    
  }

  cadastro(){

  }

  recuperarSenha(){

  }
}
