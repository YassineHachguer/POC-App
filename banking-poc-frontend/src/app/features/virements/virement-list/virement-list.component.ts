import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Virement } from '../../../core/models/virement.model';
import { VirementService } from '../../../core/services/virement.service';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-virement-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './virement-list.component.html'
})
export class VirementListComponent implements OnInit {
  virements: Virement[] = [];
  beneficiariesMap = new Map<number, string>();
  loading = false;
  error: string | null = null;

  constructor(
    private svc: VirementService,
    private benSvc: BeneficiaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.svc.list().subscribe({
      next: data => {
        this.virements = data;
        this.loadBeneficiaries();
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.error = 'Erreur lors du chargement des virements';
        this.loading = false;
      }
    });
  }

  loadBeneficiaries(): void {
    this.benSvc.list().subscribe({
      next: list => {
        list.forEach(b => this.beneficiariesMap.set(b.id!, `${b.nom} ${b.prenom}`));
      },
      error: err => console.error('Erreur chargement bénéficiaires', err)
    });
  }

  getBeneficiaryName(id?: number): string {
    if (!id) return '#unknown';
    return this.beneficiariesMap.get(id) || `#${id}`;
  }

  create(): void {
    this.router.navigate(['/virements/new']);
  }
}
