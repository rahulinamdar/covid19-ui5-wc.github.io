import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

    constructor(private http: HttpClient) {
      
    }

   getAllData(){
      return this.http.get("https://corona.lmao.ninja/v2/all");
   }

   getALLCountries(){
      return this.http.get("https://corona.lmao.ninja/v2/countries?sort=cases");
   }

   getCountry(country: string){
    return this.http.get("https://corona.lmao.ninja/v2/countries/"+country);
   }

   getIndiaCount(){
      return this.http.get("https://corona.lmao.ninja/v2/countries/india");
   }
}
