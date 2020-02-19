import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { SplashComponent } from './splash/splash.component';
import { KishanListingComponent } from './kishan-listing/kishan-listing.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HeaderComponent } from './Shared/Components/header/header.component'
import { FooterComponent } from './shared/Components/footer/footer.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    KishanListingComponent,
    DetailsPageComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
