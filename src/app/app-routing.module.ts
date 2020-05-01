import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesTComponentComponent } from './tes-component/tes-component.component';


const routes: Routes = [
  {path:'devfestfl/speakers/michael-prentice/material-design',component:TesTComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
