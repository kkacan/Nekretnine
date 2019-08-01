import { Component, OnInit } from '@angular/core';
import { ZemljisteModel } from '../models/zemljiste-model.model';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-zemljista',
  templateUrl: './zemljista.component.html',
  styleUrls: ['./zemljista.component.css']
})
export class ZemljistaComponent implements OnInit {

  zemljista: ZemljisteModel[];

  constructor(private serviceService: ServisService) {

  }

  ngOnInit() {
    this.getZemljista();
  }

  // metoda za dohvat zemljista
  getZemljista() {
    this.serviceService.getZemljista().subscribe(data => {
      this.zemljista = data;
      console.log(this.zemljista);
    })
  }


}
