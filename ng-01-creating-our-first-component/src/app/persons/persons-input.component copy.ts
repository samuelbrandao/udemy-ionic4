import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons.component.html'
})
export class PersonsInputComponent {
  @Input() personList: string[];
}
