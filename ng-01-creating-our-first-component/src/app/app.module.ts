import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsInputComponent } from './persons/persons-input.component';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonsInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
