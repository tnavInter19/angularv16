import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 searchTerm!: any;
 options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
 filteredOptions: string[] = [];
 showOptions = false;

 filterOptions(event: Event) {
   const searchTerm = (event.target as HTMLInputElement).value;
   this.filteredOptions = this.options.filter((option) =>
     option.toLowerCase().includes(searchTerm.toLowerCase())
   );
   this.showOptions = true;
 }

 onOptionSelected(event: MouseEvent, option: string) {
  event.stopPropagation();
  this.showOptions = false;
  this.searchTerm=option;
  console.log('Selected Option:', option);
}

 onBlur() {
   setTimeout(() => {
     this.showOptions = false;
   }, 150);
 }
}