import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';

import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.sevice';
@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-ligues',
  standalone: true,
  templateUrl: './ligues.html',
  styleUrl: './ligues.css'
})
export class LiguesComponent implements OnInit  {
  ligues! : Ligue[]; //un tableau de Ligue



  constructor(private ligueService: LigueService,public authService: AuthService) {
   //this.ligues=[]
     
    
   }
  
   ngOnInit() {
    this.ligues = this.ligueService.listeLigues();
     }
   supprimerLigue(p: Ligue) 
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.ligueService.supprimerLigue(p);
  }
  
}

