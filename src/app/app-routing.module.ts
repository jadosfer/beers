import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdpComponent } from './pdp/pdp.component';
import { PlpComponent } from './plp/plp.component';

const routes: Routes = [
  { path: '', redirectTo: '/plp', pathMatch: 'full' },
  { path: 'plp', component: PlpComponent },
  //{ path: 'pdp/:id', component: PdpComponent },
  { path: ':param', component: PdpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
