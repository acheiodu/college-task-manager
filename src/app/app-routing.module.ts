import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { Routes }  from '@angular/router';

import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'add-assignment', component: AddAssignmentComponent},
  {path: 'edit', component: EditAssignmentComponent, canActivate: [AuthGuard]},
  {path: 'edit/:assignmentId', component: EditAssignmentComponent},
  {path: 'login', component: LoginComponent},
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
