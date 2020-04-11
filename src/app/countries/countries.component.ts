import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  allData: Object;
  Countries: any;
  country : String;
  covid19Service: any;

  constructor(covid19Service : Covid19Service) {
    this.covid19Service=covid19Service;
    covid19Service.getAllData().subscribe(
      data => this.allData = data,  
      error => console.error('Error: ' + error),
      () => console.log('Completed!'));

      covid19Service.getALLCountries().subscribe(
        data => this.Countries = data,  
        error => console.error('Error: ' + error),
        () => console.log('Completed!'));

   }

  ngOnInit() {
  }

  onPress(oEvent: any){
    debugger;
  }

  onChange(oEvent: any){
    this.country = oEvent.target.value;
    if(this.country.trim() === ""){
      this.covid19Service.getALLCountries().subscribe(
        data => this.Countries = data,  
        error => console.error('Error: ' + error),
        () => console.log('Completed!'));
        return;
    }
    this.covid19Service.getCountry(this.country).subscribe(
      data => this.Countries = [data],  
      error => {
        this.covid19Service.getALLCountries().subscribe(
          data => this.Countries = data,  
          error => console.error('Error: ' + error),
          () => console.log('Completed!'));
      },
      () => console.log('Completed!'));

  }

}
