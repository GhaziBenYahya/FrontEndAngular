import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  user: FormGroup;
  roles: string[] = ['administrateur', 'responsable workflow', 'utilisateur'];

  constructor(private fb: FormBuilder) {
    this.user = this.fb.group({
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.user = this.fb.group({
      role: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      motDePasse: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      photo: [null, Validators.required],
      acceptData: [false, Validators.requiredTrue]
    });
  }
  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    this.user.patchValue({
      photo: file
    });
  }
  onSubmit(): void {
    if (this.user.valid) {
      const userData: User = this.user.value;
      // Handle submitting the user data (e.g., send to a service)
      console.log('Submitted User Data:', userData);
    }
  }
}
