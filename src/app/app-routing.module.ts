import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';
import { VendeursListComponent } from './mg/component/Vendeur/vendeurs-list/vendeurs-list.component';
import { VendeurFormComponent } from './mg/component/Vendeur/vendeur-form/vendeur-form.component';
import { VendeurViewComponent } from './mg/component/Vendeur/vendeur-view/vendeur-view.component';
import { PersonelListComponent } from './mg/component/Personnel/personel-list/personel-list.component';
import { PersoneFormComponent } from './mg/component/Personnel/persone-form/persone-form.component';
import { PersoneviewComponent } from './mg/component/Personnel/personeview/personeview.component';

const routes: Routes = [
  {path: '',redirectTo : 'login',pathMatch : 'full'},
  {path: '',component : MasterComponent,children :[
  {path: 'test',component : TestComponent},
  {path: 'personnels/list',component : PersonelListComponent},
  {path: 'personnels/add/:id',component : PersoneFormComponent},
  {path: 'personnels/view/:id',component : PersoneviewComponent},
  {path: 'vendeurs/list',component : VendeursListComponent},
  {path: 'vendeurs/add/:id',component : VendeurFormComponent},
  {path: 'vendeurs/view/:id',component : VendeurViewComponent},

]},
  {path: 'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
