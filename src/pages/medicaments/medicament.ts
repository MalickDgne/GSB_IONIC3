import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { apiGSBmasterService } from '../../services/apiGSB-master.service';
import { apiGSBGlobal } from '../../models/apiGSB-global.model';


@Component({
  selector: 'page-medicament',
  templateUrl: 'medicament.html'
})
export class MedicamentPage {



medicaments: apiGSBGlobal = new apiGSBGlobal;

  constructor(public navCtrl: NavController, private navParams: NavParams, private ApiGSBService: apiGSBmasterService) {





this.ApiGSBService.getMedicament()
.then(medicamentsFetched => {
  this.medicaments = medicamentsFetched;

})

  }


}
