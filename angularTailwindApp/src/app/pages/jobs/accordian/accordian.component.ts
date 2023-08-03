import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent  implements OnInit {
  formGroups: FormGroup[] = [];
  currentlyOpenIndex: number | null = 0; // Set the first accordion to be open initially

  constructor(private fb: FormBuilder) {
    this.addFormGroup(); // Create the initial form group
  }

  ngOnInit() {
    // Set the first accordion to be open initially
    this.formGroups[this.currentlyOpenIndex as number].patchValue({ isOpen: true });
  }

  deleteFormGroup(index: number) {
   this.formGroups.splice(index, 1);
   this.currentlyOpenIndex = this.formGroups.length > 0 ? 0 : null;
 }

 onSubmitAll() {
  if (this.formGroups.every((formGroup) => formGroup.valid)) {
    const allFormValues = this.formGroups.map((formGroup) => formGroup.value);
    console.log('Submitting all forms:', allFormValues);
    // You can now process the 'allFormValues' array as needed
  } else {
    console.log('Some forms are invalid. Cannot submit all.');
  }
}

  addFormGroup() {
    const formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isOpen: false,
    });

    this.formGroups.push(formGroup);
  }

  onSubmit(index: number) {
    const formGroup = this.formGroups[index];
    if (formGroup.valid) {
      console.log('Form submitted:', formGroup.value);
    }
  }

  isOpen(index: number): boolean {
    return this.formGroups[index].get('isOpen')?.value;
  }

  toggleAccordion(index: number) {
    if (this.currentlyOpenIndex !== null && this.currentlyOpenIndex !== index) {
      this.formGroups[this.currentlyOpenIndex].patchValue({ isOpen: false });
    }

    this.formGroups[index].patchValue({ isOpen: !this.isOpen(index) });
    this.currentlyOpenIndex = this.isOpen(index) ? index : null;
  }
}