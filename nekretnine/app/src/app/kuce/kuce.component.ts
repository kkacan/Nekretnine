import { Component, OnInit } from '@angular/core';
import { KucaModel } from '../models/kuca-model.model';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-kuce',
  templateUrl: './kuce.component.html',
  styleUrls: ['./kuce.component.css']
})
export class KuceComponent implements OnInit {

  kuce: KucaModel[];

  constructor(private serviceService: ServisService) {

  }

  ngOnInit() {
    this.getKuce();
  }

  // metoda za dohvat kuća
  getKuce() {
    this.serviceService.getKuce().subscribe(data => {
      this.kuce = data;
    })
  }

}
