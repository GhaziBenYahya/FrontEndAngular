import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from 'src/app/models/workflow-dto';



@Component({
  selector: 'app-addworkflow',
  templateUrl: './addworkflow.component.html',
  styleUrls: ['./addworkflow.component.css']
})
export class AddworkflowComponent implements OnInit{


  constructor(private srv: ServiceService, private router: Router) { }



  ngOnInit(): void {
    console.log("succe")

  }


  
  nav() {
    this.router.navigate(['/workflow/managesComponent']);

  }




  //methode AddWorkflow

  workflow : WorkflowDto=new WorkflowDto()

  ajoutWorkflow() {
    console.log(this.workflow)
    this.srv.addWorkflow(this.workflow)
      .subscribe(
        (result) => { // success
          console.log(result)
          Swal.fire('Valider', '', 'success')
          this.router.navigate(['/orderComponent/createworkflowComponent']);
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err)
          Swal.fire('Invalid ', '', 'error')
        }
  
      )
  }



  
  //2eme
  ajoutWorkflow2() {
    console.log(this.workflow);
    this.srv.addWorkflow(this.workflow)
      .subscribe(
        (result) => { // success
          console.log(result);

          this.router.navigate(['/workflow/managesComponent']);
          Swal.fire('Valider', '', 'success');
          
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err);
          Swal.fire('Invalid ', '', 'error');
        }
      );
  }
  


}
