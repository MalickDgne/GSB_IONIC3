import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MedicamentPage } from '../pages/medicaments/medicament';
import { PraticienPage } from '../pages/praticiens/praticien';
import { ConsulterRapportPage } from '../pages/consulterRapport/consulterRapport';
import { VisiteurPage } from '../pages/visiteurs/visiteur';
import { ConsulterNoteFraisPage } from '../pages/consulternotefrais/consulternotefrais';
import { AjouterNoteFraisPage } from '../pages/ajouternotefrais/ajouternotefrais';


import { apiGSBmasterService } from '../services/apiGSB-master.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    MedicamentPage,
    PraticienPage,
    ConsulterRapportPage,
    VisiteurPage,
    ConsulterNoteFraisPage,
    AjouterNoteFraisPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    MedicamentPage,
    PraticienPage,
    ConsulterRapportPage,
    VisiteurPage,
    ConsulterNoteFraisPage,
    AjouterNoteFraisPage
  ],
  providers: [
    apiGSBmasterService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
