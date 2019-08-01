import { Component, OnInit } from '@angular/core';
import { StanModel } from '../models/stan-model.model';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-stanovi',
  templateUrl: './stanovi.component.html',
  styleUrls: ['./stanovi.component.css']
})
export class StanoviComponent implements OnInit {

  stanovi: StanModel[];

  constructor(private serviceService: ServisService) {

  }

  ngOnInit() {
    this.getStanovi();
  }

  // metoda za dohvat stanova
  getStanovi() {
    this.serviceService.getStanovi().subscribe(data => {
      this.stanovi = data;
      console.log(this.stanovi);
    })
  }

}
