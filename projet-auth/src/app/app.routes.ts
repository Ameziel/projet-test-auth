import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {AdministrationaccueilComponent} from "./administrationaccueil/administrationaccueil.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'administration-accueil', component: AdministrationaccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
