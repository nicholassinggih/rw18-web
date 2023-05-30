import { Component } from '@angular/core';
import { doubleMetaphone } from 'double-metaphone';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent {
  results: Array<any> = [];
  words: string = '';

  generate() {
    this.results = this.words.split(/\s+/).map(w => doubleMetaphone(w));
  }
}
