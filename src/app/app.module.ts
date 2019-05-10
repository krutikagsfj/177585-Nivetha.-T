import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GameRoutingModule} from './game-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayComponent } from './play/play.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
