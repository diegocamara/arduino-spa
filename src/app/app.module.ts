import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { routing } from "app/app.routing";
import { HomeComponent } from './pages/home/home.component';
import { BoardComponent } from './pages/board/board.component';
import { NativeWindowRefService } from "app/services/nativewindowref.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [NativeWindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
