import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import locale from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { FormAssignmentComponent } from './forms/form-assignment/form-assignment.component';
import { FormDatePickerComponent } from './forms/form-date-picker/form-date-picker.component';
import { FormSelectComponent } from './forms/form-select/form-select.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PillComponent } from './shared/pill/pill.component';
import { HomeComponent } from './home/home.component';

import { TitleCasePipe } from './shared/pipes/title-case.pipe';

import { AssignmentService } from './services/assignment.service';

import { AppRoutingModule } from './app-routing.module';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormAssignmentComponent,
    FormDatePickerComponent,
    FormSelectComponent,
    HomeComponent,
    PageNotFoundComponent,
    PillComponent,
    TitleCasePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AssignmentService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
