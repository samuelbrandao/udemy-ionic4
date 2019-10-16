import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent {
  //  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  constructor (private personsService: PersonsService) {}

  onCreatePerson() {
    // console.log('Create a person: ' + this.enteredPersonName);
    // this.personCreate.emit(this.enteredPersonName);
    // this.enteredPersonName = '';
    this.personsService.addPerson(this.enteredPersonName);
    console.log(this.personsService.persons);
  }
}
