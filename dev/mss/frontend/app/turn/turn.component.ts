import {Component, OnInit} from '@angular/core';

import {Turn} from './turn';
import {TurnService} from './turn.service';

@Component({
  moduleId: module.id,
  selector: 'turn',
  templateUrl: './turn.component.html',
  providers: [TurnService]
})
export class TurnComponent implements OnInit {

  turn:Turn;

  constructor(private turnService:TurnService) {
  }

  ngOnInit():void {
    this.turn = this.turnService.getTurn();
  }

}
