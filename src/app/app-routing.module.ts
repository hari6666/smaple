import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KishanListingComponent} from './kishan-listing/kishan-listing.component'


const routes: Routes = [
  { path: '', component: KishanListingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
