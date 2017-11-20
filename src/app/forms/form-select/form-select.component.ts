import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.less']
})

export class FormSelectComponent {

  @Input() content: any;
  @Output() onSelected = new EventEmitter<string>();

  ngOnInit() {
    this.content.selected = '';
    this.content.isCustom = false;
    this.content.isSelected = false;
  }

  addItem(selected: string): boolean {
    if (!selected) return false;
    this.content.service.addItem(this.content.serviceContent, selected);
    this.content.selected = selected.toUpperCase();
    this.content.isSelected = true;
    this.onSelected.emit(this.content.selected);
    return true;
  }

  editItem(): void {
    this.content.selected = '';
    this.content.isSelected = false;
    this.content.isCustom = false;
    this.onSelected.emit(null);
  }

  removeItem(selected: string): void {
    this.editItem();
    this.content.service.removeItem(this.content.serviceContent, selected);
  }

  selectItem(selected: string): void {
    if (selected === '+') {
      this.content.selected = '';
      this.content.isCustom = true;
    } else {
      this.content.selected = selected;
      this.content.isSelected = true;
      this.onSelected.emit(selected);
    }
  }

}
