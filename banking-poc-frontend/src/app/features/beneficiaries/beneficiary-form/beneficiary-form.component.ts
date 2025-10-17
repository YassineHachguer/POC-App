import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';

@Component({
  selector: 'app-beneficiary-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beneficiary-form.component.html'
})
export class BeneficiaryFormComponent {
  model: Beneficiary = { nom: '', prenom: '', rib: '', type: 'PHYSIQUE' };
  saving = false;
  error: string | null = null;

  constructor(private svc: BeneficiaryService, private router: Router) {}

  save(): void {
    this.error = null;
    if (!this.model.nom || !this.model.prenom || !this.model.rib) {
      this.error = 'Merci de remplir tous les champs requis.';
      return;
    }
    this.saving = true;
    this.svc.create(this.model).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/beneficiaries']);
      },
      error: err => {
        console.error(err);
        this.error = 'Erreur lors de la création du bénéficiaire.';
        this.saving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/beneficiaries']);
  }
}
