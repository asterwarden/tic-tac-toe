import {Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'cell-block',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.scss'],
})


export class CellComponent {

  @Output() onChanged = new EventEmitter<number>();

  @Input() itemNumber: number;
  @Input() itemStringNumber: number;

  @Input() currentPlayer: boolean;

  constructor(
  ){
  }

  mark() {
    this.onChanged.emit(this.itemNumber);
  }
}
