import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';

const routes: Routes = [
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
