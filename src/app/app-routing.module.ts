import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KishanListingComponent} from './kishan-listing/kishan-listing.component';
import {SplashComponent} from './splash/splash.component';
import {DetailsPageComponent} from './details-page/details-page.component';


const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'listing', component: KishanListingComponent},
  { path: 'details', component: DetailsPageComponent },
  { path: '**', redirectTo: ''}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
