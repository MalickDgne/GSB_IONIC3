import { apiGSBMedicament } from  './apiGSB-medicament.model';
import { apiGSBPraticien } from  './apiGSB-praticien.model';
import { apiGSBConsulterRapport } from  './apiGSB-consulterRapport.model';
import { apiGSBVisiteur } from  './apiGSB-visiteur.model';
import { apiGSBConsulterNote } from  './apiGSB-consulterNote.model';

export class apiGSBGlobal {

medicaments: apiGSBMedicament[];
praticiens: apiGSBPraticien[];
collaborateurs: apiGSBVisiteur[];
Rapport_visite: apiGSBConsulterRapport[];
COL_DATEEMBAUCHE: string;
notedefrais: apiGSBConsulterNote[];

}
