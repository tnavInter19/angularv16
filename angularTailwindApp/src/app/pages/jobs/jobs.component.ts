import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';
import { PaymentComponent } from './payment/payment.component';
import {Dialog, DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'pmo-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

 jobList:any = [];
 isSlideOverOpen = false;
 constructor(private _jobService: JobsService,private dialog: Dialog,private elementRef: ElementRef){}

 ngOnInit(): void {
   this.listJobs();
 }

 listJobs(){
   this._jobService.list().subscribe((response)=>{
     this.jobList = response;
   },(error=>{

   }));
 }

 createJob(){
   let Job = {
     id: new Date().getTime(),
     title:`Some Job` 
   }
   this._jobService.create(Job).subscribe((response)=>{
     this.listJobs();
   },(error=>{

   }));
 }

 editJob(Job: any){
   let data = {
     id: new Date().getTime(),
     title:`Some Job` 
   }
   this._jobService.update(Job.id,data).subscribe((response)=>{
     this.listJobs();
   },(error=>{

   }));
 }

 deleteJob(id: any){
   this._jobService.delete(id).subscribe((response)=>{
     this.listJobs();
   },(error=>{
   }));
 }

 openLogin() {
  const dialogRef = this.dialog.open<string>(PaymentComponent, { data: 'John' });

  dialogRef.closed.subscribe((data:any) => {
    // Subscription runs after the dialog closes

    if(data){
     // if data is there here we can do api call in parent component and notify the api status in alerts.
    }
    // else it will be normal close.
    console.log(data);
    console.log('Dialog closed!');
  });
}



  // Method to open the slide-over modal
  openSlideOver(event: Event) {
   event.stopPropagation();
   this.isSlideOverOpen = true;
 }

 // Method to close the slide-over modal
 closeSlideOver() {
   this.isSlideOverOpen = false;
 }

 // HostListener to handle clicks outside the modal and close it
 @HostListener('document:click', ['$event.target'])
 onClickOutside(targetElement: HTMLElement) {
   const clickedInsideButton = this.elementRef.nativeElement.contains(targetElement);
   if (this.isSlideOverOpen && !clickedInsideButton && !targetElement.closest('.slide-over-content')) {
     this.closeSlideOver();
   }
 }
}
