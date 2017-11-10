import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectService } from './services/subject.service';
import { PillComponent } from './pill/pill.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    PillComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})

export class AppModule { }
