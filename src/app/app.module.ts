import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './workflow/addworkflow/addworkflow.component';
import { ListworkflowComponent } from './workflow/listworkflow/listworkflow.component';
import { CreateworkflowComponent } from './workflow/addworkflow/createworkflow/createworkflow.component';
import { DashbordComponent } from './workflow/dashbord/dashbord.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './workflow/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    AddworkflowComponent,
    ListworkflowComponent,
    CreateworkflowComponent,
    DashbordComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
