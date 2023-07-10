import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  chart= new Chart({
    chart:{
      type:'line',
      height:325
    },
    title: {
      text:'Tasks Categories'
    },
    xAxis:{
      categories:[
        "1st Priority",
        "2nd Priority",
        "3rd Priority"
      ]
    },
    yAxis:{
      title: {
        text:'Number of task'
      }
    },
    series:[
      {
        name: 'task 09/07',
        type: 'line',
        data:[5,3,7]
      },
      {
        name: 'task 10/07',
        type: 'line',
        data:[3,4,5] 
      }
    ],
    credits:{
      enabled:false
    }

  })

}
