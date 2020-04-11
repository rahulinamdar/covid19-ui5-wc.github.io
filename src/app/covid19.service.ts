import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

    constructor(private http: HttpClient) {
      
    }

   getAllData(){
      return this.http.get("https://corona.lmao.ninja/All");
   }

   getALLCountries(){
      return this.http.get("https://corona.lmao.ninja/countries?sort=cases");
   }

   getCountry(country: string){
    return this.http.get("https://corona.lmao.ninja/countries/"+country);
   }
}
