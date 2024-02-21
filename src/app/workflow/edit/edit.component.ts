import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from 'src/app/models/workflow-dto';

import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';





@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private srv: ServiceService, private router: Router , private route: ActivatedRoute) { }



  ngOnInit(): void {
    console.log("succe");
    
    



  }




  workflow : WorkflowDto=new WorkflowDto();
  WorkflowDto = [];

  editWorkflow() {
    const state = this.route.snapshot.root.children[0].data['state'];

    if (state && state.workflow && state.workflow.workflowId) {
      this.srv.editworkflow(state.workflow, state.workflow.workflowId)
        .subscribe(
          (result) => { // success
            console.log(result);
            this.ngOnInit();
            Swal.fire('Valider', '', 'success');
          },
          (err) => {
            // traitement du cas d'erreur
            console.log(err);
            Swal.fire('Invalid ', '', 'error');
          }
        );
    } else {
      console.error('Les données ne sont pas correctement définies.');
    }
  }


}
