import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Virement } from '../../../core/models/virement.model';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { VirementService } from '../../../core/services/virement.service';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';

@Component({
  selector: 'app-virement-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './virement-form.component.html'
})
export class VirementFormComponent implements OnInit {
  model: Virement = {
    beneficiaryId: 0,
    ribSource: '',
    amount: 0,
    description: '',
    type: 'NORMAL'
  };

  beneficiaries: Beneficiary[] = [];
  saving = false;
  error: string | null = null;

  constructor(
    private svc: VirementService,
    private benSvc: BeneficiaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.benSvc.list().subscribe({
      next: list => {
        this.beneficiaries = list;
        if (list.length > 0) {
          this.model.beneficiaryId = list[0].id!;
        }
      },
      error: err => {
        console.error('Erreur chargement bénéficiaires', err);
        this.error = 'Impossible de charger la liste des bénéficiaires';
      }
    });
  }

  save(): void {
    this.error = null;
    if (!this.model.beneficiaryId || !this.model.ribSource || !this.model.amount || this.model.amount <= 0) {
      this.error = 'Complètez correctement tous les champs';
      return;
    }
    this.saving = true;
    this.model.date = new Date().toISOString();
    this.svc.create(this.model).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/virements']);
      },
      error: err => {
        console.error(err);
        this.error = err?.error || 'Erreur lors de la création du virement';
        this.saving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/virements']);
  }
}
