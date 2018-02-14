import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LogonComponent } from './logon/logon.component';
import { LogonService } from './logon/logon.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LogonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    MaterialModule
  ],
  providers: [
    LogonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
