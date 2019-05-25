import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawingComponent } from './drawing/drawing.component';
import { OrigamiComponent } from './origami/origami.component';

const routes: Routes = [
  { path: 'drawing', component: DrawingComponent },
  { path: 'origami', component: OrigamiComponent },
  { path: 'drawing/:countryname/:city', component: DrawingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
