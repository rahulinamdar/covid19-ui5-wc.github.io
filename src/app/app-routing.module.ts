import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
const routes: Routes = [
  { path: '', redirectTo: '/AllCountries', pathMatch: 'full' },
  { path: 'AllCountries' , component:CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
