import { Component, Inject, OnInit } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';

export interface DialogData {
 data: string;
}

@Component({
  selector: 'pmo-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {

  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: DialogData) { }
// data is where we want to access data from parent component
  ngOnInit(): void {
  }
deactivate(){
 console.log("this is deactivated")
 // in close we send results to the parent component.
 //or we can call api over here also.
 this.dialogRef.close("data send");
}
  cancel(){
   console.log("it is canceled");
   this.dialogRef.close();
  }

}
