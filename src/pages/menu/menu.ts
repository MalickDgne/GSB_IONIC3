import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MedicamentPage } from '../medicaments/medicament';
import { PraticienPage } from '../praticiens/praticien';
import { ConsulterRapportPage } from '../consulterRapport/consulterRapport';
import { VisiteurPage } from '../visiteurs/visiteur';
import { ConsulterNoteFraisPage } from '../consulternotefrais/consulternotefrais';
import { AjouterNoteFraisPage } from '../ajouternotefrais/ajouternotefrais';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
matricule: string;



  constructor(public navCtrl: NavController, private navParams: NavParams) {
this.matricule= navParams.get('matricule');

  }
  private ShowMedicament(){
    this.navCtrl.push(MedicamentPage, {
       });

  }

  private ShowPraticien(){
    this.navCtrl.push(PraticienPage, {
     });

  }

  private ShowRapport(){
    this.navCtrl.push(ConsulterRapportPage, {
       });

  }

  private ShowNoteFrais(){
    this.navCtrl.push(ConsulterNoteFraisPage, {
       });

  }

  private ShowVisiteur(){
    this.navCtrl.push(VisiteurPage, {
      // nom: this.nom,
    //  mdp: this.mdp
  });

  }

  private SetNoteFrais(){
    this.navCtrl.push(AjouterNoteFraisPage, {
      // nom: this.nom,
    //  mdp: this.mdp
  });


  }


}
