import { Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { ActivatedRoute,Router } from '@angular/router';
import { LigueService } from '../services/ligue.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pays } from '../model/pays.model';
@Component({
selector: 'app-update-ligue',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './update-ligue.html',
styles: ``
})
export class UpdateLigueComponent implements OnInit {

    lesPays!: Pays[];
    updatedPaysId!: number;
currentLigue = new Ligue();
constructor(private activatedRoute: ActivatedRoute,
private router :Router,
private ligueService: LigueService) { 
  
}
  ngOnInit() {
    this.lesPays = this.ligueService.listePays();
    this.currentLigue =
      this.ligueService.consulterLigue(this.activatedRoute.snapshot.params['id']);
    this.updatedPaysId = this.currentLigue.pays.idPays;   
  }

  updateLigue() {
    this.currentLigue.pays =
      this.ligueService.consulterPays(this.updatedPaysId);  
    this.ligueService.updateLigue(this.currentLigue);
    this.router.navigate(['ligues']);
  }
}