import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-assignment', component: AddAssignmentComponent},
  {path: 'edit-assignment', component: EditAssignmentComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})

export class AppRoutingModule {}
