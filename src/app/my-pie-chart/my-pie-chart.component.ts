import { Component, OnInit } from '@angular/core';
import {ChartsModule} from 'ng2-charts';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})

export class MyPieChartComponent implements OnInit {
  totalPeople = 100;
  votosTotales: number;
  candidato: number;
  c = 0;
  c1 = 0;
  c2 = 0;
 public label = ['Participante 1', 'Participante 2', 'participante 3'];
 public Data: Array<any> = [this.c, this.c1, this.c2];
 public type = 'pie';
 constructor() {
   this.votar(this.candidato);
 }
  ngOnInit() {
    this.votar(this.candidato);
  }

  votar(candidato) {
    if (candidato === 1) {
      this.c = this.Data[0] += 1;
      console.log('c');
    } else if ( candidato === 2) {
      this.c1 = this.Data[1] += 1;
    } else if (candidato === 3) {
      this.c2 = this.Data[2] += 1;
    }
    this.votosTotales = this.Data[0] + this.Data[1] + this.Data[2];
    if (this.votosTotales === this.totalPeople) {
      alert('Ya se alcanzo el limite de votos');
    }
  }

}
