import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({selector: 'app-form-date-picker', templateUrl: './form-date-picker.component.html', styleUrls: ['./form-date-picker.component.less']})

export class FormDatePickerComponent {

  @Input() date: Date;
  @Output() onSelected = new EventEmitter<Date>();

  ngOnInit() {
    if (this.date) this.selectDate(this.date);
  }

  currentYear: number = new Date().getFullYear();
  selectedDate: Date;
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number = this.currentYear;
  isCustom: boolean = false;
  isSelected: string = 'none';
  days: Array<number> = [];
  weekDays: Array<string> = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  months: Array<string> = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
  options: Array<string> = ['HOJE','AMANHÃ','PRÓXIMA SEMANA','NOVA'];

  cancel(): void {
    this.days = [];
    this.selectedDate = null;
    this.selectedYear = this.currentYear;
    this.isSelected = 'none';
    this.isCustom = false;
    this.onSelected.emit(null);
  }

  selectDate(date: Date): void {
    this.isSelected = 'day';
    this.selectedDate = date;
    this.onSelected.emit(this.selectedDate);
  }

  selectDay(day: number): void {
    if (day) {
      this.selectedDay = day;
      this.selectDate(new Date(this.selectedYear, this.selectedMonth, this.selectedDay));
    }
  }

  selectMonth(month: number): void {
    this.selectedMonth = month;
    let daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
    let weekDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    let remainingWeekDays = 7 - ((daysInMonth + weekDay) % 7);
    if (remainingWeekDays === 7) {
      remainingWeekDays = 0;
    }
    for(let i = 1 - weekDay; i <= daysInMonth + remainingWeekDays; i++) {
      if (i <= 0 || i > daysInMonth) {
        this.days.push(null);
      } else {
        this.days.push(i);
      }
    }
    this.isSelected = 'month';
  }

  selectOption(option: string): void {
    switch(option) {
      case 'HOJE':
        this.selectDate(new Date());
        break;
      case 'AMANHÃ':
        this.selectDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
        break;
      case 'PRÓXIMA SEMANA':
        this.selectDate(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000));
        break;
      case 'NOVA':
        this.isCustom = true;
        break;
      default:
        break;
    }
  }

  selectYear(year: string): void {
    if (year === '-') {
      this.selectedYear--;
    } else if (year === '+') {
      this.selectedYear++;
    } else {
      this.selectedYear = +year;
      this.isSelected = 'year';
    }
  }

}
