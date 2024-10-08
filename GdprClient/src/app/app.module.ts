import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

import { AppComponent } from './app.component';

const cookieConfig:NgcCookieConsentConfig = {
    cookie: {
      domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
    },
    palette: {
      popup: {
        background: '#000'
      },
      button: {
        background: '#f1d600'
      }
    },
    theme: 'edgeless',
    type: 'opt-out'
  };

  @NgModule({
    declarations: [],
    imports: [NgcCookieConsentModule.forRoot(cookieConfig)],  
    bootstrap: []
  })


export class AppModule { }