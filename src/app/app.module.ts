import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card-list/card/card.component';
import { CardHeaderComponent } from './card-list/card/card-header/card-header.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardInfoComponent } from './card-list/card/card-info/card-info.component';
import { PillComponent } from './card-list/card/card-header/pill/pill.component';
import { HomeComponent } from './home/home.component';

import { AssignmentService } from './services/assignment.service';
import { FilterComponent } from './home/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardInfoComponent,
    CardListComponent,
    HomeComponent,
    PillComponent,
    FilterComponent
  ],
  imports: [BrowserModule],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})

export class AppModule {}
