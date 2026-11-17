import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';
import { Router } from '@angular/router';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-add-ligue',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-ligue.html',
  
})
export class AddLigueComponent {

  newLigue: Ligue = new Ligue();
  lesPays!: Pays[];
  newIdPays!: number;
  newPays!: Pays;
  message! : string;

  constructor(private ligueService: LigueService,private router :Router,) {}


   ngOnInit() {
     this.lesPays = this.ligueService.listePays();
   }

   addLigue() {
     this.newPays = this.ligueService.consulterPays(this.newIdPays);
     this.newLigue.pays = this.newPays;
     this.ligueService.ajouterLigue(this.newLigue);
     this.router.navigate(['ligues']);
   }

}


