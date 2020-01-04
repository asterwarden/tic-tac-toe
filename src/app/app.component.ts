import { Component, OnInit, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [],
  styleUrls: []
})


export class AppComponent implements OnInit {
  circleArr = [];
  crossArr = [];

  arr = [[1,2,3], [4,5,6], [7,8,9]];

  winCondition = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,8], [3,5,7],
                  [3,2,1], [6,5,4], [9,8,7], [7,4,1], [8,5,2], [9,6,3], [8,5,1], [7,5,3]];

  currentPlayer: boolean = false;

  statusWin: boolean = false;
  finishPart: boolean = false;

  constructor(
    private el: ElementRef,
  ){
  }


  ngOnInit(): void {
  }

  onChanged(itemColumn){
    const allCells = this.el.nativeElement.querySelectorAll('td');

    if (allCells[itemColumn - 1].classList.contains('circle') || allCells[itemColumn - 1].classList.contains('cross')) {
      return;
    }


    (this.currentPlayer) ?
      allCells[itemColumn - 1].classList.add('circle')
      : allCells[itemColumn - 1].classList.add('cross');

    if (this.statusWin) {
      return;
    }

    (this.currentPlayer) ?
      this.circleArr.push(itemColumn) :
      this.crossArr.push(itemColumn);
    if (this.crossArr.length === 3) {
      this.checkResponse(this.crossArr);
      this.finishPart = true;
      return;
    }
    if (this.circleArr.length === 3) {
      this.checkResponse(this.circleArr);
      this.finishPart = true;
      return;
    }
    this.currentPlayer = !this.currentPlayer;
  }

  checkResponse(arrayFirstPlayer: Array<number>) {
    for (let q=0; q < this.winCondition.length; q++) {
      let item = this.winCondition[q];
      let tmp = this.compareArrays(item, arrayFirstPlayer);

      if (tmp == true) {
        this.statusWin = true;
        break;
      }
    }
  }

  compareArrays(firstArr, secondArr) {
    return firstArr.length === secondArr.length && firstArr.every((v,i)=>v === secondArr[i]);
  }
}
