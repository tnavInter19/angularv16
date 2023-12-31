import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { RouterModule, Routes } from '@angular/router';
import { NewJobsComponent } from './new-jobs/new-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';
import { PaymentComponent } from './payment/payment.component';
import { DialogModule } from '@angular/cdk/dialog';
import { NavComponent } from './nav/nav.component';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { StepperPageComponent } from './stepper-page/stepper-page.component';
import { StepperComponent } from './stepper-page/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { StepFormComponent } from './stepper-form/step-form/step-form.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordianTableComponent } from './accordian-table/accordian-table.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { DateComponent } from './date/date.component';
import { DarkFormComponent } from './dark-form/dark-form.component';

const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'new', component: NewJobsComponent },
  { path: 'nav', component: NavComponent },
  { path: 'drag', component: DragDropComponent },
  { path: 'combo', component: ComboBoxComponent },
  { path: 'stepper', component: StepperPageComponent },
  { path: 'table', component: TablePaginationComponent },
  { path: 'stepform', component: StepperFormComponent },
  { path: 'accordian', component: AccordianComponent },
  { path: 'accordianTable', component: AccordianTableComponent },
  { path: 'login', component: LoginComponent },
  {path:'date',component:DateComponent},
  {path:'darkform',component:DarkFormComponent},
  { path: 'carousel', component: CarouselComponent },
  { path: ':id', component: UpdateJobsComponent },

];

@NgModule({
  declarations: [
    JobsComponent,
    NewJobsComponent,
    UpdateJobsComponent,
    PaymentComponent,
    NavComponent,
    DragDropComponent,
    ComboBoxComponent,
    StepperPageComponent,
    StepperComponent,
    TablePaginationComponent,
    StepperFormComponent,
    StepFormComponent,
    AccordianComponent,
    AccordianTableComponent,
    LoginComponent,
    CarouselComponent,
    DateComponent,
    DarkFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    CdkMenuTrigger,
    CdkDrag,
    CdkDropListGroup, CdkDropList,
    CdkMenu,
    CdkStepperModule,
    SharedModuleModule,
    CdkMenuItem,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class JobsModule {}
