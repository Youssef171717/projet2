import { Injectable } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { Pays } from '../model/pays.model';


@Injectable({
  providedIn: 'root'
})
export class LigueService {
  ligues : Ligue[]; //un tableau de Ligue
  ligue! : Ligue;
  lesPays!: Pays[];

  constructor() {
    this.lesPays = [
      { idPays: 1, nomPays: "Angleterre" },
      { idPays: 2, nomPays: "Espagne" },
      { idPays: 3, nomPays: "Italie" },
      { idPays: 4, nomPays: "Allemagne" },
      { idPays: 5, nomPays: "France" }
    ];

    this.ligues = [
      { idLigue: 1, nomLigue: "Premier League", nbEquipes: 20, dateCreation: new Date("1992-02-20"), pays: { idPays: 1, nomPays: "Angleterre" } },
      { idLigue: 2, nomLigue: "La Liga",        nbEquipes: 20, dateCreation: new Date("1929-02-10"), pays: { idPays: 2, nomPays: "Espagne" } },
      { idLigue: 3, nomLigue: "Serie A",        nbEquipes: 20, dateCreation: new Date("1898-09-11"), pays: { idPays: 3, nomPays: "Italie" } },
      { idLigue: 4, nomLigue: "Bundesliga",     nbEquipes: 18, dateCreation: new Date("1963-08-24"), pays: { idPays: 4, nomPays: "Allemagne" } },
      { idLigue: 5, nomLigue: "Ligue 1",        nbEquipes: 18, dateCreation: new Date("1932-04-11"), pays: { idPays: 5, nomPays: "France" } }
    ];
   }

    listeLigues():Ligue[] {
      return this.ligues;
    }

    ajouterLigue( prod: Ligue){
      this.ligues.push(prod);
    }
  supprimerLigue(prod: Ligue) {
    //supprimer le ligue prod du tableau ligues
    const index = this.ligues.indexOf(prod, 0);
    if (index > -1) {
      this.ligues.splice(index, 1);
    }
    //ou Bien
    /* this.ligues.forEach((cur, index) => {
    if(prod.idLigue === cur.idLigue) {
    this.ligues.splice(index, 1);
    }
    }); */
  }
  consulterLigue(id:number): Ligue{
    return this.ligue = this.ligues.find(p => p.idLigue == id)!;
        
    }

  updateLigue(prod: Ligue) {
    //chercher le ligue prod du tableau ligues
    const index = this.ligues.indexOf(prod, 0);
    if (index > -1) {
      this.ligues.splice(index, 1); //supprimer l'ancien éléments
      this.ligues.splice(index, 0, prod); // insérer le nouvel élément

    }
}
    listePays(): Pays[] { return this.lesPays; }
     consulterPays(id: number): Pays {
    return this.lesPays.find(x => x.idPays == id)!;
  }
  
 

  rechercherParPays(idPays: number): Ligue[] {

    return this.ligues.filter(
      v => v.pays.idPays == idPays
    );
  }
    ajouterPays(p: Pays) {
    p.idPays = this.lesPays.length ? Math.max(...this.lesPays.map(x => x.idPays)) + 1 : 1;
    this.lesPays.push(p);
  }
    updatePays(p: Pays) {
    const index = this.lesPays.findIndex(x => x.idPays == p.idPays);
    if (index > -1) {
      this.lesPays[index] = p;
      // mettre à jour le pays dans les ligues qui l'utilisent
      this.ligues.forEach(v => {
        if (v.pays.idPays == p.idPays) v.pays = { ...p };
      });
    }
  }
}
  