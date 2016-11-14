import {Component, OnInit} from "@angular/core";
import {PactService} from "./pact.service";

@Component({
  moduleId: module.id,
  selector: 'pact',
  templateUrl: './pact.component.html',
  styleUrls: ['./pact.component.css']
})
export class PactComponent implements OnInit {

  title:string;
  members:string[];
  selectionStrategy:string;
  confirmationStrategy:string;
  errorMessage:string;

  constructor(private pactService:PactService) {
  }

  ngOnInit():void {
    this.pactService.getPact()
      .subscribe(
        found => {
          console.log('Pact given: ' + found);
          this.members = found.members;
          this.title = found.title;
          this.selectionStrategy = found.selectionStrategy;
          this.confirmationStrategy = found.confirmationStrategy;
        },
        error => this.errorMessage = <any>error
      );
  }
}
