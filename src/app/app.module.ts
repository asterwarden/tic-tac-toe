import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { WinDialogComponent } from './win-dialog/win-dialog.component';

@NgModule({
  imports: [ BrowserModule
  ],
  declarations: [ AppComponent, CellComponent, WinDialogComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
