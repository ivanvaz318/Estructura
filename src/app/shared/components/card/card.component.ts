import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,
    private PaisService:PaisesService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  VerPaises(){
    console.log("fas");
    
    this.PaisService.verpaises();
  }

}
