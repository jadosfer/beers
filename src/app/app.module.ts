import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { PdpComponent } from './pdp/pdp.component';
import { PlpComponent } from './plp/plp.component';

@NgModule({
  declarations: [
    AppComponent,
    PlpComponent,
    PdpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay:200})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
