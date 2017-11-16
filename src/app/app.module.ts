import { BrowserModule } from '@angular/platform-browser';
import locale from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PillComponent } from './shared/pill/pill.component';
import { HomeComponent } from './home/home.component';

import { AssignmentService } from './services/assignment.service';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    PageNotFoundComponent,
    PillComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    AssignmentService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
