import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './workflow/addworkflow/addworkflow.component';
import { ListworkflowComponent } from './workflow/listworkflow/listworkflow.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    AddworkflowComponent,
    ListworkflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
