import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  answer: number = 0;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  submitForm() {
    if (this.answer === 5) {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      this.formSubmit.emit(formData);
    } else {
      alert('Respuesta incorrecta. Por favor, inténtelo de nuevo.');
    }
  }
}
