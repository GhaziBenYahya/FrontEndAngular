import { Component } from '@angular/core';

@Component({
  selector: 'app-listworkflow',
  templateUrl: './listworkflow.component.html',
  styleUrls: ['./listworkflow.component.css']
})
export class ListworkflowComponent {
  workflows = [
    { id: 1, name: 'Workflow 1', description: 'Description 1', responsible: 'Melissa Tudella', state: 'En attente' },
    { id: 2, name: 'Workflow 2', description: 'Description 2', responsible: 'Jane Doe', state: 'En cours' },
    { id: 3, name: 'Workflow 3', description: 'Description 3', responsible: 'Bob Smith', state: 'Terminé' }, 
    { id: 4, name: 'Workflow 4', description: 'Description 4', responsible: 'Christina', state: 'En cours' },
    { id: 5, name: 'Workflow 5', description: 'Description 5', responsible: 'Janat', state: 'En cours' },
    { id: 6, name: 'Workflow 6', description: 'Description 6', responsible: 'Ismail', state: 'Terminé' },
    
  ];
  // Le nombre d'éléments à afficher par page
  itemsPerPage = 2;

  // La page actuelle
  currentPage = 1;

  // Calculer le nombre total de pages
  totalPages = Math.ceil(this.workflows.length / this.itemsPerPage);

  // Obtenir la liste des workflows à afficher sur la page actuelle
  get allWorkflows(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.workflows.slice(startIndex, endIndex);
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

  

  deleteWorkflow(id: number): void {
    console.log(`Suppression du workflow avec l'ID ${id}`);
  }

  editWorkflow(id: number): void {
    console.log(`Modification du workflow avec l'ID ${id}`);
  }

  viewWorkflow(id: number): void {
    console.log(`Voir les détails du workflow avec l'ID ${id}`);
}


}
