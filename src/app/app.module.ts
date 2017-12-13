import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import locale from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { FormAssignmentComponent } from './shared/forms/form-assignment/form-assignment.component';
import { FormDatePickerComponent } from './shared/forms/form-date-picker/form-date-picker.component';
import { FormSelectComponent } from './shared/forms/form-select/form-select.component';
import { FormTextareaComponent } from './shared/forms/form-textarea/form-textarea.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PillComponent } from './shared/pill/pill.component';
import { HomeComponent } from './home/home.component';

import { TitleCasePipe } from './shared/pipes/title-case.pipe';

import { AssignmentService } from './services/assignment.service';

import { AppRoutingModule } from './app-routing.module';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AddAssignmentComponent,
    AppComponent,
    CardComponent,
    EditAssignmentComponent,
    FormAssignmentComponent,
    FormDatePickerComponent,
    FormSelectComponent,
    FormTextareaComponent,
    HomeComponent,
    PageNotFoundComponent,
    PillComponent,
    TitleCasePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
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
