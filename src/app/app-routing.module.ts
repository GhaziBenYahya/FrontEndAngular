import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './workflow/addworkflow/addworkflow.component';
import { ListworkflowComponent } from './workflow/listworkflow/listworkflow.component';
import { CreateworkflowComponent } from './workflow/addworkflow/createworkflow/createworkflow.component';
import { DashbordComponent } from './workflow/dashbord/dashbord.component';
import { UserComponent } from './workflow/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },
  

  {
    path: 'workflow',
    component: WorkflowComponent,
    children: [
      {
        path : '' , redirectTo:'/workflow/dashbordComponent' , pathMatch : 'full'
      },
      
      
      { path: 'addworkflowComponent',
       component: AddworkflowComponent,
       children: [
        {
         path: 'createworkflowComponent',
         component: CreateworkflowComponent,
        },]
      },
      { path: 'dashbordComponent', component: DashbordComponent },
      { path: 'listworkflowComponent', component: ListworkflowComponent },
      { path: 'userComponent', component: UserComponent },
      
      
        // Autres routes pour les enfants si nécessaires
      
   ]
   
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }