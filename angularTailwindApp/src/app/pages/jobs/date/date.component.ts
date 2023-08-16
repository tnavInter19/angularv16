import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
 dateForm: FormGroup;

 constructor(private fb: FormBuilder) {
   this.dateForm = this.fb.group({
     datepickerControl: [''], // Initialize with default value if needed
   });
 }

 ngOnInit(): void {
   // Initialize the form control's value
   this.dateForm.get('datepickerControl')?.setValue(''); // Set your initial value
 }
}