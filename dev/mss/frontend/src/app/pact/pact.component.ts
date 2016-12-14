import {Component, OnInit} from "@angular/core";
import {PactService} from "./pact.service";

@Component({
  selector: 'pact',
  templateUrl: './pact.component.html',
  styleUrls: ['./pact.component.css'],
  providers: [PactService]
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
          this.members = found.members;
          this.title = found.title;
          this.selectionStrategy = found.selectionStrategy;
          this.confirmationStrategy = found.confirmationStrategy;
        },
        error => this.errorMessage = <any>error
      );
  }
}
