import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  showDatepicker = false;
  @Input() datepickerValue!: string;
  @Output() datepickerValueChange: EventEmitter<string> =
    new EventEmitter<string>();
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];
  yearView = false;
  constructor() {}

  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue = new Date(
      this.year,
      this.month,
      today.getDate()
    ).toDateString();
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.datepickerValueChange.emit(this.datepickerValue);
    this.showDatepicker = false;

    // const day = selectedDate.getDate();
    // const month = selectedDate.getMonth() + 1; // Adding 1 because months are zero-based
    // const year = selectedDate.getFullYear().toString().slice(-2); // Extract last 2 digits of the year

    // // Pad day and month with leading zeros if needed
    // const formattedDay = day < 10 ? `0${day}` : day;
    // const formattedMonth = month < 10 ? `0${month}` : month;

    // this.datepickerValue = `${formattedMonth}/${formattedDay}/${year}`;
    // this.showDatepicker = false;
  }

  isDateSelected(date: number): boolean {
    const selectedDate = new Date(this.year, this.month, date).toDateString();
    return this.datepickerValue === selectedDate;
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  toggleYearView() {
    this.yearView = !this.yearView;
  }

  scrollYears(direction: number) {
    const yearList = document.querySelector('.year-list');
    if (yearList) {
      yearList.scrollTop += direction * 30; // Adjust the scroll amount as needed
    }
  }

  changeYear(change: number) {
    this.year += change;
    this.getNoOfDays(); // Update days when year changes
  }

  handleScroll(event: any) {
    const scrollDirection = event.deltaY > 0 ? 1 : -1; // 1 for scrolling down, -1 for scrolling up
    this.changeYear(scrollDirection);
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    if (this.yearView) {
      const scrollDirection = event.deltaY > 0 ? 1 : -1; // 1 for scrolling down, -1 for scrolling up
      this.changeYear(scrollDirection);
      event.preventDefault(); // Prevent default scrolling behavior
    }
  }

  selectYear(selectedYear: number) {
    this.year = selectedYear;
    this.yearView = false;
    this.getNoOfDays(); // Update days when a year is selected
  }

  trackByIdentity = (index: number, item: any) => item;
}
