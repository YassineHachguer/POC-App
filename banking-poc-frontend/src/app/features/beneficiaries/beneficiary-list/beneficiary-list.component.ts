import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './beneficiary-list.component.html'
})
export class BeneficiaryListComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  loading = false;
  error: string | null = null;

  constructor(private svc: BeneficiaryService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.svc.list().subscribe({
      next: data => {
        this.beneficiaries = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Erreur lors du chargement des bénéficiaires';
        console.error(err);
        this.loading = false;
      }
    });
  }

  create(): void {
    this.router.navigate(['/beneficiaries/new']);
  }
}
