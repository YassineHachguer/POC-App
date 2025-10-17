export interface Virement {
  id?: number;
  beneficiaryId: number;
  ribSource: string;
  amount: number;
  description?: string;
  date?: string; // ISO
  type: 'NORMAL' | 'INSTANT';
}
