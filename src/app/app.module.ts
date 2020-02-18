import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SplashComponent } from './splash/splash.component';
import { KishanListingComponent } from './kishan-listing/kishan-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    KishanListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
