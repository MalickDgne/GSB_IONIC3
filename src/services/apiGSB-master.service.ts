import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { apiGSBGlobal } from '../models/apiGSB-global.model';

@Injectable()
export class apiGSBmasterService {

  private baseUrl: string = 'http://localhost/apiGSB-master/';
  private med: string = 'medicament/read.php';
  data: Observable<any>;


constructor(private http: Http){

}

public getMedicament(): Promise<any> {

const url = 'http://localhost/apiGSB-master/medicament/read.php';

return this.http.get(url)
.toPromise()
.then(response => response.json() as apiGSBGlobal)
.catch (error => console.log('une erreur est survenu ' + error))

  }


  public getPraticien(): Promise<any> {

  const url = 'http://localhost/apiGSB-master/praticien/read.php';

  return this.http.get(url)
  .toPromise()
  .then(response => response.json() as apiGSBGlobal)
  .catch (error => console.log('une erreur est survenu ' + error))

    }


    public getRapport(): Promise<any> {

    const url = 'http://localhost/apiGSB-master/rapport_visite/read.php';

    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as apiGSBGlobal)
    .catch (error => console.log('une erreur est survenu ' + error))

      }

      public getNoteFrais(): Promise<any> {

      const url = 'http://localhost/apiGSB-master/notedefrais/read.php';

      return this.http.get(url)
      .toPromise()
      .then(response => response.json() as apiGSBGlobal)
      .catch (error => console.log('une erreur est survenu ' + error))

        }


      public getVisiteur(): Promise<any> {

      const url = 'http://localhost/apiGSB-master/collaborateur/read.php';

      return this.http.get(url)
      .toPromise()
      .then(response => response.json() as apiGSBGlobal)
      .catch (error => console.log('une erreur est survenu ' + error))

        }


        public getConnexionCollaborateur(id): Promise<any> {

      		const url = `http://localhost/apiGSB-master/collaborateur/read_one.php?id=${id}`;
              return this.http.get(url)
              .toPromise()
              .then(response => response.json())
              .catch(error => console.log('Une erreur est survenue ' + error))
          }



          public setNoteFrais(NOM, DATEVISITE, MONTANTMIDI, MONTANTSOIR, PRIXNUIT, MONTANTHF, NBJUSTI, MONTANTTT): Promise<any> {

              const url = `http://localhost/apiGSB-master/notedefrais/create.php`;


              let postData = new FormData();
              postData.append('PRA_NOM', NOM);
              postData.append('dateVisite', DATEVISITE);
              postData.append('MontantRepasMidi', MONTANTMIDI);
              postData.append('MontantRepasSoir', MONTANTSOIR);
              postData.append('PrixNuit', PRIXNUIT);
              postData.append('MontantTotalHF', MONTANTHF);
              postData.append('NbJustificatif', NBJUSTI);
              postData.append('MontantTotal', MONTANTTT);
              return this.http.post(url, postData)
              .toPromise()
              .then(response => response.json())
              .catch(error => console.log('Une erreur est survenue ' + error))

            }

}
