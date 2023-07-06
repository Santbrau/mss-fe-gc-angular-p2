import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent {
  @Input() formData: any;
}
