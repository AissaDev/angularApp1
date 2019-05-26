import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  nom: string;
  age: number;
  email: string;
  hobby: hobby;
  constructor(private donnees: DonneesService) {
    this.nom = 'Aissa';
    this.age = 37;
    this.email = 'exemple@gmail.com';
    this.hobby = {
      hobbyUn: 'Basket',
      hobbyDeux: 'lire',
      hobbyTrois: 'Apprendre'
    };
   }

  ngOnInit() { }
  
  onClick() {
    alert('aucunes informations pour le moment');
  }

  

}
interface hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}
