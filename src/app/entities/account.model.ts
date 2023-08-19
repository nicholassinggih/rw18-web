import { Pemilik } from './pemilik.model';
import { Property } from './property.model';

export class Account {
  id: number;
  pemilikId: number;
  propertyId: number;
  balance: number;
  active: boolean;
  Property: Property;
  Pemilik: Pemilik;
}
