import { Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';

interface Step {
  title: string;
  content: TemplateRef<any>;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.less'],
})
export class StepperComponent {
 @ContentChildren(TemplateRef) stepsContent!: QueryList<TemplateRef<any>>;

 steps: Step[] = [];
 currentStep: number = 0;
 totalSteps: number = 0;
 orientation: 'horizontal' | 'vertical' = 'vertical'; // Default to vertical

 setOrientation(orientation: 'horizontal' | 'vertical') {
   this.orientation = orientation;
 }

 ngAfterContentInit() {
   this.steps = this.stepsContent.map((content, index) => ({
     title: `Step ${index + 1}`,
     content,
   }));
   this.totalSteps = this.steps.length;
 }

 nextStep() {
   if (this.currentStep < this.totalSteps - 1) {
     this.currentStep++;
   }
 }

 previousStep() {
   if (this.currentStep > 0) {
     this.currentStep--;
   }
 }
}