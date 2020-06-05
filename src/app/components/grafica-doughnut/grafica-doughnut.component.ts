import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-doughnut',
  templateUrl: './grafica-doughnut.component.html'
})
export class GraficaDoughnutComponent implements OnInit {


  constructor() { }




  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number [] = [];
  @Input('chartType') doughnutChartType: string = '';




  ngOnInit(): void {
  }

}
