import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { BodyComponent } from './components/body/body.component';
import { GetDataServiceService } from './services/get-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
