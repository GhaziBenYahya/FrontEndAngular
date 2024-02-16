import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './workflow/addworkflow/addworkflow.component';
import { ListworkflowComponent } from './workflow/listworkflow/listworkflow.component';

const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },


  {
    path: 'workflow',
    component: WorkflowComponent,
    children: [
      {
        path : '' , redirectTo:'/workflow/addworkflowComponent' , pathMatch : 'full'
      },
      
      
      { path: 'addworkflowComponent', component: AddworkflowComponent },
      { path: 'listworkflowComponent', component: ListworkflowComponent },
      
        // Autres routes pour les enfants si nécessaires
      

   ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }