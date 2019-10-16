import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {
  persons: string[] = ['João', 'Maria', 'Tereza'];

  addPerson(name: string) {
    this.persons.push(name);
  }

}
