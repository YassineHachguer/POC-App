import { Routes } from '@angular/router';
import { BeneficiaryListComponent } from './features/beneficiaries/beneficiary-list/beneficiary-list.component';
import { BeneficiaryFormComponent } from './features/beneficiaries/beneficiary-form/beneficiary-form.component';
import { VirementListComponent } from './features/virements/virement-list/virement-list.component';
import { VirementFormComponent } from './features/virements/virement-form/virement-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/beneficiaries', pathMatch: 'full' },
    { path: 'beneficiaries', component: BeneficiaryListComponent },
    { path: 'beneficiaries/new', component: BeneficiaryFormComponent },
    { path: 'virements', component: VirementListComponent },
    { path: 'virements/new', component: VirementFormComponent },
];
