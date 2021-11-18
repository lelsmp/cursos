import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { CursoServiceProvider } from '../providers/curso-service/curso-service';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { CursoDetalhesPageModule } from '../pages/curso-detalhes/curso-detalhes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    CadastroPageModule,
    HttpClientModule,
    CursoDetalhesPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursoServiceProvider,
    HttpClient
  ]
})
export class AppModule {}
