import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from 'src/app/models/workflow-dto';
import {  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-listworkflow',
  templateUrl: './listworkflow.component.html',
  styleUrls: ['./listworkflow.component.css']
})
export class ListworkflowComponent implements OnInit{
  WorkflowDto: WorkflowDto[] = [];

  constructor(private srv: ServiceService , private router: Router) {}
  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getWorkflows().subscribe((res: any) => {

      console.log(res)
      this.WorkflowDto = res
    })




  }







    // Le nombre d'éléments à afficher par page
    itemsPerPage = 2;

    // La page actuelle
    currentPage = 1;
  
    // Calculer le nombre total de pages
    totalPages = Math.ceil(this.WorkflowDto.length / this.itemsPerPage);
  
    // Obtenir la liste des workflows à afficher sur la page actuelle
    get allWorkflows(): any[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.WorkflowDto.slice(startIndex, endIndex);
    }
  
    setPage(pageNumber: number): void {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    }
  
    getPagesArray(): number[] {
      const pagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);
      console.log('Pages Array:', pagesArray);
      return pagesArray;
    }
  
    

  
    editWorkflow(id: number): void {
      console.log(`Modification du workflow avec l'ID ${id}`);
    }
  
    viewWorkflow(id: number): void {
      console.log(`Voir les détails du workflow avec l'ID ${id}`);
  }








  deleteWorkflow(workflowId : any) {
    this.srv.removeWorkflow(workflowId)
      .subscribe(
        (result) => { // success
          console.log(result)
          Swal.fire('Workflow supprimé avec succès', '', 'success')
          window.location.reload();
         
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err)
          Swal.fire('Workflow supprimé avec succès ', '', 'success')
          window.location.reload();
        }
      
      )
  

}


nav(workflow: WorkflowDto) {
  this.router.navigate(['/workflow/editComponent'], { state: { workflow }, skipLocationChange: true });
}



}
