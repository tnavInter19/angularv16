import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'pmo-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.less']
})
export class ComboBoxComponent implements OnInit {
 @Input() options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
 comboboxFormGroup!: UntypedFormGroup;
 showOptions: boolean = false;
 filteredOptions: string[] = [];

 constructor(private formBuilder: FormBuilder ,private cdr:ChangeDetectorRef) {}

 ngOnInit() {
   this.comboboxFormGroup = this.formBuilder.group({
     selectedOption: '',
   });

   this.comboboxFormGroup
     .get('selectedOption')
     ?.valueChanges.subscribe((value) => {
       this.filteredOptions = this.options.filter((option) =>
         option.toLowerCase().includes(value.toLowerCase())
       );
     });
 }

 onKeyUp(event: any) {
   this.filteredOptions = this.options.filter((option) =>
     option.toLowerCase().includes(
       this.comboboxFormGroup.get('selectedOption')?.value.toLowerCase()
     )
   );
 }

 onOptionSelected(option: string) {
console.log(option)
   this.comboboxFormGroup.get('selectedOption')?.setValue(option);
   console.log(this.comboboxFormGroup.value)
   this.showOptions = false;
 }

 onBlur() {
   setTimeout(() => {
     this.showOptions = false;
   }, 100);
 }
}