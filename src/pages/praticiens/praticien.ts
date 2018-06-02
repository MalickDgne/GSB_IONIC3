import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { apiGSBmasterService } from '../../services/apiGSB-master.service';
import { apiGSBGlobal } from '../../models/apiGSB-global.model';


@Component({
  selector: 'page-praticien',
  templateUrl: 'praticien.html'
})
export class PraticienPage {



news: apiGSBGlobal = new apiGSBGlobal;

  constructor(public navCtrl: NavController, private navParams: NavParams, private ApiGSBService: apiGSBmasterService) {


this.ApiGSBService.getPraticien()
.then(newsFetched => {
  this.news = newsFetched;

})

  }


}
