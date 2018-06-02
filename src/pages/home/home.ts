import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { apiGSBmasterService } from '../../services/apiGSB-master.service';
import { apiGSBGlobal } from '../../models/apiGSB-global.model';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

matricule:string;
mdp: string;
collaborateur: apiGSBGlobal = new apiGSBGlobal;

  constructor(public navCtrl: NavController , private apiGsbService: apiGSBmasterService,private alertCtrl: AlertController) {

  }


private presentAlert() {
  let alert = this.alertCtrl.create({
  title: 'ERREUR',
  subTitle: 'Vos informations de connexion sont incorrectes',
  buttons: ['OK']
});
alert.present();
}

private ConnexionGSB(){


    this.apiGsbService.getConnexionCollaborateur(this.matricule)
    .then(collaborateurFetched => {
      this.collaborateur = collaborateurFetched;
      if(this.matricule != null && this.collaborateur.COL_DATEEMBAUCHE == this.mdp)
      {
        this.navCtrl.push(MenuPage, {matricule: this.matricule})
      }

  else
  {

this.presentAlert();

  }

});

  }

}
