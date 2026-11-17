import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ligue } from '../model/ligue.model';
import { Pays } from '../model/pays.model';
import { LigueService } from '../services/ligue.service';

@Component({
  selector: 'app-recherche-par-pays',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './recherche-par-pays.html'
})
export class RechercheParPays implements OnInit {

  ligues!: Ligue[];
  lesPays!: Pays[];
  idPays!: number;

  constructor(private ligueService: LigueService) {}

  ngOnInit(): void {
    this.lesPays = this.ligueService.listePays();
    this.ligues = this.ligueService.listeLigues();
  }
  
  onChange(): void {
    if (this.idPays) {
      this.ligues = this.ligueService.rechercherParPays(this.idPays);
    } else {
      this.ligues = this.ligueService.listeLigues();
    }
  }
}