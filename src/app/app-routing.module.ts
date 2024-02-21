import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './workflow/addworkflow/addworkflow.component';
import { ListworkflowComponent } from './workflow/listworkflow/listworkflow.component';
import { DashbordComponent } from './workflow/dashbord/dashbord.component';
import { UserComponent } from './workflow/user/user.component';
import { ManagesComponent } from './workflow/manages/manages.component';
import { EditComponent } from './workflow/edit/edit.component';

const routes: Routes = [
  
  {
    path : '' , redirectTo:'/workflow/dashbordComponent' , pathMatch : 'full'
  },

  {
    path: 'workflow',
    component: WorkflowComponent,
    children: [

      
      { path: 'addworkflowComponent',
       component: AddworkflowComponent,
      },
      { path: 'dashbordComponent', component: DashbordComponent },
      { path: 'listworkflowComponent', component: ListworkflowComponent },
      { path: 'userComponent', component: UserComponent },
      { path: 'managesComponent', component: ManagesComponent },
      { path: 'editComponent', component: EditComponent },

      
      
        // Autres routes pour les enfants si nécessaires
      
   ]
   
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }