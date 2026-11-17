import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { LigueService } from '../services/ligue.service';
import { Ligue } from '../model/ligue.model';
import { UpdatePays } from '../update-pays/update-pays';

@Component({
  imports: [UpdatePays],
  selector: 'app-liste-pays',
  styles: ``,
  templateUrl: './liste-pays.html',
})

export class ListePays implements OnInit {

  lesPays!: Pays[];
  ajout: boolean = true;

  updatedPays: Pays = { idPays: 0, nomPays: "" };

  constructor(private ligueService: LigueService) { }

  ngOnInit(): void {
    this.chargerPays();
  }
  chargerPays() {
    this.lesPays = this.ligueService.listePays();
  }

  paysUpdated(t: Pays) {
    console.log("Pays updated event", t);
    if (this.ajout) {
      this.ligueService.ajouterPays({ ...t });
    } else {
      this.ligueService.updatePays({ ...t });
    }
    this.chargerPays();
    this.updatedPays = { idPays: 0, nomPays: "" };
    this.ajout = true;
  }
  
    updatePays(t: Pays) {
    this.updatedPays = { ...t };
    this.ajout = false;
  }
}

