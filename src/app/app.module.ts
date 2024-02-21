import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './workflow/addworkflow/addworkflow.component';
import { ListworkflowComponent } from './workflow/listworkflow/listworkflow.component';
import { DashbordComponent } from './workflow/dashbord/dashbord.component';
import { UserComponent } from './workflow/user/user.component';
import { ManagesComponent } from './workflow/manages/manages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './workflow/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    AddworkflowComponent,
    ListworkflowComponent,
    
    DashbordComponent,
    UserComponent,
    ManagesComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
