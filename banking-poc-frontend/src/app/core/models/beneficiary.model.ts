export interface Beneficiary {
  id?: number;
  nom: string;
  prenom: string;
  rib: string;
  type: 'PHYSIQUE' | 'MORALE';
}
