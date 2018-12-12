import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { ForecastModel } from './forecastModel';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  myForecastData;
  currentWeatherModel: ForecastModel;
  myForecastDataList: ForecastModel[] = [];
  currentGraphBtnName = 'Switch to bar graph';

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartOptions: any = {
    responsive: true
  };

  // public lineChartData: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  // ];
  // public lineChartLabels: Array<any> = [];

  // public lineChartData: Array<any> = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];
  // public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartType = 'line';
  // public pieChartType = 'pie';



  constructor(private service: WeatherService) {
  }

  ngOnInit() {
    this.extractDetails();
  }

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.currentGraphBtnName = this.lineChartType === 'line' ? 'Switch to bar graph' : 'Switch to line chart';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  extractDetails() {
    let currentDate = new Date().toISOString().split('T')[0];
    // let currentDate = '';
    console.log(currentDate + '...' + this.service.forecast.cnt);
    // let index = 0;
    let currentMin = null;
    let currentMax = null;
    for (let index = 0; index < this.service.forecast.cnt; index++) {
      if (currentMin === null) {
        currentMin = this.service.forecast.list[index].main.temp_min;
        currentMax = this.service.forecast.list[index].main.temp_max;
      }
      // check if mins/maxes should be replaced

      if (this.service.forecast.list[index].main.temp_min < currentMin) {
        currentMin = this.service.forecast.list[index].main.temp_min;
        console.log('currentMin : ' + currentMin + ', serviceMin: ' + this.service.forecast.list[index].main.temp_min);

      }
      if (this.service.forecast.list[index].main.temp_max > currentMin) {
        currentMax = this.service.forecast.list[index].main.temp_max;
      }

      console.log(this.service.forecast.list[index]);
      // console.log('comparing: ' + this.service.forecast.list[index].dt_txt.substring(0, 10) + ' === ' + currentDate.substring(0, 10));
      if (this.service.forecast.list[index].dt_txt.substring(0, 10) === currentDate.substring(0, 10)) {
        // console.log('insideIf');
      } else {
        this.currentWeatherModel = new ForecastModel();
        this.currentWeatherModel.title = (this.service.myWeather).name;
        this.currentWeatherModel.country = (this.service.myWeather).sys.country;
        this.currentWeatherModel.description = this.service.forecast.list[index].weather[0].description;
        this.currentWeatherModel.main = this.service.forecast.list[index].weather[0].main;
        this.currentWeatherModel.imageUrl = this.service.getImage(this.currentWeatherModel.main);
        this.currentWeatherModel.low = currentMin;
        this.currentWeatherModel.high = currentMax;
        this.currentWeatherModel.date = new Date(this.service.forecast.list[index].dt_txt.substring(0, 10)).toDateString().substring(0, 10);

        currentDate = this.service.forecast.list[index].dt_txt;
        this.myForecastDataList.push(this.currentWeatherModel);
        // console.log(this.currentWeatherModel.high);

        currentMin = null;
        currentMax = null;
      }
    }
    for (const item of this.myForecastDataList) {
      // console.log(item.high);
      // console.log(item.low);
    }
    this.populateGraph();

  }

  populateGraph() {
    let tempMinArray = [];
    let tempMaxArray = [];
    console.log(this.myForecastDataList.length);
    for (const item of this.myForecastDataList) {
      tempMinArray.push(item.low);
      tempMaxArray.push(item.high);
      this.lineChartLabels.push(item.date);
      console.log('my Data list lows: ' + item.low);
      // console.log(item.low);
    }
    this.lineChartData = [{data: tempMaxArray, label: 'Max'}, {data: tempMinArray, label: 'Min'}];
    // this.lineChartData.push('label1');
    // this.lineChartData.push(tempMinArray);
    // this.lineChartData.push('label2');
  }

}




    // this.lineChartData = [[this.myForecastDataList[0].low, this.myForecastDataList[2].low, this.myForecastDataList[3].low, this.myForecastDataList[4].low, this.myForecastDataList[5].low],
    // [this.myForecastDataList[0].high, this.myForecastDataList[2].high, this.myForecastDataList[3].high, this.myForecastDataList[4].high, this.myForecastDataList[5].high]
    // ];
    // this.lineChartLabels = [this.myForecastDataList[0].date, this.myForecastDataList[1].date, this.myForecastDataList[2].date, this.myForecastDataList[3].date, this.myForecastDataList[4].date];

