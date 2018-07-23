import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateComponent } from "./employees/create.component";


const appRoutes: Routes=[
  { path: 'list', component: ListemployeesComponent },
  { path: 'create', component: CreateComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
  
]

@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
