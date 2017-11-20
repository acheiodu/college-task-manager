import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormAssignmentComponent } from './forms/form-assignment/form-assignment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'new-assignment', component: FormAssignmentComponent},
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
