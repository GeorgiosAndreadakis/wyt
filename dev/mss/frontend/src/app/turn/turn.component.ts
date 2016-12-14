import {Component, OnInit} from '@angular/core';

import {TurnService} from './turn.service';

@Component({
  selector: 'turn',
  templateUrl: './turn.component.html',
  providers: [TurnService]
})
export class TurnComponent implements OnInit {

  current:string;
  lastConfirmation:string;
  errorMessage:string;

  constructor(private turnService:TurnService) {
  }

  ngOnInit():void {
    this.turnService.getTurn().subscribe(
        found => {
          this.current = found.name;
          this.lastConfirmation = 'dummy mock';
        },
        error => this.errorMessage = <any>error
      );
  }
}
