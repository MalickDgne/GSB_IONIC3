import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { apiGSBmasterService } from '../../services/apiGSB-master.service';
import { apiGSBGlobal } from '../../models/apiGSB-global.model';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-ajouternotefrais',
  templateUrl: 'ajouternotefrais.html'
})
export class AjouterNoteFraisPage {



news: apiGSBGlobal = new apiGSBGlobal;
NomPRA: string;
DateVisite: string;
MontantMidi: number;
Montantsoir: number;
PrixNuit: number;
MontantHF: number;
NbJusti: number;
MontantTT: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, private ApiGSBService: apiGSBmasterService,private alertCtrl: AlertController) {


  }


private presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmer la saisie',
      message: 'Voulez vous créez cette note de frais?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.ApiGSBService.setNoteFrais(this.NomPRA, this.DateVisite, this.MontantMidi, this.Montantsoir, this.PrixNuit,this.MontantHF,this.NbJusti,this.MontantTT);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  private valider(){

this.presentConfirm()
  }


}
