import {Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'win-dialog',
  templateUrl: 'win-dialog.component.html',
})


export class WinDialogComponent {

  @Input() statusWin;

  constructor(
    private el: ElementRef,
  ){
  }

}
