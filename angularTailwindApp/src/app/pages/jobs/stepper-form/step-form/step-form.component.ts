import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';

interface Step {
  title: string;
  number: string;
  description: string;
  content: TemplateRef<any>;
}

interface Desc {
  title: string;
  number: string;
  description: string;
}

@Component({
  selector: 'pmo-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.less'],
})
export class StepFormComponent {
  @ContentChildren(TemplateRef) stepsContent!: QueryList<TemplateRef<any>>;

  steps: Step[] = [];
  data = [
    {
      title: 'Job Details',
      description: 'Vitae sed mi luctus laoreet.',
      number: '01',
    },
    {
      title: 'Application form',
      description: 'Cursus semper viverra.',
      number: '02',
    },
    { title: 'Preview', description: 'Penatibus eu quis ante.', number: '03' },
  ];
  currentStep: number = 0;
  totalSteps: number = 0;
  orientation: 'horizontal' | 'vertical' = 'vertical'; // Default to vertical

  setOrientation(orientation: 'horizontal' | 'vertical') {
    this.orientation = orientation;
  }

  ngAfterContentInit() {
    this.steps = this.stepsContent.map((content, index) => ({
      title: this.data[index]?.title!,
      number: this.data[index]?.number!,
      description: this.data[index]?.description!,
      content,
    }));
    this.totalSteps = this.steps.length;
    console.log(this.steps);
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
