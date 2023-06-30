import { Collector } from './collector.model';
import { Pemilik } from './pemilik.model';

export class Property {
  id: number = 0;
  blok: string = '';
  no: string = '';
  nominal: number = 0;
  komersial: boolean = false;
  rt: number = 0;
  rw: number = 0;

  Pemilik: Pemilik;
  Collector: Collector;
}
