import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { apiGSBmasterService } from '../../services/apiGSB-master.service';
import { apiGSBGlobal } from '../../models/apiGSB-global.model';


@Component({
  selector: 'page-consulternotefrais',
  templateUrl: 'consulternotefrais.html'
})
export class ConsulterNoteFraisPage {



news: apiGSBGlobal = new apiGSBGlobal;

  constructor(public navCtrl: NavController, private navParams: NavParams, private ApiGSBService: apiGSBmasterService) {


this.ApiGSBService.getNoteFrais()
.then(newsFetched => {
  this.news = newsFetched;

})

  }


}
